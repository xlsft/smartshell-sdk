import type { Method, Type } from "../types/types.ts";
import { register } from "./render/register.ts";
import { modules } from "./modules.ts";
import { types } from "./render/types.ts"

export const render = {
    types: async (introspect: Type[]) => await types(introspect),
    register: async () => await register(),
    modules: async (query: Method[], mutations: Method[], types: Type[] ) => await modules(query, mutations, types)
}