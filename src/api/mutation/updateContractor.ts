// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { Contractor, ContractorInput } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { id: number; input: ContractorInput }
export type ResponseType = Contractor

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "mutation",
        "updateContractor",
        ["id", "name", "inn", "kpp", "address", "phone", "email"],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
