// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { BeneficiaryDeal, WithdrawToCheckingAccountInput } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { input: WithdrawToCheckingAccountInput }
export type ResponseType = BeneficiaryDeal

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "mutation",
        "executeDealAndPayToCheckingAccount",
        [
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
                key("locked_by", [
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
                        "error",
                        "created_at",
                    ]),
                    "commission",
                    "status",
                    "created_at",
                ]),
                "error",
                "created_at",
            ]),
            "commission",
            "status",
            "created_at",
        ],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
