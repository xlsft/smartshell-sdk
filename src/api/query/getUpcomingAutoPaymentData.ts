// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { UpcomingAutoPaymentData } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { id: number }
export type ResponseType = UpcomingAutoPaymentData

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "query",
        "getUpcomingAutoPaymentData",
        [
            key("card", ["id", "card_mask", "card_payment_system", "card_expires_at", "created_at"]),
            "amount",
            "payment_date",
        ],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
