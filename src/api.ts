import type { Shell } from "../mod.ts";
import { query as q, mutation as m } from "./graphql/index.ts";
import type { ShellSdkPaginatorInput } from "./types/sdk.ts";

export const api = (ctx: Shell) => {
    return {

        // query

        /**
        * # query `now`
		* 
		* 🔗 https://apidoc.smartshell.gg/now.html
		* 
        * `@xlsoftware/smartshell-sdk`
        */
        now: async () => await q.now(ctx),
        /**
        * # query `clients`
		* 
		* 🔗 https://apidoc.smartshell.gg/clients.html
		* 
        * `@xlsoftware/smartshell-sdk`
        */
        clients: async (input: Parameters<typeof q.clients>[1],paginator?: ShellSdkPaginatorInput) => await q.clients(ctx, input, paginator),
        /**
        * # query `getBookings`
		* 
		* 🔗 https://apidoc.smartshell.gg/getBookings.html
		* 
        * `@xlsoftware/smartshell-sdk`
        */
        getBookings: async (input: Parameters<typeof q.getBookings>[1],paginator?: ShellSdkPaginatorInput) => await q.getBookings(ctx, input, paginator),
        /**
        * # query `userClubs`
		* 
		* 🔗 https://apidoc.smartshell.gg/userClubs.html
		* 
        * `@xlsoftware/smartshell-sdk`
        */
        userClubs: async (input: Parameters<typeof q.userClubs>[1],) => await q.userClubs(ctx, input,),

        // mutation

        /**
        * # mutation `login`
		* 
		* 🔗 https://apidoc.smartshell.gg/auth.html
		* 
        * `@xlsoftware/smartshell-sdk`
        */
        login: async (input: Parameters<typeof m.login>[1],) => await m.login(ctx, input,),
        /**
        * # mutation `refreshToken`
		* 
		* 🔗 https://apidoc.smartshell.gg/refreshToken.html
		* 
        * `@xlsoftware/smartshell-sdk`
        */
        refreshToken: async (input: Parameters<typeof m.refreshToken>[1],) => await m.refreshToken(ctx, input,),
        /**
        * # mutation `relogin`
		* 
		* 🔗 https://apidoc.smartshell.gg/relogin.html
		* 
        * `@xlsoftware/smartshell-sdk`
        */
        relogin: async (input: Parameters<typeof m.relogin>[1],) => await m.relogin(ctx, input,),
    }
}