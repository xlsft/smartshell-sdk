// deno-lint-ignore-file no-explicit-any
export function stringify(object: any) {
    const json_string = JSON.stringify(object)
    const object_string = json_string.replace(/"([^"]+)":/g, '$1:')
    const string = object_string.substring(1, object_string.length-1);
    return string
}