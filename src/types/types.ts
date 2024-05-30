export type Upload = string

export type Email = `${string}@${string}.${string}`;

export type IpAddress = `${number}.${number}.${number}.${number}`;

export type MacAddress = `${string}:${string}:${string}:${string}:${string}:${string}`;

export type Date = `${number}${number}${number}${number}-${number}${number}-${number}${number}`

export type Time = `${number}${number}:${number}${number}:${number}${number}`

export type DateTime = `${Date} ${Time}`

export type AccessToken = {
    token_type: string
    expires_in: number
    access_token: string
    refresh_token: string
}

export type Achievement = {
    id: string
    name: string
    icon_url?: string
    conditions: Condition[]
    rewards: Reward[]
    created_at: string
    status: AchievementStatus
    assigned_count: number
}

export type AchievementInput = {
    name: string
    icon_url?: string
    conditions: ConditionRequest[]
    rewards: RewardRequest[]
    status: AchievementStatus
}

export type AchievementStatus = "ACTIVE" | "DISABLED"

export type ActiveClient = {
    client_uuid: string
    nickname: string
    payments: number
    total_seconds: number
    last_client_activity?: DateTime
}

export type AdditionalLicensePaymentInput = {
    license_price: AdditionalLicensePriceInput
    contractor_id?: number
    success_url?: string
    fail_url?: string
}

export type AdditionalLicensePriceInput = {
    host_count: number
    promocode?: string
    license_payment_method: LicensePaymentMethod
    club_id: number
    modules: number[]
}

export type AdditionalPaymentData = {
    public_id: string
    org_id: number
    amount: number
    description: string
    currency: Currency
}

export type AdditionalTransactionData = {
    public_id?: string
}

export type AgeRating = {
    alias: string
    value: number
}

export type AppGroupType = "APPLICATION" | "GAME" | "DEFAULT"

export type AppType = "APPLICATION" | "GAME"

export type Article = {
    id: string
    content: string
    title: string
    preview: string
    url: string
    createdAt: string
}

export type Booking = {
    id: number
    hosts: number[]
    client?: User
    from: DateTime
    to: DateTime
    comment?: string
    status: BookingStatus
    startsIn: number
    group?: string
    byClient: boolean
}

export type BookingClientStatus = "ACTIVE" | "INACTIVE"

export type BookingInput = {
    hosts: number[]
    client?: number
    comment?: string
    from: DateTime
    to: DateTime
    status?: BookingStatus
}

export type BookingPaginated = {
    paginatorInfo?: PaginatorInfo
    data: Booking[]
}

export type BookingSettings = {
    self_cancellation_enabled: boolean
    cancellation_penalty: number
    cancellation_free_headroom: number
}

export type BookingStatus = "ACTIVE" | "FINISHED" | "CANCELED" | "REDEEMED"

export type BoughtTariffsReport = {
    from: DateTime
    to: DateTime
}

export type CartEntity = "GOOD" | "SERVICE" | "TARIFF"

export type CashOrder = {
    id: number
    work_shift: WorkShift
    type: CashOrderType
    sum: number
    comment: string
    created_at: DateTime
}

export type CashOrderData = {
    rko: number
    pko: number
}

export type CashOrderInput = {
    type: CashOrderType
    sum: number
    comment: string
}

export type CashOrderType = "PKO" | "RKO"

export type ChangeClientSessionHostInput = {
    host_id: number
}

export type ChangeGoodsQuantityInput = {
    items: ChangeGoodsQuantityItemInput[]
    operation: WarehouseOperationType
    comment?: string
}

export type ChangeGoodsQuantityItemInput = {
    id: number
    quantity: number
}

export type ChangeUsersGroupInput = {
    group_uuid?: string
    users_uuids: string[]
}

export type ClientBooking = {
    id: number
    club: ClientClub
    hosts: ClientHost[]
    from: DateTime
    to: DateTime
    comment?: string
    status: BookingStatus
    startsIn: number
    can_cancel: boolean
}

export type ClientBookingInput = {
    companyId: number
    hosts: number[]
    from: DateTime
    to?: DateTime
    tariffId: number
}

export type ClientBookingPenaltyData = {
    cost: number
    currency: Currency
}

export type ClientClub = {
    id: number
    name: string
    address: string
    city: string
    deposit: number
    discount: number
    hours: number
    visits: ClientClubVisit[]
    last_visited_at: DateTime
    accept_payments: boolean
    booking_enabled: boolean
    booking_settings?: BookingSettings
    currency: Currency
}

export type ClientClubVisit = {
    visited_at: DateTime
}

export type ClientHost = {
    id: number
    group_id: number
    type_id?: number
    position: number
    alias: string
    coord_x?: number
    coord_y?: number
    is_occupied: boolean
    is_booked: boolean
    in_service: boolean
    info?: HostInfo
}

export type ClientHostGroup = {
    id: number
    title: string
    customization?: HostGroupCustomization
}

export type ClientLoginInput = {
    login: string
    password: string
}

export type ClientRegisterInput = {
    country_code: string
    email?: Email
    phone: string
    phone_confirmation: string
    password: string
    password_confirmation: string
    dob: Date
    nickname: string
    first_name?: string
    middle_name?: string
    last_name?: string
    city?: string
    captcha_token: string
    news_consent?: boolean
}

export type ClientSession = {
    id: number
    client?: User
    hosts: ClientSessionHost[]
    duration: number
    elapsed: number
    payment?: Payment
    postpaid: boolean
    total_cost: number
    status: ClientSessionType
    seances: Seance[]
    created_at: DateTime
    started_at: DateTime
    finished_at?: DateTime
    canceled_at?: DateTime
    time_left?: number
}

export type ClientSessionHost = {
    id: number
    host: Host
    started_at: DateTime
    finished_at?: DateTime
}

export type ClientSessionOverview = {
    id: number
    duration: number
    elapsed: number
    time_left: number
    started_at: DateTime
    finished_at?: DateTime
    postpaid: boolean
    total_cost: number
    seances: SeanceOverview[]
}

export type ClientSessionPaginated = {
    paginatorInfo?: PaginatorInfo
    data: ClientSession[]
}

export type ClientSessionReportInput = {
    client_id: number
    from?: DateTime
    to?: DateTime
    preset?: DateReportEnum
}

