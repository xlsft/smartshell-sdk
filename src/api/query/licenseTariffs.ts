// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { LicenseTariff } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type ResponseType = LicenseTariff[]

const module = async <Response extends ResponseType>(ctx: ShellSdkContext): Promise<Response> => {
    return await ctx.request("query", "licenseTariffs", [
        "id",
        "name",
        "description",
        "cost",
        key("module_categories", [
            "id",
            "name",
            key("modules", ["id", "name", "description", "cost", "category_id", "alias"]),
            "tariff_id",
        ]),
    ])
}

export default module<ResponseType>
