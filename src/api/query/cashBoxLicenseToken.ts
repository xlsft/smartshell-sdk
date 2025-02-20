// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"

import { key } from "../../utils/key.ts"

export type ResponseType = string

const module = async <Response extends ResponseType>(ctx: ShellSdkContext): Promise<Response> => {
    return await ctx.request("query", "cashBoxLicenseToken", [])
}

export default module<ResponseType>
