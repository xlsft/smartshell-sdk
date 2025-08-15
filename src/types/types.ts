export type Upload = string

export type Decimal = number

export type Email = `${string}@${string}.${string}`;

export type IpAddress = `${number}.${number}.${number}.${number}`;

export type MacAddress = `${string}:${string}:${string}:${string}:${string}:${string}`;

export type Date = `${number}${number}${number}${number}-${number}${number}-${number}${number}`

export type Time = `${number}${number}:${number}${number}:${number}${number}`

export type DateTime = `${Date} ${Time}`

/**
* # type `AccessToken`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/AccessToken
* 
* `@xlsoftware/smartshell-sdk`
*/
export type AccessToken = {
    token_type: string
    expires_in: number
    access_token: string
    refresh_token: string
    metadata?: AccessTokenMetadata
}

/**
* # type `AccessTokenMetadata`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/AccessTokenMetadata
* 
* `@xlsoftware/smartshell-sdk`
*/
export type AccessTokenMetadata = {
    first_time_login: boolean
}

/**
* # type `Achievement`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/Achievement
* 
* `@xlsoftware/smartshell-sdk`
*/
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

/**
* # type `AchievementInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/AchievementInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type AchievementInput = {
    name: string
    icon_url?: string
    conditions: ConditionRequest[]
    rewards: RewardRequest[]
    status: AchievementStatus
}

/**
* # enum `AchievementStatus`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/AchievementStatus
* 
* `@xlsoftware/smartshell-sdk`
*/
export type AchievementStatus = "ACTIVE" | "DISABLED"

/**
* # type `ActiveClient`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ActiveClient
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ActiveClient = {
    client_uuid: string
    nickname: string
    avatar_url?: string
    payments: Decimal
    total_seconds: number
    last_client_activity?: DateTime
}

/**
* # type `AdditionalLicensePaymentInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/AdditionalLicensePaymentInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type AdditionalLicensePaymentInput = {
    license_price: AdditionalLicensePriceInput
    contractor_id?: number
    success_url?: string
    fail_url?: string
}

/**
* # type `AdditionalLicensePriceInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/AdditionalLicensePriceInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type AdditionalLicensePriceInput = {
    host_count: number
    promocode?: string
    license_payment_method: LicensePaymentMethod
    club_id: number
    modules: number[]
}

/**
* # type `AdditionalPaymentData`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/AdditionalPaymentData
* 
* `@xlsoftware/smartshell-sdk`
*/
export type AdditionalPaymentData = {
    public_id?: string
    org_id: number
    amount: Decimal
    description: string
    currency: Currency
    data?: string
}

/**
* # type `AdditionalTransactionData`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/AdditionalTransactionData
* 
* `@xlsoftware/smartshell-sdk`
*/
export type AdditionalTransactionData = {
    public_id?: string
    data?: string
}

/**
* # type `AgeRating`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/AgeRating
* 
* `@xlsoftware/smartshell-sdk`
*/
export type AgeRating = {
    alias: string
    value: number
}

/**
* # enum `AppGroupType`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/AppGroupType
* 
* `@xlsoftware/smartshell-sdk`
*/
export type AppGroupType = "APPLICATION" | "GAME" | "DEFAULT"

/**
* # enum `AppType`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/AppType
* 
* `@xlsoftware/smartshell-sdk`
*/
export type AppType = "APPLICATION" | "GAME"

/**
* # type `ApplicationsReportInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ApplicationsReportInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ApplicationsReportInput = {
    from: DateTime
    to: DateTime
    hostGroupId?: number
    hostId?: number
    type: ApplicationsReportType
}

/**
* # enum `ApplicationsReportType`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ApplicationsReportType
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ApplicationsReportType = "APPLICATION" | "WINDOW" | "CLICK"

/**
* # type `Article`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/Article
* 
* `@xlsoftware/smartshell-sdk`
*/
export type Article = {
    id: string
    content: string
    title: string
    preview: string
    url: string
    createdAt: string
}

/**
* # type `ArticleLink`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ArticleLink
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ArticleLink = {
    label: string
    url: string
}

/**
* # type `ArticleLinkInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ArticleLinkInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ArticleLinkInput = {
    label?: string
    url?: string
}

/**
* # type `BankAccountInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/BankAccountInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type BankAccountInput = {
    bank_name: string
    bank_bik: string
    bank_kpp?: string
    bank_account: string
    correspondent_account: string
    service_name?: string
    tax: Tax
}

/**
* # type `Beneficiary`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/Beneficiary
* 
* `@xlsoftware/smartshell-sdk`
*/
export type Beneficiary = {
    id: string
    organization_id: number
    type: string
    opf?: OpfType
    full_name: string
    phone?: string
    email?: string
    inn: string
    status: string
    balance: Decimal
    tax: Tax
    service_name?: string
    companies: LiteCompany[]
    locked_by?: BeneficiaryDeal
    error?: string
    created_at: DateTime
}

/**
* # type `BeneficiaryBalance`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/BeneficiaryBalance
* 
* `@xlsoftware/smartshell-sdk`
*/
export type BeneficiaryBalance = {
    balance: Decimal
    commission: Decimal
    sum: Decimal
    net_sum: Decimal
    locked: boolean
}

/**
* # type `BeneficiaryDeal`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/BeneficiaryDeal
* 
* `@xlsoftware/smartshell-sdk`
*/
export type BeneficiaryDeal = {
    id: string
    sum: Decimal
    beneficiary: Beneficiary
    commission: Decimal
    status: string
    created_at: DateTime
}

/**
* # enum `BeneficiaryType`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/BeneficiaryType
* 
* `@xlsoftware/smartshell-sdk`
*/
export type BeneficiaryType = "UL_RESIDENT" | "IP_RESIDENT"

/**
* # type `BonusHistory`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/BonusHistory
* 
* `@xlsoftware/smartshell-sdk`
*/
export type BonusHistory = {
    paginatorInfo: PaginatorInfo
    data: BonusHistoryItem[]
}

/**
* # type `BonusHistoryItem`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/BonusHistoryItem
* 
* `@xlsoftware/smartshell-sdk`
*/
export type BonusHistoryItem = {
    delta: Decimal
    old_value: Decimal
    new_value: Decimal
    type: string
    type_id: number
    add: boolean
    worker_first_name?: string
    worker_last_name?: string
    created_at: DateTime
}

/**
* # type `BonusHistoryReportInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/BonusHistoryReportInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type BonusHistoryReportInput = {
    from: DateTime
    to: DateTime
    orderByType?: BonusReportOrderByType
    limit?: number
    offset?: number
}

/**
* # type `BonusReport`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/BonusReport
* 
* `@xlsoftware/smartshell-sdk`
*/
export type BonusReport = {
    from: DateTime
    to: DateTime
    userId?: number
}

/**
* # enum `BonusReportOrderByType`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/BonusReportOrderByType
* 
* `@xlsoftware/smartshell-sdk`
*/
export type BonusReportOrderByType = "MANAGED"

/**
* # type `Booking`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/Booking
* 
* `@xlsoftware/smartshell-sdk`
*/
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

/**
* # enum `BookingClientStatus`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/BookingClientStatus
* 
* `@xlsoftware/smartshell-sdk`
*/
export type BookingClientStatus = "ACTIVE" | "INACTIVE"

/**
* # type `BookingInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/BookingInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type BookingInput = {
    hosts: number[]
    client?: number
    comment?: string
    from: DateTime
    to: DateTime
    status?: BookingStatus
}

/**
* # type `BookingPaginated`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/BookingPaginated
* 
* `@xlsoftware/smartshell-sdk`
*/
export type BookingPaginated = {
    paginatorInfo?: PaginatorInfo
    data: Booking[]
}

/**
* # type `BookingSettings`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/BookingSettings
* 
* `@xlsoftware/smartshell-sdk`
*/
export type BookingSettings = {
    self_cancellation_enabled: boolean
    cancellation_penalty: number
    cancellation_free_headroom: number
    online_booking_discount: number
}

/**
* # enum `BookingStatus`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/BookingStatus
* 
* `@xlsoftware/smartshell-sdk`
*/
export type BookingStatus = "ACTIVE" | "FINISHED" | "CANCELED" | "REDEEMED" | "REDEEMED_AUTO"

/**
* # type `BoughtTariffsReport`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/BoughtTariffsReport
* 
* `@xlsoftware/smartshell-sdk`
*/
export type BoughtTariffsReport = {
    from: DateTime
    to: DateTime
}

/**
* # enum `CartEntity`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/CartEntity
* 
* `@xlsoftware/smartshell-sdk`
*/
export type CartEntity = "GOOD" | "SERVICE" | "TARIFF"

/**
* # type `CashOrder`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/CashOrder
* 
* `@xlsoftware/smartshell-sdk`
*/
export type CashOrder = {
    id: number
    work_shift: WorkShift
    type: CashOrderType
    sum: Decimal
    comment: string
    created_at: DateTime
}

/**
* # type `CashOrderData`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/CashOrderData
* 
* `@xlsoftware/smartshell-sdk`
*/
export type CashOrderData = {
    rko: Decimal
    pko: Decimal
}

/**
* # type `CashOrderInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/CashOrderInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type CashOrderInput = {
    type: CashOrderType
    sum: number
    comment: string
}

/**
* # enum `CashOrderType`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/CashOrderType
* 
* `@xlsoftware/smartshell-sdk`
*/
export type CashOrderType = "PKO" | "RKO"

/**
* # type `CategoriesInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/CategoriesInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type CategoriesInput = {
    client_uuid?: string
}

/**
* # type `Category`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/Category
* 
* `@xlsoftware/smartshell-sdk`
*/
export type Category = {
    id: number
    company_id: number
    title: string
    goods: Good[]
    show_in_shell: boolean
    sell_periods: CategoryPeriod[]
}

/**
* # type `CategoryInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/CategoryInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type CategoryInput = {
    title: string
    show_in_shell: boolean
    sell_periods: CategoryPeriodInput[]
}

/**
* # type `CategoryPeriod`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/CategoryPeriod
* 
* `@xlsoftware/smartshell-sdk`
*/
export type CategoryPeriod = {
    start: number
    end: number
}

/**
* # type `CategoryPeriodInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/CategoryPeriodInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type CategoryPeriodInput = {
    start: number
    end: number
}

/**
* # type `ChangeClientSessionHostInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ChangeClientSessionHostInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ChangeClientSessionHostInput = {
    host_id: number
}

/**
* # type `ChangeGoodsQuantityInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ChangeGoodsQuantityInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ChangeGoodsQuantityInput = {
    items: ChangeGoodsQuantityItemInput[]
    operation: WarehouseOperationType
    comment?: string
    price?: number
}

/**
* # type `ChangeGoodsQuantityItemInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ChangeGoodsQuantityItemInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ChangeGoodsQuantityItemInput = {
    id: number
    quantity: number
}

/**
* # type `ChangeUsersGroupInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ChangeUsersGroupInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ChangeUsersGroupInput = {
    group_uuid?: string
    users_uuids: string[]
}

/**
* # type `ClientBooking`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClientBooking
* 
* `@xlsoftware/smartshell-sdk`
*/
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

/**
* # type `ClientBookingInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClientBookingInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ClientBookingInput = {
    companyId: number
    hosts: number[]
    from: DateTime
    to?: DateTime
    tariffId: number
}

/**
* # type `ClientBookingPenaltyData`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClientBookingPenaltyData
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ClientBookingPenaltyData = {
    cost: Decimal
    currency: Currency
}

/**
* # type `ClientClub`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClientClub
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ClientClub = {
    id: number
    name: string
    address: string
    city: string
    deposit: Decimal
    discount: number
    hours: number
    visits: ClientClubVisit[]
    last_visited_at: DateTime
    accept_sbp: boolean
    accept_kaspi: boolean
    currency: Currency
    rules: string
    achievements: UserAchievements
    feedback_available: boolean
    club_phone: string
    url?: string
    vk_url: string
    telegram_url: string
    whats_up_url: string
    region: string
    comment: string
    country: string
    lat: number
    lng: number
    work_schedule: ClubWorkSchedule[]
    work_schedule_247: boolean
    hardware: ClubHardware[]
    logo_url: string
    header_url: string
    pricelist_urls: string[]
    interior_urls: string[]
    services: ClubServices
    info: string
    host_count: number
    available_host_count: number
    cashback: ClientClubCashback[]
    user_bonus: Decimal
    club_settings: ClientClubSettings
    deposit_transfer_enabled: boolean
    goods: ClientClubGood[]
}

/**
* # type `ClientClubCashback`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClientClubCashback
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ClientClubCashback = {
    amount: Decimal
    is_percent: boolean
    value: Decimal
}

/**
* # type `ClientClubCommentInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClientClubCommentInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ClientClubCommentInput = {
    club_id: number
    client_session_id: number
    text?: string
    grade: number
    request_contact?: boolean
    request_contact_info?: string
}

/**
* # type `ClientClubGood`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClientClubGood
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ClientClubGood = {
    id: number
    title: string
    cost: number
    comment: string
    image: string
    category?: ClientClubGoodCategory
}

/**
* # type `ClientClubGoodCategory`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClientClubGoodCategory
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ClientClubGoodCategory = {
    id: number
    title: string
}

/**
* # type `ClientClubOnMap`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClientClubOnMap
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ClientClubOnMap = {
    id: number
    name: string
    address: string
    city: string
    lat: number
    lng: number
}

/**
* # type `ClientClubSettings`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClientClubSettings
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ClientClubSettings = {
    accept_payments: boolean
    accept_sbp: boolean
    accept_kaspi: boolean
    accept_stripe: boolean
    booking_enabled: boolean
    booking_settings?: BookingSettings
    online_booking_discount: number
    goods_display_enabled?: boolean
    online_payment_min_limit: number
}

/**
* # type `ClientClubVisit`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClientClubVisit
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ClientClubVisit = {
    visited_at: DateTime
    client_session_id: number
}

/**
* # type `ClientHost`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClientHost
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ClientHost = {
    id: number
    group_id: number
    group_title: string
    type_id?: number
    position: number
    alias: string
    coord_x?: number
    coord_y?: number
    can_book: boolean
    info?: HostInfo
    is_current_users_session: boolean
}

/**
* # type `ClientHostGroup`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClientHostGroup
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ClientHostGroup = {
    id: number
    title: string
    customization?: HostGroupCustomization
}

/**
* # type `ClientLoginInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClientLoginInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ClientLoginInput = {
    login: string
    password: string
}

/**
* # type `ClientRegisterInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClientRegisterInput
* 
* `@xlsoftware/smartshell-sdk`
*/
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

