// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { CompanyPermissionsData } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type ResponseType = CompanyPermissionsData

const module = async <Response extends ResponseType>(ctx: ShellSdkContext): Promise<Response> => {
    return await ctx.request("query", "companyPermissions", [
        key("companyPermissions", [
            "role_id",
            "title",
            "description",
            key("permissions", ["id", "alias", "enabled", "locked", "title", "description"]),
        ]),
    ])
}

export default module<ResponseType>
