// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { HostGroupTitle } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type ResponseType = HostGroupTitle[]

const module = async <Response extends ResponseType>(ctx: ShellSdkContext): Promise<Response> => {
    return await ctx.request("query", "hostGroupTitles", ["id", "title", "priority"])
}

export default module<ResponseType>
