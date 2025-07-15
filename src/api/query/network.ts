// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { Network } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type ResponseType = Network

const module = async <Response extends ResponseType>(ctx: ShellSdkContext): Promise<Response> => {
    return await ctx.request("query", "network", [
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
            "verified_at",
            "activated_at",
            "banned_at",
            "created_at",
            "updated_at",
            "deleted_at",
            "news_consent",
        ]),
        key("companies", [
            key("data", [
                key("club", ["id", "name", "address"]),
                key("network", ["id", "name", "description"]),
                "is_main",
                "max_discount_enabled",
                "deposit_transfer_enabled",
            ]),
            "total",
        ]),
    ])
}

export default module<ResponseType>
