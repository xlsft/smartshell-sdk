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
                key("group", ["id", "title", "created_at", "updated_at", "priority"]),
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
                "online_booking_enabled",
            ]),
            key("customization", ["color", "background", "screensaver"]),
            "priority",
        ],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
