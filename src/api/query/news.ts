// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext, ShellSdkPaginatorInput } from "../../types/sdk.ts"
import type { News } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { paginator?: ShellSdkPaginatorInput }
export type ResponseType = News

const module = async <Input extends InputType["input"], Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
    paginator?: ShellSdkPaginatorInput,
): Promise<Response> => {
    return await ctx.request(
        "query",
        "news",
        [key("data", ["id", "content", "title", "preview", "url", "createdAt"])],
        { input: props },
        paginator || { page: 1 },
    )
}

export default module<InputType["input"], ResponseType>
