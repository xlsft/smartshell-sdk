import { ShellApi } from "../api.ts";
import { Shell } from "../shell.ts";
import { GraphQLResponse } from './graphql.ts'
export type ShellContext = Shell | ShellApi
export type ShellSdkQuery = string
export type ShellSdkModuleInput<T> = T
export type ShellSdkModule = <TInput, TResponse>(ctx: ShellContext, data?: TInput, anon?: boolean) => Promise<GraphQLResponse<TResponse>>
