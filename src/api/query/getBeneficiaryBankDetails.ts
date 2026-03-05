// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { BeneficiaryBankDetails } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { beneficiary_id: string }
export type ResponseType = BeneficiaryBankDetails

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "query",
        "getBeneficiaryBankDetails",
        ["bank_name", "bik", "account", "correspondent_account", "kpp"],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
