// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { PhoneExistsInput } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { input: PhoneExistsInput }
export type ResponseType = boolean

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request("query", "phoneExists", [], { ...(props as any) })
}

export default module<InputType, ResponseType>
