//@ts-nocheck <module config>

import type { ShellContext, ShellSdkModule } from "../../types/sdk.ts"
import { request } from "../../utils/request.ts";

type q_input = {
    login: string
    password: string
    company_id: number
}

type q_response = {
    token_type: string
    access_token: string
    refresh_token: string
    expires_in: number
}

const module: ShellSdkModule = async <TI,TR>(ctx: ShellContext, input: TI): Promise<TR> => 
await request(ctx, 'mutation', 'login', ['token_type','access_token','refresh_token','expires_in'], { input })

export default module<q_input,q_response>