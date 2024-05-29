import type { ShellSdkFormattedCombinedQuery, ShellSdkFormattedDeepQuery, ShellSdkFormattedTopQuery } from "../types/sdk.ts";

export const on = ( name: ShellSdkFormattedTopQuery, entities: {on: string, with: ShellSdkFormattedCombinedQuery[]}[] ): ShellSdkFormattedDeepQuery => { 

    return {
        type: 'object',
        key: name,
        fields: entities.map((o): ShellSdkFormattedCombinedQuery  => {
            return {
                type: 'entity',
                key: o.on,
                fields: o.with,
            }
        })
    }
}