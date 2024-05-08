/**
 * # interface `GraphQLResponseError `
 * 
 * Type for graphql error response
 * 
 * `@xlsoftware/smartshell-sdk/types`
 */

export interface GraphQLResponseError {
    message: string
    path: string[]
    extensions: { code: number }
}

/**
 * # interface `GraphQLResponse<T>`
 * 
 * Type for graphql response from smartshell api
 * 
 * `@xlsoftware/smartshell-sdk/types`
 */
export interface GraphQLResponse<T> {
    data: T
    errors?: GraphQLResponseError[]
}