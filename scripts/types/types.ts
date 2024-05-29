import { ShellSdkFormattedQuery } from "../../src/types/sdk.ts";

export type OfType = {
    name: string | null
    kind: string
    ofType: OfType
} | null

export interface Field {
    name: string | null
    type: OfType
}

export interface Enum {
    name: string
}

export interface Type {
    name: string
    kind: string
    enumValues: Enum[]
    possibleTypes: Enum[]
    fields: Field[]
    inputFields: Field[]
}

export interface IntrospectQuery {
    types: Type[]
}

export interface Request {
    type: 'query' | 'mutation',
    name: string,
    input: {
        required: boolean
        framed: boolean 
        paginated: boolean
    }
    response: {
        type: string
        array: boolean
    }
    fields: ShellSdkFormattedQuery
}