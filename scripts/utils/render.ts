import type { Method, Type } from "../types/types.ts";
import { modules } from "./render/requests.ts";
import { types } from "./render/types.ts"

export const render = {
    types: (introspect: Type[]) => types(introspect),
    modules: (query: Method[], mutations: Method[], types: Type[]) => modules(query, mutations, types)
}