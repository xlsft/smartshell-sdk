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

    const target = (n: Node): Node[] | undefined => {
        if (n.type === 'scalar') return undefined
        const type = find(n.value[0])
        if (!type) throw new Error(`There is no type with name "${n.value[0]}" @ target()`)
        if (type.kind === 'ENUM' || type.kind === 'SCALAR') return [n]
        return type.fields.map(v => node(v.name, resolve(v.type)))
    } 
    
    const structure = (nesting: number) => {

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



        const grow = (parent: Node, level: number, route: string) => {
            if (['enum', 'scalar', 'union'].includes(parent.type) || level >= nesting) return;

            

            const childs = find(parent.value[0])!.fields.map(v => node(v.name, resolve(v.type)))

            if (level === -1 || level === 0 || level === 1) /** paginator (all objects, scalars) */ /** root (all objects, scalars) */ /** parent (all objects, scalars) */ {
                childs.forEach(child => { 
                    if (child.type === 'union') return; append(route, child); grow(child, level + 1, `${route}.${child.key}`)
                })
            } else if (level === 2) /** child (top-level objects, scalars) */  {
                childs.forEach(child => {
                    if (child.type === 'union') return;
                    if (child.type === 'scalar' || child.type === 'enum') { append(route, child); return }
                    if (child.type === 'object') {
                        const t = target(child)!.filter(o => o !== child).filter(o => {
                            if (['union', 'scalar', 'enum'].includes(o.type)) return true
                            const t = target(o)!.find(oo => oo.type === 'object')
                            if (t === undefined) return true; else return false
                        })

                    }
                })
            } else return

            

        }; root.forEach(parent => grow(parent, paginated ? -1 : 0, parent.key))

        Deno.writeTextFileSync('json.json', JSON.stringify(root, null, 4))
    }
    return {
        imports: {
            gql: Array.from(imports.gql),
            sdk: Array.from(imports.sdk)
        },
        type,
        name: method.name,
        schema: structure(3),
        props,
        response
    }
}

export const modules = (query: Method[], mutations: Method[], types: Type[]) => {
    query.forEach(item => {if (item.name === 'clients') method('query', item, types)})
    // mutations.forEach(item => {if (item.name === 'createShortcut') method('mutation', item, types)})
    console.log(counter.get())
}
