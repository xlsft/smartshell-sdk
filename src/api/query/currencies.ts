// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { Currency } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type ResponseType = Currency[]

const module = async <Response extends ResponseType>(ctx: ShellSdkContext): Promise<Response> => {
    return await ctx.request("query", "currencies", ["id", "title", "alias", "letter"])
}

export default module<ResponseType>
