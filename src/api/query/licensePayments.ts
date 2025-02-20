// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext, ShellSdkPaginatorInput } from "../../types/sdk.ts"
import type { LicensePaymentData } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { paginator?: ShellSdkPaginatorInput }
export type ResponseType = LicensePaymentData[]

const module = async <Input extends InputType["input"], Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
    paginator?: ShellSdkPaginatorInput,
): Promise<Response> => {
    return await ctx.request(
        "query",
        "licensePayments",
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
        { input: props },
        paginator || { page: 1 },
    )
}

export default module<InputType["input"], ResponseType>