/**
* # type `ClientSession`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClientSession
* 
* `@xlsoftware/smartshell-sdk`
*/
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

/**
* # type `ClientSessionHost`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClientSessionHost
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ClientSessionHost = {
    id: number
    host: Host
    started_at: DateTime
    finished_at?: DateTime
}

/**
* # type `ClientSessionOverview`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClientSessionOverview
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ClientSessionOverview = {
    id: number
    duration: number
    elapsed: number
    time_left: number
    started_at: DateTime
    finished_at?: DateTime
    postpaid: boolean
    total_cost: Decimal
    seances: SeanceOverview[]
}

/**
* # type `ClientSessionPaginated`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClientSessionPaginated
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ClientSessionPaginated = {
    paginatorInfo?: PaginatorInfo
    data: ClientSession[]
}

/**
* # type `ClientSessionReportInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClientSessionReportInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ClientSessionReportInput = {
    client_id: number
    from?: DateTime
    to?: DateTime
    preset?: DateReportEnum
}

/**
* # enum `ClientSessionType`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClientSessionType
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ClientSessionType = "PLANED" | "ACTIVE" | "FINISHED" | "CANCELLED"

/**
* # type `ClientTariffGridInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClientTariffGridInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ClientTariffGridInput = {
    companyId?: number
    host_group_id?: number
    at?: DateTime
    qr?: string
}

/**
* # type `ClientTariffGridItem`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClientTariffGridItem
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ClientTariffGridItem = {
    id: number
    title: string
    duration: number
    cost: number
    mobile_cost: number
    has_fixed_finish_time: boolean
    currency: Currency
    highlighted?: boolean
    finished_at: DateTime
}

/**
* # type `ClientsInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClientsInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ClientsInput = {
    q: string
    sort?: SortInput
    filter?: FilterInput
}

/**
* # type `ClientsPaymentReportInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClientsPaymentReportInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ClientsPaymentReportInput = {
    from: DateTime
    to: DateTime
    sorting?: ReportSortInput
    search?: SearchReportInput
}

/**
* # type `ClientsPaymentReportItem`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClientsPaymentReportItem
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ClientsPaymentReportItem = {
    user: User
    shop: PaymentReportItem
    tariff: PaymentReportItem
    bonus: PaymentReportItem
    total: PaymentReportItem
    average: PaymentReportItem
}

/**
* # type `ClientsPaymentReportPaginated`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClientsPaymentReportPaginated
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ClientsPaymentReportPaginated = {
    paginatorInfo?: PaginatorInfo
    data: ClientsPaymentReportItem[]
}

/**
* # type `CloudPaymentsAccount`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/CloudPaymentsAccount
* 
* `@xlsoftware/smartshell-sdk`
*/
export type CloudPaymentsAccount = {
    publicId: string
    secretKey: string
}

/**
* # enum `CloudPaymentsAccountAction`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/CloudPaymentsAccountAction
* 
* `@xlsoftware/smartshell-sdk`
*/
export type CloudPaymentsAccountAction = "SET" | "REMOVE"

/**
* # type `Club`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/Club
* 
* `@xlsoftware/smartshell-sdk`
*/
export type Club = {
    id: number
    name: string
    network_company?: NetworkCompany
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
    debt: Decimal
    used_trial: boolean
    club_phone: string
    vk_url: string
    telegram_url: string
    whats_up_url: string
    region: string
    comment: string
    country: string
    lat: number
    lng: number
    work_schedule: ClubWorkSchedule[]
    work_schedule_247: boolean
    hardware: ClubHardware[]
    logo_url: string
    header_url: string
    pricelist_urls: string[]
    interior_urls: string[]
    services: ClubServices
    it_adviser_support: boolean
}

/**
* # type `ClubComment`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClubComment
* 
* `@xlsoftware/smartshell-sdk`
*/
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
    request_contact: boolean
    request_contact_info?: string
    tips?: number
    worker_name?: string
}

/**
* # type `ClubCommentInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClubCommentInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ClubCommentInput = {
    text?: string
    grade: number
    request_contact?: boolean
    request_contact_info?: string
    tips?: number
}

/**
* # type `ClubCommentPaginated`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClubCommentPaginated
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ClubCommentPaginated = {
    paginatorInfo?: PaginatorInfo
    data: ClubComment[]
    summary: ClubCommentSummary
}

/**
* # type `ClubCommentSearchInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClubCommentSearchInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ClubCommentSearchInput = {
    user_uuid?: string
    sort?: ClubCommentSearchSort
}

/**
* # enum `ClubCommentSearchSort`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClubCommentSearchSort
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ClubCommentSearchSort = "NEW_FIRST" | "OLD_FIRST" | "HIGH_GRADE_FIRST" | "LOW_GRADE_FIRST"

/**
* # type `ClubCommentSummary`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClubCommentSummary
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ClubCommentSummary = {
    average_grade: number
    unread_total: number
    five: number
    four: number
    three: number
    two: number
    one: number
}

/**
* # type `ClubHardware`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClubHardware
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ClubHardware = {
    hall_title: string
    hall_type: HallType
    device_count: number
    console_model?: string
    processor_brand?: string
    processor_model?: string
    gpu_brand?: string
    gpu_model?: string
    ram_size?: string
    ram_type?: string
    hdd_type?: string
    keyboard?: string
    mouse?: string
    speakers?: string
    chair?: string
    monitor_brand?: string
    monitor_size?: string
    monitor_hz?: string
}

/**
* # type `ClubHardwareInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClubHardwareInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ClubHardwareInput = {
    hall_title: string
    hall_type: HallType
    device_count: number
    console_model?: string
    processor_brand?: string
    processor_model?: string
    gpu_brand?: string
    gpu_model?: string
    ram_size?: string
    ram_type?: string
    hdd_type?: string
    keyboard?: string
    mouse?: string
    speakers?: string
    chair?: string
    monitor_brand?: string
    monitor_size?: string
    monitor_hz?: string
}

/**
* # type `ClubInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClubInput
* 
* `@xlsoftware/smartshell-sdk`
*/
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
    club_phone?: string
    vk_url?: string
    telegram_url?: string
    whats_up_url?: string
    region?: string
    comment?: string
    country?: string
    lat?: number
    lng?: number
}

/**
* # type `ClubOption`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClubOption
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ClubOption = {
    title: string
    options: string[]
}

/**
* # type `ClubServices`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClubServices
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ClubServices = {
    has_vr: boolean
    vr_count: number
    vr_model: string
    has_autosim: boolean
    autosim_count: number
    has_printer: boolean
    has_lounge: boolean
    has_gifts: boolean
    personal_devices_allowed: boolean
    has_streaming_boot: boolean
    personal_food_allowed: boolean
    has_tabletop_games: boolean
    can_rent_projector: boolean
    has_coworking: boolean
    has_snacks: boolean
    has_energy_drinks: boolean
    has_food_to_go: boolean
    has_kitchen: boolean
    has_beverages: boolean
    has_low_alcohol_beverages: boolean
    has_food_discounts: boolean
    accept_cash: boolean
    accept_card: boolean
    accept_qr: boolean
    accept_sbp: boolean
}

/**
* # type `ClubServicesInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClubServicesInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ClubServicesInput = {
    has_vr: boolean
    vr_count: number
    vr_model: string
    has_autosim: boolean
    autosim_count: number
    has_printer: boolean
    has_lounge: boolean
    has_gifts: boolean
    personal_devices_allowed: boolean
    has_streaming_boot: boolean
    personal_food_allowed: boolean
    has_tabletop_games: boolean
    can_rent_projector: boolean
    has_coworking: boolean
    has_snacks: boolean
    has_energy_drinks: boolean
    has_food_to_go: boolean
    has_kitchen: boolean
    has_beverages: boolean
    has_low_alcohol_beverages: boolean
    has_food_discounts: boolean
    accept_cash: boolean
    accept_card: boolean
    accept_qr: boolean
    accept_sbp: boolean
}

/**
* # enum `ClubVerificationStatus`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClubVerificationStatus
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ClubVerificationStatus = "UNVERIFIED" | "REVIEW" | "VERIFIED" | "DECLINED"

/**
* # type `ClubWorkSchedule`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClubWorkSchedule
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ClubWorkSchedule = {
    day: number
    Start: string
    End: string
}

/**
* # type `ClubWorkScheduleInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ClubWorkScheduleInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ClubWorkScheduleInput = {
    day: number
    Start: string
    End: string
}

/**
* # type `Combo`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/Combo
* 
* `@xlsoftware/smartshell-sdk`
*/
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

/**
* # type `ComboInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ComboInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ComboInput = {
    title: string
    host_group_id?: number
    tariff_id?: number
    items: ComboItemInput[]
    use_global_discount?: boolean
}

/**
* # type `ComboItem`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ComboItem
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ComboItem = {
    id: number
    combo_id: number
    entity: ComboItemEntity
    entity_type: ComboItemEntityType
    amount: number
    price: number
}

/**
* # enum `ComboItemEntity`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ComboItemEntity
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ComboItemEntity = Record<string, Service | Good>

/**
* # enum `ComboItemEntityType`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ComboItemEntityType
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ComboItemEntityType = "GOOD" | "SERVICE"

/**
* # type `ComboItemInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ComboItemInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ComboItemInput = {
    entity_type: ComboItemEntityType
    entity_id: number
    amount: number
    price: number
}

/**
* # type `ComboListInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ComboListInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ComboListInput = {
    host_id?: number
    client_uuid?: string
    shift?: number
}

/**
* # type `ComboListItem`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ComboListItem
* 
* `@xlsoftware/smartshell-sdk`
*/
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

/**
* # type `ComboPaginated`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ComboPaginated
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ComboPaginated = {
    paginatorInfo?: PaginatorInfo
    data: Combo[]
}

/**
* # type `Comment`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/Comment
* 
* `@xlsoftware/smartshell-sdk`
*/
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
    request_contact: boolean
    request_contact_info?: string
    is_important?: boolean
}

/**
* # enum `CommentEntity`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/CommentEntity
* 
* `@xlsoftware/smartshell-sdk`
*/
export type CommentEntity = Record<string, User | Host | ClientSession>

/**
* # type `CommentInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/CommentInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type CommentInput = {
    text: string
    type: CommentType
    entity_id: number
    request_contact?: boolean
    is_important?: boolean
}

/**
* # type `CommentPaginated`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/CommentPaginated
* 
* `@xlsoftware/smartshell-sdk`
*/
export type CommentPaginated = {
    paginatorInfo?: PaginatorInfo
    data: Comment[]
}

/**
* # type `CommentSearchInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/CommentSearchInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type CommentSearchInput = {
    entity_id: number
    type: CommentType
}

/**
* # enum `CommentType`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/CommentType
* 
* `@xlsoftware/smartshell-sdk`
*/
export type CommentType = "CLIENT" | "HOST" | "CLIENT_SESSION"

/**
* # type `CommentUpdateInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/CommentUpdateInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type CommentUpdateInput = {
    is_important: boolean
}

/**
* # type `CompanyNewsArticle`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/CompanyNewsArticle
* 
* `@xlsoftware/smartshell-sdk`
*/
export type CompanyNewsArticle = {
    id: ID
    title: string
    company: LiteCompany
    content: string
    image?: string
    link?: ArticleLink
    creator?: User
    active: boolean
    publication_period?: PublicationPeriod
    created_at: DateTime
    updated_at: DateTime
}

/**
* # type `CompanyNewsList`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/CompanyNewsList
* 
* `@xlsoftware/smartshell-sdk`
*/
export type CompanyNewsList = {
    data: CompanyNewsArticle[]
    paginatorInfo: PaginatorInfo
}