export type ClientSessionType = "PLANED" | "ACTIVE" | "FINISHED" | "CANCELLED"

export type ClientTariffGridInput = {
    companyId: number
    host_group_id: number
    at: DateTime
}

export type ClientTariffGridItem = {
    id: number
    title: string
    duration: number
    cost: number
    has_fixed_finish_time: boolean
    currency: Currency
    highlighted?: boolean
    finished_at: DateTime
}

export type ClientsInput = {
    q: string
    sort?: SortInput
    filter?: FilterInput
}

export type ClientsPaymentReportInput = {
    from: DateTime
    to: DateTime
    sorting?: ClientsPaymentReportSortInput
    search?: SearchReportInput
}

export type ClientsPaymentReportItem = {
    user: User
    shop: PaymentReportItem
    tariff: PaymentReportItem
    bonus: PaymentReportItem
    total: PaymentReportItem
    average: PaymentReportItem
}

export type ClientsPaymentReportPaginated = {
    paginatorInfo?: PaginatorInfo
    data: ClientsPaymentReportItem[]
}

export type ClientsPaymentReportSortInput = {
    field: string
    direction: string
}

export type CloudPaymentsAccount = {
    publicId: string
    secretKey: string
}

export type CloudPaymentsAccountAction = "SET" | "REMOVE"

export type Club = {
    id: number
    name: string
    pc_count: number
    console_count: number
    distribution_type: DistributionType
    contact_name: string
    contact_type: OrganizationUserType
    address?: string
    city: string
    street: string
    house_number: string
    created_at: DateTime
    url?: string
    telegram?: string
    key?: string
    info?: string
    contact_phone: string
    license?: License
    licenses: License[]
    license_payments: LicensePaymentData[]
    timezone: number
    country_code: string
    host_count: number
    locked: boolean
    auto_payment_enabled: boolean
    organization_payment_card?: OrganizationPaymentCard
    verification_status: ClubVerificationStatus
    verification_status_updated_at?: DateTime
    debt: number
    used_trial: boolean
}

export type ClubComment = {
    id: number
    client_session: ClientSession
    text: string
    author?: User
    created_at: DateTime
    deleted_at?: DateTime
    host_alias: string
    host_group_name: string
    grade: number
    is_read: boolean
}

export type ClubCommentInput = {
    text?: string
    grade: number
}

export type ClubCommentPaginated = {
    paginatorInfo?: PaginatorInfo
    data: ClubComment[]
    summary: ClubCommentSummary
}

export type ClubCommentSearchInput = {
    user_uuid?: string
    sort?: ClubCommentSearchSort
}

export type ClubCommentSearchSort = "NEW_FIRST" | "OLD_FIRST" | "HIGH_GRADE_FIRST" | "LOW_GRADE_FIRST"

export type ClubCommentSummary = {
    average_grade: number
    unread_total: number
    five: number
    four: number
    three: number
    two: number
    one: number
}

export type ClubInput = {
    name: string
    address?: string
    city?: string
    street?: string
    house_number?: string
    contact_name: string
    contact_type: OrganizationUserType
    contact_phone: string
    pc_count?: number
    console_count?: number
    distribution_type?: DistributionType
    url?: string
    telegram?: string
    info?: string
    timezone?: number
    country_code: string
    verify?: boolean
}

export type ClubVerificationStatus = "UNVERIFIED" | "REVIEW" | "VERIFIED" | "DECLINED"

export type Combo = {
    id: number
    title: string
    tariff?: Tariff
    host_group?: HostGroup
    items: ComboItem[]
    quantity: number
    base_price: number
    price: number
    created_at: DateTime
    use_global_discount: boolean
}

export type ComboInput = {
    title: string
    host_group_id?: number
    tariff_id?: number
    items: ComboItemInput[]
    use_global_discount?: boolean
}

export type ComboItem = {
    id: number
    combo_id: number
    entity: ComboItemEntity
    entity_type: ComboItemEntityType
    amount: number
    price: number
}

export type ComboItemEntity = Service | Good

export type ComboItemEntityType = "GOOD" | "SERVICE"

export type ComboItemInput = {
    entity_type: ComboItemEntityType
    entity_id: number
    amount: number
    price: number
}

export type ComboListInput = {
    host_id?: number
    client_uuid?: string
    shift?: number
}

export type ComboListItem = {
    id: number
    title: string
    tariff?: TariffGridItem
    host_group?: HostGroup
    items: ComboItem[]
    cost: number
    quantity: number
    use_global_discounts: boolean
}

export type ComboPaginated = {
    paginatorInfo?: PaginatorInfo
    data: Combo[]
}

export type Comment = {
    id: number
    type: CommentType
    entity_id: number
    entity: CommentEntity
    text: string
    author?: User
    created_at: DateTime
    deleted_at?: DateTime
    data: string
}

export type CommentEntity = User & Host & ClientSession

export type CommentInput = {
    text: string
    type: CommentType
    entity_id: number
}

export type CommentPaginated = {
    paginatorInfo?: PaginatorInfo
    data: Comment[]
}

export type CommentSearchInput = {
    entity_id: number
    type: CommentType
}

export type CommentType = "CLIENT" | "HOST" | "CLIENT_SESSION"

export type CompanyPermissionInput = {
    company_id: number
}

export type CompanyPermissions = {
    role_id: number
    title: string
    description?: string
    permissions?: PermissionData[]
}

export type CompanyPermissionsData = {
    companyPermissions?: CompanyPermissions[]
}

export type CompanyPermissionsInput = {
    role_id: number
    permissions: PermissionInput[]
}

export type Condition = {
    name: string
    value: number
}

export type ConditionRequest = {
    name: string
    value: number
}

export type ConfirmationCodeType = "REGISTER" | "RESET_PASSWORD"

export type ConfirmationResult = {
    token?: AccessToken
    success: boolean
    hash?: string
}

export type Contractor = {
    id: number
    name: string
    inn: string
    kpp: string
    address: string
    phone: string
    email: string
}

export type ContractorInput = {
    name: string
    inn: string
    kpp: string
    address: string
    phone: string
    email: string
}

export type CreateCommandInput = {
    host_id: number
    action: HostCommandAction
    param?: string
}

export type CreateGameAccountInput = {
    login: string
    password: string
    active: boolean
    group_id: number
}

export type CreateWorkerInput = {
    phone: string
    first_name: string
    last_name: string
    middle_name: string
    role_ids: number[]
}

