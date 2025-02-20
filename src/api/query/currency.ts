// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { Currency } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { alias?: string }
export type ResponseType = Currency

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request("query", "currency", ["id", "title", "alias", "letter"], { ...(props as any) })
}

export default module<InputType, ResponseType>