/**
* # type `CompanyNewsListInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/CompanyNewsListInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type CompanyNewsListInput = {
    sort?: CompanyNewsListSort
    active?: boolean
}

/**
* # type `CompanyNewsListSort`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/CompanyNewsListSort
* 
* `@xlsoftware/smartshell-sdk`
*/
export type CompanyNewsListSort = {
    field?: CompanyNewsListSortField
    direction: string
}

/**
* # enum `CompanyNewsListSortField`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/CompanyNewsListSortField
* 
* `@xlsoftware/smartshell-sdk`
*/
export type CompanyNewsListSortField = "TITLE" | "LABEL" | "URL" | "ACTIVE_FROM" | "ACTIVE_UNTIL" | "ACTIVE" | "CREATED_AT"

/**
* # type `CompanyPermissionInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/CompanyPermissionInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type CompanyPermissionInput = {
    company_id: number
}

/**
* # type `CompanyPermissions`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/CompanyPermissions
* 
* `@xlsoftware/smartshell-sdk`
*/
export type CompanyPermissions = {
    role_id: number
    title: string
    description?: string
    permissions?: PermissionData[]
}

/**
* # type `CompanyPermissionsData`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/CompanyPermissionsData
* 
* `@xlsoftware/smartshell-sdk`
*/
export type CompanyPermissionsData = {
    companyPermissions?: CompanyPermissions[]
}

/**
* # type `CompanyPermissionsInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/CompanyPermissionsInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type CompanyPermissionsInput = {
    role_id: number
    permissions: PermissionInput[]
}

/**
* # type `Condition`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/Condition
* 
* `@xlsoftware/smartshell-sdk`
*/
export type Condition = {
    name: string
    value: Decimal
}

/**
* # type `ConditionRequest`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ConditionRequest
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ConditionRequest = {
    name: string
    value: number
}

/**
* # enum `ConfirmationCodeType`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ConfirmationCodeType
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ConfirmationCodeType = "REGISTER" | "RESET_PASSWORD"

/**
* # type `ConfirmationResult`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ConfirmationResult
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ConfirmationResult = {
    token?: AccessToken
    success: boolean
    hash?: string
}

/**
* # type `ConnectPaymentServiceInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ConnectPaymentServiceInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ConnectPaymentServiceInput = {
    existing_beneficiary?: string
    type?: BeneficiaryType
    ul?: ULResidentInput
    ip?: IPResidentInput
    bank_account?: BankAccountInput
    stripe_account?: StripeAccountInput
}

/**
* # type `Contractor`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/Contractor
* 
* `@xlsoftware/smartshell-sdk`
*/
export type Contractor = {
    id: number
    name: string
    inn: string
    kpp: string
    address: string
    phone: string
    email: string
}

/**
* # type `ContractorInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ContractorInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ContractorInput = {
    name: string
    inn: string
    kpp: string
    address: string
    phone: string
    email: string
}

/**
* # type `CreateCommandInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/CreateCommandInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type CreateCommandInput = {
    host_id: number
    action: HostCommandAction
    param?: string
}

/**
* # type `CreateCommandsInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/CreateCommandsInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type CreateCommandsInput = {
    host_ids: number[]
    action: HostCommandAction
    param?: string
}

/**
* # type `CreateGameAccountInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/CreateGameAccountInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type CreateGameAccountInput = {
    login: string
    password: string
    active: boolean
    group_id: number
    host_id?: number
}

/**
* # type `CreateHostCommandTemplateInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/CreateHostCommandTemplateInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type CreateHostCommandTemplateInput = {
    title: string
    path: string
    arguments?: string
}

/**
* # type `CreateNetworkInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/CreateNetworkInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type CreateNetworkInput = {
    name: string
    description?: string
    main_company_id: number
    max_discount_enabled: boolean
    deposit_transfer_enabled: boolean
}

/**
* # type `CreateNewsArticleInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/CreateNewsArticleInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type CreateNewsArticleInput = {
    title: string
    content: string
    image?: string
    link?: ArticleLinkInput
    active?: boolean
    publication_period?: PublicationPeriodInput
}

/**
* # type `CreateWorkerInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/CreateWorkerInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type CreateWorkerInput = {
    phone: string
    first_name: string
    last_name: string
    middle_name: string
    role_ids: number[]
}

/**
* # type `Currency`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/Currency
* 
* `@xlsoftware/smartshell-sdk`
*/
export type Currency = {
    id: number
    title: string
    alias: string
    letter: string
}

/**
* # type `CurrentTariff`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/CurrentTariff
* 
* `@xlsoftware/smartshell-sdk`
*/
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

/**
* # enum `DateReportEnum`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/DateReportEnum
* 
* `@xlsoftware/smartshell-sdk`
*/
export type DateReportEnum = "TODAY" | "WEEK" | "MONTH" | "YEAR"

/**
* # type `DeleteUserGroupInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/DeleteUserGroupInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type DeleteUserGroupInput = {
    uuid: string
}

/**
* # type `DepositAccount`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/DepositAccount
* 
* `@xlsoftware/smartshell-sdk`
*/
export type DepositAccount = {
    club: LiteCompany
    balance: Decimal
    current: boolean
    currency: Currency
}

/**
* # type `DepositCashback`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/DepositCashback
* 
* `@xlsoftware/smartshell-sdk`
*/
export type DepositCashback = {
    id: number
    amount: Decimal
    value: Decimal
    is_percent: boolean
    is_active: boolean
    starts_at?: DateTime
    expires_at?: DateTime
    is_expired: boolean
}

/**
* # type `DepositCashbackInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/DepositCashbackInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type DepositCashbackInput = {
    amount: number
    value: number
    is_percent: boolean
    is_active: boolean
    starts_at?: DateTime
    expires_at?: DateTime
}

/**
* # type `DepositTransferHistory`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/DepositTransferHistory
* 
* `@xlsoftware/smartshell-sdk`
*/
export type DepositTransferHistory = {
    paginatorInfo: PaginatorInfo
    data: DepositTransferHistoryItem[]
}

/**
* # type `DepositTransferHistoryItem`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/DepositTransferHistoryItem
* 
* `@xlsoftware/smartshell-sdk`
*/
export type DepositTransferHistoryItem = {
    type: DepositTransferOperationType
    club: LiteCompany
    sum: Decimal
    created_at: DateTime
}

/**
* # enum `DepositTransferOperationType`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/DepositTransferOperationType
* 
* `@xlsoftware/smartshell-sdk`
*/
export type DepositTransferOperationType = "DEPOSIT" | "WITHDRAWAL"

/**
* # type `DepositTransferReport`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/DepositTransferReport
* 
* `@xlsoftware/smartshell-sdk`
*/
export type DepositTransferReport = {
    paginatorInfo: PaginatorInfo
    data: DepositTransferReportItem[]
    url?: string
}

/**
* # type `DepositTransferReportInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/DepositTransferReportInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type DepositTransferReportInput = {
    from: DateTime
    to: DateTime
    type?: DepositTransferType
    search?: SearchReportInput
    sort?: ReportSortInput
}

/**
* # type `DepositTransferReportItem`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/DepositTransferReportItem
* 
* `@xlsoftware/smartshell-sdk`
*/
export type DepositTransferReportItem = {
    transfer: DepositTransferHistoryItem
    user: User
}

/**
* # enum `DepositTransferType`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/DepositTransferType
* 
* `@xlsoftware/smartshell-sdk`
*/
export type DepositTransferType = "DEPOSIT" | "WITHDRAW"

/**
* # type `DetailedWorkShiftMoneyData`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/DetailedWorkShiftMoneyData
* 
* `@xlsoftware/smartshell-sdk`
*/
export type DetailedWorkShiftMoneyData = {
    id: number
    worker: User
    cash_on_start: Decimal
    total: Decimal
    deposit: Decimal
    bonus: Decimal
    refunded: Decimal
    cash: MoneyData
    card: MoneyData
    cash_orders: CashOrder[]
    currency?: Currency
    created_at: DateTime
    finished_at?: DateTime
}

/**
* # type `Discount`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/Discount
* 
* `@xlsoftware/smartshell-sdk`
*/
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

/**
* # type `DiscountInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/DiscountInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type DiscountInput = {
    client_id?: number
    title: string
    value: number
    entity?: CartEntity
    entity_id?: number
    is_tracked?: boolean
}

/**
* # type `DiscountPaginated`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/DiscountPaginated
* 
* `@xlsoftware/smartshell-sdk`
*/
export type DiscountPaginated = {
    paginatorInfo?: PaginatorInfo
    data: Discount[]
}

/**
* # enum `DistributionType`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/DistributionType
* 
* `@xlsoftware/smartshell-sdk`
*/
export type DistributionType = "LOCAL" | "CLOUD"

/**
* # type `EanEntity`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/EanEntity
* 
* `@xlsoftware/smartshell-sdk`
*/
export type EanEntity = {
    entity_id: number
    entity_type: EanEntityType
}

/**
* # enum `EanEntityType`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/EanEntityType
* 
* `@xlsoftware/smartshell-sdk`
*/
export type EanEntityType = "GOOD" | "SERVICE" | "TARIFF" | "HOST" | "USER"

/**
* # type `EmailExistsInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/EmailExistsInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type EmailExistsInput = {
    email: string
}

/**
* # type `EmailRegisterInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/EmailRegisterInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type EmailRegisterInput = {
    login: string
    email: Email
    phone: string
    phone_confirmation: string
    password: string
    dob: Date
    news_consent?: boolean
    first_name?: string
    type?: RegisterType
}

/**
* # type `Event`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/Event
* 
* `@xlsoftware/smartshell-sdk`
*/
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

/**
* # type `EventListItem`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/EventListItem
* 
* `@xlsoftware/smartshell-sdk`
*/
export type EventListItem = {
    timestamp: DateTime
    type: string
    description: string
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
    goods_category?: EventListItemIdTitle
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
    company_news_item?: EventListItemNews
    company_news_item_changes?: EventListItemNews
    additional_data: string
}

/**
* # type `EventListItemAliasValues`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/EventListItemAliasValues
* 
* `@xlsoftware/smartshell-sdk`
*/
export type EventListItemAliasValues = {
    alias: string
    value: string
    value2: string
}

/**
* # type `EventListItemBooking`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/EventListItemBooking
* 
* `@xlsoftware/smartshell-sdk`
*/
export type EventListItemBooking = {
    id: number
    Cost: number
    from: DateTime
    to: DateTime
}

/**
* # type `EventListItemCashOrder`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/EventListItemCashOrder
* 
* `@xlsoftware/smartshell-sdk`
*/
export type EventListItemCashOrder = {
    id?: number
    created_at?: DateTime
    type?: CashOrderType
    sum?: number
    comment?: string
}

/**
* # type `EventListItemClientSession`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/EventListItemClientSession
* 
* `@xlsoftware/smartshell-sdk`
*/
export type EventListItemClientSession = {
    id?: number
    elapsed?: number
    finished_at?: DateTime
    time_left?: number
    expires_at?: DateTime
    is_per_minute?: boolean
    total_cost?: number
}

/**
* # type `EventListItemCombo`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/EventListItemCombo
* 
* `@xlsoftware/smartshell-sdk`
*/
export type EventListItemCombo = {
    id?: number
    title?: string
    host_group_id?: number
    host_group_title?: string
    tariff_id?: number
    tariff_title?: string
}

/**
* # type `EventListItemComboItem`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/EventListItemComboItem
* 
* `@xlsoftware/smartshell-sdk`
*/
export type EventListItemComboItem = {
    id?: number
    entity_id?: number
    entity_type?: string
    title?: string
    amount?: number
    price?: number
}

/**
* # type `EventListItemIdTime`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/EventListItemIdTime
* 
* `@xlsoftware/smartshell-sdk`
*/
export type EventListItemIdTime = {
    id?: number
    timestamp?: DateTime
}

/**
* # type `EventListItemIdTitle`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/EventListItemIdTitle
* 
* `@xlsoftware/smartshell-sdk`
*/
export type EventListItemIdTitle = {
    id?: number
    title?: string
}

/**
* # type `EventListItemIdTitleValueF`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/EventListItemIdTitleValueF
* 
* `@xlsoftware/smartshell-sdk`
*/
export type EventListItemIdTitleValueF = {
    id?: number
    title?: string
    value?: number
}

/**
* # type `EventListItemIdTitleValueI`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/EventListItemIdTitleValueI
* 
* `@xlsoftware/smartshell-sdk`
*/
export type EventListItemIdTitleValueI = {
    id?: number
    title?: string
    value?: number
}

/**
* # type `EventListItemIdValueF`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/EventListItemIdValueF
* 
* `@xlsoftware/smartshell-sdk`
*/
export type EventListItemIdValueF = {
    id?: number
    value?: number
}

/**
* # type `EventListItemNews`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/EventListItemNews
* 
* `@xlsoftware/smartshell-sdk`
*/
export type EventListItemNews = {
    id?: string
    image?: string
    label?: string
    url?: string
    title?: string
    active?: boolean
    active_from?: DateTime
    active_to?: DateTime
    created_at?: DateTime
}

