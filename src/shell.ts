import type { ShellApiClub, ShellApiEndpoint, ShellApiResponse, ShellApiResponseError } from './types/api.ts'
import type { ShellSdkFormattedQuery, ShellSdkMiddleware, ShellSdkOptions, ShellSdkPaginatorInput, ShellSdkQuery } from "./types/sdk.ts";
import type { AccessToken, UserClub, ClientClub } from "./types/types.ts";
import { ShellApiError, ShellSdkError } from "./utils/errors.ts";
import { api } from "./api.ts";
import { key } from "./utils/key.ts";

/**
* # class `Shell`
* Create instance of Shell Api with credentials
* 
* ```ts
* const shell = await new Shell({
*     credentials: {
*         login: "79998887766",
*         password: "passw0rd"
*     },
*     anonymous: false,
*     host: "billing"
*     club: 1234
* })
* ```
* 
* `@xlsft/smartshell-sdk`
*/
export class Shell {

    /**
     * Creates an instance of Shell API
     * @param options - Configuration options for the Shell API
     */
    
    constructor(private options: ShellSdkOptions) {
        if (this.options.use) this.use(this.options.use)
        if (this.options.credentials) this.anonymous = false
        this._endpoint = `https://${options.host || 'billing'}.smartshell.gg/api/graphql`
        this._initialized = this._initialize() 
    }

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
        if (!this.options.credentials && this.options.anonymous === false) ShellSdkError(this, 'No credentials provided')
        if (!this.anonymous) {
            if (this.options.host !== 'mobile-auth') {
                const clubs = (await this.call<UserClub[]>(`query UserClubs {
                    userClubs(input: { login: "${this.options.credentials?.login}", password: "${this.options.credentials?.password}" }) {
                        id
                    }
                }`)).userClubs
                
                for (let i = 0; i < clubs.length; i++) {
                    const id = clubs[i].id;
                    if (this._clubs.some(token => token.id === id)) continue
                    const tokens = (await this.call<AccessToken>(`mutation Login {
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
            } else {
                const tokens = (await this.call<AccessToken>(`mutation ClientLogin {
                    clientLogin(input: { login: "${this.options.credentials?.login}", password: "${this.options.credentials?.password}" }) {
                        token_type
                        expires_in
                        access_token
                        refresh_token
                    }
                }`)).clientLogin
                const clubs = (await this.call<ClientClub[]>(`query myClubs {
                    myClubs {
                        id
                    }
                }`, tokens.access_token)).myClubs
                for (let i = 0; i < clubs.length; i++) {
                    const id = clubs[i].id;
                    this._clubs.push({ id, access_token: tokens.access_token, refresh_token: tokens.refresh_token, expires: Date.now() + (tokens.expires_in * 1000) - (60*60*1000)})
                }
                this._active_club = this._clubs[0].id
            }
        }
    }

    private async _update(id: number): Promise<ShellApiClub> {
        const club_i = this._clubs.findIndex((data) => data.id === id)!
        if (club_i === -1) ShellSdkError(this, `Can't update club, it does't exist on current instance!`)
        if (this.options.host !== 'mobile-auth') {
            const updated = (await this.call<AccessToken>(`mutation Login {
                login(input: { login: "${this.options.credentials?.login}", password: "${this.options.credentials?.password}", company_id: ${id} }) {
                    token_type
                    expires_in
                    access_token
                    refresh_token
                }
            }`)).login
            this._clubs[club_i] = { id, access_token: updated.access_token, refresh_token: updated.refresh_token, expires: Date.now() + (updated.expires_in * 1000) - (60*60*1000)}
        } else {
            const updated = (await this.call<AccessToken>(`mutation ClientLogin {
                clientLogin(input: { login: "${this.options.credentials?.login}", password: "${this.options.credentials?.password}" }) {
                    token_type
                    expires_in
                    access_token
                    refresh_token
                }
            }`)).clientLogin
            this._clubs[club_i] = { id, access_token: updated.access_token, refresh_token: updated.refresh_token, expires: Date.now() + (updated.expires_in * 1000) - (60*60*1000)}
        }

        return this._clubs[club_i]
    }
    // ---------------- Initialization ----------------

    // ---------------- Middleware ----------------
    private _middleware: ShellSdkMiddleware[] = []

    private _middleware_global = async <T>(name: string, method: 'mutation' | 'query', fields: ShellSdkFormattedQuery, response: T) => {

        await this._initialized
        for (let i = 0; i < this._middleware.length; i++) {
            this._middleware[i]({
                ctx: {
                    options: this.options,
                    api: {
                        endpoint: this._endpoint,
                        anonymous: this.anonymous,
                    },
                    clubs: {
                        list: this._clubs,
                        active: this._active_club,
                    },
                },
                request: {
                    name,
                    method,
                    fields,
                },
                response
            })
        }
    } 
    /**
    * # `Shell.use`
    *
    * Add middleware function and listen for every event
    * 
    * ```ts
    * shell.use(({ ctx, request, response }) => { console.log(ctx, request, response) })
    * ```
    * 
    * `@xlsft/smartshell-sdk`
    */
    public use(...middleware: ShellSdkMiddleware[]) {
        for (let i = 0; i < middleware.length; i++) {
            this._middleware.push(middleware[i])
        }
    }
    // ---------------- Middleware ----------------

    // ---------------- Error catcher ----------------
    /**
    * # `Shell.catch`
    *
    * Set error catcher function
    * 
    * ```ts
    * shell.catch = (errors) => console.log(errors)
    * ```
    * 
    * `@xlsft/smartshell-sdk`
    */
    public catch: null | ((errors: ShellApiResponseError[] | string) => void) = null
    // ---------------- Error catcher ----------------

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
        const json: ShellApiResponse<{ [key: string]: Response }> = await response.json();
        
        if (json.errors) ShellApiError(this, json.errors)
        return json.data
    }


    public async request<Input, Response>( type: 'query' | 'mutation', name: string, query?: ShellSdkFormattedQuery, input?: Input | { input: Input }, paginator?: ShellSdkPaginatorInput): Promise<Response> { 
        if (this.anonymous === true) ShellSdkError(this, 'You can`t use SDK static method without auth, use "call" method instead')
        await this._initialized

        let club = this._clubs.find((data) => data.id === this._active_club)!
        if (club.expires <= Date.now()) club = await this._update(club.id)

        const build = () => {
            const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
            const format = (query: ShellSdkFormattedQuery, indent: string = ''): string => {
                return query.map(item => {
                    if (typeof item === 'string') {
                        return `${indent}${item}\n`
                    } else if (typeof item === 'object' && 'key' in item && Array.isArray(item.fields)) {
                        const new_indent = indent + '    '
                        if (item.type === 'entity') {
                            return `${indent}... on ${item.key} {\n${format(item.fields, new_indent)}${indent}}\n`
                        }
                        return `${indent}${item.key} {\n${format(item.fields, new_indent)}${indent}}\n`
                    }
                    return ''
                }).join('')
            }

            const request = {
                type,
                name: `ShellSdkRequest${capitalize(name)}`,
                method: {
                    name,
                    ...input || paginator ? { input: { ...input, ...paginator}} : {},
                    ...query ? { query } : {}
                }
            }

            const result = [`${request.type} ${request.name} {\n    ${name}`]

            if (paginator) request.method.query?.push(key('paginatorInfo', [
                `count`,
                `currentPage`,
                `firstItem`,
                `hasMorePages`,
                `lastItem`,
                `lastPage`,
                `perPage`,
                `total`,
            ]))
            if (request.method.input) result.push(`(${JSON.stringify(request.method.input).replace(/"([^"]+)":/g, '$1:').slice(1, -1)})`)
            if (request.method.query) result.push(` {\n${format(request.method.query, '      ')}    }`)
            result.push(`    \n}`)
        
            return result.join('');
        }
        const builded = build()
        const data = (await this.call<Response>(builded))
        if (this._middleware.length !== 0 && query) this._middleware_global(name, type, query, data)
        return data[name as keyof { [key: string]: Response }]
        
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
            await callback(this, _club.id)
        }
    }

    
    // ---------------- Request ----------------

}