// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext, ShellSdkPaginatorInput } from "../../types/sdk.ts"
import type { MovementOfFundsPaginated, GetBeneficiaryMovementsOfFunds } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { paginator?: ShellSdkPaginatorInput; input: GetBeneficiaryMovementsOfFunds }
export type ResponseType = MovementOfFundsPaginated

const module = async <Input extends InputType["input"], Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
    paginator?: ShellSdkPaginatorInput,
): Promise<Response> => {
    return await ctx.request(
        "query",
        "getBeneficiaryMovementsOfFunds",
        [
            key("data", [
                key("transaction", [
                    "id",
                    key("company", ["id", "name", "address"]),
                    "amount",
                    "sum",
                    "status",
                    "created_at",
                ]),
                key("deal", [
                    "id",
                    "sum",
                    key("beneficiary", [
                        "id",
                        "organization_id",
                        "type",
                        "full_name",
                        "phone",
                        "email",
                        "inn",
                        "status",
                        "balance",
                        "service_name",
                        key("companies", ["id", "name", "address"]),
                        key("locked_by", ["id", "sum", "commission", "status", "created_at"]),
                        "error",
                        "created_at",
                    ]),
                    "commission",
                    "status",
                    "created_at",
                ]),
                "sum",
                "created_at",
            ]),
            "deposit",
            "withdrawal",
        ],
        { input: props },
        paginator || { page: 1 },
    )
}

export default module<InputType["input"], ResponseType>
