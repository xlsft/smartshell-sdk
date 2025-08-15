// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { HostCommandTemplate, UpdateHostCommandTemplateInput } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { input: UpdateHostCommandTemplateInput }
export type ResponseType = HostCommandTemplate

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request("mutation", "updateHostCommandTemplate", ["id", "title", "path", "arguments"], {
        ...(props as any),
    })
}

export default module<InputType, ResponseType>
