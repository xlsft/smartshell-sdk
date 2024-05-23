import type { ShellSdkContext } from "../../types/sdk.ts"

export type InputType = {
	id: number
}

export type ResponseType = {
	token_type: string
	access_token: string
	refresh_token: string
	expires_in: number
}

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
