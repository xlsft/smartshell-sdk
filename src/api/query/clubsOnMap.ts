// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { ClientClubOnMap } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { q?: string; city?: string }
export type ResponseType = ClientClubOnMap[]

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request("query", "clubsOnMap", ["id", "name", "address", "city", "lat", "lng"], {
        ...(props as any),
    })
}

export default module<InputType, ResponseType>
