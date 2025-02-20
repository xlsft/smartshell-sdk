export type TypeRef = {
    name: string
    kind: string
    ofType: TypeRef
} | null

export interface Field {
    name: string
    type: TypeRef
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


export interface Method {
    name: string
    args: Field[]
    type: TypeRef
    isDeprecated: boolean
    deprecationReason?: string
}

export interface IntrospectQuery {
    types: Type[]
    queryType: { name: 'Query', fields: Method[] }
    mutationType: { name: 'Mutation', fields: Method[] }
}

export interface RequestField {
    name: string,
    entity?: {
        name: string
        fields: RequestField[]
    }[]
    nested?: RequestField
}

export interface Request {
    type: 'query' | 'mutation',
    name: string,
    props: {
        required: boolean
        framed: boolean 
        paginated: boolean
    }
    response: {
        type: string
        array: boolean
    }
    fields: RequestField[]
}

export type Node = { type: 'object' | 'union' | 'enum' | 'scalar' | 'entity', key: string, value: string[], child?: Node[] }

export type ResolvedType = { required: boolean, array: boolean, value: string[], type: Node['type'] }

export type ResolvedMethod = {
    imports: { gql: string[], sdk: string[] }
    type: "query" | "mutation"
    name: string
    schema: Node[]
    props: { key: string, value: string, required: boolean, array: boolean }[]
    paginated: boolean
    response: ResolvedType
    deprecated?: string
}

export type ResolvedModule = {
    file: string,
    docs: string
}

export type ParsedField = { string: string, primitive?: boolean, rules?: { array: boolean, nullable: boolean }, name?: string, type?: string, empty?: boolean }