// deno-lint-ignore-file no-explicit-any
import type { Shell } from "../shell.ts";
import type { ShellApiClub, ShellApiCredentials, ShellApiEndpoint, ShellApiVHost } from "./api.ts";

/**
 * # type `ShellSdkContext`
 * 
 * Main context type extending the base Shell implementation
 * 
 * `@xlsoftware/smartshell-sdk/types/sdk`
 */
export type ShellSdkContext = Shell

/**
 * # interface `ShellSdkOptions`
 *
 * Constructor options for `Shell` class
 * 
 * `@xlsoftware/smartshell-sdk/types/api`
 */
export interface ShellSdkOptions {
    credentials?: ShellApiCredentials
    anonymous?: boolean
    host?: ShellApiVHost
    club?: number
    use?: ShellSdkMiddleware
}

/**
 * # type `ShellSdkContextPublic`
 * 
 * Public context information exposed by the SDK
 * Contains API configuration, club information, and request/response data
 * 
 * `@xlsoftware/smartshell-sdk/types/sdk`
 */
export type ShellSdkContextPublic = {
    ctx: {
        options: ShellSdkOptions,
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

/**
 * # type `ShellSdkQuery`
 * 
 * Raw query string type for SDK operations
 * 
 * `@xlsoftware/smartshell-sdk/types/sdk`
 */
export type ShellSdkQuery = string

/**
 * # type `ShellSdkFormattedDeepQuery`
 * 
 * Structured representation of nested queries
 * 
 * `@xlsoftware/smartshell-sdk/types/sdk`
 */
export type ShellSdkFormattedDeepQuery = { 
    type: 'object' | 'entity', 
    key: ShellSdkFormattedTopQuery, 
    fields: ShellSdkFormattedCombinedQuery[] 
}

/**
 * # type `ShellSdkFormattedTopQuery`
 * 
 * Top-level query field identifier
 * 
 * `@xlsoftware/smartshell-sdk/types/sdk`
 */
export type ShellSdkFormattedTopQuery = string

/**
 * # type `ShellSdkFormattedCombinedQuery`
 * 
 * Union type for both deep and top-level queries
 * 
 * `@xlsoftware/smartshell-sdk/types/sdk`
 */
export type ShellSdkFormattedCombinedQuery = ShellSdkFormattedDeepQuery | ShellSdkFormattedTopQuery

/**
 * # type `ShellSdkFormattedQuery`
 * 
 * Array of formatted queries that can be either deep or top-level
 * 
 * `@xlsoftware/smartshell-sdk/types/sdk`
 */
export type ShellSdkFormattedQuery = Array<ShellSdkFormattedDeepQuery | ShellSdkFormattedTopQuery>

/**
 * # type `ShellSdkModuleInput<T>`
 * 
 * Generic input type for SDK modules
 * 
 * `@xlsoftware/smartshell-sdk/types/sdk`
 */
export type ShellSdkModuleInput<T> = T

/**
 * # type `ShellSdkModule`
 * 
 * Module function type definition with generic input and response
 * 
 * `@xlsoftware/smartshell-sdk/types/sdk`
 */
export type ShellSdkModule = <TInput, TResponse>(ctx: ShellSdkContext, data?: TInput, anon?: boolean) => Promise<TResponse>

/**
 * # type `ShellSdkMiddleware`
 * 
 * Middleware function type for processing SDK context
 * 
 * `@xlsoftware/smartshell-sdk/types/sdk`
 */
export type ShellSdkMiddleware = (ctx: ShellSdkContextPublic) => void

/**
 * # type `ShellSdkPaginatorInput`
 * 
 * Input parameters for pagination operations
 * 
 * `@xlsoftware/smartshell-sdk/types/sdk`
 */
export type ShellSdkPaginatorInput = { 
    page: number, 
    first?: number 
}
