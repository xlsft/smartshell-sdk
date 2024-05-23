import type { Shell } from "../mod.ts";
import { query as q, mutation as m } from "./graphql/index.ts";

export const api = (ctx: Shell) => {
    return {

        // query

        /**
        * # query `userClubs`
		* 
		* ```ts
		* 
		* await shell.api.userClubs({ login: "79998887766", password: "passw0rd" })
		* ```
		* 
		* 🔗 https://apidoc.smartshell.gg/userClubs.html
		* 
        * `@xlsoftware/smartshell-sdk`
        */
        userClubs: async (input: Parameters<typeof q.userClubs>[1]) => await q.userClubs(ctx, input),

        // mutation

        /**
        * # mutation `login`
		* 
		* ```ts
		* 
		* await shell.api.login({ login: "79998887766", password: "passw0rd", company_id: 1234 })
		* ```
		* 
		* 🔗 https://apidoc.smartshell.gg/auth.html
		* 
        * `@xlsoftware/smartshell-sdk`
        */
        login: async (input: Parameters<typeof m.login>[1]) => await m.login(ctx, input),
        /**
        * # mutation `relogin`
		* 
		* ```ts
		* 
		* await shell.api.relogin({ id: 1234 })
		* ```
		* 
		* 🔗 https://apidoc.smartshell.gg/relogin.html
		* 
        * `@xlsoftware/smartshell-sdk`
        */
        relogin: async (input: Parameters<typeof m.relogin>[1]) => await m.relogin(ctx, input),
        /**
        * # mutation `refreshToken`
		* 
		* ```ts
		* 
		* await shell.api.refreshToken({ refresh_token: "oWR4DodRt..." })
		* ```
		* 
		* 🔗 https://apidoc.smartshell.gg/refreshToken.html
		* 
        * `@xlsoftware/smartshell-sdk`
        */
        refreshToken: async (input: Parameters<typeof m.refreshToken>[1]) => await m.refreshToken(ctx, input),
    }
}