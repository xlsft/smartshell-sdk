// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { Shortcut } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { id: number }
export type ResponseType = Shortcut

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "query",
        "shortcut",
        [
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
            key("game_account_group", [
                "id",
                "title",
                key("accounts", ["id", "login", "password", "active", "busy"]),
                key("shortcuts", [
                    "id",
                    "title",
                    "path",
                    "group_id",
                    "popular",
                    "sort",
                    "args",
                    "icon_path",
                    "password",
                    "main_picture",
                    "run_as_admin",
                    "work_dir",
                    "only_for_registered",
                    "age_rating",
                    "free_run",
                ]),
            ]),
            "run_as_admin",
            "work_dir",
            "only_for_registered",
            "age_rating",
            "free_run",
        ],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
