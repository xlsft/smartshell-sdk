// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { PaymentHistory } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { user_id: number }
export type ResponseType = PaymentHistory

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "query",
        "getDepositHistory",
        [
            key("data", [
                "created_at",
                "title",
                "amount",
                "sum",
                "bonus",
                "card_sum",
                "cash_sum",
                key("worker", [
                    "id",
                    "uuid",
                    "login",
                    "nickname",
                    "phone",
                    "email",
                    "phone_suffix",
                    "dob",
                    "country_code",
                    "first_name",
                    "last_name",
                    "middle_name",
                    "deposit",
                    "bonus",
                    "last_client_activity",
                    "last_worker_activity",
                    "user_discount",
                    "created_at",
                    "updated_at",
                    "disabled_at",
                    "banned_at",
                    "total_hours",
                    "city",
                    "avatar_url",
                    "telegram_link",
                    "discord_link",
                    "steam_link",
                    "vk_link",
                    "is_private",
                    "premium",
                    "unverified",
                    "lead_source",
                    "favorite_club",
                ]),
                key("items", ["id", "payment_id", "combo_id", "amount", "sum"]),
                "is_refunded",
            ]),
        ],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
