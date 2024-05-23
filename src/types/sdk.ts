import type { Shell } from "../shell.ts";
import { ShellApiClub, ShellApiEndpoint, ShellApiOptions } from "./api.ts";
import type { GraphQLResponse } from "./graphql.ts";
export type ShellSdkContext = Shell
export type ShellSdkContextPublic = {
    options: ShellApiOptions,
    anonymous: boolean,
    endpoint: ShellApiEndpoint,
    clubs: ShellApiClub[],
    active_club: number
}
export type ShellSdkQuery = string
export type ShellSdkFormattedDeepQuery = { key: ShellSdkFormattedTopQuery, fields: ShellSdkFormattedCombinedQuery[] }
export type ShellSdkFormattedTopQuery = string
export type ShellSdkFormattedCombinedQuery = ShellSdkFormattedDeepQuery | ShellSdkFormattedTopQuery
export type ShellSdkFormattedQuery = Array<ShellSdkFormattedDeepQuery | ShellSdkFormattedTopQuery>
export type ShellSdkModuleInput<T> = T
export type ShellSdkModule = <TInput, TResponse>(ctx: ShellSdkContext, data?: TInput, anon?: boolean) => Promise<TResponse>
export type ShellSdkMiddleware<T = any> = (e: GraphQLResponse<T>, ctx: ShellSdkContextPublic) => void

