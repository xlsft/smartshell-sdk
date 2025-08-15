// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { Network, ID, UpdateNetworkInput } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { id: ID; input: UpdateNetworkInput }
export type ResponseType = Network

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "mutation",
        "updateNetwork",
        [
            "id",
            "name",
            "description",
            key("organization", [
                "id",
                "title",
                "phone",
                "email",
                "address",
                "hosts_count",
                key("network", ["id", "name", "description"]),
                "verified_at",
                "activated_at",
                "banned_at",
                "created_at",
                "updated_at",
                "deleted_at",
                "news_consent",
            ]),
            key("companies", [key("data", ["is_main", "max_discount_enabled", "deposit_transfer_enabled"]), "total"]),
        ],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
