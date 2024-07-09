import type { ShellSdkContext } from "../../types/sdk.ts"
import type { UserClub, UserClubsInput } from "../../types/types.ts";

export type InputType = UserClubsInput

export type ResponseType = UserClub[]

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input
): Promise<Response> => { return await ctx.request("query", "userClubs", [
    "id",
    "name",
    "address",
    "tariffName",
    "workShiftStatus",
    "permitted",
    "operatorFirstName",
    "operatorLastName",
], { input: props })}

export default module<InputType, ResponseType>
