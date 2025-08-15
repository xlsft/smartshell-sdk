// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext, ShellSdkPaginatorInput } from "../../types/sdk.ts"
import type { TariffPaginated } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { paginator?: ShellSdkPaginatorInput }
export type ResponseType = TariffPaginated

const module = async <Input extends InputType["input"], Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
    paginator?: ShellSdkPaginatorInput,
): Promise<Response> => {
    return await ctx.request(
        "query",
        "tariffs",
        [
            key("data", [
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
                    key("host_groups", ["id", "title", "created_at", "updated_at", "priority"]),
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
        ],
        { input: props },
        paginator || { page: 1 },
    )
}

export default module<InputType["input"], ResponseType>
