import type { Type } from "../../types/types.ts";


export const requests = (introspect: Type[]) => {
    let query: Type | null = null
    let mutation: Type | null = null
    for (let i = 0; i < introspect.length; i++) {
        const type = introspect[i];
        if (type.name === 'Query') query = type
        else if (type.name === 'Mutation') mutation = type
        else continue
    }

    console.log(query, mutation)
}