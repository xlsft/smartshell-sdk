// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { Import } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { id: number }
export type ResponseType = Import

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "query",
        "userImportStatus",
        ["id", key("failures", ["row", "errors", "values", "attribute"]), "created_at", "finished_at"],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
