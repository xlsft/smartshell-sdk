
import type { ClientsInput, UserPaginated } from "../../types/types.ts";
import type { ShellSdkContext, ShellSdkPaginatorInput } from "../../types/sdk.ts"
import { key } from "../../utils/key.ts";
import { on } from "../../utils/on.ts";

export type InputType = { input?: ClientsInput, paginator?: ShellSdkPaginatorInput }

export type ResponseType = UserPaginated

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props?: Input,
): Promise<Response> => { return await ctx.request("query", "clients", [
    'total_deposits',
    key('data', [
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
        key("group", [
            "uuid",
            "title",
            "user_count",
            "discount",
            "created_at"
        ]),
        key("creator", [
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
        ]),
        key("roles", [
            "id",
            "alias",
            "title",
            "description",
            "is_service",
            "priority",
            key("permissions", [
                "id",
                "alias",
                "title",
                "description"
            ])
        ]),
        key("pausable_info", [
            "id",
            "duration",
            "elapsed",
            "status",
            "created_at",
            "expires_at"
        ]),
        key("news_consent", [
            "isGiven",
            "givenAt",
            "revokedAt"
        ]),
        key("last_comment", [
            "id",
            "type",
            "entity_id",
            on('entity', [
                { on: 'User', with: [
                    "id",
                    "uuid",
                    "login",
                    "nickname",
                ]},
                { on: 'Host', with: [
                    "id",
                    "group_id",
                    "type_id",
                    "position",
                ]},
                { on: 'ClientSession', with: [
                    "id",
                    "duration",
                    "elapsed",
                    "postpaid",
                    "total_cost",
                ]},
            ]),
            "text",
            "created_at",
            "deleted_at",
            "data"
        ])
    ]),
], { input: props?.input }, props?.paginator || { page: 1 })}

export default module<InputType, ResponseType>
