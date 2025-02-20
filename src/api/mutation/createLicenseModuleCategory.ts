// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { LicenseTariffCategory, LicenseTariffCategoryInput } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { input: LicenseTariffCategoryInput }
export type ResponseType = LicenseTariffCategory

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "mutation",
        "createLicenseModuleCategory",
        ["id", "name", key("modules", ["id", "name", "description", "cost", "category_id", "alias"]), "tariff_id"],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
