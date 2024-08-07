import { module } from "./render/module.ts";
import { Store } from "../../src/utils/store.ts";
import type { Field, Method, Node, ResolvedMethod, ResolvedModule, ResolvedType, Type, TypeRef } from "../types/types.ts";
import { scalars } from "./static/scalars.ts";
import { log } from "./logger.ts";
let counter = 0
const method = (type: 'query' | 'mutation', method: Method, types: Type[]): ResolvedMethod => {
    const find = (type: string): Type | undefined => { return types.find(t => t.name === type) } 
    const resolve = (type: TypeRef): ResolvedType => {
        const options = { required: false, array: false, value: new Store<string[]>([]), type: new Store<Node['type']>('object') }
        const recursive = (type: TypeRef) => {
            if (!type) return
            if (type.kind === 'NON_NULL') { options.required = true; recursive(type.ofType) } 
            else if (type.kind === 'LIST') { options.array = true; recursive(type.ofType) }
            else if (type.kind === 'UNION') { options.type.set('union').lock(); options.value.push(type.name); imports.gql.add(type.name as string); recursive(type.ofType) }
            else if (type.kind === 'ENUM') { options.type.set('enum').lock(); options.value.push(type.name); imports.gql.add(type.name as string); recursive(type.ofType) }
            else if (type.kind === 'SCALAR') { options.type.set('scalar').lock(); const scalar = scalars.find(s => s.name === type.name); if (scalar) options.value.push(scalar.type); else { imports.gql.add(type.name as string); options.value.push(type.name as string) }} 
            else if (type.kind === 'OBJECT' || type.kind === 'INPUT_OBJECT') { options.type.set('object'); imports.gql.add(type.name as string); options.value.push(type.name as string) } 
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
        if (resolve(ref).type === 'scalar') return []
        if (scalars.find(o => o.imported === true && o.name === name) !== undefined && !imports.gql.has(name)) imports.gql.add(name);
        let level = 0
        const root = find(resolve(ref).value[0])
        const result = new Store<Node[]>([])
        for (let i = 0; i < root!.fields.length; i++) {
            const key = root!.fields[i].name
            const parent = resolve(root!.fields[i].type);
            if (parent.value.includes('PaginatorInfo')) { level++ ;continue } 
            if (parent.type === 'object' && level > 2) continue
            result.push(node(key, parent))
        }
        return result.get()
    }
    const structure = (nesting: number): Node[] => {
        const root: Node[] = nodes(method.type)
        const append = (route: string, child: Node) => {
            const keys: string[] = route.split('.')
            let obj = root
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i]
                const parent = obj.find(o => o.key === key)
                if (!parent) { 
                    if (i === keys.length - 1) { const node: Node = { type: 'object', key, value: [], child: [child] }; obj.push(node); return }
                    else { const node: Node = { type: 'object', key, value: [], child: [] }; obj.push(node); obj = node.child!}
                } else {
                    if (!parent.child) { parent.type = 'object'; parent.child = []}
                    obj = parent.child
                    if (i === keys.length - 1) { parent.child.push(child); return }
                }
            }
        }
        const grow = (parent: Node, level: number, route: string) => {
            if (['enum', 'scalar', 'union'].includes(parent.type) || level >= nesting) return;
            const children = find(parent.value[0])!.fields.map(v => node(v.name, resolve(v.type)))
            const key = route.split('.')[route.split('.').length - 1]
            children.forEach(child => {
                if (child.key === key || child.type === 'union') return
                if ([-1,0,1].includes(level)) {
                    if ([-1,0].includes(level)) append(route, child); grow(child, level + 1, `${route}.${child.key}`);
                    if ([1].includes(level)) {
                        if (child.type === 'object') return
                        append(route, child)
                    }
                } else if (level > 2) {
                    if (['scalar', 'enum'].includes(child.type)) append(route, child)
                }
            })
        }; root.forEach(parent => grow(parent, paginated ? -1 : 0, parent.key))
        return root
    }
    counter++
    log.log(`${type} module "${method.name}" generated`)
    return {
        imports: {
            gql: Array.from(imports.gql),
            sdk: Array.from(imports.sdk)
        },
        type,
        paginated,
        name: method.name,
        schema: structure(3),
        props,
        response,
        deprecated: method.isDeprecated === true ? method.deprecationReason : undefined
    }
}

const set = async (method: ResolvedMethod): Promise<ResolvedModule> => {
    /**
     * This should generate:
     * - src/api/TYPE/NAME.ts (module itself, should return full ts file string)
     * - src/api/index.ts (api modules index object like { import: "import NAME from './TYPE/NAME.ts'", export: "NAME" })
     * - src/api.ts (api modules reference in Shell class, should return string with JSDoc, jsDoc should contain official API doc link [that should be checked for connectivity] and sdk doc on vitedocs when it goes online )
     * - (possibly) docs (it should auto-create basic template for module documentation)
     */
    return {
        main: await module(method),
        index: { import: '', export: '' },
        reference: ''
    }
}

export const modules = async (query: Method[], mutations: Method[], types: Type[]) => {
    
    for (let i = 0; i < query.length; i++) { await set(method('query', query[i], types)) }
    for (let i = 0; i < mutations.length; i++) { await set(method('mutation', mutations[i], types)) }

    log.log(`Successfully generated ${counter} modules!`)
}
