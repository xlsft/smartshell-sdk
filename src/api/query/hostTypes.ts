// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { HostType } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type ResponseType = HostType[]

const module = async <Response extends ResponseType>(ctx: ShellSdkContext): Promise<Response> => {
    return await ctx.request("query", "hostTypes", ["id", "title", "description", "created_at", "updated_at"])
}

export default module<ResponseType>
