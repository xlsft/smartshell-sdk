// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { HostCommandTemplate, CreateHostCommandTemplateInput } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { input: CreateHostCommandTemplateInput }
export type ResponseType = HostCommandTemplate

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request("mutation", "createHostCommandTemplate", ["id", "title", "path", "arguments"], {
        ...(props as any),
    })
}

export default module<InputType, ResponseType>
