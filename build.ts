
// PLEASE DON'T LOOK AT THIS SHIT, THANK YOU

import { Project, SyntaxKind, Type, TypeChecker } from "npm:ts-morph";

function capit(string: string) {
	if (!string) return string;
	return string.charAt(0).toUpperCase() + string.slice(1);
}

interface ParsedType {
	[typeName: string]: any;
}

function parseTypeScriptTypes(fileContent: string): ParsedType {
	const project = new Project({
		useInMemoryFileSystem: true,
		skipFileDependencyResolution: true,
	});
	const sourceFile = project.createSourceFile("temp.ts", fileContent);

	const result: ParsedType = {};

	const typeChecker: TypeChecker = project.getTypeChecker();

	sourceFile.forEachChild((node) => {
		if (node.getKind() === SyntaxKind.InterfaceDeclaration || node.getKind() === SyntaxKind.TypeAliasDeclaration) {
			let typeName: string;
			let type: Type;

			if (node.getKind() === SyntaxKind.InterfaceDeclaration) {
				const interfaceDeclaration = node.asKindOrThrow(SyntaxKind.InterfaceDeclaration);
				typeName = interfaceDeclaration.getName();
				type = typeChecker.getTypeAtLocation(interfaceDeclaration);
			} else {
				const typeAliasDeclaration = node.asKindOrThrow(SyntaxKind.TypeAliasDeclaration);
				typeName = typeAliasDeclaration.getName();
				type = typeChecker.getTypeAtLocation(typeAliasDeclaration);
			}

			result[typeName] = typeToObject(type, typeChecker);
		}
	});

	return result;
}

function typeToObject(type: Type, typeChecker: TypeChecker): any {
	if (type.isUnion()) {
		return type.getUnionTypes().map(t => typeToString(t));
	} else if (type.isIntersection()) {
		return type.getIntersectionTypes().map(t => typeToString(t));
	} else if (type.isArray()) {
		const elementType = type.getArrayElementType();
		if (elementType) {
			return [typeToObject(elementType, typeChecker)];
		}
	} else if (type.isObject() && type.getSymbol()) {
		const properties = type.getProperties();
		const result: { [key: string]: any } = {};
		properties.forEach(property => {
			const propertyType = typeChecker.getTypeOfSymbolAtLocation(property, property.getDeclarations()[0]);
			result[property.getName()] = typeToObject(propertyType, typeChecker);
		});
		return result;
	} else {
		return typeToString(type);
	}
}

function typeToString(type: Type): string {
	return type.getText();
}

// --------------- BUILD ---------------

const names = {
	login: '79998887766',
	phone: '79998887766',
	password: 'passw0rd',
	company_id: 1234,
	id: 1234,
	refresh_token: 'oWR4DodRt...'
}

interface Methods {
	query: Method[],
	mutation: Method[]
}

interface Method {
	file: string,
	name: string,
	types: any
}

const methods: Methods = {
	query: [],
	mutation: []
}

const dirs = {
	query: Deno.readDir('src/graphql/query'),
	mutation: Deno.readDir('src/graphql/mutation')
}

const create = async (type: 'mutation' | 'query', item: Deno.DirEntry) => {
	if (item.isFile === false) return

	const file = `src/graphql/${type}/${item.name}`
	const name = item.name.split('.')[0]

	const file_string = await Deno.readTextFile(file)

	methods[type].push({ file, name, types: parseTypeScriptTypes(file_string) })
}

for await (const item of dirs.query) await create('query', item)
for await (const item of dirs.mutation) await create('mutation', item)


const write = async (methods: Methods) => {
	const types = ['query', 'mutation']
	methods['mutation']
	const module_index: string[] = []
	const module_types: string[] = []
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
import { query as q, mutation as m } from "./graphql/index.ts";

export const api = (ctx: Shell) => {
    return {`)

	for (let i = 0; i < types.length; i++) {
		const type = types[i]
		//@ts-ignore <>
		const modules = methods[type];
		module_register.push(`\n        // ${type}\n`)
		for (let j = 0; j < modules.length; j++) {
			const module = modules[j];

			const input = module.types.InputType
			const input_formatted = ['{ ']

			for (let l = 0; l < Object.keys(input).length; l++) {
				const key = Object.keys(input)[l];
				if (!input.hasOwnProperty(key)) continue;
				//@ts-ignore <>
				input_formatted.push(`${key}: ${input[key] === 'string' ? '"' : ''}${names[key]}${input[key] === 'string' ? '"' : ''}`)
				if (l !== Object.keys(input).length - 1) input_formatted.push(', ')
				// console.log(key, input[key])
			}
			input_formatted.push(' }')

			// DOCS
			module_register.push(`        /**
        * # ${type} \`${module.name}\`
		* 
		* \`\`\`ts
		* 
		* await shell.api.${module.name}(${input_formatted.join('')})
		* \`\`\`
		* 
		* 🔗 https://apidoc.smartshell.gg/${module.name === 'login' ? 'auth' : module.name}.html
		* 
        * \`@xlsoftware/smartshell-sdk\`
        */`)
			// DOCS

			// FUNCTION
			module_register.push(`        ${module.name}: async (${module.types.InputType ? `input: Parameters<typeof ${type.split('')[0]}.${module.name}>[1]` : ``}) => await ${type.split('')[0]}.${module.name}(ctx${module.types.InputType ? ', input' : ''}),`)
			// FUNCTION
		}

	}

	module_register.push(`    }
}`)

	for (let i = 0; i < types.length; i++) {
		const type = types[i]
		//@ts-ignore <>
		const modules = methods[type];
		for (let j = 0; j < modules.length; j++) {
			const module = modules[j];
			// IMPORTS
			module_types.push(`${module.types.InputType ? `\nimport type { InputType as ${capit(module.name)}Input } from "./${type}/${module.name}.ts"` : ''}
import type { ResponseType as ${capit(module.name)}Response } from "./${type}/${module.name}.ts"\n`)
			// IMPORTS
		}
		module_types.push('export type {')
		for (let j = 0; j < modules.length; j++) {
			const module = modules[j];
			// EXPORTS
			module_types.push(`    ${module.types.InputType ? `${capit(module.name)}Input` : ''}, ${capit(module.name)}Response,`)
			// EXPORTS
		}
		module_types.push('}')
	}

	Deno.writeTextFile('src/api.ts', module_register.join('\n'))
	Deno.writeTextFile('src/graphql/index.ts', module_index.join('\n'))
	Deno.writeTextFile('src/graphql/types.ts', module_types.join('\n'))

}

await write(methods)