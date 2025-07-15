// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { OverviewReport, ReportInput } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { input: ReportInput }
export type ResponseType = OverviewReport

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "query",
        "overviewReport",
        [
            "url",
            key("data", [
                "title",
                "labels",
                "extraLabels",
                "extraLabels2",
                "extraLabels3",
                "keys",
                "points",
                "url",
                key("summary", ["title", "value", "extraValue", "extraString"]),
            ]),
        ],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
