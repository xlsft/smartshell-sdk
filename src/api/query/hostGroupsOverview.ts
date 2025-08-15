// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { HostGroupOverview } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type ResponseType = HostGroupOverview[]

const module = async <Response extends ResponseType>(ctx: ShellSdkContext): Promise<Response> => {
    return await ctx.request("query", "hostGroupsOverview", [
        "id",
        "title",
        key("customization", ["color", "background", "screensaver"]),
        "priority",
        key("hosts", [
            "id",
            "group_id",
            "type_id",
            "position",
            "alias",
            "mac_addr",
            "ip_addr",
            "dns_name",
            "coord_x",
            "coord_y",
            "in_service",
            "online",
            key("info", ["processor", "ram", "video", "disc", "shell_version"]),
            key("counters", ["cpu_temp", "disk_temp", "active_window"]),
            "device_has_changed",
            "locked",
            key("bookings", ["id", "hosts", "from", "to", "comment", "startsIn", "group", "byClient"]),
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
                "lead_source",
                "favorite_club",
            ]),
            key("client_sessions", [
                "id",
                "duration",
                "elapsed",
                "time_left",
                "started_at",
                "finished_at",
                "postpaid",
                "total_cost",
            ]),
            "comment",
            "admin_called_at",
            "online_booking_enabled",
        ]),
    ])
}

export default module<ResponseType>