export type Currency = {
    id: number
    title: string
    alias: string
    letter: string
}

export type CurrentTariff = {
    id: number
    title: string
    is_active: boolean
    duration: number
    cost: number
    use_global_discounts: boolean
    has_fixed_finish_time: boolean
    per_minute: boolean
    pausable: boolean
    currency: Currency
}

export type DateReportEnum = "TODAY" | "WEEK" | "MONTH" | "YEAR"

export type DeleteUserGroupInput = {
    uuid: string
}

export type DepositCashback = {
    id: number
    amount: number
    value: number
    is_percent: boolean
    is_active: boolean
    starts_at?: DateTime
    expires_at?: DateTime
    is_expired: boolean
}

export type DepositCashbackInput = {
    amount: number
    value: number
    is_percent: boolean
    is_active: boolean
    starts_at?: DateTime
    expires_at?: DateTime
}

export type DetailedWorkShiftMoneyData = {
    id: number
    worker: User
    cash_on_start: number
    total: number
    deposit: number
    bonus: number
    refunded: number
    cash: MoneyData
    card: MoneyData
    cash_orders: CashOrder[]
    currency?: Currency
    created_at: DateTime
    finished_at?: DateTime
}

export type Discount = {
    id: number
    author: User
    client?: User
    title: string
    value: number
    entity?: CartEntity
    entity_id?: number
    created_at: DateTime
    is_tracked: boolean
}

export type DiscountInput = {
    client_id?: number
    title: string
    value: number
    entity?: CartEntity
    entity_id?: number
    is_tracked?: boolean
}

export type DiscountPaginated = {
    paginatorInfo?: PaginatorInfo
    data: Discount[]
}

export type DistributionType = "LOCAL" | "CLOUD"

export type EanEntity = {
    entity_id: number
    entity_type: EanEntityType
}

export type EanEntityType = "GOOD" | "SERVICE" | "TARIFF" | "HOST" | "USER"

export type EmailExistsInput = {
    email: string
}

export type EmailRegisterInput = {
    login: string
    email: Email
    phone: string
    phone_confirmation: string
    password: string
    dob: Date
    news_consent?: boolean
}

export type Event = {
    id: number
    type: string
    created_at: DateTime
    relations?: string
    workShift?: WorkShift
    initiator?: User
    initiatorHost?: Host
    description?: string
}

export type EventListItem = {
    timestamp: DateTime
    type: string
    settings: EventListItemAliasValues[]
    setting?: EventListItemAliasValues
    booking?: EventListItemBooking
    cash_order?: EventListItemCashOrder
    client_session?: EventListItemClientSession
    promocode?: EventListItemIdTitleValueF
    discount?: EventListItemIdTitleValueF
    good?: EventListItemIdTitle
    service?: EventListItemIdTitle
    tariff?: EventListItemIdTitle
    host?: EventListItemIdTitleValueI
    host2?: EventListItemIdTitleValueI
    hosts: EventListItemIdTitleValueI[]
    host_group?: EventListItemIdTitle
    host_group2?: EventListItemIdTitle
    host_command?: EventListItemIdTitle
    client?: EventListItemUser
    manager?: EventListItemUser
    operator?: EventListItemUser
    worker?: EventListItemUser
    role?: EventListItemIdTitle
    role2?: EventListItemIdTitle
    user_group?: EventListItemIdTitleValueI
    user_group2?: EventListItemIdTitleValueI
    payment?: EventListItemIdTitleValueF
    payment_items: EventListItemPaymentItem[]
    warehouse_item?: EventListItemWarehouseItem
    work_shift?: EventListItemIdTime
    worker_task?: EventListItemTask
    goods: EventListItemIdTitle[]
    new_goods_amount: EventListItemIdValueF[]
    new_devices: EventListItemAliasValues[]
    cash_on_start: number
    cashback: number
    paused_type?: string
    additional_seconds?: number
    send_code_method?: string
    penalty?: number
    value1: number
    value2: number
    comment?: string
    duration: number
    deposit: number
    combo?: EventListItemCombo
    combo_items: EventListItemComboItem[]
}

export type EventListItemAliasValues = {
    alias: string
    value: string
    value2: string
}

export type EventListItemBooking = {
    id: number
    Cost: number
    from: DateTime
    to: DateTime
}

export type EventListItemCashOrder = {
    id?: number
    created_at?: DateTime
    type?: CashOrderType
    sum?: number
    comment?: string
}

export type EventListItemClientSession = {
    id?: number
    elapsed?: number
    finished_at?: DateTime
    time_left?: number
    expires_at?: DateTime
    is_per_minute?: boolean
    total_cost?: number
}

export type EventListItemCombo = {
    id?: number
    title?: string
    host_group_id?: number
    host_group_title?: string
    tariff_id?: number
    tariff_title?: string
}

export type EventListItemComboItem = {
    id?: number
    entity_id?: number
    entity_type?: string
    title?: string
    amount?: number
    price?: number
}

export type EventListItemIdTime = {
    id?: number
    timestamp?: DateTime
}

export type EventListItemIdTitle = {
    id?: number
    title?: string
}

export type EventListItemIdTitleValueF = {
    id?: number
    title?: string
    value?: number
}

export type EventListItemIdTitleValueI = {
    id?: number
    title?: string
    value?: number
}

export type EventListItemIdValueF = {
    id?: number
    value?: number
}

export type EventListItemPaymentItem = {
    id?: number
    entity_id?: number
    entity_type?: string
    title?: string
    amount?: number
    sum?: number
}

export type EventListItemTask = {
    id?: number
    creator_uuid?: string
    assigned_to_uuid?: string
    title?: string
    deadline_at?: DateTime
}

export type EventListItemUser = {
    uuid?: string
    phone?: string
    email?: string
    nickname?: string
    first_name?: string
    last_name?: string
}

export type EventListItemWarehouseItem = {
    id?: number
    entity_id?: number
    entity_type?: string
    title?: string
    value?: number
    value2?: number
}

export type EventListPaginated = {
    paginatorInfo?: PaginatorInfo
    data: EventListItem[]
}

export type EventPaginated = {
    paginatorInfo?: PaginatorInfo
    data: Event[]
}

export type EventsInput = {
    types: string[]
    start?: DateTime
    finish?: DateTime
    work_shift_id?: number
    q?: string
}