/**
* # type `EventListItemPaymentItem`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/EventListItemPaymentItem
* 
* `@xlsoftware/smartshell-sdk`
*/
export type EventListItemPaymentItem = {
    id?: number
    entity_id?: number
    entity_type?: string
    title?: string
    amount?: number
    sum?: number
}

/**
* # type `EventListItemTask`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/EventListItemTask
* 
* `@xlsoftware/smartshell-sdk`
*/
export type EventListItemTask = {
    id?: number
    creator_uuid?: string
    assigned_to_uuid?: string
    title?: string
    deadline_at?: DateTime
}

/**
* # type `EventListItemUser`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/EventListItemUser
* 
* `@xlsoftware/smartshell-sdk`
*/
export type EventListItemUser = {
    uuid?: string
    phone?: string
    email?: string
    nickname?: string
    first_name?: string
    last_name?: string
}

/**
* # type `EventListItemWarehouseItem`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/EventListItemWarehouseItem
* 
* `@xlsoftware/smartshell-sdk`
*/
export type EventListItemWarehouseItem = {
    id?: number
    entity_id?: number
    entity_type?: string
    title?: string
    value?: number
    value2?: number
}

/**
* # type `EventListPaginated`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/EventListPaginated
* 
* `@xlsoftware/smartshell-sdk`
*/
export type EventListPaginated = {
    paginatorInfo?: PaginatorInfo
    data: EventListItem[]
}

/**
* # type `EventPaginated`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/EventPaginated
* 
* `@xlsoftware/smartshell-sdk`
*/
export type EventPaginated = {
    paginatorInfo?: PaginatorInfo
    data: Event[]
}

/**
* # type `EventsInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/EventsInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type EventsInput = {
    types: string[]
    start?: DateTime
    finish?: DateTime
    work_shift_id?: number
    q?: string
}

/**
* # type `ExternalPaymentData`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ExternalPaymentData
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ExternalPaymentData = {
    external_id?: string
    external_method?: string
}

/**
* # type `ExternalPaymentDataInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ExternalPaymentDataInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ExternalPaymentDataInput = {
    external_id?: string
    external_method?: string
}

/**
* # type `FeatureFlags`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/FeatureFlags
* 
* `@xlsoftware/smartshell-sdk`
*/
export type FeatureFlags = {
    subscription: string
    expires_at: DateTime
    modules: string[]
    host_count: number
    used_trial: boolean
    deposit_transfer_enabled: boolean
    it_adviser_support: boolean
}

/**
* # type `FilterInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/FilterInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type FilterInput = {
    groupUUID?: string
}

/**
* # type `FinishWorkShiftInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/FinishWorkShiftInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type FinishWorkShiftInput = {
    comment?: string
}

/**
* # type `FinishedWorkShiftInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/FinishedWorkShiftInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type FinishedWorkShiftInput = {
    from: Date
    to: Date
}

/**
* # type `FlagInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/FlagInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type FlagInput = {
    value: boolean
}

/**
* # type `FreeGameAccount`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/FreeGameAccount
* 
* `@xlsoftware/smartshell-sdk`
*/
export type FreeGameAccount = {
    id: number
    login: string
    password: string
}

/**
* # type `GameAccount`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/GameAccount
* 
* `@xlsoftware/smartshell-sdk`
*/
export type GameAccount = {
    id: number
    login: string
    password: string
    group: GameAccountGroup
    host?: Host
    assignment?: GameAccountAssignment
    active: boolean
    status: GameAccountStatus
    busy: boolean
}

/**
* # type `GameAccountAssignment`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/GameAccountAssignment
* 
* `@xlsoftware/smartshell-sdk`
*/
export type GameAccountAssignment = {
    host?: Host
}

/**
* # type `GameAccountGroup`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/GameAccountGroup
* 
* `@xlsoftware/smartshell-sdk`
*/
export type GameAccountGroup = {
    id: number
    title: string
    launcher: GameAccountLauncher
    accounts: GameAccount[]
    shortcuts: Shortcut[]
}

/**
* # type `GameAccountGroupInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/GameAccountGroupInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type GameAccountGroupInput = {
    title: string
    launcher: GameAccountLauncher
}

/**
* # enum `GameAccountLauncher`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/GameAccountLauncher
* 
* `@xlsoftware/smartshell-sdk`
*/
export type GameAccountLauncher = "STEAM" | "EGS" | "BATTLENET" | "ORIGIN" | "EA" | "VKPLAY"

/**
* # enum `GameAccountStatus`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/GameAccountStatus
* 
* `@xlsoftware/smartshell-sdk`
*/
export type GameAccountStatus = "OFFLINE" | "ONLINE" | "IN_GAME"

/**
* # type `GenerateQRInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/GenerateQRInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type GenerateQRInput = {
    host_id: number
}

/**
* # type `GetActiveClientListInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/GetActiveClientListInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type GetActiveClientListInput = {
    from?: DateTime
    to?: DateTime
    preset?: DateReportEnum
    sort: SortActiveClientEnum
}

/**
* # type `GetBeneficiaryMovementsOfFunds`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/GetBeneficiaryMovementsOfFunds
* 
* `@xlsoftware/smartshell-sdk`
*/
export type GetBeneficiaryMovementsOfFunds = {
    beneficiary_id: string
    from: DateTime
    to: DateTime
}

/**
* # type `GetBeneficiaryMovementsOfFundsReport`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/GetBeneficiaryMovementsOfFundsReport
* 
* `@xlsoftware/smartshell-sdk`
*/
export type GetBeneficiaryMovementsOfFundsReport = {
    beneficiary_id: string
    from: DateTime
    to: DateTime
}

/**
* # type `GetCurrentTariff`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/GetCurrentTariff
* 
* `@xlsoftware/smartshell-sdk`
*/
export type GetCurrentTariff = {
    client_session_id: number
}

/**
* # type `Good`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/Good
* 
* `@xlsoftware/smartshell-sdk`
*/
export type Good = {
    id: number
    title: string
    subtitle: string
    category?: Category
    amount: number
    cost: Decimal
    wholesale_cost: Decimal
    tax_percent: Decimal
    unit_name: string
    unit_value: number
    tax_system?: TaxSystem
    state: WarehouseState
    vat?: Vat
    eans: string[]
    comment: string
    image: string
    use_global_discounts: boolean
    created_at: DateTime
    use_fair_sign: boolean
    is_excise: boolean
    show_in_shell: boolean
    in_combo: boolean
    low_stock_notification?: LowStockNotification
    highlighted: boolean
}

/**
* # type `GoodInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/GoodInput
* 
* `@xlsoftware/smartshell-sdk`
*/
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
    eans: string[]
    use_fair_sign?: boolean
    is_excise?: boolean
    price?: number
    show_in_shell?: boolean
    low_stock_notification?: LowStockNotificationInput
    category_id?: number
    highlighted?: boolean
}

/**
* # type `GoodsInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/GoodsInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type GoodsInput = {
    client_uuid?: string
    category_id?: number
    title_search?: string
}

/**
* # enum `HallType`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/HallType
* 
* `@xlsoftware/smartshell-sdk`
*/
export type HallType = "PC" | "CONSOLE"

/**
* # type `Host`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/Host
* 
* `@xlsoftware/smartshell-sdk`
*/
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
    online_booking_enabled: boolean
}

/**
* # type `HostAccessTokenInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/HostAccessTokenInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type HostAccessTokenInput = {
    mac_address: MacAddress
    public_key: string
}

/**
* # type `HostCommand`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/HostCommand
* 
* `@xlsoftware/smartshell-sdk`
*/
export type HostCommand = {
    id: number
    action: HostCommandAction
    status?: string
    param?: string
}

/**
* # enum `HostCommandAction`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/HostCommandAction
* 
* `@xlsoftware/smartshell-sdk`
*/
export type HostCommandAction = "SHUTDOWN" | "REBOOT" | "ALLOW_ADMIN_MODE" | "DISABLE_SHELL" | "SHOW_MESSAGE" | "LOGOFF" | "RUN" | "SEND_LOGS" | "SHELL_UNINSTALL" | "SHELL_UPDATE" | "LOGIN_QR" | "TINKOFF_SBP_PAYMENT"

/**
* # type `HostCommandList`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/HostCommandList
* 
* `@xlsoftware/smartshell-sdk`
*/
export type HostCommandList = {
    commands: HostCommand[]
}

/**
* # type `HostCommandTemplate`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/HostCommandTemplate
* 
* `@xlsoftware/smartshell-sdk`
*/
export type HostCommandTemplate = {
    id: number
    title: string
    path: string
    arguments?: string
}

/**
* # type `HostCounters`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/HostCounters
* 
* `@xlsoftware/smartshell-sdk`
*/
export type HostCounters = {
    cpu_temp: Decimal
    disk_temp: Decimal
    disk_status: HostDiskInfo[]
    active_window?: string
}

/**
* # type `HostDevice`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/HostDevice
* 
* `@xlsoftware/smartshell-sdk`
*/
export type HostDevice = {
    alias: string
    old: string
    new: string
}

/**
* # type `HostDiskInfo`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/HostDiskInfo
* 
* `@xlsoftware/smartshell-sdk`
*/
export type HostDiskInfo = {
    letter: string
    total: number
    used: number
}

/**
* # type `HostDiskInfoInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/HostDiskInfoInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type HostDiskInfoInput = {
    letter: string
    total: number
    used: number
}

/**
* # type `HostGroup`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/HostGroup
* 
* `@xlsoftware/smartshell-sdk`
*/
export type HostGroup = {
    id: number
    title: string
    created_at: DateTime
    updated_at: DateTime
    hosts: Host[]
    customization?: HostGroupCustomization
    priority: number
}

/**
* # type `HostGroupCustomization`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/HostGroupCustomization
* 
* `@xlsoftware/smartshell-sdk`
*/
export type HostGroupCustomization = {
    color?: string
    background?: string
    screensaver?: string
}

/**
* # type `HostGroupCustomizationInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/HostGroupCustomizationInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type HostGroupCustomizationInput = {
    color?: string
    background?: string
    screensaver?: string
}

/**
* # type `HostGroupInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/HostGroupInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type HostGroupInput = {
    title: string
    customization?: HostGroupCustomizationInput
    priority?: number
}

/**
* # type `HostGroupOverview`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/HostGroupOverview
* 
* `@xlsoftware/smartshell-sdk`
*/
export type HostGroupOverview = {
    id: number
    title: string
    customization?: HostGroupCustomization
    priority: number
    hosts: HostOverview[]
}

/**
* # type `HostGroupTitle`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/HostGroupTitle
* 
* `@xlsoftware/smartshell-sdk`
*/
export type HostGroupTitle = {
    id: number
    title: string
    priority: number
}

/**
* # type `HostInfo`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/HostInfo
* 
* `@xlsoftware/smartshell-sdk`
*/
export type HostInfo = {
    processor?: string
    ram?: string
    video?: string
    disc?: string
    shell_version?: string
}

/**
* # type `HostInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/HostInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type HostInput = {
    group_id?: number
    type_id?: number
    position?: number
    alias?: string
    comment?: string
    mac_addr?: MacAddress
    ip_addr?: IpAddress
    dns_name?: string
    coord_x?: number
    coord_y?: number
    online_booking_enabled?: boolean
}

/**
* # type `HostOverview`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/HostOverview
* 
* `@xlsoftware/smartshell-sdk`
*/
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
    online_booking_enabled: boolean
}

/**
* # type `HostSession`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/HostSession
* 
* `@xlsoftware/smartshell-sdk`
*/
export type HostSession = {
    id: number
    host_id: number
    company_id: number
    alias?: string
    user?: User
    started_at: DateTime
    finished_at?: DateTime
}

/**
* # type `HostSessionInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/HostSessionInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type HostSessionInput = {
    processor?: string
    ram?: string
    video?: string
    disc?: string
    shell_version?: string
    ip_addr?: string
}

/**
* # type `HostStatus`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/HostStatus
* 
* `@xlsoftware/smartshell-sdk`
*/
export type HostStatus = {
    client_session?: ClientSession
    current_tariff?: CurrentTariff
    command?: HostCommand
    host: Host
}

/**
* # type `HostType`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/HostType
* 
* `@xlsoftware/smartshell-sdk`
*/
export type HostType = {
    id: number
    title: string
    description?: string
    created_at: DateTime
    updated_at?: DateTime
}

/**
* # type `HostTypeInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/HostTypeInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type HostTypeInput = {
    title: string
    description: string
}

/**
* # type `HostsOccupationReport`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/HostsOccupationReport
* 
* `@xlsoftware/smartshell-sdk`
*/
export type HostsOccupationReport = {
    from: DateTime
    to: DateTime
}

/**
* # type `IPResidentInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/IPResidentInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type IPResidentInput = {
    first_name: string
    middle_name?: string
    last_name: string
    inn: string
    birth_date: Date
    birth_place?: string
    citizenship: string
    passport: PassportInput
    registration_address: string
    residence_address?: string
    registration_date: Date
    phone: string
    email?: string
}

/**
* # type `Import`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/Import
* 
* `@xlsoftware/smartshell-sdk`
*/
export type Import = {
    id: number
    status: ImportStatusEnum
    failures: ImportFailure[]
    created_at: DateTime
    finished_at?: DateTime
}

