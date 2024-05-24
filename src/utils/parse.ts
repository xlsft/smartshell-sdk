import type { ShellSdkFormattedQuery } from "../types/sdk.ts";

export function format_graphql_query(query: string): string {
    query = query.trim();
    query = query.replace(/\s*{\s*/g, ' {\n    ');
    query = query.replace(/\s*}\s*/g, '\n}');
    query = query.replace(/\s*:\s*/g, ': ');
    query = query.replace(/\s*,\s*/g, ', ');
    let indent_level = 0;
    return query.split('\n').map(line => {
        if (line.includes('}')) {
            indent_level -= 1;
        }
        const indent = '    '.repeat(indent_level);
        if (line.includes('{')) {
            indent_level += 1;
        }
        return indent + line.trim();
    }).join('\n');
}

export const parse = (string: string): ShellSdkFormattedQuery => {
    const query_string = format_graphql_query(string)
    const lines = query_string.split('\n');
    const stack: { key: string, fields: ShellSdkFormattedQuery }[] = [];
    const result: ShellSdkFormattedQuery = [];

    lines.forEach((line: string) => {
        const trimmedLine = line.trim();
        const indentLevel = line.search(/\S/);
        if (indentLevel === -1) return; // Skip empty lines

        const key = trimmedLine.split(' ')[0];
        if (indentLevel === 0) {
            stack.push({ key: key, fields: [] });
            result.push(key);
        } else {
            const current = stack[indentLevel - 1];
            const item = { key: key, fields: [] };
            current.fields.push(item);
            stack[indentLevel] = item;
        }
    });

    return result;
}