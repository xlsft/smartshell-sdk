// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { HostCommand, UpdateHostCommandStatusInput } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { input: UpdateHostCommandStatusInput }
export type ResponseType = HostCommand

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request("mutation", "updateHostCommandStatus", ["id", "status", "param"], { ...(props as any) })
}

export default module<InputType, ResponseType>
