import type { Type } from "../types/types.ts";
import { register } from "./render/register.ts";
// import { modules } from "./render/requests.ts";
import { types } from "./render/types.ts"

export const render = {
    types: (introspect: Type[]) => types(introspect),
    register: async () => await register()
    // modules: (query: Method[], mutations: Method[] ) => modules(query, mutations, types)
}