// deno-lint-ignore no-explicit-any
export function gql(strings: TemplateStringsArray, ...values: any[]): string {
    return strings.reduce((result, str, i) => {
        return result + str + (values[i] !== undefined ? String(values[i]) : '');
    }, '');
}