export class ShellApiError extends Error {
    constructor(public readonly error: unknown) {
        super(`${error}`);
        this.name = `ShellAPIError`;
        if (error instanceof Error) this.stack = error.stack;
    }
}

export class ShellSdkError extends Error {
    constructor(public readonly error: unknown) {
        super(`${error}`);
        this.name = `ShellSDKError`;
        if (error instanceof Error) this.stack = error.stack;
    }
}