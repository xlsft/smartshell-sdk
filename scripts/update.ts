
import { introspect } from './utils/introspect.ts'
import { log } from "./utils/logger.ts";
import { render } from "./utils/render.ts";

const start = new Date().getTime()
const data = await introspect()



await render.types(data.types)
await render.modules(data.queryType.fields, data.mutationType.fields, data.types)
await render.register()
const end = new Date().getTime()
log.log(`Codegen process ended successfully! Generation time: ${(end - start) / 1000}s`)



