// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { PremiumPayment } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type ResponseType = PremiumPayment

const module = async <Response extends ResponseType>(ctx: ShellSdkContext): Promise<Response> => {
    return await ctx.request("mutation", "clientBuyPremium", ["id", "sum", "status"])
}

export default module<ResponseType>
