
import type { User, ClientsInput } from "../../types/types.ts";
import type { ShellSdkContext, ShellSdkPaginatorInput } from "../../types/sdk.ts"

export type InputType = ClientsInput

export type ResponseType = { data: User[], total_deposits: number }

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    input: Input,
    paginator?: ShellSdkPaginatorInput
): Promise<Response> => { return await ctx.request("query", "clients", `
    data {
        id
    }
    total_deposits
`, { input }, paginator)}

export default module<InputType, ResponseType>
