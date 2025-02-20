// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { SendConfirmationCodeInput } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { input: SendConfirmationCodeInput }
export type ResponseType = boolean

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request("mutation", "sendClientConfirmationCode", [], { ...(props as any) })
}

export default module<InputType, ResponseType>
