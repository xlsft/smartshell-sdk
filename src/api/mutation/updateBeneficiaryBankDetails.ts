// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { BeneficiaryBankDetails, UpdateBankAccountInput } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { id: string; input: UpdateBankAccountInput }
export type ResponseType = BeneficiaryBankDetails

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "mutation",
        "updateBeneficiaryBankDetails",
        ["bank_name", "bik", "account", "correspondent_account", "kpp"],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
