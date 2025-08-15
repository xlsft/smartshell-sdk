/**
 * # type `ShellApiVHost`
 *
 * Represents the virtual host options for SmartShell API
 * 
 * For any admin-related workflow use `billing` vhost
 * For any client-related workflow use `mobile-auth` vhost
 * For any owner-related workflow use `owner` vhost
 * For any host-related workflow use `host` vhost
 * 
 * `@xlsft/smartshell-sdk/types/api`
 */
export type ShellApiVHost = 'billing' | 'host' | 'mobile-auth' | 'owner'

/**
 * # type `ShellApiEndpoint`
 * 
 * Full https path for graphql endpoint
 * 
 * `@xlsft/smartshell-sdk/types/api`
 */
export type ShellApiEndpoint = `https://${ShellApiVHost}.smartshell.gg/api/graphql`

/**
 * # interface `ShellApiCredentialsToken`
 *
 * Credentials variant for permanent access tokens
 * 
 * `@xlsft/smartshell-sdk/types/api`
 */
// export type ShellApiCredentialsToken = string

/**
 * # interface `ShellApiCredentialsUser`
 *
 * Credentials variant for user login
 * 
 * `@xlsft/smartshell-sdk/types/api`
 */
export interface ShellApiCredentialsUser {
    login: string
    password: string
}

/**
 * # interface `ShellApiCredentials`
 *
 * Credentials input data
 * 
 * `@xlsft/smartshell-sdk/types/api`
 */
export type ShellApiCredentials = ShellApiCredentialsUser //| ShellApiCredentialsToken 

/**
 * # interface `ShellApiClub`
 *
 * Interface that storing credentials for fast club relogin
 * 
 * `@xlsft/smartshell-sdk/types/api`
 */
export interface ShellApiClub { 
    id: number
    access_token: string
    refresh_token: string
    expires: number
}

/**
 * # interface `ShellApiResponseError `
 * 
 * Type for graphql error response
 * 
 * `@xlsft/smartshell-sdk/types/api`
 */

export interface ShellApiResponseError {
    message: string
    path?: string[]
    locations: { line: number, column: number }[]
    extensions: { code: number }
}

/**
 * # interface `ShellApiResponse<T>`
 * 
 * Type for graphql response from smartshell api
 * 
 * `@xlsft/smartshell-sdk/types/api`
 */
export interface ShellApiResponse<T> {
    data: T
    errors?: ShellApiResponseError[]
    extensions?: {
        "x-trace-id": string
    }
}