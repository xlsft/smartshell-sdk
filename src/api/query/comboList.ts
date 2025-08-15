// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { ComboListItem, ComboListInput } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { input?: ComboListInput }
export type ResponseType = ComboListItem[]

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "query",
        "comboList",
        [
            "id",
            "title",
            key("tariff", [
                "id",
                "title",
                "duration",
                "cost",
                "base_cost",
                "max_bonus_usage",
                "time_from",
                "time_to",
                "per_minute",
                "use_global_discounts",
                "has_fixed_finish_time",
                key("currency", ["id", "title", "alias", "letter"]),
                "booked",
                "ends_in",
                "pausable",
                "highlighted",
                "lifetime",
                "disable_sale_receipt_printing",
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
            "cost",
            "quantity",
            "use_global_discounts",
        ],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
