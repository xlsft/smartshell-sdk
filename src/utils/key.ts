import type { ShellSdkFormattedCombinedQuery, ShellSdkFormattedDeepQuery, ShellSdkFormattedTopQuery } from "../types/sdk.ts";

export const key = ( name: ShellSdkFormattedTopQuery, query: ShellSdkFormattedCombinedQuery[] ): ShellSdkFormattedDeepQuery => { return {
    type: 'object',
    key: name,
    fields: query
}}