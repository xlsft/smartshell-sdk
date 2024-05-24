import type { AccessToken } from "../../types/types.ts";
import type { ShellSdkContext } from "../../types/sdk.ts"

export type InputType = {
	id: number
}

export type ResponseType = AccessToken

const module = async <Input extends InputType, Response extends ResponseType>(
	ctx: ShellSdkContext,
	input: Input
): Promise<Response> => { return await ctx.request("mutation", "relogin", [
	"token_type",
	"access_token",
	"refresh_token",
	"expires_in"
], input )}

export default module<InputType, ResponseType>
