// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { TariffGridItem, TariffGridInput } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { input?: TariffGridInput }
export type ResponseType = TariffGridItem[]

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "query",
        "tariffGrid",
        [
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
        ],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
