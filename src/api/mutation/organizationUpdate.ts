// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { Organization, OrganizationInput } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { input: OrganizationInput }
export type ResponseType = Organization

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "mutation",
        "organizationUpdate",
        [
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
        ],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
