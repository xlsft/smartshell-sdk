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
                key("bank_details_data", ["bank_name", "bik", "account", "correspondent_account", "kpp"]),
                key("companies", ["id", "name", "address"]),
                key("counterparty_data", ["full_name", "inn", "ogrn", "status", "legal_address", "registration_date"]),
                key("locked_by", [
                    "id",
                    "sum",
                    "total_sum",
                    "commission",
                    "status",
                    "error",
                    "auto_withdraw",
                    "created_at",
                    "updated_at",
                ]),
                "error",
                "created_at",
            ]),
            "commission",
            key("commission_details", [
                key("incoming", ["amount", "rate", "min"]),
                key("bank", ["amount", "rate", "min"]),
                "total",
            ]),
            "status",
            "error",
            "auto_withdraw",
            "created_at",
            "updated_at",
        ],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
