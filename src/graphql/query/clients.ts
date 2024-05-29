
import type { User, ClientsInput } from "../../types/types.ts";
import type { ShellSdkContext, ShellSdkPaginatorInput } from "../../types/sdk.ts"

export type InputType = { input?: ClientsInput, paginator?: ShellSdkPaginatorInput }

export type ResponseType = { data: User[], total_deposits: number }

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props?: Input,
): Promise<Response> => { return await ctx.request("query", "clients", [
    { key: 'data', fields: [
        "id",
        "uuid",
        "login",
        "nickname",
        "phone",
        "email",
        "phone_suffix",
        "dob",
        "country_code",
        "first_name",
        "last_name",
        "middle_name",
        "deposit",
        "last_client_activity",
        "last_worker_activity",
        "user_discount",
        "created_at",
        "updated_at",
        "disabled_at",
        "banned_at",
        "total_hours",
        "city",
        "avatar_url",
        { key: "group", fields: [
            "uuid",
            "title",
            "user_count",
            "discount",
            "created_at"
        ]},
        { key: "creator", fields: [
            "id",
            "uuid",
            "login",
            "nickname",
            "phone",
            "email",
            "phone_suffix",
            "dob",
            "country_code",
            "first_name",
            "last_name",
            "middle_name",
            "deposit",
            "last_client_activity",
            "last_worker_activity",
            "user_discount",
            "created_at",
            "updated_at",
            "disabled_at",
            "banned_at",
            "total_hours",
            "city",
            "avatar_url"
        ]},
        { key: "roles", fields: [
            "id",
            "alias",
            "title",
            "description",
            "is_service",
            "priority",
            { key: "permissions", fields: [
                "id",
                "alias",
                "title",
                "description"
            ]}
        ]},
        { key: "pausable_info", fields: [
            "id",
            "duration",
            "elapsed",
            "status",
            "created_at",
            "expires_at"
        ]},
        { key: "news_consent", fields: [
            "isGiven",
            "givenAt",
            "revokedAt"
        ]},
        { key: "last_comment", fields: [
            "id",
            "type",
            "entity_id",
            "text",
            "created_at",
            "deleted_at",
            "data"
        ]}
    ]},
    'total_deposits'
], { input: props?.input }, props?.paginator || { page: 1 })}

export default module<InputType, ResponseType>
