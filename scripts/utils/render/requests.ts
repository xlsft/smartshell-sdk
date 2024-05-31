import type { Field, Method, Type, TypeRef } from "../../types/types.ts";
import ts from "npm:typescript";

const scalars = [{ name: 'String', type: 'string' }, { name: 'Int', type: 'number' }, { name: 'Float', type: 'number' }, { name: 'Boolean', type: 'boolean'}]
const deadend = ['Upload', 'Email', 'IpAddress', 'MacAddress', 'Date', 'Time', 'DateTime']

const method = (type: 'query' | 'string', method: Method, types: Type[] ) => {
    const resolve = (type: TypeRef) => {
        const options = { required: false, array: false, value: '' }
        const recursive = (type: TypeRef) => {
            if (!type) return
            if (type.kind === 'NON_NULL') { options.required = true; recursive(type.ofType) } 
            else if (type.kind === 'LIST') { options.array = true; recursive(type.ofType) } 
            else if (type.kind === 'SCALAR') { const scalar = scalars.find(s => s.name === type.name); if (scalar) options.value = scalar.type; else { imports.gql.add(type.name as string); options.value = type.name as string }} 
            else if (type.kind === 'INPUT_OBJECT' || type.kind === 'OBJECT') { imports.gql.add(type.name as string); options.value = type.name as string } 
            else recursive(type.ofType)
        }; recursive(type)
        return options
    }

    const imports = { gql: new Set<string>(), sdk: new Set<string>(['ShellSdkContext']) }
    const props: { key: string, value: string, required: boolean, array: boolean }[] = []
    const response = resolve(method.type)
    const paginated = method.args.some(arg => arg.name === 'page' || arg.name === 'first'); if (paginated) { imports.sdk.add('ShellSdkPaginatorInput'); props.push({ key: 'paginator', value: 'ShellSdkPaginatorInput', required: false, array: false }) }
    const prop = (arg: Field) => { if (arg.name === 'page' || arg.name === 'first') return; const resolved = resolve(arg.type); props.push({ key: arg.name, ...resolved }) }; method.args.forEach(arg => prop(arg))
        const structure = (name: string): string => {
            const program = ts.createProgram(['src/types/types.ts'], {});
            const checker = program.getTypeChecker();
            const sourceFile = program.getSourceFile('src/types/types.ts');
    
            if (!sourceFile) {
                throw new Error('Source file not found');
            }
    
            const getTypeNode = (typeName: string): ts.TypeNode | null => {
                for (const statement of sourceFile.statements) {
                    if (ts.isTypeAliasDeclaration(statement) && (statement.name as ts.Identifier).text === typeName) {
                        return statement.type;
                    }
                    if (ts.isInterfaceDeclaration(statement) && (statement.name as ts.Identifier).text === typeName) {
                        const symbol = checker.getSymbolAtLocation(statement.name);
                        if (symbol) {
                            const declaration = symbol.declarations[0];
                            if (ts.isInterfaceDeclaration(declaration)) {
                                return declaration;
                            }
                        }
                    }
                }
                return null;
            };
    
            const getTypeString = (node: ts.TypeNode, level = 0, visited = new Set<ts.TypeNode>()): string => {
                if (visited.has(node)) {
                    return ''; // Avoid infinite recursion for cyclic references
                }
                visited.add(node);
    
                if (ts.isUnionTypeNode(node)) {
                    const types = node.types.map(typeNode => getTypeString(typeNode, level + 1, visited)).filter(Boolean);
                    return `on('entity', [${types.join(', ')}])`;
                } else if (ts.isTypeLiteralNode(node) || ts.isInterfaceDeclaration(node)) {
                    const members = ts.isTypeLiteralNode(node) ? node.members : (node as ts.InterfaceDeclaration).members;
                    const fields = members.map(member => {
                        if (ts.isPropertySignature(member)) {
                            const name = (member.name as ts.Identifier).text;
                            if (name === 'paginatorInfo') return ''; // Skip paginatorInfo
                            const typeNode = member.type;
                            if (typeNode) {
                                const typeStr = getTypeString(typeNode, level + 1, visited);
                                if (typeStr) {
                                    return deadend.includes(typeStr.replace(/\"/g, "")) ? `"${name}"` : `key("${name}", ${typeStr})`;
                                }
                                return `"${name}"`;
                            }
                        }
                        return '';
                    }).filter(Boolean);
                    return `[${fields.join(', ')}]`;
                } else if (ts.isTypeReferenceNode(node)) {
                    const typeName = (node.typeName as ts.Identifier).text;
                    if (deadend.includes(typeName) || scalars.some(s => s.name === typeName)) {
                        return `"${typeName}"`;
                    }
                    const referencedTypeNode = getTypeNode(typeName);
                    if (referencedTypeNode) {
                        return getTypeString(referencedTypeNode, level, visited);
                    }
                    return '';
                } else if (ts.isArrayTypeNode(node)) {
                    return getTypeString(node.elementType, level, visited);
                }
                return '';
            };
    
            const rootTypeNode = getTypeNode(name);
            if (rootTypeNode) {
                return getTypeString(rootTypeNode);
            }
            return '';
        };
        
    return {
        imports: {
            gql: Array.from(imports.gql),
            sdk: Array.from(imports.sdk)
        },
        type,
        name: method.name,
        props,
        structure: structure(response.value),
        response
    }
}

export const modules = (query: Method[], mutations: Method[], types: Type[]) => {
    query.forEach(item => {if (item.name === 'clients') console.log(method('query', item, types).structure)})
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
