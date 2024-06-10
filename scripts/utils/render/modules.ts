import { Store } from "../../../src/utils/store.ts";
import type { Field, Method, Node, ResolvedType, Type, TypeRef } from "../../types/types.ts";

const counter = new Store(0)

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
    counter.update(v => v + 1)
    const find = (type: string): Type | undefined => { counter.update(v => v + 1); return types.find(t => t.name === type) } 

    const resolve = (type: TypeRef): ResolvedType => {
        
        counter.update(v => v + 1)
        const options = { required: false, array: false, value: new Store<string[]>([]), type: new Store<Node['type']>('object') }
        const recursive = (type: TypeRef) => {
            counter.update(v => v + 1)
            if (!type || type.kind === 'INPUT_OBJECT') return
            if (type.kind === 'NON_NULL') { options.required = true; recursive(type.ofType) } 
            else if (type.kind === 'LIST') { options.array = true; recursive(type.ofType) }
            else if (type.kind === 'UNION') { options.type.set('union').lock(); options.value.push(type.name); imports.gql.add(type.name as string); recursive(type.ofType) }
            else if (type.kind === 'ENUM') { options.type.set('enum').lock(); options.value.push(type.name); imports.gql.add(type.name as string); recursive(type.ofType) }
            else if (type.kind === 'SCALAR') { options.type.set('scalar').lock(); const scalar = scalars.find(s => s.name === type.name); if (scalar) options.value.push(scalar.type); else { imports.gql.add(type.name as string); options.value.push(type.name as string) }} 
            else if (type.kind === 'OBJECT') {  options.type.set('object'); imports.gql.add(type.name as string); options.value.push(type.name as string) } 
            else recursive(type.ofType)
        }; recursive(type)
       console.log(type)
        return { required: options.required, array: options.array, value: options.value.get(), type: options.type.get()}
    }

    const imports = { gql: new Set<string>(), sdk: new Set<string>(['ShellSdkContext']) }
    const props: { key: string, value: string, required: boolean, array: boolean }[] = []
    const response = resolve(method.type)
    const paginated = method.args.some(arg => arg.name === 'page' || arg.name === 'first'); if (paginated) { imports.sdk.add('ShellSdkPaginatorInput'); props.push({ key: 'paginator', value: 'ShellSdkPaginatorInput', required: false, array: false }) }
    const prop = (arg: Field) => { if (arg.name === 'page' || arg.name === 'first') return; const resolved = resolve(arg.type); props.push({ key: arg.name, ...resolved, value: resolved.value[0] }) }; method.args.forEach(arg => prop(arg))
    const node = (key: string, type: ResolvedType): Node => { return { type: type.type, key, value: type.value }}
    const nodes = (ref: TypeRef) => {
        counter.update(v => v + 1)
        if (scalars.find(o => o.imported === true && o.name === name) !== undefined && !imports.gql.has(name)) imports.gql.add(name);
        let level = 0
        const root = find(resolve(ref).value[0])
        const result = new Store<Node[]>([])
        for (let i = 0; i < root!.fields.length; i++) {
            counter.update(v => v + 1)
            const key = root!.fields[i].name
            const parent = resolve(root!.fields[i].type);
            if (parent.value.includes('PaginatorInfo')) { level++ ;continue } 
            if (parent.type === 'object' && level > 2) continue
            result.push(node(key, parent))
        }
        return result.get()
    }

    
    const structure = () => {
        const root: Node[] = nodes(method.type)
        const append = (route: string, child: Node) => {
            counter.update(v => v + 1)
            const keys: string[] = route.split('.')
            let obj = root
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i]
                const parent = obj.find(o => o.key === key)
                if (!parent) {
                    if (i === keys.length - 1) {
                        const newNode: Node = { type: 'object', key, value: [], child: [child] }
                        obj.push(newNode)
                        return
                    } else {
                        const newNode: Node = { type: 'object', key, value: [], child: [] }
                        obj.push(newNode)
                        obj = newNode.child!
                    }
                } else {
                    if (!parent.child) {
                        parent.type = 'object'
                        parent.child = []
                    }
                    obj = parent.child
                    if (i === keys.length - 1) {
                        parent.child.push(child)
                        return
                    }
                }
            }
        }

        const process = (route: string, parent: Node, level: number = 0) => {
            counter.update(v => v + 1)
            if (['enum', 'scalar'].includes(parent.type) || level >= 3) return;
            const type = find(parent.value[0])!;
            if (parent.type === 'object') {
                for (let j = 0; j < type.fields.length; j++) {
                    counter.update(v => v + 1)
                    const child = node(type.fields[j].name, resolve(type.fields[j].type));
                    if (['object'].includes(child.type) && level > 0) continue
                    append(route, child);
                    if (['enum', 'scalar', 'entity'].includes(child.type) || parent.key === child.key) continue;
                    process(`${route}.${child.key}`, child, level + 1);
                }
            } else if (parent.type === 'union') {
                const types = find(parent.value[0])?.possibleTypes.map(v => v.name)!
                for (let i = 0; i < types.length; i++) {
                    const entity = find(types[i])!
                    const fields: Node[] = []
                    const name = new Store('')
                    for (let j = 0; j < entity.fields.length; j++) {
                        name.set(entity.fields[j].name).lock()
                        const field = node(entity.fields[j].name, resolve(entity.fields[j].type))
                        // if (['union', 'object'].includes(field.type)) continue
                        fields.push(field)  
                    }
                    console.log()
                    append(`${route}`, { type: 'entity', key: '... on', value: [entity.name], child: fields })
                }
                
            }
        }; root.forEach((parent) => process(parent.key, parent));
        function filter(nodes: Node[]): Node[] {
            const seen = new Set<string>();
          
            function traverse(node: Node): Node | null {
              const nodeId = node.key + JSON.stringify(node.value);
              if (seen.has(nodeId)) {
                return null;
              }
              seen.add(nodeId);
          
              if (node.child) {
                const filteredChildren = node.child.map(traverse).filter(child => child !== null) as Node[];
                if (filteredChildren.length > 0) {
                  return { ...node, child: filteredChildren };
                } else if (node.type !== 'object') {
                  return { ...node, child: undefined };
                }
              }
          
              if (node.type === 'object' && (!node.child || node.child.length === 0)) {
                return null;
              }
          
              return { ...node, child: undefined };
            }
          
            const filteredNodes = nodes.map(traverse).filter(node => node !== null) as Node[];
            return filteredNodes;
          }
        Deno.writeTextFileSync('json.json', JSON.stringify(filter(root), null, 4))
        // append('host_group', { type: 'scalar', key: 'scalarKey', value: ['string']})
        // append('host_group.accent', { type: 'scalar', key: 'scalarKey', value: ['string']})
        // // append('host_group.color', { type: 'scalar', key: 'scalarKey', value: ['string']})
        // console.log(root[2])
        // console.log(root)
        // for (let i = 0; i < root.length; i++) {
        //     const parent = root[i];
        //     if (skipped.includes(parent.type)) continue
        //     if (parent.value.length > 1) console.log('UNIOOOOON')
        //     const type = find(parent.value[0])!
        //     for (let j = 0; j < type.fields.length; j++) {
        //         const child = node(type.fields[j].name, resolve(type.fields[j].type))
        //         if (skipped.includes(child.type)) continue
        //         append(parent.key, [child])            
        //         const child_type = find(child.value[0])!
        //         if (child_type.possibleTypes.length > 0) console.log('CHILD UNIOOOOON')
        //         console.log(`--------------${parent.key}.${child.key}... ${type.name}-------------------`)
        //         for (let k = 0; k < child_type.fields.length; k++) {
        //             const grandchild = node(child_type.fields[k].name, resolve(child_type.fields[k].type))
        //             // console.log(child_type)
        //             // console.log(grandchild)
        //             // append(`${parent.key}.${child.key}`, [grandchild])
        //         }
        //         console.log('-----------------------------------------------------')
        //     }
            
            
            // append(parent.key, node(
            //         resolve(
            //             find(
            //                 parent.value[0]
            //             )
            //         )
            //     )
            // )
        // }
        // append('club', [{ type: 'en um', key: 'someEnumKey', value: ['aaa']}])
        // Напиши здесь логику которая пройдется по всему дереву, к каждому полю сделает append и остановится на 3 уровне глубины
    }
    return {
        imports: {
            gql: Array.from(imports.gql),
            sdk: Array.from(imports.sdk)
        },
        type,
        name: method.name,
        schema: structure(),
        props,
        response
    }
}

export const modules = (query: Method[], mutations: Method[], types: Type[]) => {
    query.forEach(item => {if (item.name === 'user') method('query', item, types)})
    // mutations.forEach(item => {if (item.name === 'createShortcut') method('mutation', item, types)})
    console.log(counter.get())
}
