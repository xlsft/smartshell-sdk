// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { CloudPaymentsAccount, SetCloudPaymentsAccountToCompanyInput } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { input: SetCloudPaymentsAccountToCompanyInput }
export type ResponseType = CloudPaymentsAccount

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request("mutation", "setCloudPaymentsAccountToCompany", ["publicId", "secretKey"], {
        ...(props as any),
    })
}

export default module<InputType, ResponseType>
