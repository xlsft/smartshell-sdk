import type { ShellSdkFormattedQuery } from "../types/sdk.ts";

export const format = (query: ShellSdkFormattedQuery, indent: string = ''): string => query.map(item => {
    if (typeof item === 'string') {
        return `${indent}${item}\n`
    } else if (typeof item === 'object' && 'key' in item && Array.isArray(item.fields)) {
        const new_indent = indent + '    '
        return `${indent}${item.key} {\n${format(item.fields, new_indent)}${indent}}\n`
    }
    return ''
}).join('')