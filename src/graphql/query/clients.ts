import type { ClientsInput, UserPaginated } from "../../types/types.ts";
import type {
  ShellSdkContext,
  ShellSdkPaginatorInput,
} from "../../types/sdk.ts";
import { key } from "../../utils/key.ts";
import { on } from "../../utils/on.ts";

export type InputType = {
  input?: ClientsInput;
  paginator?: ShellSdkPaginatorInput;
};

export type ResponseType = UserPaginated;

const module = async <Input extends InputType, Response extends ResponseType>(
  ctx: ShellSdkContext,
  props?: Input
): Promise<Response> => {
  return await ctx.request(
    "query",
    "clients",
    [
      key("data", [
        "id",
        "uuid",
        key("group", [
          "uuid",
          "title",
          "user_count",
          "discount",
          key("created_at", "DateTime"),
        ]),
        "creator",
        "login",
        "nickname",
        "phone",
        key("email", "Email"),
        "phone_suffix",
        key("dob", "Date"),
        "country_code",
        key("roles", [
          "id",
          "alias",
          "title",
          "description",
          "is_service",
          "priority",
          key("permissions", ["id", "alias", "title", "description"]),
        ]),
        "first_name",
        "last_name",
        "middle_name",
        "deposit",
        key("last_client_activity", "DateTime"),
        key("last_worker_activity", "DateTime"),
        key("last_comment", [
          "id",
          key("type", on("entity", [])),
          "entity_id",
          "entity",
          "text",
          "author",
          key("created_at", "DateTime"),
          key("deleted_at", "DateTime"),
          "data",
        ]),
        "user_discount",
        key("created_at", "DateTime"),
        key("updated_at", "DateTime"),
        key("disabled_at", "DateTime"),
        key("banned_at", "DateTime"),
        "total_hours",
        key("pausable_info", [
          "id",
          key("tariff", [
            "id",
            "title",
            "duration",
            "use_global_discounts",
            "has_fixed_finish_time",
            key("created_at", "DateTime"),
            "is_active",
            "per_minute",
            "show_in_shell",
            "show_in_billing",
            key("schedules", ["start", "end"]),
            "sell_schedules",
            key("price_list", [
              key("host_groups", [
                "id",
                "title",
                key("created_at", "DateTime"),
                key("updated_at", "DateTime"),
                key("hosts", [
                  "id",
                  "group_id",
                  "group",
                  "type_id",
                  "position",
                  "alias",
                  "comment",
                  key("mac_addr", "MacAddress"),
                  key("ip_addr", "IpAddress"),
                  "dns_name",
                  "coord_x",
                  "coord_y",
                  "is_deleted",
                  "in_service",
                  key("created_at", "DateTime"),
                  key("info", [
                    "processor",
                    "ram",
                    "video",
                    "disc",
                    "shell_version",
                  ]),
                  key("counters", [
                    "cpu_temp",
                    "disk_temp",
                    key("disk_status", ["letter", "total", "used"]),
                    "active_window",
                  ]),
                  key("sessions", [
                    "id",
                    "host_id",
                    "alias",
                    "user",
                    key("started_at", "DateTime"),
                    key("finished_at", "DateTime"),
                  ]),
                  key("client_sessions", [
                    "id",
                    "client",
                    key("hosts", [
                      "id",
                      "host",
                      key("started_at", "DateTime"),
                      key("finished_at", "DateTime"),
                    ]),
                    "duration",
                    "elapsed",
                    key("payment", [
                      "id",
                      "client",
                      "client_session",
                      key("work_shift", [
                        "id",
                        "comment",
                        "worker",
                        key("created_at", "DateTime"),
                        key("finished_at", "DateTime"),
                        key("events", [
                          "id",
                          "type",
                          key("created_at", "DateTime"),
                        ]),
                        key("money", [
                          key("sum", [
                            "cash",
                            "card",
                            "deposit",
                            "bonus",
                            "total",
                            key("currency", ["id", "title", "alias", "letter"]),
                          ]),
                          "cash_on_start",
                        ]),
                        "payments",
                        key("cashOrders", [
                          "id",
                          "work_shift",
                          key("type", on("entity", [])),
                          "sum",
                          "comment",
                          key("created_at", "DateTime"),
                        ]),
                      ]),
                      key("promo_code", [
                        "id",
                        "author",
                        "client",
                        "code",
                        "value",
                        "amount",
                        key("entity", on("entity", [])),
                        "entity_id",
                        key("created_at", "DateTime"),
                        "is_tracked",
                      ]),
                      key("discount", [
                        "id",
                        "author",
                        "client",
                        "title",
                        "value",
                        "entity",
                        "entity_id",
                        key("created_at", "DateTime"),
                        "is_tracked",
                      ]),
                      key("method", on("entity", [])),
                      key("status", on("entity", [])),
                      "sum",
                      key("created_at", "DateTime"),
                      key("items", [
                        "id",
                        "payment_id",
                        "combo_id",
                        key("type", on("entity", [])),
                        key(
                          "entity",
                          on("entity", [
                            [
                              "id",
                              "title",
                              "subtitle",
                              "comment",
                              "cost",
                              "wholesale_cost",
                              "tax_percent",
                              "unit_name",
                              "unit_value",
                              "amount",
                              "image",
                              "use_global_discounts",
                              key("created_at", "DateTime"),
                              key("state", [
                                "received",
                                "income",
                                "sold",
                                "disposal",
                              ]),
                              key("tax_system", on("entity", [])),
                              key("vat", on("entity", [])),
                              "ean",
                              "use_fair_sign",
                              "is_excise",
                            ],
                            [
                              "id",
                              "title",
                              "cost",
                              "wholesale_cost",
                              "tax_percent",
                              "use_global_discounts",
                              key("created_at", "DateTime"),
                              "tax_system",
                              "vat",
                              "ean",
                            ],
                            [
                              "id",
                              "title",
                              "tariff",
                              "host_group",
                              key("items", [
                                "id",
                                "combo_id",
                                key("entity", on("entity", [])),
                                key("entity_type", on("entity", [])),
                                "amount",
                                "price",
                              ]),
                              "quantity",
                              "base_price",
                              "price",
                              key("created_at", "DateTime"),
                              "use_global_discount",
                            ],
                          ])
                        ),
                        "amount",
                        "sum",
                      ]),
                      "is_refunded",
                      "not_refundable",
                      "card_sum",
                      "cash_sum",
                      "comment",
                      "cashback",
                      key("external_data", ["external_id", "external_method"]),
                    ]),
                    "postpaid",
                    "total_cost",
                    key("status", on("entity", [])),
                    key("seances", [
                      "id",
                      "client_session",
                      "tariff",
                      "duration",
                      "elapsed",
                      "payment",
                      "payment_item",
                      "status",
                      key("created_at", "DateTime"),
                      key("started_at", "DateTime"),
                      key("finished_at", "DateTime"),
                      key("cancelled_at", "DateTime"),
                    ]),
                    key("created_at", "DateTime"),
                    key("started_at", "DateTime"),
                    key("finished_at", "DateTime"),
                    key("canceled_at", "DateTime"),
                    "time_left",
                  ]),
                  key("shell_mode", on("entity", [])),
                  key("last_online", "DateTime"),
                  "online",
                  key("bookings", [
                    "id",
                    "hosts",
                    "client",
                    key("from", "DateTime"),
                    key("to", "DateTime"),
                    "comment",
                    key("status", on("entity", [])),
                    "startsIn",
                    "group",
                    "byClient",
                  ]),
                  "device_has_changed",
                  key("device_updated_at", "DateTime"),
                  key("device_changes", ["alias", "old", "new"]),
                  "locked",
                  key("admin_called_at", "DateTime"),
                ]),
                key("customization", ["color", "background", "screensaver"]),
              ]),
              key("cost_map", ["title", "value", "currency"]),
            ]),
            "pausable",
            "lifetime",
            "ean",
            "highlighted",
            "description",
            "sort",
            "is_tracked",
            "disable_sale_receipt_printing",
            "online_booking_enabled",
            "use_on_holidays",
          ]),
          "duration",
          "elapsed",
          "status",
          key("created_at", "DateTime"),
          key("expires_at", "DateTime"),
        ]),
        "city",
        "avatar_url",
        key("news_consent", [
          "isGiven",
          key("givenAt", "DateTime"),
          key("revokedAt", "DateTime"),
        ]),
      ]),
      "total_deposits",
    ],
    { input: props?.input },
    props?.paginator || { page: 1 }
  );
};

export default module<InputType, ResponseType>;
