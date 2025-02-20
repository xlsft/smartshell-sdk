// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { Club } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { id: number; status: boolean }
export type ResponseType = Club

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "mutation",
        "setClubAutoPayStatus",
        [
            "id",
            "name",
            "pc_count",
            "console_count",
            "contact_name",
            "address",
            "city",
            "street",
            "house_number",
            "created_at",
            "url",
            "telegram",
            "key",
            "info",
            "contact_phone",
            key("license", [
                "id",
                "expires_at",
                key("payment", [
                    "id",
                    "created_at",
                    "host_count",
                    "payment_method",
                    "bill_url",
                    key("license_tariff", ["id", "name", "description", "cost"]),
                    key("modules", ["id", "name", "description", "cost", "category_id", "alias"]),
                    "months",
                    "cost",
                    key("contractor", ["id", "name", "inn", "kpp", "address", "phone", "email"]),
                ]),
            ]),
            key("licenses", [
                "id",
                "expires_at",
                key("payment", [
                    "id",
                    "created_at",
                    "host_count",
                    "payment_method",
                    "bill_url",
                    key("license_tariff", ["id", "name", "description", "cost"]),
                    key("modules", ["id", "name", "description", "cost", "category_id", "alias"]),
                    "months",
                    "cost",
                    key("contractor", ["id", "name", "inn", "kpp", "address", "phone", "email"]),
                ]),
            ]),
            key("license_payments", [
                "id",
                "created_at",
                "host_count",
                "payment_method",
                "bill_url",
                key("license_tariff", [
                    "id",
                    "name",
                    "description",
                    "cost",
                    key("module_categories", ["id", "name", "tariff_id"]),
                ]),
                key("modules", ["id", "name", "description", "cost", "category_id", "alias"]),
                "months",
                "cost",
                key("contractor", ["id", "name", "inn", "kpp", "address", "phone", "email"]),
            ]),
            "timezone",
            "country_code",
            "host_count",
            "locked",
            "auto_payment_enabled",
            key("organization_payment_card", [
                "id",
                "card_mask",
                "card_payment_system",
                "card_expires_at",
                "created_at",
            ]),
            "verification_status_updated_at",
            "debt",
            "used_trial",
            "club_phone",
            "vk_url",
            "telegram_url",
            "whats_up_url",
            "region",
            "comment",
            "country",
            "lat",
            "lng",
            key("work_schedule", ["day", "Start", "End"]),
            "work_schedule_247",
            key("hardware", [
                "hall_title",
                "device_count",
                "console_model",
                "processor_brand",
                "processor_model",
                "gpu_brand",
                "gpu_model",
                "ram_size",
                "ram_type",
                "hdd_type",
                "keyboard",
                "mouse",
                "speakers",
                "chair",
                "monitor_brand",
                "monitor_size",
                "monitor_hz",
            ]),
            "logo_url",
            "header_url",
            "pricelist_urls",
            "interior_urls",
            key("services", [
                "has_vr",
                "vr_count",
                "vr_model",
                "has_autosim",
                "autosim_count",
                "has_printer",
                "has_lounge",
                "has_gifts",
                "personal_devices_allowed",
                "has_streaming_boot",
                "personal_food_allowed",
                "has_tabletop_games",
                "can_rent_projector",
                "has_coworking",
                "has_snacks",
                "has_energy_drinks",
                "has_food_to_go",
                "has_kitchen",
                "has_beverages",
                "has_low_alcohol_beverages",
                "has_food_discounts",
                "accept_cash",
                "accept_card",
                "accept_qr",
                "accept_sbp",
            ]),
            "deposit_transfer_enabled",
        ],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
