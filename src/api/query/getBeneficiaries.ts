// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { Beneficiary } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type ResponseType = Beneficiary[]

const module = async <Response extends ResponseType>(ctx: ShellSdkContext): Promise<Response> => {
    return await ctx.request("query", "getBeneficiaries", [
        "id",
        "organization_id",
        "type",
        "full_name",
        "phone",
        "email",
        "inn",
        "status",
        "balance",
        "service_name",
        key("companies", ["id", "name", "address"]),
        key("locked_by", [
            "id",
            "sum",
            key("beneficiary", [
                "id",
                "organization_id",
                "type",
                "full_name",
                "phone",
                "email",
                "inn",
                "status",
                "balance",
                "service_name",
                "error",
                "created_at",
            ]),
            "commission",
            "status",
            "created_at",
        ]),
        "error",
        "created_at",
    ])
}

export default module<ResponseType>
