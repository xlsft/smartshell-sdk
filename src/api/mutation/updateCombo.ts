// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { Combo, ComboInput } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { id: number; input: ComboInput }
export type ResponseType = Combo

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "mutation",
        "updateCombo",
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
                    "online_booking_enabled",
                ]),
                key("customization", ["color", "background", "screensaver"]),
                "priority",
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
