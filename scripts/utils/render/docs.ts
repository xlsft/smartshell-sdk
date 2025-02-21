import type { ParsedField, ResolvedMethod, Type } from "../../types/types.ts";
import { primitives } from "../static/primitives.ts";
import * as prettier from "npm:prettier";
import { log } from "../logger.ts";
import { parse } from "../parse.ts";
  

export const docs = async (method: ResolvedMethod): Promise<string> => {

    const content = /*html*/`
        <h1>api.${method.name}</h1>
        ${method.paginated ? `<p><code>Paginated</code></p>` : ``}
        ${method.props.length === 0 ? '' : `<h3>Input</h3>\n<pre><code lang="ts">type InputType = { ${method.props.map(v => `${v.key}${v.required ? '' : '?'}: ${primitives.map(v => v.type).includes(v.value) ? v.value : `"||--['${v.docs}','${v.value}'--||"`}${v.array ? '[]' : ''}`).join(', ')} }</code></pre>`}
        <h3>Response</h3>
        <pre><code lang="ts">type ResponseType = ${primitives.map(v => v.type).includes(method.response.value[0]) ? method.response.value[0] : `"||--['/docs/reference/types/${method.response.value[0]}','${method.response.value[0]}'--||"`}${method.response.array === true ? '[]' : ''}</code></pre>
        <h3>Codegen method map</h3>
        <pre><code lang="json" data-expandable>${JSON.stringify(method, null, 4)}</code></pre>
    `
    log.log(`${method.type} module "${method.name}" docs rendered`)
    return await prettier.format(content, { parser: "html", tabWidth: 4 })
}


export const typedocs = async (type: Type): Promise<string | undefined> => {
    const options: { type?: keyof typeof render, union?: true } = { }
    if (type.name.split('')[0] === '_') return
    if ( type.name === 'Mutation' || type.name === 'Query' ) return
    if ( type.kind === 'SCALAR' ) return
    else if ( type.kind === 'OBJECT' || type.kind === 'INPUT_OBJECT' ) options.type = 'type'
    else if ( type.kind === 'ENUM' || type.kind === 'UNION' ) options.type = 'enum'
    if (options.type === 'enum' && type.kind === 'UNION') options.union = true
    const render = {
        'enum': () => {
            const enums: string[] = []
            if (type.enumValues.length !== 0) for (let i = 0; i < type.enumValues.length; i++) enums.push(type.enumValues[i].name)
            if (enums.length === 0 && type.possibleTypes.length !== 0) enums.push(...type.possibleTypes.map(type => type.name))
            return enums
        },
        'type': () => {
            const fields: ParsedField[] = []
            const type_fields = type.fields.length === 0 ? type.inputFields : type.fields
            if (type_fields.length === 0) return
            for (let i = 0; i < type_fields.length; i++) fields.push(parse(type_fields[i]))
            return fields
        }
    }

    const properties = render[options.type!]()

    const h2 = {
        'enum': `Possible ${options.union ? 'types' : 'values'}`,
        'type': 'Type properties',
    }
    const content = /*html*/`
        <h1 id="${`${options.type} ${type.name}`.toLowerCase().replaceAll(' ', '_')}">${options.type} ${type.name}</h1>
        <br>
        <h2 id="${h2[options.type!].toLowerCase().replaceAll(' ', '_')}">${h2[options.type!]}</h2>
        ${options.type === 'type' ? properties?.map((v) => {
            const data = v as ParsedField
            if (!data) return ''
            return /*html*/`
                <h3 id="${data.name!.toLowerCase().replaceAll(' ', '_')}">${data.name}</h3>
                <pre><code lang="ts">
                    ${data.name}${data.rules?.nullable ? '?' : ''}: ${!data.primitive ? data.type : `"||--['/docs/reference/types/${data.type}','${data.type}']--||"`}${data.rules?.array ? '[]' : ''}
                </code></pre>
            `    
        }).join('\n') : /*html*/`
            <pre><code lang="ts">
                ${properties?.map((v) => {
                    const data = v as string
                    return options.union ? `${primitives.map(v => v.type).includes(data) ? data : `"||--['/docs/reference/types/${data}','${data}'--||"`}` : `"${data}"`
                }).join(' | ')}
            </code></pre>
        `}
    `

    log.log(`${options.type} "${type.name}" docs rendered`)
    await Deno.writeTextFile(`docs/content/reference/types/${type.name}.html`, await prettier.format(content, { parser: "html", tabWidth: 4 }))
}