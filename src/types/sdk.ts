import type { ShellApi } from "../api.ts";
import type { Shell } from "../shell.ts";
export type ShellContext = Shell | ShellApi
export type ShellSdkQuery = string
export type ShellSdkModuleInput<T> = T
export type ShellSdkModule = <TInput, TResponse>(ctx: ShellContext, data?: TInput, anon?: boolean) => Promise<TResponse>
