# New module creation

> [!TIP]
> Use Postman, [official GraphQl playground](https://auth-user-backend.smartshell.gg/graphql-playground) or [official API Docs](https://apidoc.smartshell.gg), they help to identify what data types and fields you need to use

### Add new file to this directory

To create new module choose one of folders, `query` or `mutation` and paste this snippet

```ts
import type { ShellContext } from "../../types/sdk.ts"

export type InputType = {

}

export type ResponseType = {

}

const module = async <Input extends InputType, Response extends ResponseType> (
    ctx: ShellContext,
    input: Input
): Promise<Response> => { return await ctx.request("query", "nameOfTheMethod", [

], { input })}

export default module<InputType, ResponseType>
```
> [!NOTE]
> File name SHOULD be identical to method name in api!

### Let's break this snippet into parts

First, we import `ShellContext` type, so `ctx.request` IntelliSense works correctly

```ts
import type { ShellContext } from "../../types/sdk.ts"
```

Second we specify input type...

> [!NOTE]
> We do not care about nested field `input`, because sometimes you need it, sometimes you don't, so, to preserve the psychological health of developers, we specify it a little below (i  Ɛ> u SmartShell API architect)
>
> EVEN IF input CAN BE blank in api, you NEED to SPECIFY IT!

```ts
export type InputType = {
    some: string
    input?: string
    fields: string
}
```

...and response type

```ts
export type ResponseType = {
    some: string
    response?: string
    fields: string
}[]
```
> [!NOTE]
> As can you see, we use types instead of more elegant interface, we do it because you need to add or remove `[]` syntax based on whether response from api is array or not

Finally, we create `module`

```ts
const module = async <Input extends InputType, Response extends ResponseType> (
    ctx: ShellContext,
    input: Input
): Promise<Response> => { return await ctx.request("query", "nameOfTheMethod", [
    "some",
    "response",
    "fields",
], { input })}
```
> [!NOTE]
> Fields in module supposed to be identical with `ResponseType` keys EVEN IF in response they not returning and don't forget to specify input object. Check with api, if you see something like that:
>
>     query booking {
>         getBooking(id:509882) {
>             id
>         }
>     }
>
> you need to use `input`, and if you see something like this:
>
>     query booking {
>         getBooking(input: { id:509882 }) {
>             id
>         }
>     }
>
> you need to use `{ input }`
>
> I want to thank the api architect of SmartShell again :>

and don't forget to export `module` itself with generics

```ts
export default module<InputType, ResponseType>
```

Module is ready!

> [!NOTE]
> If method does't have any input at all just use this snippet 
>
>     import type { ShellContext } from "../../types/sdk.ts"
> 
>     export type ResponseType = {
> 
>     }
> 
>     const module = async <Response extends ResponseType>(
>         ctx: ShellContext
>     ): Promise<Response> => { return await ctx.request("mutation", "login", [>
> 
>     ])}
> 
>     export default module<ResponseType>


### Register new module(s) in SDK

All you need to do is 
```sh
deno task build
```

script in `build.ts` automatically create export types for your module and write the documentation
additionally