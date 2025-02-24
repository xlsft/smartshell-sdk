import type { Type } from "../../types/types.ts";
import { existsSync as exist } from "https://deno.land/std@0.224.0/fs/mod.ts";
import { log } from "../logger.ts";
import { parse } from "../parse.ts";
import { typedocs } from "./docs.ts";

export const types = async (introspect: Type[]) => {
    log.log('STEP [2/4]: Generate types from introspection...');
    let count = 0
    if (exist('src/types/types.ts')) Deno.writeTextFile('src/types/types.old', Deno.readTextFileSync('src/types/types.ts'))
    const create_object_type = async (type: Type) => {
        if (type.name.split('')[0] === '_') return
        const fields = [`/**
* # type \`${type.name}\`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/${type.name}
* 
* \`@xlsoftware/smartshell-sdk\`
*/`,`export type ${type.name} = {`]
        const type_fields = type.fields.length === 0 ? type.inputFields : type.fields
        if (type_fields.length === 0) return ''
        for (let i = 0; i < type_fields.length; i++) { const field = type_fields[i]; fields.push(parse(field).string) }
        fields.push('}')
        log.log(`type "${type.name}" generated`);
        count++

        await typedocs(type)
        return fields.join('\n')
    }
    const create_enum_type = async (type: Type) => {
        if (type.name.split('')[0] === '_') return
        const enums: string[] = []
        if (type.enumValues.length !== 0) for (let i = 0; i < type.enumValues.length; i++) enums.push(`"${type.enumValues[i].name}"`)
        if (enums.length === 0 && type.possibleTypes.length !== 0) { enums.push(`Record<string, ${type.possibleTypes.map(type => type.name).join(' | ')}>`) }
        log.log(`enum "${type.name}" generated`);
        count++
        await typedocs(type)
        return `/**
* # enum \`${type.name}\`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/${type.name}
* 
* \`@xlsoftware/smartshell-sdk\`
*/
export type ${type.name} = ${enums.join(' | ')}`
    }
    const exports = ["export type Upload = string", "export type Email = `${string}@${string}.${string}`;","export type IpAddress = `${number}.${number}.${number}.${number}`;","export type MacAddress = `${string}:${string}:${string}:${string}:${string}:${string}`;","export type Date = `${number}${number}${number}${number}-${number}${number}-${number}${number}`", "export type Time = `${number}${number}:${number}${number}:${number}${number}`", "export type DateTime = `${Date} ${Time}`"]
    for (let top_type_i = 0; top_type_i < introspect.length; top_type_i++) {
        const type = introspect[top_type_i];
        if ( type.name === 'Mutation' || type.name === 'Query' ) continue
        if ( type.kind === 'SCALAR' ) continue
        else if ( type.kind === 'OBJECT' || type.kind === 'INPUT_OBJECT') exports.push(await create_object_type(type) || '')
        else if ( type.kind === 'ENUM' || type.kind === 'UNION' ) exports.push(await create_enum_type(type) || '')
        
        
    }
    Deno.writeTextFile('src/types/types.ts', exports.join('\n\n').replace(/\n{2,}/g, '\n\n').trim() + '\n')
    log.log(`Successfully generated ${count} types!`);
}
