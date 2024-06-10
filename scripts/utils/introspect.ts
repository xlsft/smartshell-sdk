import { Shell } from "../../mod.ts";
import { gql } from "../../src/utils/syntax.ts";
import type { IntrospectQuery } from "../types/types.ts";

const shell = new Shell({ anonymous: true })

export const introspect = async () => { return (await shell.call<IntrospectQuery>(gql`

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

`)).__schema}