export type ExternalPaymentData = {
    external_id?: string
    external_method?: string
}

export type ExternalPaymentDataInput = {
    external_id?: string
    external_method?: string
}

export type FeatureFlags = {
    subscription: string
    expires_at: DateTime
    modules: string[]
    host_count: number
    used_trial: boolean
}

export type FilterInput = {
    groupUUID?: string
}

export type FinishWorkShiftInput = {
    comment?: string
}

export type FinishedWorkShiftInput = {
    from: Date
    to: Date
}

export type FlagInput = {
    value: boolean
}

export type FreeGameAccount = {
    id: number
    login: string
    password: string
}

export type GameAccount = {
    id: number
    login: string
    password: string
    group: GameAccountGroup
    host?: Host
    active: boolean
    status: GameAccountStatus
    busy: boolean
}

export type GameAccountGroup = {
    id: number
    title: string
    launcher: GameAccountLauncher
    accounts: GameAccount[]
    shortcuts: Shortcut[]
}

export type GameAccountGroupInput = {
    title: string
    launcher: GameAccountLauncher
}

export type GameAccountLauncher = "STEAM" | "EGS" | "BATTLENET" | "ORIGIN" | "EA" | "VKPLAY"

export type GameAccountStatus = "OFFLINE" | "ONLINE" | "IN_GAME"

export type GetActiveClientListInput = {
    from?: DateTime
    to?: DateTime
    preset?: DateReportEnum
    sort: SortActiveClientEnum
}

export type GetCurrentTariff = {
    client_session_id: number
}

export type Good = {
    id: number
    title: string
    subtitle: string
    comment: string
    cost: number
    wholesale_cost: number
    tax_percent: number
    unit_name: string
    unit_value: number
    amount: number
    image: string
    use_global_discounts: boolean
    created_at: DateTime
    state: WarehouseState
    tax_system?: TaxSystem
    vat?: Vat
    ean?: string
    use_fair_sign: boolean
    is_excise: boolean
}

export type GoodInput = {
    title: string
    subtitle?: string
    comment?: string
    cost: number
    wholesale_cost: number
    tax_percent?: number
    unit_name?: string
    unit_value?: number
    amount?: number
    image?: string
    use_global_discounts: boolean
    tax_system?: TaxSystem
    vat?: Vat
    ean?: string
    use_fair_sign?: boolean
    is_excise?: boolean
}

export type GoodsInput = {
    client_uuid?: string
}

export type Host = {
    id: number
    group_id: number
    group: HostGroup
    type_id?: number
    position?: number
    alias: string
    comment?: string
    mac_addr?: MacAddress
    ip_addr?: IpAddress
    dns_name?: string
    coord_x?: number
    coord_y?: number
    is_deleted: boolean
    in_service: boolean
    created_at: DateTime
    info?: HostInfo
    counters?: HostCounters
    sessions: HostSession[]
    client_sessions: ClientSession[]
    shell_mode: ShellMode
    last_online?: DateTime
    online: boolean
    bookings: Booking[]
    device_has_changed: boolean
    device_updated_at?: DateTime
    device_changes: HostDevice[]
    locked: boolean
    admin_called_at?: DateTime
}

export type HostAccessTokenInput = {
    mac_address: MacAddress
    public_key: string
}

export type HostCommand = {
    id: number
    action: HostCommandAction
    status?: string
    param?: string
}

export type HostCommandAction = "SHUTDOWN" | "REBOOT" | "ALLOW_ADMIN_MODE" | "DISABLE_SHELL" | "SHOW_MESSAGE" | "LOGOFF" | "RUN" | "SEND_LOGS" | "SHELL_UNINSTALL" | "SHELL_UPDATE"

export type HostCounters = {
    cpu_temp: number
    disk_temp: number
    disk_status: HostDiskInfo[]
    active_window?: string
}

export type HostDevice = {
    alias: string
    old: string
    new: string
}

export type HostDiskInfo = {
    letter: string
    total: number
    used: number
}

export type HostDiskInfoInput = {
    letter: string
    total: number
    used: number
}

export type HostGroup = {
    id: number
    title: string
    created_at: DateTime
    updated_at: DateTime
    hosts: Host[]
    customization?: HostGroupCustomization
}

export type HostGroupCustomization = {
    color?: string
    background?: string
    screensaver?: string
}

export type HostGroupCustomizationInput = {
    color?: string
    background?: string
    screensaver?: string
}

export type HostGroupInput = {
    title: string
    customization?: HostGroupCustomizationInput
}

export type HostGroupOverview = {
    id: number
    title: string
    customization?: HostGroupCustomization
    hosts: HostOverview[]
}

export type HostGroupTitle = {
    id: number
    title: string
}

export type HostInfo = {
    processor?: string
    ram?: string
    video?: string
    disc?: string
    shell_version?: string
}

export type HostInput = {
    group_id: number
    type_id: number
    position?: number
    alias: string
    comment?: string
    mac_addr?: MacAddress
    ip_addr?: IpAddress
    dns_name?: string
    coord_x?: number
    coord_y?: number
}

export type HostOverview = {
    id: number
    group_id: number
    type_id?: number
    position?: number
    alias: string
    mac_addr?: MacAddress
    ip_addr?: IpAddress
    dns_name?: string
    coord_x?: number
    coord_y?: number
    in_service: boolean
    online: boolean
    info?: HostInfo
    counters?: HostCounters
    shell_mode: ShellMode
    device_has_changed: boolean
    locked: boolean
    bookings: Booking[]
    user?: User
    client_sessions: ClientSessionOverview[]
    comment?: string
    admin_called_at?: DateTime
}

export type HostSession = {
    id: number
    host_id: number
    alias?: string
    user?: User
    started_at: DateTime
    finished_at?: DateTime
}

export type HostSessionInput = {
    processor?: string
    ram?: string
    video?: string
    disc?: string
    shell_version?: string
    ip_addr?: string
}

export type HostStatus = {
    client_session?: ClientSession
    current_tariff?: CurrentTariff
    command?: HostCommand
    host: Host
}

export type HostType = {
    id: number
    title: string
    description?: string
    created_at: DateTime
    updated_at?: DateTime
}

export type HostTypeInput = {
    title: string
    description: string
}

export type HostsOccupationReport = {
    from: DateTime
    to: DateTime
}

