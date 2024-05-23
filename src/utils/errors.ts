import type { Shell } from "../shell.ts";
import type { GraphQLResponseError } from "../types/graphql.ts";

class ShellApiErrorClass extends Error {
    constructor(public readonly error: unknown) {
        super(`${error}`);
        this.name = `ShellAPIError`;
        if (error instanceof Error) this.stack = error.stack;
    }
}

class ShellSdkErrorClass extends Error {
    constructor(public readonly error: unknown) {
        super(`${error}`);
        this.name = `ShellSDKError`;
        if (error instanceof Error) this.stack = error.stack;
    }
}

const format = (errors: GraphQLResponseError[]) => {
    const error_string: string[] = []
    if (error_string.length !== 1) `API dropped ${errors.length} errors in total\n`
    for (let i = 0; i < errors.length; i++) {
        const error = errors[i];
        error_string.push(`\x1b[1m\x1b[31m${error.locations ? 'GQLSyntax' : ''}${error.locations && error.path ? ', ' : ''}${error.path ? 'Data' : ''}Error\x1b[0m: ${error.locations ? error.locations?.map((l) => `\n    at line ${l.line}, column ${l.column}\n`) : '' }${error.message}\n`)
    }
    return error_string.join('\n')
}


export const ShellApiError = (ctx: Shell, errors: GraphQLResponseError[] ) => {
    if (!ctx.catch) throw new ShellApiErrorClass(format(errors)); else ctx.catch(errors)
}

export const ShellSdkError = (ctx: Shell, error: string ) => {
    if (!ctx.catch) throw new ShellSdkErrorClass(error); else ctx.catch(error)
}

