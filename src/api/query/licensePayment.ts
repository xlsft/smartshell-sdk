// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { LicensePaymentData } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { id: number }
export type ResponseType = LicensePaymentData

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "query",
        "licensePayment",
        [
            "id",
            "created_at",
            "host_count",
            "payment_method",
            "bill_url",
            key("license_tariff", [
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
            ]),
            key("modules", ["id", "name", "description", "cost", "category_id", "alias"]),
            "months",
            "cost",
            key("contractor", ["id", "name", "inn", "kpp", "address", "phone", "email"]),
        ],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