export type Import = {
    id: number
    status: ImportStatusEnum
    failures: ImportFailure[]
    created_at: DateTime
    finished_at?: DateTime
}

export type ImportFailure = {
    row?: number
    errors?: string[]
    values?: string[]
    attribute?: string
}

export type ImportStatusEnum = "NEW" | "PROCESSING" | "FINISH" | "FINISH_HAS_ERROR"

export type ImportUserColumnsInput = {
    first_name?: number
    last_name?: number
    phone?: number
    deposit?: number
    discount?: number
    email?: number
}

export type ImportUserHoursColumnsInput = {
    phone?: number
    time?: number
}

export type License = {
    id: number
    expires_at: DateTime
    payment: LicensePaymentData
}

export type LicenseModulePrice = {
    module_id: number
    price: number
}

export type LicensePayment = {
    id: string
    url: string
    license_payment_method: LicensePaymentMethod
    additional?: AdditionalPaymentData
}

export type LicensePaymentData = {
    id: number
    created_at: DateTime
    host_count: number
    payment_method: string
    bill_url?: string
    license_tariff: LicenseTariff
    modules: LicenseTariffModule[]
    status: LicensePaymentStatus
    months: number
    cost: number
    contractor?: Contractor
}

export type LicensePaymentInput = {
    license_price: LicensePriceInput
    contractor_id?: number
    success_url?: string
    fail_url?: string
}

export type LicensePaymentMethod = "CARD" | "BILL" | "CLOUD_PAYMENTS"

export type LicensePaymentStatus = "NEW" | "SUCCESS" | "FAILED"

export type LicensePrice = {
    sum: number
    total_sum: number
    host_price: number
    modules: LicenseModulePrice[]
    discount_value: number
    loyalty_discount?: number
    promocode_discount?: number
    month_discount?: number
    debt?: number
}

export type LicensePriceInput = {
    host_count: number
    license_tariff_id: number
    promocode?: string
    license_payment_method: LicensePaymentMethod
    auto_payment?: boolean
    club_id: number
    modules: number[]
    months: number
}

export type LicenseTariff = {
    id: number
    name: string
    description?: string
    cost: number
    module_categories?: LicenseTariffCategory[]
}

export type LicenseTariffCategory = {
    id: number
    name: string
    modules?: LicenseTariffModule[]
    tariff_id: number
}

export type LicenseTariffCategoryInput = {
    id: number
    name: string
    tariff_id: number
}

export type LicenseTariffGrid = {
    tariffs: LicenseTariff[]
    modules: LicenseTariffModule[]
}

export type LicenseTariffInput = {
    name: string
    description?: string
    cost: number
    kz_cost: number
}

export type LicenseTariffModule = {
    id: number
    name: string
    description?: string
    cost: number
    category_id: number
    alias: string
}

export type LicenseTariffModuleInput = {
    name: string
    description?: string
    cost: number
    kz_cost: number
    category_id: number
    alias: string
}

export type LoginExistsInput = {
    login: string
}

export type LoginInput = {
    login: string
    password: string
    company_id?: number
}

export type MagicInput = {
    id: number
    id2: number
}

export type Me = {
    id: number
    uuid: string
    creator?: User
    login: string
    nickname: string
    phone: string
    email?: Email
    dob: Date
    first_name?: string
    last_name?: string
    middle_name?: string
    deposit: number
    user_discount?: number
    last_client_activity?: DateTime
    last_worker_activity?: DateTime
    created_at: DateTime
    updated_at: DateTime
    banned_at?: DateTime
    roles: Role[]
    permissions: Permission[]
    pausable_info?: PausableClientSession
    age: number
    is_owner: boolean
    achievements: UserAchievements
    avatar_url: string
    news_consent: NewsConsent
}

export type MethodType = "SMS" | "CASCADE" | "FLASH_CALL" | "EMAIL"

export type MoneyByTypes = {
    cash: number
    card: number
    deposit: number
    bonus: number
    total: number
    currency?: Currency
}

export type MoneyData = {
    good: number
    service: number
    tariff: number
    deposit: number
}

export type News = {
    data: Article[]
    paginatorInfo: PaginatorInfo
}

export type NewsConsent = {
    isGiven: boolean
    givenAt?: DateTime
    revokedAt?: DateTime
}

export type OrderByDirection = "ASC" | "DESC"

export type Organization = {
    id: number
    title: string
    phone?: string
    email?: Email
    address?: string
    hosts_count: number
    verified_at?: DateTime
    activated_at?: DateTime
    banned_at?: DateTime
    created_at: DateTime
    updated_at: DateTime
    deleted_at?: DateTime
}

export type OrganizationConfirmationCodeInput = {
    phone: string
    type: OrganizationConfirmationCodeType
    code: string
}

export type OrganizationConfirmationCodeType = "REGISTER" | "RESET_PASSWORD"

export type OrganizationInput = {
    email: Email
}

export type OrganizationLoginInput = {
    phone: string
    password: string
}

export type OrganizationPaymentCard = {
    id: number
    card_mask: string
    card_payment_system: string
    card_expires_at: string
    created_at: DateTime
}

export type OrganizationRegisterInput = {
    phone: string
    email: Email
    password: string
    password_confirmation: string
    captcha_token: string
}

export type OrganizationResetPasswordInput = {
    hash: string
    code: string
    password: string
    password_confirmation: string
}

export type OrganizationSendConfirmationCodeInput = {
    phone: string
    type: OrganizationConfirmationCodeType
}

export type OrganizationStartResetPasswordInput = {
    phone: string
}

export type OrganizationUserType = "OWNER" | "DIRECTOR" | "SYSTEM_ADMINISTRATOR" | "HALL_ADMINISTRATOR"

export type OrganizationVerifyConfirmationCodeInput = {
    hash: string
    code: string
}

export type PaginateType = "PAGINATOR"

export type PaginatorInfo = {
    count: number
    currentPage: number
    firstItem?: number
    hasMorePages: boolean
    lastItem?: number
    lastPage: number
    perPage: number
    total: number
}

export type PausableClientSession = {
    id: number
    tariff: Tariff
    duration: number
    elapsed: number
    status: ClientSessionType
    created_at: DateTime
    expires_at: DateTime
}

