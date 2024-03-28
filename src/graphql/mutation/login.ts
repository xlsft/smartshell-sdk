//@ts-nocheck <>
import { gql } from "../../utils/syntax.ts";
import { ShellContext, ShellSdkModule } from "../../types/sdk.ts"

interface QueryInput {
    login: string
    password: string
    company_id?: number
}

interface QueryResponse {
    token_type: string
    expires_in: number
    access_token: string
    refresh_token: string
}

const module: ShellSdkModule = async <TI,TR>(ctx: ShellContext, data: TI) => { return await ctx.request<TR>(gql`

mutation Login {
    login(input: { login: "${data.login}", password: "${data.password}", company_id: ${data.company_id} }) {
        token_type
        expires_in
        access_token
        refresh_token
    }
}

`)}

export default module<QueryInput, QueryResponse>