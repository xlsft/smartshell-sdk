import type { Shell } from "../mod.ts";
import { query as q, mutation as m } from "./graphql/index.ts";

export const api = (ctx: Shell) => {
    return {

        // query

        /**
        * # query `clients`
		* 
		* 🔗 https://apidoc.smartshell.gg/clients.html
		* 
        * `@xlsoftware/smartshell-sdk`
        */
        clients: async (props?: Parameters<typeof q.clients>[1]) => await q.clients(ctx, props),
        /**
        * # query `now`
		* 
		* 🔗 https://apidoc.smartshell.gg/now.html
		* 
        * `@xlsoftware/smartshell-sdk`
        */
        now: async () => await q.now(ctx),
        /**
        * # query `userClubs`
		* 
		* 🔗 https://apidoc.smartshell.gg/userClubs.html
		* 
        * `@xlsoftware/smartshell-sdk`
        */
        userClubs: async (props: Parameters<typeof q.userClubs>[1],) => await q.userClubs(ctx, props),

        // mutation

        /**
        * # mutation `login`
		* 
		* 🔗 https://apidoc.smartshell.gg/auth.html
		* 
        * `@xlsoftware/smartshell-sdk`
        */
        login: async (props: Parameters<typeof m.login>[1],) => await m.login(ctx, props),
        /**
        * # mutation `refreshToken`
		* 
		* 🔗 https://apidoc.smartshell.gg/refreshToken.html
		* 
        * `@xlsoftware/smartshell-sdk`
        */
        refreshToken: async (props: Parameters<typeof m.refreshToken>[1],) => await m.refreshToken(ctx, props),
        /**
        * # mutation `relogin`
		* 
		* 🔗 https://apidoc.smartshell.gg/relogin.html
		* 
        * `@xlsoftware/smartshell-sdk`
        */
        relogin: async (props: Parameters<typeof m.relogin>[1],) => await m.relogin(ctx, props),
    }
}