// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { DepositAccount } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { company_id?: number }
export type ResponseType = DepositAccount[]

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "query",
        "getClientDepositAccounts",
        [
            key("club", ["id", "name", "address"]),
            "balance",
            "current",
            key("currency", ["id", "title", "alias", "letter"]),
        ],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
