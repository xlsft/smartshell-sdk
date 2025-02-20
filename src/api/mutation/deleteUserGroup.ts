// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { UserGroup } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { uuid: string }
export type ResponseType = UserGroup

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request("mutation", "deleteUserGroup", ["uuid", "title", "user_count", "discount", "created_at"], {
        ...(props as any),
    })
}

export default module<InputType, ResponseType>