/**
* # type `ImportFailure`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ImportFailure
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ImportFailure = {
    row?: number
    errors?: string[]
    values?: string[]
    attribute?: string
}

/**
* # enum `ImportStatusEnum`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ImportStatusEnum
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ImportStatusEnum = "NEW" | "PROCESSING" | "FINISH" | "FINISH_HAS_ERROR"

/**
* # type `ImportUserColumnsInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ImportUserColumnsInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ImportUserColumnsInput = {
    first_name?: number
    last_name?: number
    phone?: number
    deposit?: number
    discount?: number
    email?: number
}

/**
* # type `ImportUserHoursColumnsInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ImportUserHoursColumnsInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ImportUserHoursColumnsInput = {
    phone?: number
    time?: number
}

/**
* # enum `IntegrationService`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/IntegrationService
* 
* `@xlsoftware/smartshell-sdk`
*/
export type IntegrationService = "TINKOFF" | "STRIPE"

/**
* # type `LeaderboardUser`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/LeaderboardUser
* 
* `@xlsoftware/smartshell-sdk`
*/
export type LeaderboardUser = {
    userId: number
    totalTime: number
    nickname: string
    name?: string
    avatarUrl?: string
    telegram_link?: string
    discord_link?: string
    steam_link?: string
    vk_link?: string
    created_at: Date
}

/**
* # type `License`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/License
* 
* `@xlsoftware/smartshell-sdk`
*/
export type License = {
    id: number
    expires_at: DateTime
    payment: LicensePaymentData
}

/**
* # type `LicenseModulePrice`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/LicenseModulePrice
* 
* `@xlsoftware/smartshell-sdk`
*/
export type LicenseModulePrice = {
    module_id: number
    price: Decimal
}

/**
* # type `LicensePayment`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/LicensePayment
* 
* `@xlsoftware/smartshell-sdk`
*/
export type LicensePayment = {
    id: string
    url: string
    qr?: string
    license_payment_method: LicensePaymentMethod
    additional?: AdditionalPaymentData
}

/**
* # type `LicensePaymentData`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/LicensePaymentData
* 
* `@xlsoftware/smartshell-sdk`
*/
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
    cost: Decimal
    contractor?: Contractor
}

/**
* # type `LicensePaymentInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/LicensePaymentInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type LicensePaymentInput = {
    license_price: LicensePriceInput
    contractor_id?: number
    success_url?: string
    fail_url?: string
}

/**
* # enum `LicensePaymentMethod`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/LicensePaymentMethod
* 
* `@xlsoftware/smartshell-sdk`
*/
export type LicensePaymentMethod = "CARD" | "BILL" | "CLOUD_PAYMENTS" | "KASPI_QR"

/**
* # enum `LicensePaymentStatus`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/LicensePaymentStatus
* 
* `@xlsoftware/smartshell-sdk`
*/
export type LicensePaymentStatus = "NEW" | "SUCCESS" | "FAILED"

/**
* # type `LicensePrice`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/LicensePrice
* 
* `@xlsoftware/smartshell-sdk`
*/
export type LicensePrice = {
    sum: Decimal
    total_sum: Decimal
    host_price: Decimal
    modules: LicenseModulePrice[]
    discount_value: number
    loyalty_discount?: number
    promocode_discount?: number
    month_discount?: number
    debt?: Decimal
}

/**
* # type `LicensePriceInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/LicensePriceInput
* 
* `@xlsoftware/smartshell-sdk`
*/
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

/**
* # type `LicenseTariff`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/LicenseTariff
* 
* `@xlsoftware/smartshell-sdk`
*/
export type LicenseTariff = {
    id: number
    name: string
    description?: string
    cost: Decimal
    module_categories?: LicenseTariffCategory[]
}

/**
* # type `LicenseTariffCategory`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/LicenseTariffCategory
* 
* `@xlsoftware/smartshell-sdk`
*/
export type LicenseTariffCategory = {
    id: number
    name: string
    modules?: LicenseTariffModule[]
    tariff_id: number
}

/**
* # type `LicenseTariffCategoryInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/LicenseTariffCategoryInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type LicenseTariffCategoryInput = {
    id: number
    name: string
    tariff_id: number
}

/**
* # type `LicenseTariffGrid`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/LicenseTariffGrid
* 
* `@xlsoftware/smartshell-sdk`
*/
export type LicenseTariffGrid = {
    tariffs: LicenseTariff[]
    modules: LicenseTariffModule[]
}

/**
* # type `LicenseTariffInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/LicenseTariffInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type LicenseTariffInput = {
    name: string
    description?: string
    cost: number
    kz_cost: number
}

/**
* # type `LicenseTariffModule`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/LicenseTariffModule
* 
* `@xlsoftware/smartshell-sdk`
*/
export type LicenseTariffModule = {
    id: number
    name: string
    description?: string
    cost: Decimal
    category_id: number
    alias: string
}

/**
* # type `LicenseTariffModuleInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/LicenseTariffModuleInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type LicenseTariffModuleInput = {
    name: string
    description?: string
    cost: number
    kz_cost: number
    category_id: number
    alias: string
}

/**
* # type `LiteCompany`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/LiteCompany
* 
* `@xlsoftware/smartshell-sdk`
*/
export type LiteCompany = {
    id: number
    name: string
    address?: string
}

/**
* # type `LitePaymentTransaction`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/LitePaymentTransaction
* 
* `@xlsoftware/smartshell-sdk`
*/
export type LitePaymentTransaction = {
    id: string
    company: LiteCompany
    amount: Decimal
    sum: Decimal
    service: ServiceEnum
    status: string
    created_at: DateTime
}

/**
* # type `LoginExistsInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/LoginExistsInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type LoginExistsInput = {
    login: string
}

/**
* # type `LoginInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/LoginInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type LoginInput = {
    login: string
    password: string
    company_id?: number
}

/**
* # type `LoginQRInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/LoginQRInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type LoginQRInput = {
    qr: string
}

/**
* # type `LowStockNotification`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/LowStockNotification
* 
* `@xlsoftware/smartshell-sdk`
*/
export type LowStockNotification = {
    enabled: boolean
    threshold: number
}

/**
* # type `LowStockNotificationInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/LowStockNotificationInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type LowStockNotificationInput = {
    enabled?: boolean
    threshold?: number
}

/**
* # type `MagicInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/MagicInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type MagicInput = {
    id: number
    id2: number
}

/**
* # type `Me`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/Me
* 
* `@xlsoftware/smartshell-sdk`
*/
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
    deposit: Decimal
    bonus: Decimal
    user_discount?: number
    group_discount?: number
    last_client_activity?: DateTime
    last_worker_activity?: DateTime
    created_at: DateTime
    updated_at: DateTime
    banned_at?: DateTime
    roles: Role[]
    permissions: Permission[]
    pausable_sessions: PausableClientSession[]
    age: number
    is_owner: boolean
    achievements: UserAchievements
    avatar_url: string
    news_consent: NewsConsent
    is_private: boolean
    unverified: boolean
    needs_password_change: boolean
    lead_source?: string
}

/**
* # enum `MethodType`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/MethodType
* 
* `@xlsoftware/smartshell-sdk`
*/
export type MethodType = "CASCADE" | "EMAIL" | "TELEGRAM"

/**
* # type `MobileEventsInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/MobileEventsInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type MobileEventsInput = {
    types: string[]
    start?: DateTime
    finish?: DateTime
    work_shift_id?: number
    q?: string
    payment_method?: string
}

/**
* # type `MoneyByTypes`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/MoneyByTypes
* 
* `@xlsoftware/smartshell-sdk`
*/
export type MoneyByTypes = {
    cash: Decimal
    card: Decimal
    deposit: Decimal
    bonus: Decimal
    total: Decimal
    currency?: Currency
}

/**
* # type `MoneyData`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/MoneyData
* 
* `@xlsoftware/smartshell-sdk`
*/
export type MoneyData = {
    good: Decimal
    service: Decimal
    tariff: Decimal
    deposit: Decimal
    tips: Decimal
}

/**
* # type `MovementOfFunds`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/MovementOfFunds
* 
* `@xlsoftware/smartshell-sdk`
*/
export type MovementOfFunds = {
    operation: OperationType
    transaction?: LitePaymentTransaction
    deal?: BeneficiaryDeal
    sum: Decimal
    created_at: DateTime
}

/**
* # type `MovementOfFundsPaginated`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/MovementOfFundsPaginated
* 
* `@xlsoftware/smartshell-sdk`
*/
export type MovementOfFundsPaginated = {
    paginatorInfo?: PaginatorInfo
    data: MovementOfFunds[]
    deposit: Decimal
    withdrawal: Decimal
}

/**
* # type `Network`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/Network
* 
* `@xlsoftware/smartshell-sdk`
*/
export type Network = {
    id: ID
    name: string
    description?: string
    organization: Organization
    companies: NetworkCompaniesData
}

/**
* # type `NetworkCompaniesData`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/NetworkCompaniesData
* 
* `@xlsoftware/smartshell-sdk`
*/
export type NetworkCompaniesData = {
    data: NetworkCompany[]
    total: number
}

/**
* # type `NetworkCompany`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/NetworkCompany
* 
* `@xlsoftware/smartshell-sdk`
*/
export type NetworkCompany = {
    club: LiteCompany
    network: Network
    is_main: boolean
    max_discount_enabled: boolean
    deposit_transfer_enabled: boolean
}

/**
* # type `NetworkCompanyInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/NetworkCompanyInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type NetworkCompanyInput = {
    max_discount_enabled?: boolean
    deposit_transfer_enabled?: boolean
}

/**
* # type `News`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/News
* 
* `@xlsoftware/smartshell-sdk`
*/
export type News = {
    data: Article[]
    paginatorInfo: PaginatorInfo
}

/**
* # type `NewsConsent`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/NewsConsent
* 
* `@xlsoftware/smartshell-sdk`
*/
export type NewsConsent = {
    isGiven: boolean
    givenAt?: DateTime
    revokedAt?: DateTime
}

/**
* # type `NewsFeed`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/NewsFeed
* 
* `@xlsoftware/smartshell-sdk`
*/
export type NewsFeed = {
    data: NewsFeedArticle[]
    paginatorInfo: PaginatorInfo
}

/**
* # type `NewsFeedArticle`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/NewsFeedArticle
* 
* `@xlsoftware/smartshell-sdk`
*/
export type NewsFeedArticle = {
    id: ID
    title: string
    content: string
    image?: string
    link?: ArticleLink
    company: LiteCompany
    created_at: DateTime
}

/**
* # enum `OperationType`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/OperationType
* 
* `@xlsoftware/smartshell-sdk`
*/
export type OperationType = "DEPOSIT" | "WITHDRAWAL"

/**
* # enum `OpfType`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/OpfType
* 
* `@xlsoftware/smartshell-sdk`
*/
export type OpfType = "OOO" | "OAO" | "AO"

/**
* # enum `OrderByDirection`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/OrderByDirection
* 
* `@xlsoftware/smartshell-sdk`
*/
export type OrderByDirection = "ASC" | "DESC"

/**
* # type `Organization`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/Organization
* 
* `@xlsoftware/smartshell-sdk`
*/
export type Organization = {
    id: number
    title: string
    phone?: string
    email?: Email
    address?: string
    hosts_count: number
    network?: Network
    verified_at?: DateTime
    activated_at?: DateTime
    banned_at?: DateTime
    created_at: DateTime
    updated_at: DateTime
    deleted_at?: DateTime
    news_consent?: boolean
}

/**
* # type `OrganizationConfirmationCodeInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/OrganizationConfirmationCodeInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type OrganizationConfirmationCodeInput = {
    phone: string
    type: OrganizationConfirmationCodeType
    code: string
}

/**
* # enum `OrganizationConfirmationCodeType`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/OrganizationConfirmationCodeType
* 
* `@xlsoftware/smartshell-sdk`
*/
export type OrganizationConfirmationCodeType = "REGISTER" | "RESET_PASSWORD" | "WITHDRAW"

/**
* # type `OrganizationInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/OrganizationInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type OrganizationInput = {
    email?: Email
    news_consent?: boolean
}

/**
* # type `OrganizationLoginInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/OrganizationLoginInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type OrganizationLoginInput = {
    phone: string
    password: string
}

/**
* # type `OrganizationPaymentCard`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/OrganizationPaymentCard
* 
* `@xlsoftware/smartshell-sdk`
*/
export type OrganizationPaymentCard = {
    id: number
    card_mask: string
    card_payment_system: string
    card_expires_at: string
    created_at: DateTime
}

