//@ts-nocheck <module config>

import type { ShellContext, ShellSdkModule } from "../../types/sdk.ts"
import { request } from "../../utils/request.ts";

type q_input = {
    login: string
    password: string
}

type q_response = {
    id: number
    name: string
    address: string
    tariffName?: string
    workShiftStatus: 'NONE' | 'OPEN' | 'MY' | 'LOCKED'
    permitted: boolean
    operatorFirstName?: string
    operatorLastName?: string
}

const module: ShellSdkModule = async <TI,TR>(ctx: ShellContext, input: TI): Promise<TR> => 
await request(ctx, 'query', 'userClubs', ['id', 'name', 'address', 'tariffName', 'workShiftStatus', 'permitted', 'operatorFirstName', 'operatorLastName'], { input })

export default module<q_input,q_response>