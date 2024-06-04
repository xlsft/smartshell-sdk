import type { Field, Method, Type, TypeRef } from "../../types/types.ts";

const scalars = [{ name: 'String', type: 'string' }, { name: 'Int', type: 'number' }, { name: 'Float', type: 'number' }, { name: 'Boolean', type: 'boolean'}]
const defaults = ['Upload', 'Email', 'IpAddress', 'MacAddress', 'Date', 'Time', 'DateTime']
const natives = ['string', 'number', 'boolean']

const method = (type: 'query' | 'string', method: Method, _types: Type[] ) => {
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
        const structure = (name: string) => {

            type Node = { key: string, value: string[], required: boolean, array: boolean, scalar: boolean, child?: Node[] | Child }
            type Child = { type: 'union' | 'enum', value: string[] }

            const file = Deno.readTextFileSync('src/types/types.ts')

            const is = {
                object: (name: string): boolean => {
                    const object_regex = new RegExp(`export type ${name} = {[^}]+}`, 's');
                    return object_regex.test(file);
                },
                enumerated: (name: string): boolean => {
                    const enum_regex = new RegExp(`export type ${name} = ("[^"]+"(?: \\| "[^"]+")*)`);
                    const match = file.match(enum_regex);
                    if (!match) return false;
                    const enumerated = match[1].split('|').map(v => v.trim());
                    return enumerated.every(v => v.startsWith('"') && v.endsWith('"'));
                },
                union: (name: string): boolean => {
                    const union_regex = new RegExp(`export type ${name} = ([^\\n]+)`);
                    const match = file.match(union_regex);
                    if (!match) return false;
                    const union = match[1].split('|').map(v => v.trim());
                    // Проверка на то, что ни одно из значений не является строковым литералом
                    return union.some(v => !v.startsWith('"') && !v.endsWith('"')) && !is.object(name);
                }    
            };

            const node = (name: string) => {
                if (defaults.includes(name) && !imports.gql.has(name)) imports.gql.add(name);
 
                const object = (): Node[] => {
                    const array = file.split(`export type ${name} = {`)[1].split('}')[0].trim().split('\n').map(o => o.trim());
                    const result = array.map(raw_node => {
                        const [raw_key, raw_value] = raw_node.split(':').map(part => part.trim());
                        return {
                            key: raw_key.endsWith('?') ? raw_key.slice(0, -1) : raw_key,
                            value: [raw_value.endsWith('[]') ? raw_value.slice(0, -2) : raw_value],
                            required: !raw_key.endsWith('?'),
                            array: raw_value.endsWith('[]'),
                            scalar: [...natives, ...defaults].includes(raw_value.endsWith('[]') ? raw_value.slice(0, -2) : raw_value),
                        }
                    })
                    return result
                }

                const enumerated = (): Child => {
                    return { type: 'enum', value: file.split(`export type ${name} = `)[1].split('\n')[0].split(' | ').map(v => v.split('').map(iv => iv === "\"" ? '' : iv).join('') ) }
                }

                const union = (): Child => {
                    return { type: 'union', value: file.split(`export type ${name} = `)[1].split('\n')[0].split(' | ').map(v => v.split('').map(iv => iv === "\"" ? '' : iv).join('') ) }
                }
                
                if (is.object(name)) return object()
                else if (is.enumerated(name)) return enumerated()
                else if (is.union(name)) return union()
            } 

            const parent = node(name)!
            const result = []
            let level = 0
            //@ts-ignore <i dont care>
            for (let i = 0; i < parent.length; i++) {
                //@ts-ignore <i REALLY dont care>
                const item: Node = parent![i];
                const paginated = item.key === "paginatorInfo"
                if (paginated) continue
                result.push(item)
            }
            for (let i = 0; i < result.length; i++) {
                // Root
                const item = result[i];
                level++
                if (item.scalar === true) continue
                else {
                    
                }
            }
            

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
}
