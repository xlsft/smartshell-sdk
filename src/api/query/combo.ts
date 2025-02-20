// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { Combo } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { id: number }
export type ResponseType = Combo

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "query",
        "combo",
        [
            "id",
            "title",
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
                key("schedules", ["start", "end"]),
                key("sell_schedules", ["start", "end"]),
                key("price_list", [
                    key("host_groups", ["id", "title", "created_at", "updated_at"]),
                    key("cost_map", ["title", "value"]),
                ]),
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
            key("host_group", [
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
            key("items", ["id", "combo_id", "amount", "price"]),
            "quantity",
            "base_price",
            "price",
            "created_at",
            "use_global_discount",
        ],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
