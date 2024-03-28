import type { ShellApiClub, ShellApiOptions, ShellApiEndpoint } from './types/api.ts'
import type { GraphQLResponse } from './types/graphql.ts'
import { ShellSdkQuery } from "./types/sdk.ts";
import { ShellApiError, ShellSdkError } from "./utils/errors.ts";
import { query, mutation } from './graphql/index.ts'


/**
* # class `ShellApi`
*
* Contains core methods of GraphQL API
* 
* `@xlsoftware/smartshell-sdk/api`
*/
export class ShellApi {

    private _endpoint: ShellApiEndpoint = `https://billing.smartshell.gg/api/graphql`
    private _clubs: ShellApiClub[] = []

    constructor(private options: ShellApiOptions) {
        if (options.host) this._endpoint = `https://${options.host}.smartshell.gg/api/graphql`
    }

    async init(): Promise<ShellApiClub[]> {
        if (this._clubs.length !== 0) throw new ShellSdkError('SDK can`t be initialized more than once!')
        const { login, password } = this.options.credentials
        if (!login || !password) throw new ShellSdkError('No credentials provided')
        const clubs_array = await query.userClubs(this, { login, password }, true)
        const clubs = clubs_array.data!.userClubs
        for (let i = 0; i < clubs.length; i++) {
            const id = clubs[i].id;
            if (this._clubs.some(token => token.id === id)) continue
            const tokens = await mutation.login(this, { login, password, company_id: id }, true)
            const data = tokens.data!.login
            this._clubs.push({ id, access_token: data.access_token, refresh_token: data.refresh_token, expires: Date.now() + (data.expires_in * 1000)})
        }
        return this._clubs

        //! НАДО ДОДЕЛАТЬ РЕФРЕШ
    }

    async request<T>(query: ShellSdkQuery, token: string): Promise<GraphQLResponse<T>> {
        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json",
                ...token ? { 'Authorization': `Bearer ${token}` } : {},
            },
            body: JSON.stringify({ query })
        }
        const response = await fetch('https://billing.smartshell.gg/api/graphql', options);
        const json: GraphQLResponse<T> = await response.json();
        if (json.errors) throw new ShellApiError(JSON.stringify(json.errors))
        return json
    }


}