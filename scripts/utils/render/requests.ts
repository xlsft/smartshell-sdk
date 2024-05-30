import type { Method } from "../../types/types.ts";
import { TypeRef } from "../../types/types.ts";

const scalars = [{ name: 'String', type: 'string' }, { name: 'Int', type: 'number' }, { name: 'Float', type: 'number' }, { name: 'Boolean', type: 'boolean'}]


const types = (method: Method) => {
    const imports = {
        gql: [],
        sdk: ['ShellSdkContext']
    }
    const props = ['export type PropsType = ']
    const response = ['export type ResponseType = ']

    let input_type

    const is = {
        props: {
            input: false,
            required: false,
            paginated: false
        },
        response: {
            scalar: false,
            type: false,
            array: false,
        }

    }

    function prop(type: TypeRef) {
        if (!type) return
        if (type.kind === 'INPUT_OBJECT') { is.props.input = true; if (type.kind === 'SCALAR') input_type = type.name; prop(type.ofType) }
        //? Scalar????
        else if (type.kind === 'NON_NULL') { is.props.required = true; prop(type) }
        if (type.name === 'page' || type.name === 'first') { is.props.paginated = true; prop(type.ofType) }
        if ( type.name !== 'page' && type.name !== 'first' && type.name)
        else prop(type.ofType)
    }

    method.args.forEach(arg => prop(arg.type));

    function res(type: TypeRef) {
        if (!type) return
        if (type.kind === 'INPUT_OBJECT') { is.props.input = true; input_type = type.name; prop(type.ofType) }
        else if (type.kind === 'NON_NULL') { is.props.required = true; prop(type) }
        else if (type.name === 'page' || type.name === 'first' ) { is.props.paginated = true; prop(type.ofType) }
        else prop(type.ofType)
    }

}


export const requests = (query: Method[], mutations: Method[]) => {
    console.log(query)
    // const deadend_types = ['Upload', 'Email', 'IpAddress', 'MacAddress', 'Date', 'Time', 'DateTime']
    // const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
    // const result: Request[] = []
    // let query: Type | null = null
    // let mutation: Type | null = null
    // for (let i = 0; i < introspect.length; i++) {
    //     const type = introspect[i];
    //     if (type.name === 'Query') query = type
    //     else if (type.name === 'Mutation') mutation = type
    //     else continue
    // }
    // const rendered_types = Deno.readTextFileSync('src/types/types.ts')

    // for (let top_type_i = 0; top_type_i < introspect.length; top_type_i++) {
    //     const type = introspect[top_type_i]
    //     if ( type.kind === 'UNION' ) console.log(type)
    // }

    

    // for (let i = 0; i < query!.fields.length; i++) {
    //     const request = query?.fields[i];
    //     const extracted_type_start = rendered_types.split(`export type ${capitalize(request!.name!)} = {\n`)[1]
    //     if (extracted_type_start === undefined) continue
    //     const extracted_types = extracted_type_start.split('}')[0].split('\n').map((type) => { return type.trim() })
    //     extracted_types.pop()
    //     const top_fields: RequestField[] = []
    //     for (let j = 0; j < extracted_types.length; j++) {
    //         const top_field = extracted_types[j];
    //         const [top_field_name, top_field_type] = top_field.split('?').join('').split(': ')

    //         const top_field_has_nested = /^[A-Z]/.test(top_field_type) && !deadend_types.includes(top_field_type)

    //         // console.log(top_field_name, top_field_type, top_field_has_nested)
    //     }
    // }
    
    // console.log(query, mutation)

    
    // result.push({
    //     type: 'query',
    //     name: request!.name,
    //     input:
    // })
}