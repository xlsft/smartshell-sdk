import type { ShellSdkContext } from "../../types/sdk.ts"
import type { DateTime } from "../../types/types.ts";


export type ResponseType = DateTime

const module = async <Response extends ResponseType>(
    ctx: ShellSdkContext
): Promise<Response> => { return await ctx.request("query", "now") }

export default module<ResponseType>
