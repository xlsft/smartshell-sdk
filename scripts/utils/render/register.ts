// deno-lint-ignore-file no-explicit-any
import { Project, SyntaxKind, type TypeChecker, type Type } from "npm:ts-morph";
import { log } from "../logger.ts";

interface ParsedType { [name: string]: any; }
interface Methods { query: Method[], mutation: Method[] }
interface Method { file: string, name: string, types: any, paginator: boolean }

export const register = async () => {
    let count = 0
    log.log('STEP [4/4]: Register modules in api index...');
    const types = (content: string): ParsedType => {
        const project = new Project({ useInMemoryFileSystem: true, skipFileDependencyResolution: true })
        const source = project.createSourceFile("temp.ts", content)
        const result: ParsedType = {}
        const checker: TypeChecker = project.getTypeChecker()
        const convert_type = (type: Type, checker: TypeChecker): any => {
            if ((type as Type).isUnion()) return (type as Type).getUnionTypes().map(type => (type as Type).getText())
            else if ((type as Type).isIntersection()) return (type as Type).getIntersectionTypes().map(type => (type as Type).getText())
            else if ((type as Type).isArray()) {
                const element_type = (type as Type).getArrayElementType();
                if ((type as Type).getArrayElementType()) {
                    return [convert_type(element_type!, checker)];
                }
            } else if ((type as Type).isObject() && (type as Type).getSymbol()) {
                const properties = (type as Type).getProperties();
                const result: { [key: string]: any } = {};
                properties.forEach(property => {
                    const property_type = checker.getTypeOfSymbolAtLocation(property, property.getDeclarations()[0]);
                    result[property.getName()] = convert_type(property_type, checker);
                });
                return result;
            } else {
                return (type as Type).getText();
            }
        }

        source.forEachChild((node) => {
            if (node.getKind() === SyntaxKind.InterfaceDeclaration || node.getKind() === SyntaxKind.TypeAliasDeclaration) {
                let name: string;
                let type: Type;

                if (node.getKind() === SyntaxKind.InterfaceDeclaration) {
                    const interfaceDeclaration = node.asKindOrThrow(SyntaxKind.InterfaceDeclaration);
                    name = (interfaceDeclaration as any).getName();
                    type = checker.getTypeAtLocation(interfaceDeclaration);
                } else {
                    const typeAliasDeclaration = node.asKindOrThrow(SyntaxKind.TypeAliasDeclaration);
                    name = (typeAliasDeclaration as any).getName();
                    type = checker.getTypeAtLocation(typeAliasDeclaration);
                }

                result[name] = convert_type(type, checker);
            }
        });

        return result;
    }

    const methods: Methods = { query: [], mutation: [] }
    const dirs = { query: Deno.readDir('src/api/query'), mutation: Deno.readDir('src/api/mutation') }

    const create = async (type: 'mutation' | 'query', item: Deno.DirEntry) => {
        if (item.isFile === false) return
        const file = `src/api/${type}/${item.name}`
        const name = item.name.split('.')[0]
        const file_string = await Deno.readTextFile(file)
        methods[type].push({ file, name, types: types(file_string), paginator: /paginator\??:\s*ShellSdkPaginatorInput/.test(file_string) })
        log.log(`${type} module "${name}" registered`); count++
    }

    for await (const item of dirs.query) await create('query', item)
    for await (const item of dirs.mutation) await create('mutation', item)

    const write = (methods: Methods) => {
        const types = ['query', 'mutation']
        methods['mutation']
        const module_index: string[] = []
        const module_register: string[] = []
        for (let i = 0; i < types.length; i++) {
            const type = types[i]
            //@ts-ignore <>
            const modules = methods[type];
            for (let j = 0; j < modules.length; j++) {
                const module = modules[j];
                module_index.push(`import ${module.name} from './${type}/${module.name}.ts'`)
            }
            module_index.push('\n')
            module_index.push(`export const ${type} = {`)
            for (let j = 0; j < modules.length; j++) {
                const module = modules[j];
                module_index.push(`    ${module.name},`)
            }
            module_index.push('}')
            module_index.push('\n')
        }
        
        module_register.push(`import type { Shell } from "../mod.ts";
    import { query as q, mutation as m } from "./api/index.ts";
    import type { ShellSdkPaginatorInput } from "./types/sdk.ts";

    export const api = (ctx: Shell) => {
        return {`)

        for (let i = 0; i < types.length; i++) {
            const type = types[i]
            //@ts-ignore <>
            const modules = methods[type];
            module_register.push(`\n        // ${type}\n`)
            for (let j = 0; j < modules.length; j++) {
                const module = modules[j];
                
                module_register.push(`        /**
            * # ${type} \`${module.name}\`
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/${type}/${module.name}
            * \`@xlsft/smartshell-sdk\`
            */`)
                module_register.push(`        ${module.name}: async (${module.types.InputType ? `input: Parameters<typeof ${type.split('')[0]}.${module.name}>[1],` : ``}${module.paginator === true ? 'paginator?: ShellSdkPaginatorInput' : ''}) => await ${type.split('')[0]}.${module.name}(ctx${module.types.InputType ? ', input,' : ''}${module.paginator === true ? ' paginator' : ''}),`)
            }
        }

        module_register.push(`    }
    }`)

        Deno.writeTextFile('src/api.ts', module_register.join('\n'))
        Deno.writeTextFile('src/api/index.ts', module_index.join('\n'))
    }

    await write(methods)

    log.log(`Successfully registered ${count} modules!`);
}