
import { introspect } from './utils/introspect.ts'
import { render } from "./utils/render.ts";

const data = await introspect()

render.types(data.types)

render.requests(data.queryType, data.mutationType)