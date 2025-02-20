// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { OrganizationStartResetPasswordInput } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { input: OrganizationStartResetPasswordInput }
export type ResponseType = string

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request("mutation", "organizationStartResetPassword", [], { ...(props as any) })
}

export default module<InputType, ResponseType>
