// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { LicensePayment, AdditionalLicensePaymentInput } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { input: AdditionalLicensePaymentInput }
export type ResponseType = LicensePayment

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "mutation",
        "createAdditionalLicensePayment",
        [
            "id",
            "url",
            key("additional", [
                "public_id",
                "org_id",
                "amount",
                "description",
                key("currency", ["id", "title", "alias", "letter"]),
            ]),
        ],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
