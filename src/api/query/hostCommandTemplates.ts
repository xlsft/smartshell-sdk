// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { HostCommandTemplate } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type ResponseType = HostCommandTemplate[]

const module = async <Response extends ResponseType>(ctx: ShellSdkContext): Promise<Response> => {
    return await ctx.request("query", "hostCommandTemplates", ["id", "title", "path", "arguments"])
}

export default module<ResponseType>
