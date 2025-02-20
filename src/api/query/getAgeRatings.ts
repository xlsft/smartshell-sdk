// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { AgeRating } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type ResponseType = AgeRating[]

const module = async <Response extends ResponseType>(ctx: ShellSdkContext): Promise<Response> => {
    return await ctx.request("query", "getAgeRatings", ["alias", "value"])
}

export default module<ResponseType>
