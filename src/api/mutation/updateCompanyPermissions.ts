// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { CompanyPermissionsData, UpdateCompanyPermissionsInput } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { input: UpdateCompanyPermissionsInput }
export type ResponseType = CompanyPermissionsData

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "mutation",
        "updateCompanyPermissions",
        [
            key("companyPermissions", [
                "role_id",
                "title",
                "description",
                key("permissions", ["id", "alias", "enabled", "locked", "title", "description"]),
            ]),
        ],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
