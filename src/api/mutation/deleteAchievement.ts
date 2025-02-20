// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { Achievement } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { id: string }
export type ResponseType = Achievement

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "mutation",
        "deleteAchievement",
        [
            "id",
            "name",
            "icon_url",
            key("conditions", ["name", "value"]),
            key("rewards", ["name", "value"]),
            "created_at",
            "assigned_count",
        ],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
