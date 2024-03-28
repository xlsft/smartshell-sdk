//@ts-nocheck <>

import { gql } from "../../utils/syntax.ts";
import { ShellContext, ShellSdkModule } from "../../types/sdk.ts"

interface QueryInput {
    login: string
    password: string
}

interface QueryResponse {
    id: number
    name: string
    address: string
    tariffName?: string
    workShiftStatus: 'NONE' | 'OPEN' | 'MY' | 'LOCKED'
    permitted: boolean
    operatorFirstName?: string
    operatorLastName?: string
}

const module: ShellSdkModule = async <TI,TR>(ctx: ShellContext, data: TI) => { return await ctx.request<TR>(gql`

query UserClubs {
    userClubs(input: { login: "${data.login}", password: "${data.password}" }) {
        id
        name
        address
        tariffName
        workShiftStatus
        permitted
        operatorFirstName
        operatorLastName
    }
}

`)}

export default module<QueryInput, QueryResponse[]> as ShellSdkModule