// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { DepositCashback } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type ResponseType = DepositCashback[]

const module = async <Response extends ResponseType>(ctx: ShellSdkContext): Promise<Response> => {
    return await ctx.request("query", "depositCashbacks", [
        "id",
        "amount",
        "value",
        "is_percent",
        "is_active",
        "starts_at",
        "expires_at",
        "is_expired",
    ])
}

export default module<ResponseType>
