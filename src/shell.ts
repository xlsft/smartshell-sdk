// deno-lint-ignore-file no-explicit-any
import type { ShellApiClub, ShellApiOptions } from './types/api.ts'
import { ShellApi } from "./api.ts";
import type { ShellSdkQuery } from "./types/sdk.ts";
import { query, mutation } from "./graphql/index.ts";

/**
* # class `Shell`
*
* Main class
* 
* `@xlsoftware/smartshell-sdk`
*/
export class Shell {

    private _initialized
    constructor(private options: ShellApiOptions) { this._initialized = this._initialize()}
    private _api: ShellApi | null = null
    private _clubs: ShellApiClub[] = []
    private _active_club: number = 0
    private async _initialize() { await this._init() }
    private async _init(): Promise<void> {
        this._api = new ShellApi(this.options)
        this._clubs = await this._api.init()
        
        this._active_club = this._clubs[0].id
    }

    private async _call<TInput>(module: any, data: TInput) {
        await this._initialized
        const response = await module(this,data)
        return response
    }

    public async request<T>(query: ShellSdkQuery): Promise<T> {
        await this._initialized
        const token = this._clubs.find((data) => data.id === this._active_club)
        return await this._api?.request(query, token?.access_token!)!
    }

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

    public api = {
        userClubs: async (data: Parameters<typeof query.userClubs>[1]) => { await this._call<Parameters<typeof query.userClubs>[1]>(query.userClubs, data) },

        login: async function (data: Parameters<typeof mutation.login>[1]): Parameters<typeof mutation.login>[0] { await this._call<Parameters<typeof mutation.login>[1]>(mutation.login, data) },
    }



}