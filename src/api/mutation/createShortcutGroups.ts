// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { ShortcutGroup, ShortcutGroupItem, SyncScope } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { input: ShortcutGroupItem[]; sync?: SyncScope }
export type ResponseType = ShortcutGroup[]

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request("mutation", "createShortcutGroups", ["id", "title", "sort"], { ...(props as any) })
}

export default module<InputType, ResponseType>
