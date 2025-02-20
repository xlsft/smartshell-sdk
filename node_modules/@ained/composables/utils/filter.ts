/**
 * ## utils/filter
 * @param o object
 * 
 * This function filters object recursively to clean all empty values
 *
 * ```ts
 * const filtered = filter({ a: null, b: 'l', c: { d: undefined }, e: { f: undefined, g: ['k'], h: [], c: null }}) // { b: 'l', e: { g: ['k'] } }
 * ```
 * 
 * @return Filtered object
 */
export const filter = (o: Record<any, any>): Record<any, any> => {
    const result = {};
    for (const key in o) {
        if (typeof o[key] === "object" && o[key] !== null) {
            if (Array.isArray(o[key])) result[key] = o[key].filter((item) => typeof item !== "string" || item !== "")
            else if (o[key] instanceof Date) result[key] = o[key].toISOString()
            else { const object = filter(o[key]); if (Object.keys(object).length > 0) result[key] = object }
        } else if (o[key] !== "") o[key] instanceof Date ? result[key] = o[key].toISOString() : result[key] = o[key]
    }
    const empty = (o) => {
        if (Array.isArray(o)) {
            const array = o.map((item) => empty(item)).filter((item) => item !== null && item !== undefined && (typeof item !== "object" || Object.keys(item).length > 0))
            return array.length ? array : null
        } else if (o !== null && typeof o === "object") {
            const object = Object.entries(o).reduce((acc, [key, value]) => {
                const filtered = empty(value)
                if (filtered !== null && filtered !== undefined && (typeof filtered !== "object" ||  Object.keys(filtered).length > 0)) acc[key] = filtered
                return acc;
            }, {})
            return Object.keys(object).length ? object : null
        } else return o
    }
    return empty(result)
}
