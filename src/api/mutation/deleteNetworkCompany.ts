// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { NetworkCompany } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { id: number }
export type ResponseType = NetworkCompany

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "mutation",
        "deleteNetworkCompany",
        [
            key("club", ["id", "name", "address"]),
            key("network", [
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
                    "verified_at",
                    "activated_at",
                    "banned_at",
                    "created_at",
                    "updated_at",
                    "deleted_at",
                    "news_consent",
                ]),
                key("companies", ["total"]),
            ]),
            "is_main",
            "max_discount_enabled",
            "deposit_transfer_enabled",
        ],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
