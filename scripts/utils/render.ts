import type { Method, Type } from "../types/types.ts";
import { requests } from "./render/requests.ts";
import { types } from "./render/types.ts"

export const render = {
    types: (introspect: Type[]) => types(introspect),
    requests: (query: Method[], mutations: Method[]) => requests(query, mutations)
}