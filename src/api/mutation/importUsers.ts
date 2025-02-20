// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { ImportUserColumnsInput } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = {
    club_id: number
    org_id: number
    code: string
    file: string
    sum_deposit: boolean
    columns?: ImportUserColumnsInput
}
export type ResponseType = boolean

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request("mutation", "importUsers", [], { ...(props as any) })
}

export default module<InputType, ResponseType>
