// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { Service, ServicesInput } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { input?: ServicesInput }
export type ResponseType = Service[]

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "query",
        "services",
        ["id", "title", "cost", "wholesale_cost", "tax_percent", "use_global_discounts", "created_at", "ean"],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
