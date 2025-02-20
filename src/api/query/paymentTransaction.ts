// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { PaymentTransaction } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { id: string }
export type ResponseType = PaymentTransaction

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "query",
        "paymentTransaction",
        [
            "id",
            "company_id",
            "amount",
            "sum",
            key("client", [
                "id",
                "uuid",
                key("group", ["uuid", "title", "user_count", "discount", "created_at"]),
                key("creator", [
                    "id",
                    "uuid",
                    key("group", ["uuid", "title", "user_count", "discount", "created_at"]),
                    "login",
                    "nickname",
                    "phone",
                    "email",
                    "phone_suffix",
                    "dob",
                    "country_code",
                    key("roles", ["id", "alias", "title", "description", "is_service", "priority"]),
                    "first_name",
                    "last_name",
                    "middle_name",
                    "deposit",
                    "bonus",
                    "last_client_activity",
                    "last_worker_activity",
                    key("last_comment", [
                        "id",
                        "entity_id",
                        "text",
                        "created_at",
                        "deleted_at",
                        "data",
                        "request_contact",
                        "request_contact_info",
                    ]),
                    "user_discount",
                    "created_at",
                    "updated_at",
                    "disabled_at",
                    "banned_at",
                    "total_hours",
                    key("pausable_sessions", ["id", "duration", "elapsed", "available", "created_at", "expires_at"]),
                    "city",
                    "avatar_url",
                    key("news_consent", ["isGiven", "givenAt", "revokedAt"]),
                    "telegram_link",
                    "discord_link",
                    "steam_link",
                    "vk_link",
                    "is_private",
                    "premium",
                    "unverified",
                ]),
                "login",
                "nickname",
                "phone",
                "email",
                "phone_suffix",
                "dob",
                "country_code",
                key("roles", [
                    "id",
                    "alias",
                    "title",
                    "description",
                    "is_service",
                    "priority",
                    key("permissions", ["id", "alias", "title", "description"]),
                ]),
                "first_name",
                "last_name",
                "middle_name",
                "deposit",
                "bonus",
                "last_client_activity",
                "last_worker_activity",
                key("last_comment", [
                    "id",
                    "entity_id",
                    "text",
                    key("author", [
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
                    ]),
                    "created_at",
                    "deleted_at",
                    "data",
                    "request_contact",
                    "request_contact_info",
                ]),
                "user_discount",
                "created_at",
                "updated_at",
                "disabled_at",
                "banned_at",
                "total_hours",
                key("pausable_sessions", [
                    "id",
                    key("tariff", [
                        "id",
                        "title",
                        "duration",
                        "use_global_discounts",
                        "has_fixed_finish_time",
                        "created_at",
                        "is_active",
                        "per_minute",
                        "show_in_shell",
                        "show_in_billing",
                        "pausable",
                        "lifetime",
                        "ean",
                        "highlighted",
                        "description",
                        "sort",
                        "is_tracked",
                        "disable_sale_receipt_printing",
                        "online_booking_enabled",
                        "use_on_holidays",
                    ]),
                    "duration",
                    key("host_group", ["id", "title", "created_at", "updated_at"]),
                    "elapsed",
                    "available",
                    "created_at",
                    "expires_at",
                ]),
                "city",
                "avatar_url",
                key("news_consent", ["isGiven", "givenAt", "revokedAt"]),
                "telegram_link",
                "discord_link",
                "steam_link",
                "vk_link",
                "is_private",
                "premium",
                "unverified",
            ]),
            "status",
            key("additional", ["public_id", "data"]),
            "created_at",
            "vat",
            "label",
        ],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
