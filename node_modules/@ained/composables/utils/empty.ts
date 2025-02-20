/**
 * ## utils/empty
 * @param o object
 * 
 * This function is intended to check if passed object is empty
 *
 * ```ts
 * const isEmpty = empty({}) // true
 * ```
 * 
 * @return boolean
 */
export const empty = (o: Record<any,any>): boolean => {
    for (const prop in o) { if (Object.hasOwn(o, prop)) return false }
    return true
}