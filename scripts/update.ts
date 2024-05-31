
import { introspect } from './utils/introspect.ts'
import { render } from "./utils/render.ts";

const data = await introspect()

// render.types(data.types)

render.modules(data.queryType.fields, data.mutationType.fields, data.types)


