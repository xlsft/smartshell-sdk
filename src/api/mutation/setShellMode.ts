// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { Host, ShellMode } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { mode: ShellMode; worker_id?: number }
export type ResponseType = Host

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "mutation",
        "setShellMode",
        [
            "id",
            "group_id",
            key("group", [
                "id",
                "title",
                "created_at",
                "updated_at",
                key("hosts", [
                    "id",
                    "group_id",
                    key("group", ["id", "title", "created_at", "updated_at"]),
                    "type_id",
                    "position",
                    "alias",
                    "comment",
                    "mac_addr",
                    "ip_addr",
                    "dns_name",
                    "coord_x",
                    "coord_y",
                    "is_deleted",
                    "in_service",
                    "created_at",
                    key("info", ["processor", "ram", "video", "disc", "shell_version"]),
                    key("counters", ["cpu_temp", "disk_temp", "active_window"]),
                    key("sessions", ["id", "host_id", "company_id", "alias", "started_at", "finished_at"]),
                    key("client_sessions", [
                        "id",
                        "duration",
                        "elapsed",
                        "postpaid",
                        "total_cost",
                        "created_at",
                        "started_at",
                        "finished_at",
                        "canceled_at",
                        "time_left",
                    ]),
                    "last_online",
                    "online",
                    key("bookings", ["id", "hosts", "from", "to", "comment", "startsIn", "group", "byClient"]),
                    "device_has_changed",
                    "device_updated_at",
                    key("device_changes", ["alias", "old", "new"]),
                    "locked",
                    "admin_called_at",
                ]),
                key("customization", ["color", "background", "screensaver"]),
            ]),
            "type_id",
            "position",
            "alias",
            "comment",
            "mac_addr",
            "ip_addr",
            "dns_name",
            "coord_x",
            "coord_y",
            "is_deleted",
            "in_service",
            "created_at",
            key("info", ["processor", "ram", "video", "disc", "shell_version"]),
            key("counters", [
                "cpu_temp",
                "disk_temp",
                key("disk_status", ["letter", "total", "used"]),
                "active_window",
            ]),
            key("sessions", [
                "id",
                "host_id",
                "company_id",
                "alias",
                key("user", [
                    "id",
                    "uuid",
                    key("group", ["uuid", "title", "user_count", "discount", "created_at"]),
                    key("creator", [
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
                "started_at",
                "finished_at",
            ]),
            key("client_sessions", [
                "id",
                key("client", [
                    "id",
                    "uuid",
                    key("group", ["uuid", "title", "user_count", "discount", "created_at"]),
                    key("creator", [
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
                key("hosts", [
                    "id",
                    key("host", [
                        "id",
                        "group_id",
                        "type_id",
                        "position",
                        "alias",
                        "comment",
                        "mac_addr",
                        "ip_addr",
                        "dns_name",
                        "coord_x",
                        "coord_y",
                        "is_deleted",
                        "in_service",
                        "created_at",
                        "last_online",
                        "online",
                        "device_has_changed",
                        "device_updated_at",
                        "locked",
                        "admin_called_at",
                    ]),
                    "started_at",
                    "finished_at",
                ]),
                "duration",
                "elapsed",
                key("payment", [
                    "id",
                    key("client", [
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
                    key("client_session", [
                        "id",
                        "duration",
                        "elapsed",
                        "postpaid",
                        "total_cost",
                        "created_at",
                        "started_at",
                        "finished_at",
                        "canceled_at",
                        "time_left",
                    ]),
                    key("work_shift", ["id", "comment", "created_at", "finished_at"]),
                    key("promo_code", ["id", "code", "value", "amount", "entity_id", "created_at", "is_tracked"]),
                    key("discount", ["id", "title", "value", "entity_id", "created_at", "is_tracked"]),
                    "sum",
                    "bonus",
                    "created_at",
                    key("items", ["id", "payment_id", "combo_id", "amount", "sum"]),
                    "is_refunded",
                    "not_refundable",
                    "card_sum",
                    "cash_sum",
                    "comment",
                    "cashback",
                    key("external_data", ["external_id", "external_method"]),
                ]),
                "postpaid",
                "total_cost",
                key("seances", [
                    "id",
                    key("client_session", [
                        "id",
                        "duration",
                        "elapsed",
                        "postpaid",
                        "total_cost",
                        "created_at",
                        "started_at",
                        "finished_at",
                        "canceled_at",
                        "time_left",
                    ]),
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
                    "elapsed",
                    key("payment", [
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
                    key("payment_item", ["id", "payment_id", "combo_id", "amount", "sum"]),
                    "created_at",
                    "started_at",
                    "finished_at",
                    "cancelled_at",
                ]),
                "created_at",
                "started_at",
                "finished_at",
                "canceled_at",
                "time_left",
            ]),
            "last_online",
            "online",
            key("bookings", [
                "id",
                "hosts",
                key("client", [
                    "id",
                    "uuid",
                    key("group", ["uuid", "title", "user_count", "discount", "created_at"]),
                    key("creator", [
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
                "from",
                "to",
                "comment",
                "startsIn",
                "group",
                "byClient",
            ]),
            "device_has_changed",
            "device_updated_at",
            key("device_changes", ["alias", "old", "new"]),
            "locked",
            "admin_called_at",
        ],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