export type Payment = {
    id: number
    client?: User
    client_session?: ClientSession
    work_shift?: WorkShift
    promo_code?: PromoCode
    discount?: Discount
    method: PaymentMethod
    status: PaymentStatus
    sum: number
    created_at: DateTime
    items: PaymentItem[]
    is_refunded: boolean
    not_refundable: boolean
    card_sum: number
    cash_sum: number
    comment?: string
    cashback: number
    external_data?: ExternalPaymentData
}

export type PaymentHistory = {
    paginatorInfo: PaginatorInfo
    data: PaymentHistoryItem[]
}

export type PaymentHistoryItem = {
    created_at: DateTime
    title: string
    amount: number
    sum: number
    card_sum: number
    cash_sum: number
    worker?: User
    items: PaymentItem[]
    is_refunded: boolean
    paymentMethod: PaymentMethod
}

export type PaymentInput = {
    method: PaymentMethod
    client_uuid?: string
    client_session_id?: number
    promo_code_id?: number
    discount_id?: number
    items: PaymentItemInput[]
    card_sum?: number
    comment?: string
    external_data?: ExternalPaymentDataInput
}

export type PaymentItem = {
    id: number
    payment_id: number
    combo_id?: number
    type: PaymentItemType
    entity?: PaymentItemEntity
    amount: number
    sum: number
}

export type PaymentItemEntity = Good | Service | Tariff | Combo

export type PaymentItemInput = {
    type: PaymentItemType
    entity_id?: number
    host_id?: number
    amount: number
    sum?: number
}

export type PaymentItemType = "DEPOSIT" | "GOOD" | "SERVICE" | "TARIFF" | "COMBO"

export type PaymentMethod = "CARD" | "CASH" | "DEPOSIT" | "BONUS" | "COMPOSITE" | "CLOUD_PAYMENTS" | "POST_PAY"

export type PaymentReportItem = {
    value: number
    currency?: Currency
}

export type PaymentStatus = "PENDING" | "PAID" | "UNPAID"

export type PaymentTransaction = {
    id: string
    company_id: number
    service: ServiceEnum
    amount: number
    sum: number
    client: User
    status: string
    additional?: AdditionalTransactionData
    created_at: DateTime
}

export type PaymentTransactionInput = {
    company_id: number
    service: ServiceEnum
    amount: number
}

export type PaymentTransactionPaginated = {
    paginatorInfo: PaginatorInfo
    data: PaymentTransaction[]
}

export type PaymentTransactionStatus = "PENDING" | "SUCCESS" | "EXPIRED" | "FAILED" | "CANCELED"

export type PaymentsReport = {
    from: DateTime
    to: DateTime
}

export type PenaltyHostInput = {
    host_id: number
    seconds: number
}

export type Permission = {
    id: number
    alias: string
    title: string
    description?: string
}

export type PermissionData = {
    id: number
    alias: string
    enabled: boolean
    locked: boolean
    title: string
    description?: string
}

export type PermissionInput = {
    id: number
    alias: string
    enabled: boolean
}

export type PhoneExistsInput = {
    phone: string
}

export type ProcessPostPaymentInput = {
    method?: PaymentMethod
    cash_sum?: number
    comment?: string
    confirm_pass?: string
}

export type ProcessStatsInput = {
    windows: ProcessStatsItemInput[]
    applications: ProcessStatsItemInput[]
}

export type ProcessStatsItemInput = {
    name: string
    path: string
    seconds: number
}

export type PromoCode = {
    id: number
    author: User
    client?: User
    code: string
    value: number
    amount?: number
    entity?: CartEntity
    entity_id?: number
    created_at: DateTime
    is_tracked: boolean
}

export type PromoCodeInput = {
    client_id?: number
    code: string
    value: number
    amount?: number
    entity?: CartEntity
    entity_id?: number
    is_tracked?: boolean
}

export type PromoCodePaginated = {
    paginatorInfo?: PaginatorInfo
    data: PromoCode[]
}

export type RefreshTokenInput = {
    refresh_token: string
}

export type RefundPaymentInput = {
    id: number
    comment?: string
}

export type Region = {
    alias: string
    code: string
}

export type RegisterHostInput = {
    group_id: number
    mac_addr: MacAddress
    dns_name: string
    alias: string
}

export type RegisterInput = {
    login: string
    email?: Email
    phone: string
    password: string
    dob: Date
    news_consent?: boolean
}

export type Report = {
    statSeances: StatBySeances
    statServices: StatByServices
    statGoods: StatByGoods
    statOrders: StatByOrders
    statDeposit: MoneyByTypes
    statMoney: MoneyByTypes
}

export type ReportInput = {
    start: DateTime
    end: DateTime
}

export type ResetPasswordInput = {
    phone: string
    confirmation_code: string
    password: string
    password_confirmation: string
}

export type ResultHostCommandInput = {
    id: number
    status: boolean
    result?: string
}

export type Reward = {
    name: string
    value: number
}

export type RewardRequest = {
    name: string
    value: number
}

export type Role = {
    id: number
    alias: string
    title: string
    description?: string
    is_service: boolean
    priority: number
    permissions: Permission[]
}

export type RulesMessage = {
    rule: string
    message: string
}

export type Seance = {
    id: number
    client_session: ClientSession
    tariff: Tariff
    duration: number
    elapsed: number
    payment?: Payment
    payment_item?: PaymentItem
    status: ClientSessionType
    created_at: DateTime
    started_at: DateTime
    finished_at?: DateTime
    cancelled_at?: DateTime
}

export type SeanceOverview = {
    id: number
    status: ClientSessionType
    tariff: TariffOverview
}

export type SearchComboInput = {
    q?: string
    host_group_id?: number
}

export type SearchReportInput = {
    q: string
}

export type SendConfirmationCodeInput = {
    phone: string
    type?: ConfirmationCodeType
    method?: MethodType
    captcha_token?: string
}

export type SendWakePacketInput = {
    host_id: number
}

export type Service = {
    id: number
    title: string
    cost: number
    wholesale_cost: number
    tax_percent?: number
    use_global_discounts: boolean
    created_at: DateTime
    tax_system?: TaxSystem
    vat?: Vat
    ean?: string
}

export type ServiceEnum = "CLOUD_PAYMENTS"

export type ServiceInput = {
    title: string
    cost: number
    wholesale_cost: number
    tax_percent?: number
    use_global_discounts: boolean
    tax_system?: TaxSystem
    vat?: Vat
    ean?: string
}