/**
* # type `OrganizationRegisterInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/OrganizationRegisterInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type OrganizationRegisterInput = {
    phone: string
    email: Email
    password: string
    password_confirmation: string
    captcha_token: string
    news_consent?: boolean
}

/**
* # type `OrganizationResetPasswordInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/OrganizationResetPasswordInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type OrganizationResetPasswordInput = {
    hash: string
    code: string
    password: string
    password_confirmation: string
}

/**
* # type `OrganizationSendConfirmationCodeInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/OrganizationSendConfirmationCodeInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type OrganizationSendConfirmationCodeInput = {
    phone: string
    type: OrganizationConfirmationCodeType
    captcha_token: string
}

/**
* # type `OrganizationStartResetPasswordInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/OrganizationStartResetPasswordInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type OrganizationStartResetPasswordInput = {
    phone: string
    captcha_token: string
}

/**
* # enum `OrganizationUserType`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/OrganizationUserType
* 
* `@xlsoftware/smartshell-sdk`
*/
export type OrganizationUserType = "OWNER" | "DIRECTOR" | "SYSTEM_ADMINISTRATOR" | "HALL_ADMINISTRATOR"

/**
* # type `OrganizationVerifyConfirmationCodeInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/OrganizationVerifyConfirmationCodeInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type OrganizationVerifyConfirmationCodeInput = {
    hash: string
    code: string
}

/**
* # type `OverviewReport`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/OverviewReport
* 
* `@xlsoftware/smartshell-sdk`
*/
export type OverviewReport = {
    url?: string
    data: UnifiedReport[]
}

/**
* # enum `PaginateType`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/PaginateType
* 
* `@xlsoftware/smartshell-sdk`
*/
export type PaginateType = "PAGINATOR"

/**
* # type `PaginatorInfo`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/PaginatorInfo
* 
* `@xlsoftware/smartshell-sdk`
*/
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

/**
* # type `PassportInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/PassportInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type PassportInput = {
    serial: string
    number: string
    date: Date
    organization?: string
    division_code: string
}

/**
* # type `PausableClientSession`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/PausableClientSession
* 
* `@xlsoftware/smartshell-sdk`
*/
export type PausableClientSession = {
    id: number
    tariff: Tariff
    duration: number
    host_group?: HostGroup
    elapsed: number
    status: ClientSessionType
    available: boolean
    created_at: DateTime
    expires_at: DateTime
}

/**
* # type `Payment`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/Payment
* 
* `@xlsoftware/smartshell-sdk`
*/
export type Payment = {
    id: number
    client?: User
    client_session?: ClientSession
    work_shift?: WorkShift
    promo_code?: PromoCode
    discount?: Discount
    method: PaymentMethod
    status: PaymentStatus
    sum: Decimal
    bonus: Decimal
    created_at: DateTime
    items: PaymentItem[]
    is_refunded: boolean
    not_refundable: boolean
    card_sum: Decimal
    cash_sum: Decimal
    comment?: string
    cashback: Decimal
    external_data?: ExternalPaymentData
}

/**
* # type `PaymentHistory`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/PaymentHistory
* 
* `@xlsoftware/smartshell-sdk`
*/
export type PaymentHistory = {
    paginatorInfo: PaginatorInfo
    data: PaymentHistoryItem[]
}

/**
* # type `PaymentHistoryItem`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/PaymentHistoryItem
* 
* `@xlsoftware/smartshell-sdk`
*/
export type PaymentHistoryItem = {
    created_at: DateTime
    title: string
    amount: number
    sum: Decimal
    bonus: Decimal
    card_sum: Decimal
    cash_sum: Decimal
    worker?: User
    items: PaymentItem[]
    is_refunded: boolean
    paymentMethod: PaymentMethod
}

/**
* # type `PaymentInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/PaymentInput
* 
* `@xlsoftware/smartshell-sdk`
*/
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
    use_bonus?: boolean
}

/**
* # type `PaymentItem`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/PaymentItem
* 
* `@xlsoftware/smartshell-sdk`
*/
export type PaymentItem = {
    id: number
    payment_id: number
    combo_id?: number
    type: PaymentItemType
    entity?: PaymentItemEntity
    amount: number
    sum: number
}

/**
* # enum `PaymentItemEntity`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/PaymentItemEntity
* 
* `@xlsoftware/smartshell-sdk`
*/
export type PaymentItemEntity = Record<string, Good | Service | Tariff | Combo>

/**
* # type `PaymentItemInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/PaymentItemInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type PaymentItemInput = {
    type: PaymentItemType
    entity_id?: number
    host_id?: number
    amount: number
    sum?: number
}

/**
* # enum `PaymentItemType`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/PaymentItemType
* 
* `@xlsoftware/smartshell-sdk`
*/
export type PaymentItemType = "DEPOSIT" | "GOOD" | "SERVICE" | "TARIFF" | "COMBO" | "BONUS" | "TIPS"

/**
* # enum `PaymentMethod`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/PaymentMethod
* 
* `@xlsoftware/smartshell-sdk`
*/
export type PaymentMethod = "CARD" | "CASH" | "DEPOSIT" | "BONUS" | "COMPOSITE" | "CLOUD_PAYMENTS" | "POST_PAY" | "KASPI_QR" | "KASPI_CARD"

/**
* # type `PaymentReportItem`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/PaymentReportItem
* 
* `@xlsoftware/smartshell-sdk`
*/
export type PaymentReportItem = {
    value: Decimal
    currency?: Currency
}

/**
* # enum `PaymentStatus`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/PaymentStatus
* 
* `@xlsoftware/smartshell-sdk`
*/
export type PaymentStatus = "PENDING" | "PAID" | "UNPAID"

/**
* # type `PaymentTransaction`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/PaymentTransaction
* 
* `@xlsoftware/smartshell-sdk`
*/
export type PaymentTransaction = {
    id: string
    company_id: number
    service: ServiceEnum
    amount: Decimal
    sum: Decimal
    client: User
    status: string
    additional?: AdditionalTransactionData
    created_at: DateTime
    vat?: number
    label: string
}

/**
* # type `PaymentTransactionInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/PaymentTransactionInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type PaymentTransactionInput = {
    phone?: string
    company_id: number
    service: ServiceEnum
    amount: number
    return_format?: ReturnFormatEnum
    success_url?: string
    fail_url?: string
}

/**
* # type `PaymentTransactionPaginated`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/PaymentTransactionPaginated
* 
* `@xlsoftware/smartshell-sdk`
*/
export type PaymentTransactionPaginated = {
    paginatorInfo: PaginatorInfo
    data: PaymentTransaction[]
}

/**
* # enum `PaymentTransactionStatus`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/PaymentTransactionStatus
* 
* `@xlsoftware/smartshell-sdk`
*/
export type PaymentTransactionStatus = "PENDING" | "SUCCESS" | "EXPIRED" | "FAILED" | "CANCELED"

/**
* # enum `PaymentTransactionType`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/PaymentTransactionType
* 
* `@xlsoftware/smartshell-sdk`
*/
export type PaymentTransactionType = "MANAGER" | "CLIENT"

/**
* # type `PaymentsReport`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/PaymentsReport
* 
* `@xlsoftware/smartshell-sdk`
*/
export type PaymentsReport = {
    from: DateTime
    to: DateTime
}

/**
* # type `PenaltyHostInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/PenaltyHostInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type PenaltyHostInput = {
    host_id: number
    seconds: number
}

/**
* # type `Permission`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/Permission
* 
* `@xlsoftware/smartshell-sdk`
*/
export type Permission = {
    id: number
    alias: string
    title: string
    description?: string
}

/**
* # type `PermissionData`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/PermissionData
* 
* `@xlsoftware/smartshell-sdk`
*/
export type PermissionData = {
    id: number
    alias: string
    enabled: boolean
    locked: boolean
    title: string
    description?: string
}

/**
* # type `PermissionInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/PermissionInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type PermissionInput = {
    id: number
    alias: string
    enabled: boolean
}

/**
* # type `PhoneExistsInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/PhoneExistsInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type PhoneExistsInput = {
    phone: string
}

/**
* # type `PremiumPayment`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/PremiumPayment
* 
* `@xlsoftware/smartshell-sdk`
*/
export type PremiumPayment = {
    id: number
    sum: Decimal
    status: string
}

/**
* # type `ProcessPostPaymentInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ProcessPostPaymentInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ProcessPostPaymentInput = {
    method?: PaymentMethod
    cash_sum?: number
    comment?: string
    confirm_pass?: string
}

/**
* # type `ProcessStatsInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ProcessStatsInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ProcessStatsInput = {
    windows: ProcessStatsItemInput[]
    applications: ProcessStatsItemInput[]
}

/**
* # type `ProcessStatsItemInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ProcessStatsItemInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ProcessStatsItemInput = {
    name: string
    path: string
    seconds: number
}

/**
* # type `PromoCode`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/PromoCode
* 
* `@xlsoftware/smartshell-sdk`
*/
export type PromoCode = {
    id: number
    author: User
    client?: User
    code: string
    value: Decimal
    amount?: number
    entity?: CartEntity
    entity_id?: number
    created_at: DateTime
    is_tracked: boolean
}

/**
* # type `PromoCodeInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/PromoCodeInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type PromoCodeInput = {
    client_id?: number
    code: string
    value: number
    amount?: number
    entity?: CartEntity
    entity_id?: number
    is_tracked?: boolean
}

/**
* # type `PromoCodePaginated`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/PromoCodePaginated
* 
* `@xlsoftware/smartshell-sdk`
*/
export type PromoCodePaginated = {
    paginatorInfo?: PaginatorInfo
    data: PromoCode[]
}

/**
* # type `PublicationPeriod`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/PublicationPeriod
* 
* `@xlsoftware/smartshell-sdk`
*/
export type PublicationPeriod = {
    from?: DateTime
    until?: DateTime
}

/**
* # type `PublicationPeriodInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/PublicationPeriodInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type PublicationPeriodInput = {
    from?: DateTime
    until?: DateTime
}

/**
* # type `RefreshTokenInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/RefreshTokenInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type RefreshTokenInput = {
    refresh_token: string
}

/**
* # type `RefundPaymentInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/RefundPaymentInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type RefundPaymentInput = {
    id: number
    comment?: string
}

/**
* # type `Region`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/Region
* 
* `@xlsoftware/smartshell-sdk`
*/
export type Region = {
    alias: string
    code: string
}

/**
* # type `RegisterHostInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/RegisterHostInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type RegisterHostInput = {
    group_id: number
    mac_addr: MacAddress
    dns_name: string
    alias: string
}

/**
* # type `RegisterInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/RegisterInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type RegisterInput = {
    login: string
    email?: Email
    phone: string
    password: string
    dob: Date
    news_consent?: boolean
    captcha_token?: string
    type?: RegisterType
    first_name?: string
}

/**
* # enum `RegisterType`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/RegisterType
* 
* `@xlsoftware/smartshell-sdk`
*/
export type RegisterType = "SHELL" | "STATION" | "MANAGER"

/**
* # type `Report`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/Report
* 
* `@xlsoftware/smartshell-sdk`
*/
export type Report = {
    statSeances: StatBySeances
    statServices: StatByServices
    statGoods: StatByGoods
    statOrders: StatByOrders
    statDeposit: MoneyByTypes
    statMoney: MoneyByTypes
    statTransfer: StatByTransfers
}

/**
* # type `ReportInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ReportInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ReportInput = {
    start: DateTime
    end: DateTime
}

/**
* # type `ReportSortInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ReportSortInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ReportSortInput = {
    field: string
    direction: string
}

/**
* # type `ResetPasswordInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ResetPasswordInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ResetPasswordInput = {
    phone: string
    confirmation_code: string
    password: string
    password_confirmation: string
}

/**
* # type `ResultHostCommandInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ResultHostCommandInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ResultHostCommandInput = {
    id: number
    status: boolean
    result?: string
}

/**
* # enum `ReturnFormatEnum`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ReturnFormatEnum
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ReturnFormatEnum = "LINK" | "QR_CODE" | "QR_CODE_BASE64"

/**
* # type `Reward`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/Reward
* 
* `@xlsoftware/smartshell-sdk`
*/
export type Reward = {
    name: string
    value: Decimal
}

/**
* # type `RewardRequest`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/RewardRequest
* 
* `@xlsoftware/smartshell-sdk`
*/
export type RewardRequest = {
    name: string
    value: number
}

/**
* # type `Role`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/Role
* 
* `@xlsoftware/smartshell-sdk`
*/
export type Role = {
    id: number
    alias: string
    title: string
    description?: string
    is_service: boolean
    priority: number
    permissions: Permission[]
}

/**
* # type `RulesMessage`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/RulesMessage
* 
* `@xlsoftware/smartshell-sdk`
*/
export type RulesMessage = {
    rule: string
    message: string
}

/**
* # type `SalesExportInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/SalesExportInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type SalesExportInput = {
    from: DateTime
    to: DateTime
}

/**
* # type `Seance`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/Seance
* 
* `@xlsoftware/smartshell-sdk`
*/
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

/**
* # type `SeanceOverview`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/SeanceOverview
* 
* `@xlsoftware/smartshell-sdk`
*/
export type SeanceOverview = {
    id: number
    status: ClientSessionType
    tariff: TariffOverview
}

