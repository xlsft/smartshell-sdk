// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { CashOrder, CashOrderInput } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { input: CashOrderInput }
export type ResponseType = CashOrder

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "mutation",
        "createCashOrder",
        [
            "id",
            key("work_shift", [
                "id",
                "comment",
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
                "created_at",
                "finished_at",
                key("events", ["id", "type", "created_at"]),
                key("money", ["cash_on_start"]),
                key("payments", [
                    "id",
                    "sum",
                    "bonus",
                    "created_at",
                    "is_refunded",
                    "not_refundable",
                    "card_sum",
                    "cash_sum",
                    "comment",
                    "cashback",
                ]),
                key("cashOrders", ["id", "sum", "comment", "created_at"]),
            ]),
            "sum",
            "comment",
            "created_at",
        ],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
