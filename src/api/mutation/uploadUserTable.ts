// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { UserTableInput } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { input: UserTableInput }
export type ResponseType = number

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request("mutation", "uploadUserTable", [], { ...(props as any) })
}

export default module<InputType, ResponseType>
