// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { LeaderboardUser } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { companyId: number; from: string; to: string }
export type ResponseType = LeaderboardUser[]

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "query",
        "leaderboard",
        [
            "userId",
            "totalTime",
            "nickname",
            "name",
            "avatarUrl",
            "telegram_link",
            "discord_link",
            "steam_link",
            "vk_link",
            "created_at",
        ],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
