// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { ClientHostGroup } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { companyId: number }
export type ResponseType = ClientHostGroup[]

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "query",
        "clientHostGroups",
        ["id", "title", key("customization", ["color", "background", "screensaver"])],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
