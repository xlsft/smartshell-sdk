// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { Owner, OwnerInput } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { input: OwnerInput }
export type ResponseType = Owner

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "mutation",
        "createOwner",
        [
            "id",
            "name",
            "inn",
            "email",
            "private_policy",
            "private_policy_url",
            key("counterparty_data", ["full_name", "inn", "ogrn", "status", "legal_address", "registration_date"]),
        ],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
