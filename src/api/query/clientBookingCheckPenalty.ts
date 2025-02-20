// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { ClientBookingPenaltyData } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { id: number; companyId?: number }
export type ResponseType = ClientBookingPenaltyData

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "query",
        "clientBookingCheckPenalty",
        ["cost", key("currency", ["id", "title", "alias", "letter"])],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
