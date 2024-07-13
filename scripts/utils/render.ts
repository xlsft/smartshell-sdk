import type { Method, Type } from "../types/types.ts";
import { register } from "./render/register.ts";
import { modules } from "./modules.ts";
import { types } from "./render/types.ts"

export const render = {
    types: (introspect: Type[]) => types(introspect),
    register: async () => await register(),
    modules: (query: Method[], mutations: Method[], types: Type[] ) => modules(query, mutations, types)
}