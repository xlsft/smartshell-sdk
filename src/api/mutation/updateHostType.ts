// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { HostType, HostTypeInput } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { id: number; input: HostTypeInput }
export type ResponseType = HostType

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request("mutation", "updateHostType", ["id", "title", "description", "created_at", "updated_at"], {
        ...(props as any),
    })
}

export default module<InputType, ResponseType>
