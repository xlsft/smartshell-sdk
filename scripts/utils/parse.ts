import { Field, ParsedField, TypeRef } from "../types/types.ts";
import { primitives } from "./static/primitives.ts";

export const parse = (field: Field): ParsedField  => {
    if (field.name?.split('')[0] === '_') return { string: '', empty: true }
    const rules = { array: false, nullable: true }
    const name = field.name
    let result = ''
    const parse_type = (type: TypeRef) => {
        if (!type) return
        if (type.kind === 'NON_NULL') { rules.nullable = false; parse_type(type.ofType) }
        else if (type.kind === 'LIST') { rules.array = true; parse_type(type.ofType) } 
        else if (type.name !== null) { result = type.name } 
        else parse_type(type.ofType)
    }; parse_type(field.type);
    const scalar_id = primitives.findIndex(o => o.name === result)
    if (scalar_id !== -1) result = primitives[scalar_id].type 
    return {
        string: `    ${name}${rules.nullable === true ? '?' : ''}: ${result}${rules.array === true ? '[]' : ''}`,
        primitive: scalar_id === -1,
        rules,
        name,
        type: result
    }
}