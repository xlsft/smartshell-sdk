// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { Report, ReportInput } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { input: ReportInput }
export type ResponseType = Report

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "query",
        "report",
        [
            key("statSeances", [
                "amount",
                "hours",
                key("money", [
                    "cash",
                    "card",
                    "deposit",
                    "bonus",
                    "total",
                    key("currency", ["id", "title", "alias", "letter"]),
                ]),
            ]),
            key("statServices", [
                "amount",
                key("money", [
                    "cash",
                    "card",
                    "deposit",
                    "bonus",
                    "total",
                    key("currency", ["id", "title", "alias", "letter"]),
                ]),
            ]),
            key("statGoods", [
                "amount",
                key("money", [
                    "cash",
                    "card",
                    "deposit",
                    "bonus",
                    "total",
                    key("currency", ["id", "title", "alias", "letter"]),
                ]),
            ]),
            key("statOrders", ["rko", "pko"]),
            key("statDeposit", [
                "cash",
                "card",
                "deposit",
                "bonus",
                "total",
                key("currency", ["id", "title", "alias", "letter"]),
            ]),
            key("statMoney", [
                "cash",
                "card",
                "deposit",
                "bonus",
                "total",
                key("currency", ["id", "title", "alias", "letter"]),
            ]),
            key("statTransfer", ["income", "outcome"]),
        ],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
