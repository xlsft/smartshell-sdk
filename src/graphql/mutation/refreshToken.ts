
import type { AccessToken, RefreshTokenInput } from "../../types/types.ts";
import type { ShellSdkContext } from "../../types/sdk.ts"

export type InputType = RefreshTokenInput
export type ResponseType = AccessToken

const module = async <Input extends InputType, Response extends ResponseType>(
	ctx: ShellSdkContext,
	props: Input
): Promise<Response> => { return await ctx.request("mutation", "refreshToken", [
	"token_type",
	"access_token",
	"refresh_token",
	"expires_in"
], { input: props })}

export default module<InputType, ResponseType>
