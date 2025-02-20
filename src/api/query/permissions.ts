// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { Permission } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type ResponseType = Permission[]

const module = async <Response extends ResponseType>(ctx: ShellSdkContext): Promise<Response> => {
    return await ctx.request("query", "permissions", ["id", "alias", "title", "description"])
}

export default module<ResponseType>
