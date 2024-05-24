import type { ShellSdkContext } from "../../types/sdk.ts"
import { UserClub, UserClubsInput } from "../../types/types.ts";

export type InputType = UserClubsInput

export type ResponseType = UserClub[]

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    input: Input
): Promise<Response> => { return await ctx.request("query", "userClubs", [
    "id",
    "name",
    "address",
    "tariffName",
    "workShiftStatus",
    "permitted",
    "operatorFirstName",
    "operatorLastName",
], { input })}

export default module<InputType, ResponseType>
