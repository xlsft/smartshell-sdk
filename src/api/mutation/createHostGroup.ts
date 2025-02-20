// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { HostGroup, HostGroupInput } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { input: HostGroupInput }
export type ResponseType = HostGroup

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "mutation",
        "createHostGroup",
        [
            "id",
            "title",
            "created_at",
            "updated_at",
            key("hosts", [
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
                    "started_at",
                    "finished_at",
                ]),
                key("client_sessions", [
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
                    key("hosts", ["id", "started_at", "finished_at"]),
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
                    "postpaid",
                    "total_cost",
                    key("seances", [
                        "id",
                        "duration",
                        "elapsed",
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
            ]),
            key("customization", ["color", "background", "screensaver"]),
        ],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
