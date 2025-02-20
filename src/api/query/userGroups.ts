// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { UserGroup } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type ResponseType = UserGroup[]

const module = async <Response extends ResponseType>(ctx: ShellSdkContext): Promise<Response> => {
    return await ctx.request("query", "userGroups", ["uuid", "title", "user_count", "discount", "created_at"])
}

export default module<ResponseType>
