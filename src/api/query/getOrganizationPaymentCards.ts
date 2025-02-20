// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { OrganizationPaymentCard } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type ResponseType = OrganizationPaymentCard[]

const module = async <Response extends ResponseType>(ctx: ShellSdkContext): Promise<Response> => {
    return await ctx.request("query", "getOrganizationPaymentCards", [
        "id",
        "card_mask",
        "card_payment_system",
        "card_expires_at",
        "created_at",
    ])
}

export default module<ResponseType>