/**
* # type `SearchComboInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/SearchComboInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type SearchComboInput = {
    q?: string
    host_group_id?: number
}

/**
* # type `SearchReportInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/SearchReportInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type SearchReportInput = {
    q: string
}

/**
* # type `SendConfirmationCodeInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/SendConfirmationCodeInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type SendConfirmationCodeInput = {
    phone?: string
    type?: ConfirmationCodeType
    method?: MethodType
    captcha_token?: string
}

/**
* # type `SendConfirmationCodeToEnterInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/SendConfirmationCodeToEnterInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type SendConfirmationCodeToEnterInput = {
    login: string
    password: string
    email: string
}

/**
* # type `SendWakePacketInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/SendWakePacketInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type SendWakePacketInput = {
    host_id: number
}

/**
* # type `SendWakePacketsInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/SendWakePacketsInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type SendWakePacketsInput = {
    host_ids: number[]
}

/**
* # type `Service`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/Service
* 
* `@xlsoftware/smartshell-sdk`
*/
export type Service = {
    id: number
    title: string
    cost: Decimal
    wholesale_cost: Decimal
    tax_percent?: Decimal
    use_global_discounts: boolean
    created_at: DateTime
    tax_system?: TaxSystem
    vat?: Vat
    ean?: string
}

/**
* # enum `ServiceEnum`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ServiceEnum
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ServiceEnum = "CLOUD_PAYMENTS" | "KASPI_PAY" | "SBP" | "STRIPE"

/**
* # type `ServiceInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ServiceInput
* 
* `@xlsoftware/smartshell-sdk`
*/
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

/**
* # type `ServicesInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ServicesInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ServicesInput = {
    client_uuid?: string
}

/**
* # type `SessionsMoneyReport`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/SessionsMoneyReport
* 
* `@xlsoftware/smartshell-sdk`
*/
export type SessionsMoneyReport = {
    from: DateTime
    to: DateTime
    slice: SliceType
}

/**
* # type `SetBonusInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/SetBonusInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type SetBonusInput = {
    client_uuid: string
    value: number
}

/**
* # type `SetCloudPaymentsAccountToCompanyInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/SetCloudPaymentsAccountToCompanyInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type SetCloudPaymentsAccountToCompanyInput = {
    action: CloudPaymentsAccountAction
    publicId?: string
    secretKey?: string
    vat?: Vat
}

/**
* # type `SetDepositInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/SetDepositInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type SetDepositInput = {
    client_uuid: string
    value: number
}

/**
* # type `SetTelegramChannelInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/SetTelegramChannelInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type SetTelegramChannelInput = {
    value?: string
}

/**
* # type `SetTelegramSettingsInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/SetTelegramSettingsInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type SetTelegramSettingsInput = {
    token?: string
    chat_id?: string
    notification?: string
}

/**
* # type `SetUserDiscountInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/SetUserDiscountInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type SetUserDiscountInput = {
    client_uuid: string
    value: number
}

/**
* # type `Setting`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/Setting
* 
* `@xlsoftware/smartshell-sdk`
*/
export type Setting = {
    id: number
    alias: string
    value: string
    updated_at?: DateTime
}

/**
* # type `SettingPair`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/SettingPair
* 
* `@xlsoftware/smartshell-sdk`
*/
export type SettingPair = {
    alias: string
    value?: string
    updated_at?: DateTime
    disabled: boolean
}

/**
* # enum `ShellMode`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ShellMode
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ShellMode = "NORMAL" | "DISABLED" | "HIGH_ACCESS"

/**
* # type `Shortcut`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/Shortcut
* 
* `@xlsoftware/smartshell-sdk`
*/
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

/**
* # type `ShortcutGroup`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ShortcutGroup
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ShortcutGroup = {
    id: number
    title: string
    sort: number
    groupType: AppGroupType
}

/**
* # type `ShortcutGroupInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ShortcutGroupInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ShortcutGroupInput = {
    title: string
    sort?: number
    groupType?: AppGroupType
}

/**
* # type `ShortcutGroupItem`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ShortcutGroupItem
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ShortcutGroupItem = {
    title: string
    groupType?: AppGroupType
}

/**
* # type `ShortcutImageInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ShortcutImageInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ShortcutImageInput = {
    file: Upload
}

/**
* # type `ShortcutInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ShortcutInput
* 
* `@xlsoftware/smartshell-sdk`
*/
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

/**
* # type `ShortcutPath`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ShortcutPath
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ShortcutPath = {
    value: string[]
}

/**
* # type `ShortcutStatsInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ShortcutStatsInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ShortcutStatsInput = {
    id: number
}

/**
* # enum `SliceType`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/SliceType
* 
* `@xlsoftware/smartshell-sdk`
*/
export type SliceType = "DAY" | "WEEK" | "MONTH"

/**
* # enum `SortActiveClientEnum`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/SortActiveClientEnum
* 
* `@xlsoftware/smartshell-sdk`
*/
export type SortActiveClientEnum = "ByPayments" | "ByTime"

/**
* # type `SortInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/SortInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type SortInput = {
    field: string
    direction: string
}

/**
* # type `StartClientSessionInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/StartClientSessionInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type StartClientSessionInput = {
    user_id?: number
    host_id?: number
    post_paid?: boolean
}

/**
* # type `StartWorkShiftInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/StartWorkShiftInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type StartWorkShiftInput = {
    cash: number
}

/**
* # type `StatByGoods`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/StatByGoods
* 
* `@xlsoftware/smartshell-sdk`
*/
export type StatByGoods = {
    amount: number
    money: MoneyByTypes
}

/**
* # type `StatByOrders`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/StatByOrders
* 
* `@xlsoftware/smartshell-sdk`
*/
export type StatByOrders = {
    rko: number
    pko: number
}

/**
* # type `StatByRefunds`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/StatByRefunds
* 
* `@xlsoftware/smartshell-sdk`
*/
export type StatByRefunds = {
    amount: number
    money: MoneyByTypes
}

/**
* # type `StatBySeances`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/StatBySeances
* 
* `@xlsoftware/smartshell-sdk`
*/
export type StatBySeances = {
    amount: number
    hours: number
    money: MoneyByTypes
}

/**
* # type `StatByServices`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/StatByServices
* 
* `@xlsoftware/smartshell-sdk`
*/
export type StatByServices = {
    amount: number
    money: MoneyByTypes
}

/**
* # type `StatByTransfers`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/StatByTransfers
* 
* `@xlsoftware/smartshell-sdk`
*/
export type StatByTransfers = {
    income: Decimal
    outcome: Decimal
}

/**
* # type `StripeAccountInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/StripeAccountInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type StripeAccountInput = {
    secret_key: string
    publishable_key: string
}

/**
* # type `Tariff`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/Tariff
* 
* `@xlsoftware/smartshell-sdk`
*/
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

