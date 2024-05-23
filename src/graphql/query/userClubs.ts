import type { ShellSdkContext } from "../../types/sdk.ts"

export type InputType = {
    login: string;
    password: string
};

export type ResponseType = {
    id: number;
    name: string;
    address: string;
    tariffName?: string;
    workShiftStatus: "NONE" | "OPEN" | "MY" | "LOCKED";
    permitted: boolean;
    operatorFirstName?: string;
    operatorLastName?: string
}[]

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
