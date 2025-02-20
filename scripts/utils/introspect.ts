import { Shell } from "../../mod.ts";
import { gql } from "../../src/utils/syntax.ts";
import type { IntrospectQuery } from "../types/types.ts";
import { log } from "./logger.ts";

const shell = new Shell({ anonymous: true })

export const introspect = async () => { log.log('STEP [1/4]: Pulling introspection...'); const result = (await shell.call<IntrospectQuery>(gql`

fragment Type on __Type { name kind fields {
    name
    args { ...Input }
    type { ...Ref }
    isDeprecated
    deprecationReason
}}

fragment Input on __InputValue { name type {  ...Ref } }

fragment Ref on __Type {
    kind name ofType { 
    kind name ofType {
    kind name ofType {
    kind name ofType { 
    kind name
}}}}}

{
    __schema {
        queryType { ...Type }
        mutationType { ...Type }
        types { 
            ...Type
            inputFields { ...Input }
            enumValues { name }
            possibleTypes { ...Ref }
        }
    }
    versions { frontend backend }
}

`)).__schema; log.log('Successfully pulled introspection!'); return result}