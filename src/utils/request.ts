import type { ShellContext } from "../types/sdk.ts";
import { stringify } from "./stringify.ts";
import { gql } from "./syntax.ts";

export async function request<TI,TR>(ctx: ShellContext, type: 'query' | 'mutation', name: string, query: string[], input?: TI):Promise<any> {
return (await ctx.request<any>(gql`
    ${type} ${name} {
        ${name}${input ? `(${stringify(input)})` : ''} {
            ${query.join('\n')}
        }
    }
`))[name]}