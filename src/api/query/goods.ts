// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { Good, GoodsInput } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { input?: GoodsInput }
export type ResponseType = Good[]

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "query",
        "goods",
        [
            "id",
            "title",
            "subtitle",
            key("category", [
                "id",
                "company_id",
                "title",
                key("goods", [
                    "id",
                    "title",
                    "subtitle",
                    key("category", ["id", "company_id", "title", "show_in_shell"]),
                    "amount",
                    "cost",
                    "wholesale_cost",
                    "tax_percent",
                    "unit_name",
                    "unit_value",
                    key("state", ["received", "income", "sold", "disposal"]),
                    "ean",
                    "eans",
                    "comment",
                    "image",
                    "use_global_discounts",
                    "created_at",
                    "use_fair_sign",
                    "is_excise",
                    "show_in_shell",
                    "in_combo",
                    key("low_stock_notification", ["enabled", "threshold"]),
                ]),
                "show_in_shell",
            ]),
            "amount",
            "cost",
            "wholesale_cost",
            "tax_percent",
            "unit_name",
            "unit_value",
            key("state", ["received", "income", "sold", "disposal"]),
            "ean",
            "eans",
            "comment",
            "image",
            "use_global_discounts",
            "created_at",
            "use_fair_sign",
            "is_excise",
            "show_in_shell",
            "in_combo",
            key("low_stock_notification", ["enabled", "threshold"]),
        ],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
