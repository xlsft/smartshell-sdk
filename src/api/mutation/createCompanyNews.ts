// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { CompanyNewsArticle, CreateNewsArticleInput } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { input: CreateNewsArticleInput }
export type ResponseType = CompanyNewsArticle

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "mutation",
        "createCompanyNews",
        [
            "id",
            "title",
            key("company", ["id", "name", "address"]),
            "content",
            "image",
            key("link", ["label", "url"]),
            key("creator", [
                "id",
                "uuid",
                key("group", ["uuid", "title", "user_count", "discount", "created_at"]),
                "login",
                "nickname",
                "phone",
                "email",
                "phone_suffix",
                "dob",
                "country_code",
                key("roles", ["id", "alias", "title", "description", "is_service", "priority"]),
                "first_name",
                "last_name",
                "middle_name",
                "deposit",
                "bonus",
                "last_client_activity",
                "last_worker_activity",
                key("last_comment", [
                    "id",
                    "entity_id",
                    "text",
                    "created_at",
                    "deleted_at",
                    "data",
                    "request_contact",
                    "request_contact_info",
                    "is_important",
                ]),
                "user_discount",
                "created_at",
                "updated_at",
                "disabled_at",
                "banned_at",
                "total_hours",
                key("pausable_sessions", ["id", "duration", "elapsed", "available", "created_at", "expires_at"]),
                "city",
                "avatar_url",
                key("news_consent", ["isGiven", "givenAt", "revokedAt"]),
                "telegram_link",
                "discord_link",
                "steam_link",
                "vk_link",
                "is_private",
                "premium",
                "unverified",
                "lead_source",
                key("discounts", ["value"]),
                "favorite_club",
            ]),
            "active",
            key("publication_period", ["from", "until"]),
            "created_at",
            "updated_at",
        ],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
