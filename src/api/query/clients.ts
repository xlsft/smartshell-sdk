import type { ShellSdkContext, ShellSdkPaginatorInput } from "../../types/sdk.ts"
import type { UserPaginated } from "../../types/types.ts"
import { key } from "../../utils/key.ts";

export type InputType = UserClubsInput
export type ResponseType = UserPaginated

const module = async <Input extends InputType["input"], Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input, 
    paginator: ShellSdkPaginatorInput
): Promise<Response> => { return await ctx.request("query", "clients", [
    key("data", ["id", "uuid", key("group", ["uuid", "title", "user_count", "discount", "created_at"]), key("creator", ["id", "uuid", key("group", ["uuid", "title", "user_count", "discount", "created_at"]), "login", "nickname", "phone", "email", "phone_suffix", "dob", "country_code", key("roles", ["id", "alias", "title", "description", "is_service", "priority"]), "first_name", "last_name", "middle_name", "deposit", "last_client_activity", "last_worker_activity", key("last_comment", ["id", , "entity_id", "text", "created_at", "deleted_at", "data"]), "user_discount", "created_at", "updated_at", "disabled_at", "banned_at", "total_hours", key("pausable_info", ["id", "duration", "elapsed", , "created_at", "expires_at"]), "city", "avatar_url", key("news_consent", ["isGiven", "givenAt", "revokedAt"]), "telegram_link", "discord_link", "steam_link", "vk_link", "is_private"]), "login", "nickname", "phone", "email", "phone_suffix", "dob", "country_code", key("roles", ["id", "alias", "title", "description", "is_service", "priority", key("permissions", ["id", "alias", "title", "description"])]), "first_name", "last_name", "middle_name", "deposit", "last_client_activity", "last_worker_activity", key("last_comment", ["id", , "entity_id", "text", key("author", ["id", "uuid", "login", "nickname", "phone", "email", "phone_suffix", "dob", "country_code", "first_name", "last_name", "middle_name", "deposit", "last_client_activity", "last_worker_activity", "user_discount", "created_at", "updated_at", "disabled_at", "banned_at", "total_hours", "city", "avatar_url", "telegram_link", "discord_link", "steam_link", "vk_link", "is_private"]), "created_at", "deleted_at", "data"]), "user_discount", "created_at", "updated_at", "disabled_at", "banned_at", "total_hours", key("pausable_info", ["id", key("tariff", ["id", "title", "duration", "use_global_discounts", "has_fixed_finish_time", "created_at", "is_active", "per_minute", "show_in_shell", "show_in_billing", "pausable", "lifetime", "ean", "highlighted", "description", "sort", "is_tracked", "disable_sale_receipt_printing", "online_booking_enabled", "use_on_holidays"]), "duration", "elapsed", , "created_at", "expires_at"]), "city", "avatar_url", key("news_consent", ["isGiven", "givenAt", "revokedAt"]), "telegram_link", "discord_link", "steam_link", "vk_link", "is_private"]), "total_deposits"
], { input: props.input }, paginator || { page: 1 })}

export default module<InputType, ResponseType>