export type ServicesInput = {
    client_uuid?: string
}

export type SessionsMoneyReport = {
    from: DateTime
    to: DateTime
    slice: SliceType
}

export type SetCloudPaymentsAccountToCompanyInput = {
    action: CloudPaymentsAccountAction
    publicId?: string
    secretKey?: string
}

export type SetDepositInput = {
    client_uuid: string
    value: number
}

export type SetTelegramChannelInput = {
    value?: string
}

export type SetUserDiscountInput = {
    client_uuid: string
    value: number
}

export type Setting = {
    id: number
    alias: string
    value: string
    updated_at?: DateTime
}

export type SettingPair = {
    alias: string
    value?: string
    updated_at?: DateTime
}

export type ShellMode = "NORMAL" | "DISABLED" | "HIGH_ACCESS"

export type Shortcut = {
    id: number
    title: string
    path: string[]
    group_id: number
    group: ShortcutGroup
    type: AppType
    popular: boolean
    sort: number
    args?: string
    icon_path?: string
    password?: string
    main_picture?: string
    game_account_group?: GameAccountGroup
    run_as_admin: boolean
    work_dir?: string
    only_for_registered?: boolean
    age_rating?: number
    free_run?: boolean
}

export type ShortcutGroup = {
    id: number
    title: string
    sort: number
    groupType: AppGroupType
}

export type ShortcutGroupInput = {
    title: string
    sort?: number
    groupType?: AppGroupType
}

export type ShortcutGroupItem = {
    title: string
    groupType?: AppGroupType
}

export type ShortcutImageInput = {
    file: Upload
}

export type ShortcutInput = {
    title?: string
    group_id?: number
    game_account_group_id?: number
    path: string[]
    paths?: ShortcutPath
    type?: AppType
    popular?: boolean
    sort?: number
    args?: string
    icon_path?: string
    password?: string
    main_picture?: string
    run_as_admin?: boolean
    work_dir?: string
    only_for_registered?: boolean
    age_rating?: number
    free_run?: boolean
}

export type ShortcutPath = {
    value: string[]
}

export type ShortcutStatsInput = {
    id: number
}

export type SliceType = "DAY" | "WEEK" | "MONTH"

export type SortActiveClientEnum = "ByPayments" | "ByTime"

export type SortInput = {
    field: string
    direction: string
}

export type StartClientSessionInput = {
    user_id?: number
    host_id?: number
    post_paid?: boolean
}

export type StartWorkShiftInput = {
    cash: number
}

export type StatByGoods = {
    amount: number
    money: MoneyByTypes
}

export type StatByOrders = {
    rko: number
    pko: number
}

export type StatByRefunds = {
    amount: number
    money: MoneyByTypes
}

export type StatBySeances = {
    amount: number
    hours: number
    money: MoneyByTypes
}

export type StatByServices = {
    amount: number
    money: MoneyByTypes
}

export type Tariff = {
    id: number
    title: string
    duration: number
    use_global_discounts: boolean
    has_fixed_finish_time: boolean
    created_at: DateTime
    is_active?: boolean
    per_minute: boolean
    show_in_shell: boolean
    show_in_billing: boolean
    schedules: TariffPeriod[]
    sell_schedules: TariffPeriod[]
    price_list: TariffPricelist[]
    pausable: boolean
    lifetime: number
    ean?: string
    highlighted?: boolean
    description?: string
    sort: number
    is_tracked: boolean
    disable_sale_receipt_printing: boolean
    online_booking_enabled: boolean
    use_on_holidays: boolean
}

export type TariffGridInput = {
    host_group_id?: number
    host_id?: number
    client_id?: number
    client_uuid?: string
    shift?: number
}

export type TariffGridItem = {
    id: number
    title: string
    duration: number
    cost: number
    time_from: Time
    time_to: Time
    per_minute: boolean
    use_global_discounts: boolean
    has_fixed_finish_time: boolean
    currency: Currency
    booked: boolean
    ends_in: number
    pausable: boolean
    highlighted?: boolean
    lifetime: number
    disable_sale_receipt_printing: boolean
}

export type TariffInput = {
    use_global_discounts: boolean
    has_fixed_finish_time: boolean
    duration: number
    title: string
    is_active: boolean
    per_minute: boolean
    show_in_shell: boolean
    show_in_billing?: boolean
    schedules: TariffPeriodInput[]
    sell_schedules: TariffPeriodInput[]
    price_list: TariffPricelistInput[]
    pausable?: boolean
    lifetime?: number
    ean?: string
    highlighted?: boolean
    description?: string
    sort?: number
    is_tracked?: boolean
    disable_sale_receipt_printing?: boolean
    online_booking_enabled?: boolean
    use_on_holidays?: boolean
}

export type TariffKind = "PER_MINUTE" | "PAUSABLE" | "FIXED" | "PACKET"

export type TariffOverview = {
    id: number
    title: string
    kind: TariffKind
}

export type TariffPaginated = {
    paginatorInfo?: PaginatorInfo
    data: Tariff[]
}

export type TariffPeriod = {
    start: number
    end: number
}

export type TariffPeriodInput = {
    start: number
    end: number
}

export type TariffPricelist = {
    host_groups: HostGroup[]
    cost_map: TariffPricelistCostMap[]
}

export type TariffPricelistCostMap = {
    title: string
    value: number
    currency: Currency
}

export type TariffPricelistCostMapInput = {
    title: TariffPricelistCostMapType
    value: number
    currency: string
}

export type TariffPricelistCostMapType = "DEFAULT" | "USER_COST"

export type TariffPricelistInput = {
    host_groups: number[]
    cost_map: TariffPricelistCostMapInput[]
}

export type TariffSchedule = {
    title: string
    cost: number
    user_cost: number
    intervals: TariffScheduleInterval[]
}

export type TariffScheduleInterval = {
    week_day: number
    time_from: Time
    time_to: Time
}

export type TaxSystem = "SIMPLE_INCOME" | "SIMPLE_INCOME_EXPENSES" | "PATENT" | "MAIN"

export type UnifiedReport = {
    labels: string[]
    extraLabels: string[]
    extraLabels2: string[]
    extraLabels3: string[]
    keys: string[]
    points: number
    data: UnifiedReportData[]
    url?: string
    summary: UnifiedSummaryData[]
}

