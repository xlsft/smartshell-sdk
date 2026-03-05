// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext, ShellSdkPaginatorInput } from "../../types/sdk.ts"
import type { ListMovementOfFundsPaginated, ListBeneficiaryMovementsOfFunds } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { paginator?: ShellSdkPaginatorInput; input: ListBeneficiaryMovementsOfFunds }
export type ResponseType = ListMovementOfFundsPaginated

const module = async <Input extends InputType["input"], Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
    paginator?: ShellSdkPaginatorInput,
): Promise<Response> => {
    return await ctx.request(
        "query",
        "listBeneficiaryMovementsOfFunds",
        [
            key("summary", ["values", "labels"]),
            key("data", [
                key("transaction", [
                    "id",
                    key("company", ["id", "name", "address"]),
                    key("client", ["nickname", "phone"]),
                    "sum",
                    key("commission_details", ["total"]),
                    "status",
                    "created_at",
                    "receipt",
                ]),
                key("deal", [
                    "id",
                    "sum",
                    "total_sum",
                    key("beneficiary", [
                        "id",
                        "organization_id",
                        "full_name",
                        "phone",
                        "email",
                        "inn",
                        "status",
                        "balance",
                        "service_name",
                        "bank_details",
                        "error",
                        "created_at",
                    ]),
                    "commission",
                    key("commission_details", ["total"]),
                    "status",
                    "error",
                    "auto_withdraw",
                    "created_at",
                    "updated_at",
                ]),
                "confirmed",
                "sum",
                "created_at",
                "updated_at",
            ]),
        ],
        { input: props },
        paginator || { page: 1 },
    )
}

export default module<InputType["input"], ResponseType>
