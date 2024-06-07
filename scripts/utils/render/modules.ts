import type { Field, Method, Node, Type, TypeRef } from "../../types/types.ts";

const scalars = [
    { name: 'String', type: 'string', imported: false }, 
    { name: 'Int', type: 'number', imported: false }, 
    { name: 'Float', type: 'number', imported: false }, 
    { name: 'Boolean', type: 'boolean', imported: false },
    { name: 'Upload', type: 'string', imported: true },
    { name: 'Email', type: 'string', imported: true },
    { name: 'IpAddress', type: 'string', imported: true },
    { name: 'MacAddress', type: 'string', imported: true },
    { name: 'Date', type: 'string', imported: true },
    { name: 'Time', type: 'string', imported: true },
    { name: 'DateTime', type: 'string', imported: true },
]

const method = (type: 'query' | 'mutation', method: Method, types: Type[]) => {

    const resolve = (type: TypeRef) => {
        const options = { required: false, array: false, scalar: false, union: false, object: false, enum: false, value: '', kind: '' }
        const recursive = (type: TypeRef) => {
            
            if (!type) return
            console.log('--------------------------------------------')
            console.log(type)
            console.log('--------------------------------------------')
            if (type.kind === 'NON_NULL') { options.required = true; recursive(type.ofType) } 
            else if (type.kind === 'LIST') { options.array = true; recursive(type.ofType) }
            else if (type.kind === 'UNION') { options.union = true; recursive(type.ofType) }
            else if (type.kind === 'ENUM') { options.enum = true; recursive(type.ofType) }
            else if (type.kind === 'SCALAR') { options.scalar = true; const scalar = scalars.find(s => s.name === type.name); if (scalar) options.value = scalar.type; else { imports.gql.add(type.name as string); options.value = type.name as string }} 
            else if (type.kind === 'INPUT_OBJECT' || type.kind === 'OBJECT') { options.kind = type.kind; options.object = true; imports.gql.add(type.name as string); options.value = type.name as string } 
            else recursive(type.ofType)

        }; recursive(type)
        return options
    }

    const imports = { gql: new Set<string>(), sdk: new Set<string>(['ShellSdkContext']) }
    const props: { key: string, value: string, required: boolean, array: boolean }[] = []
    const response = resolve(method.type)
    const paginated = method.args.some(arg => arg.name === 'page' || arg.name === 'first'); if (paginated) { imports.sdk.add('ShellSdkPaginatorInput'); props.push({ key: 'paginator', value: 'ShellSdkPaginatorInput', required: false, array: false }) }
    const prop = (arg: Field) => { if (arg.name === 'page' || arg.name === 'first') return; const resolved = resolve(arg.type); props.push({ key: arg.name, ...resolved }) }; method.args.forEach(arg => prop(arg))

    const node = (name: string, fertile = false) => {

        if (scalars.find(o => o.imported === true && o.name === name) !== undefined && !imports.gql.has(name)) imports.gql.add(name);
        const resolved = resolve(method.type)

        const scalar = (): Node[] => { return [{ type: 'scalar', key: name, value: [resolved.value]}]}
        const object = (): Node[] => { return types.find(t => t.name === resolved.value)!.fields.map(o => { console.log(resolve(o.type)); return { type: 'object', key: o.name, value: [resolve(o.type).value]} }) }   
        
        
        // const object = () => {
        //     const result = array.map(raw_node => {
        //         const [raw_key, raw_value] = raw_node.split(':').map(part => part.trim());
        //         return {
        //             type: 'object',
        //             key: raw_key.endsWith('?') ? raw_key.slice(0, -1) : raw_key,
        //             value: [raw_value.endsWith('[]') ? raw_value.slice(0, -2) : raw_value],
        //             scalar: [...natives, ...defaults].includes(raw_value.endsWith('[]') ? raw_value.slice(0, -2) : raw_value),
        //         }
        //     })
        //     return result
        // }
        if (resolved.scalar) return scalar()
        if (resolved.object) return object()

    }

    
    const structure = () => {
        const root_type = resolve(method.type)
        console.log(node(method.name))

        // 

        // const file = Deno.readTextFileSync('src/types/types.ts')

        // const is = {
        //     object: (name: string): boolean => {
        //         const object_regex = new RegExp(`export type ${name} = {[^}]+}`, 's');
        //         return object_regex.test(file);
        //     },
        //     enumerated: (name: string): boolean => {
        //         const enum_regex = new RegExp(`export type ${name} = ("[^"]+"(?: \\| "[^"]+")*)`);
        //         const match = file.match(enum_regex);
        //         if (!match) return false;
        //         const enumerated = match[1].split('|').map(v => v.trim());
        //         return enumerated.every(v => v.startsWith('"') && v.endsWith('"'));
        //     },
        //     union: (name: string): boolean => {
        //         const union_regex = new RegExp(`export type ${name} = ([^\\n]+)`);
        //         const match = file.match(union_regex);
        //         if (!match) return false;
        //         const union = match[1].split('|').map(v => v.trim());
        //         return union.some(v => !v.startsWith('"') && !v.endsWith('"')) && !is.object(name);
        //     }    
        // };

        // const node = (name: string): Node[] => {
        //     if (defaults.includes(name) && !imports.gql.has(name)) imports.gql.add(name);

        //     const object = () => {
        //         const array = file.split(`export type ${name} = {`)[1].split('}')[0].trim().split('\n').map(o => o.trim());
                
        //         const result = array.map(raw_node => {
        //             const [raw_key, raw_value] = raw_node.split(':').map(part => part.trim());
        //             return {
        //                 type: 'object',
        //                 key: raw_key.endsWith('?') ? raw_key.slice(0, -1) : raw_key,
        //                 value: [raw_value.endsWith('[]') ? raw_value.slice(0, -2) : raw_value],
        //                 scalar: [...natives, ...defaults].includes(raw_value.endsWith('[]') ? raw_value.slice(0, -2) : raw_value),
        //             }
        //         })
        //         return result
        //     }

        //     const enumerated = () => {
        //         return { type: 'enum', value: file.split(`export type ${name} = `)[1].split('\n')[0].split(' | ').map(v => v.split('').map(iv => ['"', '\r', '\n'].includes(iv) ? '' : iv).join('') ) }
        //     }

        //     const union = () => {
        //         return { type: 'union', value: file.split(`export type ${name} = `)[1].split('\n')[0].split(' | ').map(v => v.split('').map(iv => ['"', '\r', '\n'].includes(iv) ? '' : iv).join('') ) }
        //     }
        //     //@ts-ignore <>
        //     if (is.object(name)) return object()
        //     //@ts-ignore <>
        //     else if (is.enumerated(name)) return enumerated()
        //     //@ts-ignore <>
        //     else if (is.union(name)) return union()
        //     //@ts-ignore <>
        //     else return { type: 'ERROR', value: ['Undefined node type']}
        // } 

        // const process = (name: string) => {
        //     const process_node = (item: Node): Node => {
        //         if (item.scalar) return item;

        //         item.child = node(item.value[0]);
        //         item.child.forEach(child => {
        //             if (child.scalar) return;
        //             child.child = node(child.value[0]);
        //             child.child.forEach(grandchild => {
        //                 const grandchild_node = node(grandchild.value[0]);
        //                 if (!grandchild_node || String(grandchild_node) === '[object Object]') return;
        //                 const infertile = grandchild_node.some(o => !o.scalar);
        //                 if (!infertile) grandchild.child = grandchild_node;
        //             });
        //         });

        //         return item;
        //     };

        //     const parent = node(name);
        //     const filtered = parent.filter(item => item.key !== "paginatorInfo");
        //     return filtered.map(process_node);
        // }

        // console.log(JSON.stringify(process(name), null, 4));
    }
        
    return {
        imports: {
            gql: Array.from(imports.gql),
            sdk: Array.from(imports.sdk)
        },
        type,
        name: method.name,
        structure: structure(),
        props,
        response
    }
}

export const modules = (query: Method[], mutations: Method[], types: Type[]) => {
    query.forEach(item => {if (item.name === 'clientBookings') method('query', item, types)})
    // mutations.forEach(item => {if (item.name === 'createShortcut') method('mutation', item, types)})
}
