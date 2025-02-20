// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { Versions } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type ResponseType = Versions

const module = async <Response extends ResponseType>(ctx: ShellSdkContext): Promise<Response> => {
    return await ctx.request("query", "versions", ["easter_egg", "frontend", "backend"])
}

export default module<ResponseType>
