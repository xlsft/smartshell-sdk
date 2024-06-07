import type { Field, TypeRef, Type } from "../../types/types.ts";
import { existsSync } from "https://deno.land/std@0.224.0/fs/mod.ts";

const scalars = [{ name: 'String', type: 'string' }, { name: 'Int', type: 'number' }, { name: 'Float', type: 'number' }, { name: 'Boolean', type: 'boolean'}]

export const types = (introspect: Type[]) => {
    if (existsSync('src/types/types.ts')) Deno.writeTextFile('src/types/types.old', Deno.readTextFileSync('src/types/types.ts'))


        
    const parse_field = (field: Field): string => {
        if (field.name?.split('')[0] === '_') return ''
        
        const rules = {
            array: false,
            nullable: true
        }
        const name = field.name;
        let result: string = ''
        
        function parse_type(type: TypeRef) {
            if (!type) return
            if (type.kind === 'NON_NULL') { rules.nullable = false; parse_type(type.ofType) }
            else if (type.kind === 'LIST') { rules.array = true; parse_type(type.ofType) } 
            else if (type.name !== null) { result = type.name } 
            else parse_type(type.ofType)
        }
    
        parse_type(field.type);
    
        const scalar_id = scalars.findIndex(o => o.name === result)
        if (scalar_id !== -1) result = scalars[scalar_id].type 
    
        return `    ${name}${rules.nullable === true ? '?' : ''}: ${result}${rules.array === true ? '[]' : ''}`
    }
    
    const create_object_type = (type: Type) => {
        if (type.name.split('')[0] === '_') return
        const fields = [`export type ${type.name} = {`]
        const type_fields = type.fields.length === 0 ? type.inputFields : type.fields
        if (type_fields.length === 0) return ''
        for (let i = 0; i < type_fields.length; i++) {
            const field = type_fields[i];
            fields.push(parse_field(field))
        }
        fields.push('}')
        return fields.join('\n')
    }
    
    const create_enum_type = (type: Type) => {
        if (type.name.split('')[0] === '_') return
        const enums: string[] = []
        if (type.kind === 'ENUM') {
            for (let i = 0; i < type.enumValues.length; i++) {
                const element = type.enumValues[i];
                enums.push(`"${element.name}"`)
            }
            return `export type ${type.name} = ${enums.join(' | ')}`
        }
        if (type.kind === 'UNION') {
            for (let i = 0; i < type.possibleTypes.length; i++) {
                const element = type.possibleTypes[i];
                enums.push(`${element.name}`)
            }
            return `export type ${type.name} = ${enums.join(' & ')}`
        }
    }


    const exports = ["export type Upload = string", "export type Email = `${string}@${string}.${string}`;","export type IpAddress = `${number}.${number}.${number}.${number}`;","export type MacAddress = `${string}:${string}:${string}:${string}:${string}:${string}`;","export type Date = `${number}${number}${number}${number}-${number}${number}-${number}${number}`", "export type Time = `${number}${number}:${number}${number}:${number}${number}`", "export type DateTime = `${Date} ${Time}`"]

    for (let top_type_i = 0; top_type_i < introspect.length; top_type_i++) {
        const type = introspect[top_type_i];
        if ( type.name === 'Mutation' || type.name === 'Query' ) continue
        if ( type.kind === 'SCALAR' ) continue
        else if ( type.kind === 'OBJECT' || type.kind === 'INPUT_OBJECT') exports.push(create_object_type(type) || '')
        else if ( type.kind === 'ENUM' || type.kind === 'UNION' ) exports.push(create_enum_type(type) || '')
    }

    Deno.writeTextFile('src/types/types.ts', exports.join('\n\n').replace(/\n{2,}/g, '\n\n').trim() + '\n')
}