/**
* # type `TariffGridInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/TariffGridInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type TariffGridInput = {
    host_group_id?: number
    host_id?: number
    client_id?: number
    client_uuid?: string
    shift?: number
    use_bonus?: boolean
}

/**
* # type `TariffGridItem`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/TariffGridItem
* 
* `@xlsoftware/smartshell-sdk`
*/
export type TariffGridItem = {
    id: number
    title: string
    duration: number
    cost: number
    base_cost: number
    max_bonus_usage: number
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

/**
* # type `TariffInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/TariffInput
* 
* `@xlsoftware/smartshell-sdk`
*/
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

/**
* # enum `TariffKind`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/TariffKind
* 
* `@xlsoftware/smartshell-sdk`
*/
export type TariffKind = "PER_MINUTE" | "PAUSABLE" | "FIXED" | "PACKET"

/**
* # type `TariffOverview`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/TariffOverview
* 
* `@xlsoftware/smartshell-sdk`
*/
export type TariffOverview = {
    id: number
    title: string
    kind: TariffKind
}

/**
* # type `TariffPaginated`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/TariffPaginated
* 
* `@xlsoftware/smartshell-sdk`
*/
export type TariffPaginated = {
    paginatorInfo?: PaginatorInfo
    data: Tariff[]
}

/**
* # type `TariffPeriod`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/TariffPeriod
* 
* `@xlsoftware/smartshell-sdk`
*/
export type TariffPeriod = {
    start: number
    end: number
}

/**
* # type `TariffPeriodInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/TariffPeriodInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type TariffPeriodInput = {
    start: number
    end: number
}

/**
* # type `TariffPricelist`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/TariffPricelist
* 
* `@xlsoftware/smartshell-sdk`
*/
export type TariffPricelist = {
    host_groups: HostGroup[]
    cost_map: TariffPricelistCostMap[]
}

/**
* # type `TariffPricelistCostMap`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/TariffPricelistCostMap
* 
* `@xlsoftware/smartshell-sdk`
*/
export type TariffPricelistCostMap = {
    title: string
    value: number
    currency: Currency
}

/**
* # type `TariffPricelistCostMapInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/TariffPricelistCostMapInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type TariffPricelistCostMapInput = {
    title: TariffPricelistCostMapType
    value: number
    currency: string
}

/**
* # enum `TariffPricelistCostMapType`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/TariffPricelistCostMapType
* 
* `@xlsoftware/smartshell-sdk`
*/
export type TariffPricelistCostMapType = "DEFAULT" | "USER_COST"

/**
* # type `TariffPricelistInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/TariffPricelistInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type TariffPricelistInput = {
    host_groups: number[]
    cost_map: TariffPricelistCostMapInput[]
}

/**
* # type `TariffPurchaseByQRInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/TariffPurchaseByQRInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type TariffPurchaseByQRInput = {
    tariff_id: number
    qr: string
}

/**
* # type `TariffSchedule`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/TariffSchedule
* 
* `@xlsoftware/smartshell-sdk`
*/
export type TariffSchedule = {
    title: string
    cost: number
    user_cost: number
    intervals: TariffScheduleInterval[]
}

/**
* # type `TariffScheduleInterval`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/TariffScheduleInterval
* 
* `@xlsoftware/smartshell-sdk`
*/
export type TariffScheduleInterval = {
    week_day: number
    time_from: Time
    time_to: Time
}

/**
* # enum `Tax`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/Tax
* 
* `@xlsoftware/smartshell-sdk`
*/
export type Tax = "NONE" | "VAT0" | "VAT5" | "VAT7" | "VAT10" | "VAT20" | "VAT110" | "VAT120"

/**
* # enum `TaxSystem`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/TaxSystem
* 
* `@xlsoftware/smartshell-sdk`
*/
export type TaxSystem = "SIMPLE_INCOME" | "SIMPLE_INCOME_EXPENSES" | "PATENT" | "MAIN"

/**
* # type `TelegramChannel`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/TelegramChannel
* 
* `@xlsoftware/smartshell-sdk`
*/
export type TelegramChannel = {
    id: string
    type: TelegramChannelType
    title: string
}

/**
* # enum `TelegramChannelType`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/TelegramChannelType
* 
* `@xlsoftware/smartshell-sdk`
*/
export type TelegramChannelType = "SUPERGROUP" | "GROUP" | "CHANNEL" | "PRIVATE"

/**
* # type `TelegramSettings`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/TelegramSettings
* 
* `@xlsoftware/smartshell-sdk`
*/
export type TelegramSettings = {
    token?: string
    channel?: TelegramChannel
    notification: string
}

/**
* # type `TransferDepositInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/TransferDepositInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type TransferDepositInput = {
    source_company_id: number
    target_company_id?: number
    value: number
}

/**
* # type `ULResidentInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ULResidentInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ULResidentInput = {
    name: string
    opf: OpfType
    inn: string
    ogrn: string
    registration_date: Date
    legal_entity_address: string
    phone: string
    email?: string
}

/**
* # type `UnifiedReport`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/UnifiedReport
* 
* `@xlsoftware/smartshell-sdk`
*/
export type UnifiedReport = {
    title?: string
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

/**
* # type `UnifiedReportData`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/UnifiedReportData
* 
* `@xlsoftware/smartshell-sdk`
*/
export type UnifiedReportData = {
    values: Decimal[]
}

/**
* # type `UnifiedReportPaginated`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/UnifiedReportPaginated
* 
* `@xlsoftware/smartshell-sdk`
*/
export type UnifiedReportPaginated = {
    report: UnifiedReport
    hasNext: boolean
}

/**
* # type `UnifiedSummaryData`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/UnifiedSummaryData
* 
* `@xlsoftware/smartshell-sdk`
*/
export type UnifiedSummaryData = {
    title: string
    value: Decimal
    extraValue?: Decimal
    extraString?: string
}

/**
* # type `UniqueUsersReport`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/UniqueUsersReport
* 
* `@xlsoftware/smartshell-sdk`
*/
export type UniqueUsersReport = {
    from: DateTime
    to: DateTime
    slice: SliceType
}

/**
* # type `UpcomingAutoPaymentData`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/UpcomingAutoPaymentData
* 
* `@xlsoftware/smartshell-sdk`
*/
export type UpcomingAutoPaymentData = {
    card: OrganizationPaymentCard
    amount: Decimal
    payment_date: Date
}

/**
* # type `UpdateClientMeInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/UpdateClientMeInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type UpdateClientMeInput = {
    first_name?: string
    last_name?: string
    middle_name?: string
    nickname?: string
    email?: Email
    dob?: Date
    city?: string
    avatar_url?: string
    telegram_link?: string
    discord_link?: string
    steam_link?: string
    vk_link?: string
    is_private?: boolean
    favorite_club?: number
}

/**
* # type `UpdateClubInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/UpdateClubInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type UpdateClubInput = {
    name?: string
    address?: string
    city?: string
    street?: string
    house_number?: string
    contact_name?: string
    contact_type?: OrganizationUserType
    contact_phone?: string
    url?: string
    telegram?: string
    info?: string
    timezone?: number
    country_code?: string
    verify?: boolean
    club_phone?: string
    vk_url?: string
    telegram_url?: string
    whats_up_url?: string
    region?: string
    comment?: string
    country?: string
    lat?: number
    lng?: number
    work_schedule: ClubWorkScheduleInput[]
    work_schedule_247?: boolean
    hardware: ClubHardwareInput[]
    logo_url?: string
    header_url?: string
    pricelist_urls: string[]
    interior_urls: string[]
    services?: ClubServicesInput
}

/**
* # type `UpdateCompanyPermissionsInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/UpdateCompanyPermissionsInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type UpdateCompanyPermissionsInput = {
    company_permissions: CompanyPermissionsInput[]
}

/**
* # type `UpdateGameAccountInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/UpdateGameAccountInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type UpdateGameAccountInput = {
    login: string
    password?: string
    active: boolean
    group_id: number
    host_id?: number
}

/**
* # type `UpdateGoodInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/UpdateGoodInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type UpdateGoodInput = {
    title?: string
    subtitle?: string
    comment?: string
    cost?: number
    wholesale_cost?: number
    tax_percent?: number
    unit_name?: string
    unit_value?: number
    amount?: number
    image?: string
    use_global_discounts?: boolean
    tax_system?: TaxSystem
    vat?: Vat
    use_fair_sign?: boolean
    is_excise?: boolean
    price?: number
    show_in_shell?: boolean
    category_id?: number
    highlighted?: boolean
}

/**
* # type `UpdateGoodsInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/UpdateGoodsInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type UpdateGoodsInput = {
    show_in_shell?: boolean
    category_id?: number
    low_stock_notification?: LowStockNotificationInput
    highlighted?: boolean
}

/**
* # type `UpdateHostCommandStatusInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/UpdateHostCommandStatusInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type UpdateHostCommandStatusInput = {
    id: number
    success: boolean
}

/**
* # type `UpdateHostCommandTemplateInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/UpdateHostCommandTemplateInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type UpdateHostCommandTemplateInput = {
    id: number
    title: string
    path: string
    arguments?: string
}

/**
* # type `UpdateHostStateInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/UpdateHostStateInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type UpdateHostStateInput = {
    cpu_temp: number
    disk_temp: number
    disk_status: HostDiskInfoInput[]
    active_window: string
    com_result?: ResultHostCommandInput
}

/**
* # type `UpdateMeInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/UpdateMeInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type UpdateMeInput = {
    first_name?: string
    last_name?: string
    middle_name?: string
    nickname?: string
    email?: string
    news_consent?: boolean
    password?: string
    password_confirmation?: string
    lead_source?: string
}

/**
* # type `UpdateMultipleSettingsInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/UpdateMultipleSettingsInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type UpdateMultipleSettingsInput = {
    list: UpdateSettingInput[]
}

/**
* # type `UpdateNetworkInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/UpdateNetworkInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type UpdateNetworkInput = {
    name?: string
    main_company_id?: number
    description?: string
}

/**
* # type `UpdateNewsArticleInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/UpdateNewsArticleInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type UpdateNewsArticleInput = {
    title?: string
    content?: string
    image?: string
    link?: ArticleLinkInput
    active?: boolean
    publication_period?: PublicationPeriodInput
}

/**
* # type `UpdatePasswordInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/UpdatePasswordInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type UpdatePasswordInput = {
    old_password: string
    password: string
    password_confirmation: string
}

/**
* # type `UpdateSettingInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/UpdateSettingInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type UpdateSettingInput = {
    alias: string
    value?: string
}

/**
* # type `UpdateShortcutGroupSortInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/UpdateShortcutGroupSortInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type UpdateShortcutGroupSortInput = {
    id: number
    sort: number
}

/**
* # type `UpdateShortcutSortInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/UpdateShortcutSortInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type UpdateShortcutSortInput = {
    id: number
    sort: number
}

/**
* # type `UpdateTariffsSortInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/UpdateTariffsSortInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type UpdateTariffsSortInput = {
    id: number
    sort: number
}

/**
* # type `UpdateWorkerInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/UpdateWorkerInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type UpdateWorkerInput = {
    first_name: string
    last_name: string
    middle_name: string
    role_ids: number[]
}

/**
* # type `User`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/User
* 
* `@xlsoftware/smartshell-sdk`
*/
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
    deposit: Decimal
    bonus: Decimal
    last_client_activity?: DateTime
    last_worker_activity?: DateTime
    last_comment?: Comment
    user_discount?: number
    created_at: DateTime
    updated_at: DateTime
    disabled_at?: DateTime
    banned_at?: DateTime
    total_hours: number
    pausable_sessions: PausableClientSession[]
    city?: string
    avatar_url: string
    news_consent: NewsConsent
    telegram_link?: string
    discord_link?: string
    steam_link?: string
    vk_link?: string
    is_private: boolean
    premium: boolean
    unverified: boolean
    lead_source?: string
    discounts: UserDiscount[]
    favorite_club?: number
}

/**
* # type `UserAchievement`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/UserAchievement
* 
* `@xlsoftware/smartshell-sdk`
*/
export type UserAchievement = {
    id: string
    has: boolean
    name: string
    icon_url?: string
    conditions: Condition[]
    rewards: Reward[]
    progress: Decimal
}

/**
* # type `UserAchievements`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/UserAchievements
* 
* `@xlsoftware/smartshell-sdk`
*/
export type UserAchievements = {
    single: UserAchievement[]
    continuous: UserAchievement[]
}

/**
* # type `UserClub`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/UserClub
* 
* `@xlsoftware/smartshell-sdk`
*/
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

/**
* # type `UserClubsInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/UserClubsInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type UserClubsInput = {
    login: string
    password: string
}

/**
* # type `UserDiscount`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/UserDiscount
* 
* `@xlsoftware/smartshell-sdk`
*/
export type UserDiscount = {
    type: UserDiscountType
    value: number
}

/**
* # enum `UserDiscountType`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/UserDiscountType
* 
* `@xlsoftware/smartshell-sdk`
*/
export type UserDiscountType = "PERSONAL" | "GROUP" | "NETWORK"

/**
* # type `UserGroup`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/UserGroup
* 
* `@xlsoftware/smartshell-sdk`
*/
export type UserGroup = {
    uuid: string
    title: string
    user_count: number
    discount: number
    created_at: DateTime
}

/**
* # type `UserGroupInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/UserGroupInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type UserGroupInput = {
    title: string
    discount: number
}

/**
* # type `UserPaginated`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/UserPaginated
* 
* `@xlsoftware/smartshell-sdk`
*/
export type UserPaginated = {
    paginatorInfo?: PaginatorInfo
    data: User[]
    total_deposits?: Decimal
}

/**
* # type `UserTableInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/UserTableInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type UserTableInput = {
    file: Upload
}

/**
* # type `UsersInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/UsersInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type UsersInput = {
    q?: string
}

/**
* # type `ValidatePromoCodeInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ValidatePromoCodeInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ValidatePromoCodeInput = {
    client_id?: number
    entity?: CartEntity
    entity_id?: number
    code: string
}

/**
* # type `ValidateQRInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/ValidateQRInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type ValidateQRInput = {
    qr: string
}

/**
* # enum `Vat`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/Vat
* 
* `@xlsoftware/smartshell-sdk`
*/
export type Vat = "NO_NDS" | "NDS_0" | "NDS_5" | "NDS_7" | "NDS_10" | "NDS_20" | "NDS_110" | "NDS_120"

/**
* # type `VerifyUserInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/VerifyUserInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type VerifyUserInput = {
    code: string
}

/**
* # type `Versions`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/Versions
* 
* `@xlsoftware/smartshell-sdk`
*/
export type Versions = {
    easter_egg?: string
    frontend?: string
    backend?: string
}

/**
* # enum `WarehouseOperationType`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/WarehouseOperationType
* 
* `@xlsoftware/smartshell-sdk`
*/
export type WarehouseOperationType = "ADD" | "DISPOSAL" | "SOLD"

/**
* # type `WarehouseState`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/WarehouseState
* 
* `@xlsoftware/smartshell-sdk`
*/
export type WarehouseState = {
    received: number
    income: number
    sold: number
    disposal: number
}

/**
* # type `WithdrawToCheckingAccountInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/WithdrawToCheckingAccountInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type WithdrawToCheckingAccountInput = {
    beneficiary_id: string
    code: string
}

/**
* # type `WorkShift`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/WorkShift
* 
* `@xlsoftware/smartshell-sdk`
*/
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

/**
* # type `WorkShiftEvent`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/WorkShiftEvent
* 
* `@xlsoftware/smartshell-sdk`
*/
export type WorkShiftEvent = {
    id: number
    type: string
    created_at: DateTime
}

/**
* # type `WorkShiftInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/WorkShiftInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type WorkShiftInput = {
    created_from?: DateTime
    created_to?: DateTime
    worker_id?: number
}

/**
* # type `WorkShiftMoney`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/WorkShiftMoney
* 
* `@xlsoftware/smartshell-sdk`
*/
export type WorkShiftMoney = {
    sum: MoneyByTypes
    cash_on_start: Decimal
}

/**
* # type `WorkShiftPaginated`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/WorkShiftPaginated
* 
* `@xlsoftware/smartshell-sdk`
*/
export type WorkShiftPaginated = {
    paginatorInfo?: PaginatorInfo
    data: WorkShift[]
}

/**
* # type `WorkShiftPaymentOverviewComboData`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/WorkShiftPaymentOverviewComboData
* 
* `@xlsoftware/smartshell-sdk`
*/
export type WorkShiftPaymentOverviewComboData = {
    title: string
    amount: number
    sum: Decimal
}

/**
* # type `WorkShiftPaymentOverviewData`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/WorkShiftPaymentOverviewData
* 
* `@xlsoftware/smartshell-sdk`
*/
export type WorkShiftPaymentOverviewData = {
    id: number
    worker: User
    cash_on_start: Decimal
    total: Decimal
    deposit: Decimal
    online_deposit: Decimal
    bonus: Decimal
    refunded: Decimal
    cash: Decimal
    card: Decimal
    cash_orders: CashOrder[]
    sum: MoneyData
    currency?: Currency
    created_at: DateTime
    finished_at?: DateTime
    goods: WorkShiftPaymentOverviewGoodData[]
    services: WorkShiftPaymentOverviewServiceData[]
    combos: WorkShiftPaymentOverviewComboData[]
}

/**
* # type `WorkShiftPaymentOverviewGoodData`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/WorkShiftPaymentOverviewGoodData
* 
* `@xlsoftware/smartshell-sdk`
*/
export type WorkShiftPaymentOverviewGoodData = {
    title: string
    cost: Decimal
    amount: number
    in_stock: number
    sum: Decimal
}

/**
* # type `WorkShiftPaymentOverviewServiceData`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/WorkShiftPaymentOverviewServiceData
* 
* `@xlsoftware/smartshell-sdk`
*/
export type WorkShiftPaymentOverviewServiceData = {
    title: string
    amount: number
    sum: Decimal
}

/**
* # enum `WorkShiftStatus`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/WorkShiftStatus
* 
* `@xlsoftware/smartshell-sdk`
*/
export type WorkShiftStatus = "NONE" | "OPEN" | "MY" | "LOCKED"

/**
* # type `WorkShiftSummary`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/WorkShiftSummary
* 
* `@xlsoftware/smartshell-sdk`
*/
export type WorkShiftSummary = {
    id: number
    summary?: string
}

/**
* # type `WorkShiftsReport`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/WorkShiftsReport
* 
* `@xlsoftware/smartshell-sdk`
*/
export type WorkShiftsReport = {
    from: DateTime
    to: DateTime
    workerUuid?: string
}

/**
* # type `WorkerTask`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/WorkerTask
* 
* `@xlsoftware/smartshell-sdk`
*/
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

/**
* # type `WorkerTaskInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/WorkerTaskInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type WorkerTaskInput = {
    title: string
    assigned_to?: number
    deadline_at?: DateTime
}

/**
* # type `WorkerTaskPaginated`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/WorkerTaskPaginated
* 
* `@xlsoftware/smartshell-sdk`
*/
export type WorkerTaskPaginated = {
    paginatorInfo?: PaginatorInfo
    data: WorkerTask[]
}

/**
* # type `WorkersInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/WorkersInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type WorkersInput = {
    q?: string
}

/**
* # type `pickGameAccountInput`
* 
* 🔗 https://smartshell.xlsoftware.ru/docs/reference/types/pickGameAccountInput
* 
* `@xlsoftware/smartshell-sdk`
*/
export type pickGameAccountInput = {
    shortcut_id: number
}
