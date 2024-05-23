import type { ShellApiClub, ShellApiEndpoint, ShellApiOptions } from './types/api.ts'
import type { ShellSdkContext, ShellSdkFormattedQuery, ShellSdkMiddleware, ShellSdkQuery } from "./types/sdk.ts";
import type { GraphQLResponse, GraphQLResponseError } from "./types/graphql.ts";
import type { LoginResponse, RefreshTokenResponse, UserClubsResponse } from "./graphql/types.ts";
import { ShellApiError, ShellSdkError } from "./utils/errors.ts";
import { api } from "./api.ts";


/**
* # class `Shell`
*
* Create instance of Shell Api with credentials
* 
* ```ts
* 
const shell = await new Shell({
    credentials: {
        login: "79998887766",
        password: "passw0rd"
    },
    anonymous: false,
    host: "billing"
    club: 1234
})
* ```
* 
* `@xlsoftware/smartshell-sdk`
*/
export class Shell {

    constructor(private options: ShellApiOptions) {
        if (this.options.credentials) this.anonymous = false
        this._endpoint = `https://${options.host || 'billing'}.smartshell.gg/api/graphql`
        this._initialized = this._initialize() 
    }

    // ---------------- Middleware ----------------
    private _middleware: ShellSdkMiddleware[] = []
    private _middleware_global = async <T>(e: GraphQLResponse<T>) => {
        await this._initialized
        for (let i = 0; i < this._middleware.length; i++) {
            this._middleware[i](e, {
                options: this.options,
                anonymous: this.anonymous,
                endpoint: this._endpoint,
                clubs: this._clubs,
                active_club: this._active_club
            })
        }
    } 
    /**
    * # `Shell.use`
    *
    * Add middleware function and listen for every event
    * 
    * ```ts
    * 
    shell.use((e, ctx) => { console.log(e, ctx) })
    * ```
    * 
    * `@xlsoftware/smartshell-sdk`
    */
    public use(...middleware: ShellSdkMiddleware[]) {
        for (let i = 0; i < middleware.length; i++) {
            this._middleware.push(middleware[i])
        }
    }
    // ---------------- Middleware ----------------

    // ---------------- System values ----------------
    readonly anonymous: boolean = true
    private _endpoint: ShellApiEndpoint
    private _clubs: ShellApiClub[] = []
    private _active_club: number = 0
    // ---------------- System values ----------------
    
    // ---------------- Initialization ----------------
    private _initialized
    private async _initialize() { await this._init(); }
    private async _init(): Promise<void> {
        if (this._clubs.length !== 0) ShellSdkError(this, 'SDK can`t be initialized more than once!')
        if (!this.options.credentials && this.options.anonymous) ShellSdkError(this, 'No credentials provided')
        if (!this.anonymous) {
            const clubs = (await this.call<UserClubsResponse>(`query UserClubs {
                userClubs(input: { login: "${this.options.credentials?.login}", password: "${this.options.credentials?.password}" }) {
                    id
                    name
                    address
                    tariffName
                    workShiftStatus
                    permitted
                    operatorFirstName
                    operatorLastName
                }
            }`)).userClubs
            
            for (let i = 0; i < clubs.length; i++) {
                const id = clubs[i].id;
                if (this._clubs.some(token => token.id === id)) continue
                const tokens = (await this.call<LoginResponse>(`mutation Login {
                    login(input: { login: "${this.options.credentials?.login}", password: "${this.options.credentials?.password}", company_id: ${id} }) {
                        token_type
                        expires_in
                        access_token
                        refresh_token
                    }
                }`)).login
                this._clubs.push({ id, access_token: tokens.access_token, refresh_token: tokens.refresh_token, expires: Date.now() + (tokens.expires_in * 1000) - (60*60*1000)})
            }
            this._active_club = this._clubs[0].id
        }
    }

