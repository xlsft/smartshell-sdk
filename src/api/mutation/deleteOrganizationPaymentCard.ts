// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { OrganizationPaymentCard } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { id: number }
export type ResponseType = OrganizationPaymentCard

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "mutation",
        "deleteOrganizationPaymentCard",
        ["id", "card_mask", "card_payment_system", "card_expires_at", "created_at"],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
