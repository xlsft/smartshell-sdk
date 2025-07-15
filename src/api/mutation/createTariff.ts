// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { Tariff, TariffInput } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { input: TariffInput }
export type ResponseType = Tariff

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "mutation",
        "createTariff",
        [
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
                key("host_groups", [
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
                ]),
                key("cost_map", ["title", "value", key("currency", ["id", "title", "alias", "letter"])]),
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
        ],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