    private async _update(id: number): Promise<ShellApiClub> {
        const club_i = this._clubs.findIndex((data) => data.id === id)!
        if (club_i === -1) ShellSdkError(this, `Can't update club, it does't exist on current instance!`)
        // const updated = (await this.call<RefreshTokenResponse>(`mutation RefreshToken {
        //     refreshToken(input: { refresh_token: "${club.refresh_token}" }) {
        //         token_type
        //         expires_in
        //         access_token
        //         refresh_token
        //     }
        // }`)).refreshToken
        const updated = (await this.call<LoginResponse>(`mutation Login {
            login(input: { login: "${this.options.credentials?.login}", password: "${this.options.credentials?.password}", company_id: ${id} }) {
                token_type
                expires_in
                access_token
                refresh_token
            }
        }`)).login
        this._clubs[club_i] = { id, access_token: updated.access_token, refresh_token: updated.refresh_token, expires: Date.now() + (updated.expires_in * 1000) - (60*60*1000)}
        return this._clubs[club_i]
    }
    // ---------------- Initialization ----------------

    // ---------------- Request ----------------
    public async call<Response = never>(query: ShellSdkQuery, token?: string): Promise<{ [key: string]: Response }> {
        const club = this._clubs.find((data) => data.id === this._active_club)!
        let access_token 
        if (club) access_token = club.access_token
        if (token) access_token = token
        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json",
                ...access_token && this.anonymous === false ? { 'Authorization': `Bearer ${access_token}` } : {},
            },
            body: JSON.stringify({ query })
        }
        const response = await fetch(this._endpoint, options);
        const json: GraphQLResponse<{ [key: string]: Response }> = await response.json();
        if (this._middleware.length !== 0) this._middleware_global(json)
        if (json.errors) ShellApiError(this, json.errors)
        return json.data
    }


    public async request<Input, Response>( type: 'query' | 'mutation', name: string, query: ShellSdkFormattedQuery, input?: Input | { input: Input }): Promise<Response> { 
        if (this.anonymous === true) ShellSdkError(this, 'You can`t use SDK static method without auth, use "call" method instead')
        await this._initialized

        let club = this._clubs.find((data) => data.id === this._active_club)!
        if (club.expires <= Date.now()) club = await this._update(club.id)

        const format = (query: ShellSdkFormattedQuery, indent: string = ''): string => query.map(item => {
            if (typeof item === 'string') {
                return `${indent}${item}\n`
            } else if (typeof item === 'object' && 'key' in item && Array.isArray(item.fields)) {
                const new_indent = indent + '    '
                return `${indent}${item.key} {\n${format(item.fields, new_indent)}${indent}}\n`
            }
            return ''
        }).join('')


        const input_string = JSON.stringify(input).replace(/"([^"]+)":/g, '$1:')
        const input_string_filtered = input_string.substring(1, input_string.length-1)
        const query_string = `
            ${type} ${name} {
                ${name}${input ? `(${input_string_filtered})` : ''} {
                    ${format(query)}
                }
            }
        `
        
        const data = (await this.call<Response>(query_string))[name as keyof { [key: string]: Response }]
        return data
    }

    readonly api = api(this)

    public on(id: number): Shell {
        this._active_club = id
        return this
    }

    public async each(callback: (ctx: Shell, id: number) => unknown): Promise<void> {
        await this._initialized
        for (let i = 0; i < this._clubs.length; i++) {
            const _club = this._clubs[i];
            this._active_club = _club.id
            callback(this, _club.id)
        }
    }

    
    // ---------------- Request ----------------


    // ---------------- Error catcher ----------------
        /**
        * # `Shell.catch`
        *
        * Set error catcher function
        * 
        * ```ts
        * 
        shell.catch = (errors) => console.log(errors)
        * ```
        * 
        * `@xlsoftware/smartshell-sdk`
        */
        public catch: null | ((errors: GraphQLResponseError[] | string) => void) = null
    // ---------------- Error catcher ----------------


}