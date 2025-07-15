// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { ClientHost } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { company_id: number; host_group_id: number; tariff_id: number; from: string }
export type ResponseType = ClientHost[]

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "query",
        "clientHosts",
        [
            "id",
            "group_id",
            "group_title",
            "type_id",
            "position",
            "alias",
            "coord_x",
            "coord_y",
            "can_book",
            key("info", ["processor", "ram", "video", "disc", "shell_version"]),
            "is_current_users_session",
        ],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
