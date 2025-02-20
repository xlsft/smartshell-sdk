// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { ConfirmationResult, OrganizationConfirmationCodeInput } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { input: OrganizationConfirmationCodeInput }
export type ResponseType = ConfirmationResult

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "mutation",
        "organizationConfirmCode",
        [
            key("token", [
                "token_type",
                "expires_in",
                "access_token",
                "refresh_token",
                key("metadata", ["first_time_login"]),
            ]),
            "success",
            "hash",
        ],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
