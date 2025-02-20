// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { ClientTariffGridItem, ClientTariffGridInput } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { input: ClientTariffGridInput }
export type ResponseType = ClientTariffGridItem[]

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "query",
        "clientTariffGrid",
        [
            "id",
            "title",
            "duration",
            "cost",
            "has_fixed_finish_time",
            key("currency", ["id", "title", "alias", "letter"]),
            "highlighted",
            "finished_at",
        ],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
