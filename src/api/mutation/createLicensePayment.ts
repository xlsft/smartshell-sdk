// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { LicensePayment, LicensePaymentInput } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { input: LicensePaymentInput }
export type ResponseType = LicensePayment

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "mutation",
        "createLicensePayment",
        [
            "id",
            "url",
            "qr",
            key("additional", [
                "public_id",
                "org_id",
                "amount",
                "description",
                key("currency", ["id", "title", "alias", "letter"]),
                "data",
            ]),
        ],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