export type UnifiedReportData = {
    values: number[]
}

export type UnifiedSummaryData = {
    title: string
    value: number
}

export type UniqueUsersReport = {
    from: DateTime
    to: DateTime
    slice: SliceType
}

export type UpcomingAutoPaymentData = {
    card: OrganizationPaymentCard
    amount: number
    payment_date: Date
}

export type UpdateClientMeInput = {
    first_name?: string
    last_name?: string
    middle_name?: string
    nickname: string
    email: Email
    dob: Date
    city?: string
    avatar_url?: string
}

export type UpdateCompanyPermissionsInput = {
    company_permissions: CompanyPermissionsInput[]
}

export type UpdateGameAccountInput = {
    login: string
    password?: string
    active: boolean
    group_id: number
}

export type UpdateHostCommandStatusInput = {
    id: number
    success: boolean
}

export type UpdateHostStateInput = {
    cpu_temp: number
    disk_temp: number
    disk_status: HostDiskInfoInput[]
    active_window: string
    com_result?: ResultHostCommandInput
}

export type UpdateMeInput = {
    first_name?: string
    last_name?: string
    middle_name?: string
    nickname?: string
}

export type UpdateMultipleSettingsInput = {
    list: UpdateSettingInput[]
}

export type UpdatePasswordInput = {
    old_password: string
    password: string
    password_confirmation: string
}

export type UpdateSettingInput = {
    alias: string
    value?: string
}

export type UpdateShortcutGroupSortInput = {
    id: number
    sort: number
}

export type UpdateShortcutSortInput = {
    id: number
    sort: number
}

export type UpdateTariffsSortInput = {
    id: number
    sort: number
}

export type UpdateWorkerInput = {
    first_name: string
    last_name: string
    middle_name: string
    role_ids: number[]
}

export type User = {
    id: number
    uuid: string
    group?: UserGroup
    creator?: User
    login: string
    nickname: string
    phone?: string
    email?: Email
    phone_suffix: string
    dob: Date
    country_code?: string
    roles: Role[]
    first_name?: string
    last_name?: string
    middle_name?: string
    deposit: number
    last_client_activity?: DateTime
    last_worker_activity?: DateTime
    last_comment?: Comment
    user_discount?: number
    created_at: DateTime
    updated_at: DateTime
    disabled_at?: DateTime
    banned_at?: DateTime
    total_hours: number
    pausable_info?: PausableClientSession
    city?: string
    avatar_url: string
    news_consent: NewsConsent
}

export type UserAchievement = {
    id: string
    has: boolean
    name: string
    icon_url?: string
    conditions: Condition[]
    rewards: Reward[]
    progress: number
}

export type UserAchievements = {
    single: UserAchievement[]
    continuous: UserAchievement[]
}

export type UserClub = {
    id: number
    name: string
    address: string
    tariffName?: string
    workShiftStatus: WorkShiftStatus
    permitted: boolean
    operatorFirstName?: string
    operatorLastName?: string
}

export type UserClubsInput = {
    login: string
    password: string
}

export type UserGroup = {
    uuid: string
    title: string
    user_count: number
    discount: number
    created_at: DateTime
}

export type UserGroupInput = {
    title: string
    discount: number
}

export type UserPaginated = {
    paginatorInfo?: PaginatorInfo
    data: User[]
    total_deposits?: number
}

export type UserTableInput = {
    file: Upload
}

export type UsersInput = {
    q?: string
}

export type ValidatePromoCodeInput = {
    client_id?: number
    entity?: CartEntity
    entity_id?: number
    code: string
}

export type Vat = "NO_NDS" | "NDS_0" | "NDS_10" | "NDS_20" | "NDS_110" | "NDS_120"

export type VerifyUserInput = {
    code: string
}

export type Versions = {
    easter_egg?: string
    frontend?: string
    backend?: string
}

export type WarehouseOperationType = "ADD" | "DISPOSAL" | "SOLD"

export type WarehouseState = {
    received: number
    income: number
    sold: number
    disposal: number
}

export type WorkShift = {
    id: number
    comment?: string
    worker: User
    created_at: DateTime
    finished_at?: DateTime
    events: WorkShiftEvent[]
    money: WorkShiftMoney
    payments: Payment[]
    cashOrders: CashOrder[]
}

export type WorkShiftEvent = {
    id: number
    type: string
    created_at: DateTime
}

export type WorkShiftInput = {
    created_from?: DateTime
    created_to?: DateTime
    worker_id?: number
}

export type WorkShiftMoney = {
    sum: MoneyByTypes
    cash_on_start: number
}

export type WorkShiftPaginated = {
    paginatorInfo?: PaginatorInfo
    data: WorkShift[]
}

export type WorkShiftPaymentOverviewComboData = {
    title: string
    amount: number
    sum: number
}

export type WorkShiftPaymentOverviewData = {
    id: number
    worker: User
    cash_on_start: number
    total: number
    deposit: number
    bonus: number
    refunded: number
    cash: number
    card: number
    cash_orders: CashOrder[]
    sum: MoneyData
    currency?: Currency
    created_at: DateTime
    finished_at?: DateTime
    goods: WorkShiftPaymentOverviewGoodData[]
    services: WorkShiftPaymentOverviewServiceData[]
    combos: WorkShiftPaymentOverviewComboData[]
}

export type WorkShiftPaymentOverviewGoodData = {
    title: string
    cost: number
    amount: number
    in_stock: number
    sum: number
}

export type WorkShiftPaymentOverviewServiceData = {
    title: string
    amount: number
    sum: number
}

export type WorkShiftStatus = "NONE" | "OPEN" | "MY" | "LOCKED"

export type WorkShiftsReport = {
    from: DateTime
    to: DateTime
    workerUuid?: string
}

export type WorkerTask = {
    id: number
    creator: User
    title: string
    assigned_to?: User
    executor?: User
    created_at: DateTime
    updated_at?: DateTime
    deadline_at?: DateTime
    finished_at?: DateTime
}

export type WorkerTaskInput = {
    title: string
    assigned_to?: number
    deadline_at?: DateTime
}

export type WorkerTaskPaginated = {
    paginatorInfo?: PaginatorInfo
    data: WorkerTask[]
}

export type WorkersInput = {
    q?: string
}

export type pickGameAccountInput = {
    shortcut_id: number
}
