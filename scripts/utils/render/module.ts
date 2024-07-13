import type { Node, ResolvedMethod } from "../../types/types.ts";
import * as prettier from "npm:prettier";
  

export const module = async (method: ResolvedMethod): Promise<string> => {
    const struct_node = (node: Node): string => {
        if (node.type === 'scalar') { return `"${node.key}"` } 
        else if (node.type === 'object') { return `key("${node.key}", [${node.child?.map(struct_node).join(", ")}])` }
        return ''
    }
      
    const struct = (data: Node[]): string => data.map(struct_node).join(", ")

return await prettier.format(`${method.imports.sdk.length > 0 ? `import type { ${method.imports.sdk.join(', ')} } from "../../types/sdk.ts"\n` : ''}${method.imports.gql.length > 0 ? `import type { ${method.imports.gql.join(', ')} } from "../../types/types.ts"\n` : ''}${method.schema.length === 0 ? '' : `import { key } from "../../utils/key.ts";`}
${method.props.length === 0 ? '' : `export type InputType = { ${method.props.map(v => `${v.key}${v.required ? '' : '?'}: ${v.value}${v.array ? '[]' : ''}`).join(', ')} }\n`}export type ResponseType = ${method.response.value[0]}${method.response.array === true ? '[]' : ''}

const module = async <${method.props.length === 0 ? '' : `Input extends InputType${method.paginated === true ? '["input"]' : ''}, `}Response extends ResponseType>(
    ctx: ShellSdkContext,${method.props.length === 0 ? '' : `\n    props: Input, ${method.paginated === true ? '\n    paginator: ShellSdkPaginatorInput' : ''}`}
): Promise<Response${ method.response.required === false ? '' : '' }> => { return await ctx.request("${method.type}", "${method.name}"${method.schema.length === 0 ? '' : `, [\n    ${struct(method.schema)}\n`}${method.schema.length === 0 ? '' : '],'}${method.paginated === true ?
`{ input: props.input }, paginator || { page: 1 }`
:
`${method.props.length === 0 ? '' : `${method.schema.length === 0 ? ',' : ''}{ ...props }`}`
})}

export default module<${method.props.length === 0 ? '' : `InputType, `}ResponseType> `, { parser: "typescript", semi: false, tabWidth: 4, printWidth: 120, arrowParens: 'avoid' })
}