// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { FeatureFlags } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type ResponseType = FeatureFlags

const module = async <Response extends ResponseType>(ctx: ShellSdkContext): Promise<Response> => {
    return await ctx.request("query", "featureFlags", [
        "subscription",
        "expires_at",
        "modules",
        "host_count",
        "used_trial",
        "deposit_transfer_enabled",
        "shortcuts_sync_enabled",
        "it_adviser_support",
        "flocktory_url",
        key("company_owner", [
            "uuid",
            "inn",
            "type",
            "name",
            "ogrn",
            "legal_address",
            "kpp",
            "policy_url",
            "private_policy",
            "email",
        ]),
        "company_key_hash",
    ])
}

export default module<ResponseType>
