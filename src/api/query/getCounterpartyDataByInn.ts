// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { CounterpartyData } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { inn: string }
export type ResponseType = CounterpartyData

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "query",
        "getCounterpartyDataByInn",
        ["full_name", "inn", "ogrn", "status", "legal_address", "registration_date"],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
