import type { Type } from "../types/types.ts";
import { requests } from "./render/requests.ts";
import { types } from "./render/types.ts"

export const render = {
    types: (introspect: Type[]) => types(introspect),
    requests: (introspect: Type[]) => requests(introspect)
}