// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { AccessToken, LoginInput } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { input: LoginInput }
export type ResponseType = AccessToken

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "mutation",
        "login",
        ["token_type", "expires_in", "access_token", "refresh_token", key("metadata", ["first_time_login"])],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
