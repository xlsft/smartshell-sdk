// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { CurrentTariff, GetCurrentTariff } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { input: GetCurrentTariff }
export type ResponseType = CurrentTariff

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "query",
        "getCurrentTariff",
        [
            "id",
            "title",
            "is_active",
            "duration",
            "cost",
            "use_global_discounts",
            "has_fixed_finish_time",
            "per_minute",
            "pausable",
            key("currency", ["id", "title", "alias", "letter"]),
        ],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
