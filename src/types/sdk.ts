// deno-lint-ignore-file no-explicit-any
import type { Shell } from "../shell.ts";
import type { ShellApiClub, ShellApiEndpoint, ShellApiOptions } from "./api.ts";
export type ShellSdkContext = Shell
export type ShellSdkContextPublic = {
    ctx: {
        options: ShellApiOptions,
        api: {
            endpoint: ShellApiEndpoint,
            anonymous: boolean,
        }
        clubs: {
            list: ShellApiClub[],
            active: number
        }
    }
    request: {
        name: string,
        method: 'mutation' | 'query'
        fields: ShellSdkFormattedQuery
    },
    response: any
}
export type ShellSdkQuery = string
type ShellSdkFormattedDeepQuery = { key: ShellSdkFormattedTopQuery, fields: ShellSdkFormattedCombinedQuery[] }
type ShellSdkFormattedTopQuery = string
type ShellSdkFormattedCombinedQuery = ShellSdkFormattedDeepQuery | ShellSdkFormattedTopQuery
export type ShellSdkFormattedQuery = Array<ShellSdkFormattedDeepQuery | ShellSdkFormattedTopQuery>
export type ShellSdkModuleInput<T> = T
export type ShellSdkModule = <TInput, TResponse>(ctx: ShellSdkContext, data?: TInput, anon?: boolean) => Promise<TResponse>
export type ShellSdkMiddleware<T = any> = ( ctx: ShellSdkContextPublic) => void
export type ShellSdkPaginatorInput = { page: number, first?: number }
