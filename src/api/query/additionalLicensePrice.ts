// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { LicensePrice, AdditionalLicensePriceInput } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { input: AdditionalLicensePriceInput }
export type ResponseType = LicensePrice

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "query",
        "additionalLicensePrice",
        [
            "sum",
            "total_sum",
            "host_price",
            key("modules", ["module_id", "price"]),
            "discount_value",
            "loyalty_discount",
            "promocode_discount",
            "month_discount",
            "debt",
        ],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
