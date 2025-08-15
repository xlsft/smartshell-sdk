// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { GameAccountGroup, GameAccountGroupInput } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { input: GameAccountGroupInput }
export type ResponseType = GameAccountGroup

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "mutation",
        "createGameAccountGroup",
        [
            "id",
            "title",
            key("accounts", [
                "id",
                "login",
                "password",
                key("group", ["id", "title"]),
                key("host", [
                    "id",
                    "group_id",
                    "type_id",
                    "position",
                    "alias",
                    "comment",
                    "mac_addr",
                    "ip_addr",
                    "dns_name",
                    "coord_x",
                    "coord_y",
                    "is_deleted",
                    "in_service",
                    "created_at",
                    "last_online",
                    "online",
                    "device_has_changed",
                    "device_updated_at",
                    "locked",
                    "admin_called_at",
                    "online_booking_enabled",
                ]),
                "active",
                "busy",
            ]),
            key("shortcuts", [
                "id",
                "title",
                "path",
                "group_id",
                key("group", ["id", "title", "sort"]),
                "popular",
                "sort",
                "args",
                "icon_path",
                "password",
                "main_picture",
                key("game_account_group", ["id", "title"]),
                "run_as_admin",
                "work_dir",
                "only_for_registered",
                "age_rating",
                "free_run",
            ]),
        ],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
