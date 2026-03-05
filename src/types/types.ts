export type Upload = string

export type Decimal = number

export type ID = string

export type Email = `${string}@${string}.${string}`;

export type IpAddress = `${number}.${number}.${number}.${number}`;

export type MacAddress = `${string}:${string}:${string}:${string}:${string}:${string}`;

export type Date = `${number}${number}${number}${number}-${number}${number}-${number}${number}`

export type Time = `${number}${number}:${number}${number}:${number}${number}`

export type DateTime = `${Date} ${Time}`

/**
* # type `AccessToken`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/AccessToken
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/AccessTokenMetadata
* 
* `@xlsft/smartshell-sdk`
*/
export type AccessTokenMetadata = {
    first_time_login: boolean
}

/**
* # type `Achievement`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/Achievement
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/AchievementInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/AchievementStatus
* 
* `@xlsft/smartshell-sdk`
*/
export type AchievementStatus = "ACTIVE" | "DISABLED"

/**
* # type `ActiveClient`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ActiveClient
* 
* `@xlsft/smartshell-sdk`
*/
export type ActiveClient = {
    client_uuid: string
    nickname: string
    avatar_url?: string
    payments: Decimal
    total_seconds: number
    last_client_activity?: DateTime
    roles: Role[]
}

/**
* # type `AdditionalLicensePaymentInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/AdditionalLicensePaymentInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/AdditionalLicensePriceInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/AdditionalPaymentData
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/AdditionalTransactionData
* 
* `@xlsft/smartshell-sdk`
*/
export type AdditionalTransactionData = {
    public_id?: string
    data?: string
}

/**
* # type `AgeRating`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/AgeRating
* 
* `@xlsft/smartshell-sdk`
*/
export type AgeRating = {
    alias: string
    value: number
}

/**
* # enum `AppGroupType`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/AppGroupType
* 
* `@xlsft/smartshell-sdk`
*/
export type AppGroupType = "APPLICATION" | "GAME" | "DEFAULT"

/**
* # enum `AppType`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/AppType
* 
* `@xlsft/smartshell-sdk`
*/
export type AppType = "APPLICATION" | "GAME"

/**
* # type `ApplicationsReportInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ApplicationsReportInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ApplicationsReportType
* 
* `@xlsft/smartshell-sdk`
*/
export type ApplicationsReportType = "APPLICATION" | "WINDOW" | "CLICK"

/**
* # type `Article`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/Article
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ArticleLink
* 
* `@xlsft/smartshell-sdk`
*/
export type ArticleLink = {
    label: string
    url: string
}

/**
* # type `ArticleLinkInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ArticleLinkInput
* 
* `@xlsft/smartshell-sdk`
*/
export type ArticleLinkInput = {
    label?: string
    url?: string
}

/**
* # type `BankAccountInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/BankAccountInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/Beneficiary
* 
* `@xlsft/smartshell-sdk`
*/
export type Beneficiary = {
    id: string
    organization_id: number
    type: BeneficiaryType
    opf?: OpfType
    full_name: string
    phone?: string
    email?: string
    inn: string
    status: string
    balance: Decimal
    tax: Tax
    service_name?: string
    bank_details?: string
    bank_details_data?: BeneficiaryBankDetails
    companies: LiteCompany[]
    counterparty_data?: CounterpartyData
    locked_by?: BeneficiaryDeal
    error?: string
    created_at: DateTime
}

/**
* # type `BeneficiaryBalance`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/BeneficiaryBalance
* 
* `@xlsft/smartshell-sdk`
*/
export type BeneficiaryBalance = {
    balance: Decimal
    commission: Decimal
    sum: Decimal
    net_sum: Decimal
    locked: boolean
}

/**
* # type `BeneficiaryBankDetails`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/BeneficiaryBankDetails
* 
* `@xlsft/smartshell-sdk`
*/
export type BeneficiaryBankDetails = {
    bank_name: string
    bik: string
    account: string
    correspondent_account: string
    kpp?: string
}

/**
* # type `BeneficiaryDeal`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/BeneficiaryDeal
* 
* `@xlsft/smartshell-sdk`
*/
export type BeneficiaryDeal = {
    id: string
    sum: Decimal
    total_sum: Decimal
    beneficiary: Beneficiary
    commission: Decimal
    commission_details?: CommissionDetails
    status: string
    error?: string
    auto_withdraw: boolean
    created_at: DateTime
    updated_at: DateTime
}

/**
* # enum `BeneficiaryType`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/BeneficiaryType
* 
* `@xlsft/smartshell-sdk`
*/
export type BeneficiaryType = "UL_RESIDENT" | "IP_RESIDENT"

/**
* # type `BonusDetailedTimeSeriesInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/BonusDetailedTimeSeriesInput
* 
* `@xlsft/smartshell-sdk`
*/
export type BonusDetailedTimeSeriesInput = {
    from: DateTime
    to: DateTime
    groupBy: SliceType
}

/**
* # type `BonusHistory`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/BonusHistory
* 
* `@xlsft/smartshell-sdk`
*/
export type BonusHistory = {
    paginatorInfo: PaginatorInfo
    data: BonusHistoryItem[]
}

/**
* # type `BonusHistoryItem`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/BonusHistoryItem
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/BonusHistoryReportInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/BonusReport
* 
* `@xlsft/smartshell-sdk`
*/
export type BonusReport = {
    from: DateTime
    to: DateTime
    userId?: number
}

/**
* # enum `BonusReportOrderByType`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/BonusReportOrderByType
* 
* `@xlsft/smartshell-sdk`
*/
export type BonusReportOrderByType = "MANAGED"

/**
* # type `Booking`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/Booking
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/BookingClientStatus
* 
* `@xlsft/smartshell-sdk`
*/
export type BookingClientStatus = "ACTIVE" | "INACTIVE"

/**
* # type `BookingInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/BookingInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/BookingPaginated
* 
* `@xlsft/smartshell-sdk`
*/
export type BookingPaginated = {
    paginatorInfo?: PaginatorInfo
    data: Booking[]
}

/**
* # type `BookingSettings`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/BookingSettings
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/BookingStatus
* 
* `@xlsft/smartshell-sdk`
*/
export type BookingStatus = "ACTIVE" | "FINISHED" | "CANCELED" | "REDEEMED" | "REDEEMED_AUTO"

/**
* # type `BoughtTariffsReport`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/BoughtTariffsReport
* 
* `@xlsft/smartshell-sdk`
*/
export type BoughtTariffsReport = {
    from: DateTime
    to: DateTime
}

/**
* # enum `CartEntity`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/CartEntity
* 
* `@xlsft/smartshell-sdk`
*/
export type CartEntity = "GOOD" | "SERVICE" | "TARIFF"

/**
* # type `CashOrder`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/CashOrder
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/CashOrderData
* 
* `@xlsft/smartshell-sdk`
*/
export type CashOrderData = {
    rko: Decimal
    pko: Decimal
}

/**
* # type `CashOrderInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/CashOrderInput
* 
* `@xlsft/smartshell-sdk`
*/
export type CashOrderInput = {
    type: CashOrderType
    sum: number
    comment: string
}

/**
* # enum `CashOrderType`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/CashOrderType
* 
* `@xlsft/smartshell-sdk`
*/
export type CashOrderType = "PKO" | "RKO"

/**
* # type `CategoriesInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/CategoriesInput
* 
* `@xlsft/smartshell-sdk`
*/
export type CategoriesInput = {
    client_uuid?: string
}

/**
* # type `Category`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/Category
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/CategoryInput
* 
* `@xlsft/smartshell-sdk`
*/
export type CategoryInput = {
    title: string
    show_in_shell: boolean
    sell_periods: CategoryPeriodInput[]
}

/**
* # type `CategoryPeriod`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/CategoryPeriod
* 
* `@xlsft/smartshell-sdk`
*/
export type CategoryPeriod = {
    start: number
    end: number
}

/**
* # type `CategoryPeriodInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/CategoryPeriodInput
* 
* `@xlsft/smartshell-sdk`
*/
export type CategoryPeriodInput = {
    start: number
    end: number
}

/**
* # type `ChangeClientSessionHostInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ChangeClientSessionHostInput
* 
* `@xlsft/smartshell-sdk`
*/
export type ChangeClientSessionHostInput = {
    host_id: number
}

/**
* # type `ChangeCompanyOwnerInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ChangeCompanyOwnerInput
* 
* `@xlsft/smartshell-sdk`
*/
export type ChangeCompanyOwnerInput = {
    company_id: number
    owner_id: number
}

/**
* # type `ChangeGoodsQuantityInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ChangeGoodsQuantityInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ChangeGoodsQuantityItemInput
* 
* `@xlsft/smartshell-sdk`
*/
export type ChangeGoodsQuantityItemInput = {
    id: number
    quantity: number
}

/**
* # type `ChangeUsersGroupInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ChangeUsersGroupInput
* 
* `@xlsft/smartshell-sdk`
*/
export type ChangeUsersGroupInput = {
    group_uuid?: string
    users_uuids: string[]
}

/**
* # type `ClientBooking`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClientBooking
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClientBookingInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClientBookingPenaltyData
* 
* `@xlsft/smartshell-sdk`
*/
export type ClientBookingPenaltyData = {
    cost: Decimal
    currency: Currency
}

/**
* # type `ClientClub`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClientClub
* 
* `@xlsft/smartshell-sdk`
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
    current_session?: ClientClubSession
    owner?: LiteOwner
    key_hash: string
    metro: string
}

/**
* # type `ClientClubCashback`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClientClubCashback
* 
* `@xlsft/smartshell-sdk`
*/
export type ClientClubCashback = {
    amount: Decimal
    is_percent: boolean
    value: Decimal
}

/**
* # type `ClientClubCommentInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClientClubCommentInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClientClubGood
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClientClubGoodCategory
* 
* `@xlsft/smartshell-sdk`
*/
export type ClientClubGoodCategory = {
    id: number
    title: string
}

/**
* # type `ClientClubOnMap`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClientClubOnMap
* 
* `@xlsft/smartshell-sdk`
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
* # type `ClientClubSession`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClientClubSession
* 
* `@xlsft/smartshell-sdk`
*/
export type ClientClubSession = {
    time_left?: number
    host: ClientClubSessionHost
    tariff: ClientClubSessionTariff
    postpaid: boolean
    finished_at?: DateTime
}

/**
* # type `ClientClubSessionHost`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClientClubSessionHost
* 
* `@xlsft/smartshell-sdk`
*/
export type ClientClubSessionHost = {
    id: number
    title: string
    host_group_title: string
}

/**
* # type `ClientClubSessionTariff`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClientClubSessionTariff
* 
* `@xlsft/smartshell-sdk`
*/
export type ClientClubSessionTariff = {
    id: number
    title: string
    per_minute: boolean
    pausable: boolean
}

/**
* # type `ClientClubSettings`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClientClubSettings
* 
* `@xlsft/smartshell-sdk`
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
    host_map: string
}

/**
* # type `ClientClubVisit`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClientClubVisit
* 
* `@xlsft/smartshell-sdk`
*/
export type ClientClubVisit = {
    visited_at: DateTime
    client_session_id: number
}

/**
* # type `ClientHost`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClientHost
* 
* `@xlsft/smartshell-sdk`
*/
export type ClientHost = {
    id: number
    group_id: number
    group_title: string
    type: HostTypeValue
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClientHostGroup
* 
* `@xlsft/smartshell-sdk`
*/
export type ClientHostGroup = {
    id: number
    title: string
    customization?: HostGroupCustomization
}

/**
* # type `ClientLoginInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClientLoginInput
* 
* `@xlsft/smartshell-sdk`
*/
export type ClientLoginInput = {
    login: string
    password: string
}

/**
* # type `ClientRegisterInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClientRegisterInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClientSession
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClientSessionHost
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClientSessionOverview
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClientSessionPaginated
* 
* `@xlsft/smartshell-sdk`
*/
export type ClientSessionPaginated = {
    paginatorInfo?: PaginatorInfo
    data: ClientSession[]
}

/**
* # type `ClientSessionReportInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClientSessionReportInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClientSessionType
* 
* `@xlsft/smartshell-sdk`
*/
export type ClientSessionType = "PLANNED" | "ACTIVE" | "FINISHED" | "CANCELLED"

/**
* # type `ClientTariffGridInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClientTariffGridInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClientTariffGridItem
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClientsInput
* 
* `@xlsft/smartshell-sdk`
*/
export type ClientsInput = {
    q: string
    sort?: SortInput
    filter?: FilterInput
}

/**
* # type `ClientsPaymentReportInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClientsPaymentReportInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClientsPaymentReportItem
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClientsPaymentReportPaginated
* 
* `@xlsft/smartshell-sdk`
*/
export type ClientsPaymentReportPaginated = {
    paginatorInfo?: PaginatorInfo
    data: ClientsPaymentReportItem[]
}

/**
* # type `CloudPaymentsAccount`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/CloudPaymentsAccount
* 
* `@xlsft/smartshell-sdk`
*/
export type CloudPaymentsAccount = {
    publicId: string
    secretKey: string
}

/**
* # enum `CloudPaymentsAccountAction`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/CloudPaymentsAccountAction
* 
* `@xlsft/smartshell-sdk`
*/
export type CloudPaymentsAccountAction = "SET" | "REMOVE"

/**
* # type `Club`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/Club
* 
* `@xlsft/smartshell-sdk`
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
    key_hash: string
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
    metro: string
}

/**
* # type `ClubComment`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClubComment
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClubCommentInput
* 
* `@xlsft/smartshell-sdk`
*/
export type ClubCommentInput = {
    text?: string
    grade: number
    request_contact?: boolean
    request_contact_info?: string
    tips?: number
    client_session_id?: number
}

/**
* # type `ClubCommentPaginated`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClubCommentPaginated
* 
* `@xlsft/smartshell-sdk`
*/
export type ClubCommentPaginated = {
    paginatorInfo?: PaginatorInfo
    data: ClubComment[]
    summary: ClubCommentSummary
}

/**
* # type `ClubCommentSearchInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClubCommentSearchInput
* 
* `@xlsft/smartshell-sdk`
*/
export type ClubCommentSearchInput = {
    user_uuid?: string
    sort?: ClubCommentSearchSort
}

/**
* # enum `ClubCommentSearchSort`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClubCommentSearchSort
* 
* `@xlsft/smartshell-sdk`
*/
export type ClubCommentSearchSort = "NEW_FIRST" | "OLD_FIRST" | "HIGH_GRADE_FIRST" | "LOW_GRADE_FIRST"

/**
* # type `ClubCommentSummary`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClubCommentSummary
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClubHardware
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClubHardwareInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClubInput
* 
* `@xlsft/smartshell-sdk`
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
    metro?: string
}

/**
* # type `ClubOption`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClubOption
* 
* `@xlsft/smartshell-sdk`
*/
export type ClubOption = {
    title: string
    options: string[]
}

/**
* # type `ClubServices`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClubServices
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClubServicesInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClubVerificationStatus
* 
* `@xlsft/smartshell-sdk`
*/
export type ClubVerificationStatus = "UNVERIFIED" | "REVIEW" | "VERIFIED" | "DECLINED"

/**
* # type `ClubWorkSchedule`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClubWorkSchedule
* 
* `@xlsft/smartshell-sdk`
*/
export type ClubWorkSchedule = {
    day: number
    Start: string
    End: string
}

/**
* # type `ClubWorkScheduleInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ClubWorkScheduleInput
* 
* `@xlsft/smartshell-sdk`
*/
export type ClubWorkScheduleInput = {
    day: number
    Start: string
    End: string
}

/**
* # type `Combo`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/Combo
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ComboInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ComboItem
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ComboItemEntity
* 
* `@xlsft/smartshell-sdk`
*/
export type ComboItemEntity = Record<string, Service | Good>

/**
* # enum `ComboItemEntityType`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ComboItemEntityType
* 
* `@xlsft/smartshell-sdk`
*/
export type ComboItemEntityType = "GOOD" | "SERVICE"

/**
* # type `ComboItemInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ComboItemInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ComboListInput
* 
* `@xlsft/smartshell-sdk`
*/
export type ComboListInput = {
    host_id?: number
    client_uuid?: string
    shift?: number
}

/**
* # type `ComboListItem`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ComboListItem
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ComboPaginated
* 
* `@xlsft/smartshell-sdk`
*/
export type ComboPaginated = {
    paginatorInfo?: PaginatorInfo
    data: Combo[]
}

/**
* # type `Comment`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/Comment
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/CommentEntity
* 
* `@xlsft/smartshell-sdk`
*/
export type CommentEntity = Record<string, User | Host | ClientSession>

/**
* # type `CommentInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/CommentInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/CommentPaginated
* 
* `@xlsft/smartshell-sdk`
*/
export type CommentPaginated = {
    paginatorInfo?: PaginatorInfo
    data: Comment[]
}

/**
* # type `CommentSearchInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/CommentSearchInput
* 
* `@xlsft/smartshell-sdk`
*/
export type CommentSearchInput = {
    entity_id: number
    type: CommentType
}

/**
* # enum `CommentType`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/CommentType
* 
* `@xlsft/smartshell-sdk`
*/
export type CommentType = "CLIENT" | "HOST" | "CLIENT_SESSION"

/**
* # type `CommentUpdateInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/CommentUpdateInput
* 
* `@xlsft/smartshell-sdk`
*/
export type CommentUpdateInput = {
    is_important: boolean
}

/**
* # type `CommissionDetails`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/CommissionDetails
* 
* `@xlsft/smartshell-sdk`
*/
export type CommissionDetails = {
    incoming?: CommissionInfo
    bank?: CommissionInfo
    total: Decimal
}

/**
* # type `CommissionInfo`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/CommissionInfo
* 
* `@xlsft/smartshell-sdk`
*/
export type CommissionInfo = {
    amount: Decimal
    rate: Decimal
    min?: Decimal
}

/**
* # type `CompanyNewsArticle`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/CompanyNewsArticle
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/CompanyNewsList
* 
* `@xlsft/smartshell-sdk`
*/
export type CompanyNewsList = {
    data: CompanyNewsArticle[]
    paginatorInfo: PaginatorInfo
}

/**
* # type `CompanyNewsListInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/CompanyNewsListInput
* 
* `@xlsft/smartshell-sdk`
*/
export type CompanyNewsListInput = {
    sort?: CompanyNewsListSort
    active?: boolean
}

/**
* # type `CompanyNewsListSort`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/CompanyNewsListSort
* 
* `@xlsft/smartshell-sdk`
*/
export type CompanyNewsListSort = {
    field?: CompanyNewsListSortField
    direction: string
}

/**
* # enum `CompanyNewsListSortField`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/CompanyNewsListSortField
* 
* `@xlsft/smartshell-sdk`
*/
export type CompanyNewsListSortField = "TITLE" | "LABEL" | "URL" | "ACTIVE_FROM" | "ACTIVE_UNTIL" | "ACTIVE" | "CREATED_AT"

/**
* # type `CompanyPermissionInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/CompanyPermissionInput
* 
* `@xlsft/smartshell-sdk`
*/
export type CompanyPermissionInput = {
    company_id: number
}

/**
* # type `CompanyPermissions`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/CompanyPermissions
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/CompanyPermissionsData
* 
* `@xlsft/smartshell-sdk`
*/
export type CompanyPermissionsData = {
    companyPermissions?: CompanyPermissions[]
}

/**
* # type `CompanyPermissionsInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/CompanyPermissionsInput
* 
* `@xlsft/smartshell-sdk`
*/
export type CompanyPermissionsInput = {
    role_id: number
    permissions: PermissionInput[]
}

/**
* # type `Condition`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/Condition
* 
* `@xlsft/smartshell-sdk`
*/
export type Condition = {
    name: string
    value: Decimal
}

/**
* # type `ConditionRequest`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ConditionRequest
* 
* `@xlsft/smartshell-sdk`
*/
export type ConditionRequest = {
    name: string
    value: number
}

/**
* # enum `ConfirmationCodeType`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ConfirmationCodeType
* 
* `@xlsft/smartshell-sdk`
*/
export type ConfirmationCodeType = "REGISTER" | "RESET_PASSWORD"

/**
* # type `ConfirmationResult`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ConfirmationResult
* 
* `@xlsft/smartshell-sdk`
*/
export type ConfirmationResult = {
    token?: AccessToken
    success: boolean
    hash?: string
}

/**
* # type `ConnectPaymentServiceInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ConnectPaymentServiceInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/Contractor
* 
* `@xlsft/smartshell-sdk`
*/
export type Contractor = {
    id: number
    name: string
    inn: string
    ogrn: string
    kpp: string
    address: string
    phone: string
    email: string
}

/**
* # type `ContractorInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ContractorInput
* 
* `@xlsft/smartshell-sdk`
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
* # type `CounterpartyData`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/CounterpartyData
* 
* `@xlsft/smartshell-sdk`
*/
export type CounterpartyData = {
    type: BeneficiaryType
    full_name: string
    inn: string
    ogrn?: string
    status: string
    legal_address?: string
    registration_date: Date
}

/**
* # type `CreateBeneficiaryByInnInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/CreateBeneficiaryByInnInput
* 
* `@xlsft/smartshell-sdk`
*/
export type CreateBeneficiaryByInnInput = {
    inn: string
    company_id: number
    bank_account: BankAccountInput
    entrepreneur_data?: EntrepreneurDataInput
    phone: string
    email?: string
}

/**
* # type `CreateCommandInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/CreateCommandInput
* 
* `@xlsft/smartshell-sdk`
*/
export type CreateCommandInput = {
    host_id: number
    action: HostCommandAction
    param?: string
}

/**
* # type `CreateCommandsInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/CreateCommandsInput
* 
* `@xlsft/smartshell-sdk`
*/
export type CreateCommandsInput = {
    host_ids: number[]
    action: HostCommandAction
    param?: string
}

/**
* # type `CreateGameAccountInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/CreateGameAccountInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/CreateHostCommandTemplateInput
* 
* `@xlsft/smartshell-sdk`
*/
export type CreateHostCommandTemplateInput = {
    title: string
    path: string
    arguments?: string
}

/**
* # type `CreateNetworkInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/CreateNetworkInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/CreateNewsArticleInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/CreateWorkerInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/Currency
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/CurrentTariff
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/DateReportEnum
* 
* `@xlsft/smartshell-sdk`
*/
export type DateReportEnum = "TODAY" | "WEEK" | "MONTH" | "QUARTER" | "YEAR"

/**
* # type `DeleteUserGroupInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/DeleteUserGroupInput
* 
* `@xlsft/smartshell-sdk`
*/
export type DeleteUserGroupInput = {
    uuid: string
}

/**
* # type `DepositAccount`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/DepositAccount
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/DepositCashback
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/DepositCashbackInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/DepositTransferHistory
* 
* `@xlsft/smartshell-sdk`
*/
export type DepositTransferHistory = {
    paginatorInfo: PaginatorInfo
    data: DepositTransferHistoryItem[]
}

/**
* # type `DepositTransferHistoryItem`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/DepositTransferHistoryItem
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/DepositTransferOperationType
* 
* `@xlsft/smartshell-sdk`
*/
export type DepositTransferOperationType = "DEPOSIT" | "WITHDRAWAL"

/**
* # type `DepositTransferReport`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/DepositTransferReport
* 
* `@xlsft/smartshell-sdk`
*/
export type DepositTransferReport = {
    paginatorInfo: PaginatorInfo
    data: DepositTransferReportItem[]
    url?: string
}

/**
* # type `DepositTransferReportInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/DepositTransferReportInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/DepositTransferReportItem
* 
* `@xlsft/smartshell-sdk`
*/
export type DepositTransferReportItem = {
    transfer: DepositTransferHistoryItem
    user: User
}

/**
* # enum `DepositTransferType`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/DepositTransferType
* 
* `@xlsft/smartshell-sdk`
*/
export type DepositTransferType = "DEPOSIT" | "WITHDRAW"

/**
* # type `DetailedWorkShiftMoneyData`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/DetailedWorkShiftMoneyData
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/Discount
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/DiscountInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/DiscountPaginated
* 
* `@xlsft/smartshell-sdk`
*/
export type DiscountPaginated = {
    paginatorInfo?: PaginatorInfo
    data: Discount[]
}

/**
* # enum `DistributionType`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/DistributionType
* 
* `@xlsft/smartshell-sdk`
*/
export type DistributionType = "LOCAL" | "CLOUD"

/**
* # type `EanEntity`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/EanEntity
* 
* `@xlsft/smartshell-sdk`
*/
export type EanEntity = {
    entity_id: number
    entity_type: EanEntityType
}

/**
* # enum `EanEntityType`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/EanEntityType
* 
* `@xlsft/smartshell-sdk`
*/
export type EanEntityType = "GOOD" | "SERVICE" | "TARIFF" | "HOST" | "USER"

/**
* # type `EmailExistsInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/EmailExistsInput
* 
* `@xlsft/smartshell-sdk`
*/
export type EmailExistsInput = {
    email: string
}

/**
* # type `EmailRegisterInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/EmailRegisterInput
* 
* `@xlsft/smartshell-sdk`
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
* # type `EntrepreneurDataInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/EntrepreneurDataInput
* 
* `@xlsft/smartshell-sdk`
*/
export type EntrepreneurDataInput = {
    first_name: string
    middle_name?: string
    last_name: string
    passport: PassportInput
    registration_address: string
    residence_address?: string
    birth_date: Date
    birth_place?: string
}

/**
* # type `Event`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/Event
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/EventListItem
* 
* `@xlsft/smartshell-sdk`
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
    promo_code_item?: EventListItemPromoCodeEntity
    promo_campaign?: EventListItemPromoCampaignEntity
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
    payment_transaction?: EventListItemPaymentTransaction
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/EventListItemAliasValues
* 
* `@xlsft/smartshell-sdk`
*/
export type EventListItemAliasValues = {
    alias: string
    value: string
    value2: string
}

/**
* # type `EventListItemBooking`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/EventListItemBooking
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/EventListItemCashOrder
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/EventListItemClientSession
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/EventListItemCombo
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/EventListItemComboItem
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/EventListItemIdTime
* 
* `@xlsft/smartshell-sdk`
*/
export type EventListItemIdTime = {
    id?: number
    timestamp?: DateTime
}

/**
* # type `EventListItemIdTitle`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/EventListItemIdTitle
* 
* `@xlsft/smartshell-sdk`
*/
export type EventListItemIdTitle = {
    id?: number
    title?: string
}

/**
* # type `EventListItemIdTitleValueF`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/EventListItemIdTitleValueF
* 
* `@xlsft/smartshell-sdk`
*/
export type EventListItemIdTitleValueF = {
    id?: number
    title?: string
    value?: number
}

/**
* # type `EventListItemIdTitleValueI`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/EventListItemIdTitleValueI
* 
* `@xlsft/smartshell-sdk`
*/
export type EventListItemIdTitleValueI = {
    id?: number
    title?: string
    value?: number
}

/**
* # type `EventListItemIdValueF`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/EventListItemIdValueF
* 
* `@xlsft/smartshell-sdk`
*/
export type EventListItemIdValueF = {
    id?: number
    value?: number
}

/**
* # type `EventListItemNews`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/EventListItemNews
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/EventListItemPaymentItem
* 
* `@xlsft/smartshell-sdk`
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
* # type `EventListItemPaymentTransaction`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/EventListItemPaymentTransaction
* 
* `@xlsft/smartshell-sdk`
*/
export type EventListItemPaymentTransaction = {
    uuid: string
    payment_id: number
    status: string
    service: string
}

/**
* # type `EventListItemPromoCampaignEntity`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/EventListItemPromoCampaignEntity
* 
* `@xlsft/smartshell-sdk`
*/
export type EventListItemPromoCampaignEntity = {
    id?: string
    title?: string
    description?: string
    value?: string
    applicable_params?: string
    client_scope?: string
    scopes?: string
    generation_settings?: string
    counters?: string
    active: boolean
    active_from?: DateTime
    active_to?: DateTime
    is_tracked: boolean
    created_at: DateTime
    updated_at: DateTime
}

/**
* # type `EventListItemPromoCodeEntity`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/EventListItemPromoCodeEntity
* 
* `@xlsft/smartshell-sdk`
*/
export type EventListItemPromoCodeEntity = {
    id?: number
    title?: string
    description?: string
    value?: string
    applicable_params?: string
    client_scope?: string
    scopes?: string
    active: boolean
    active_from?: DateTime
    active_to?: DateTime
    is_tracked: boolean
    created_at: DateTime
}

/**
* # type `EventListItemTask`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/EventListItemTask
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/EventListItemUser
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/EventListItemWarehouseItem
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/EventListPaginated
* 
* `@xlsft/smartshell-sdk`
*/
export type EventListPaginated = {
    paginatorInfo?: PaginatorInfo
    data: EventListItem[]
}

/**
* # type `EventPaginated`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/EventPaginated
* 
* `@xlsft/smartshell-sdk`
*/
export type EventPaginated = {
    paginatorInfo?: PaginatorInfo
    data: Event[]
}

/**
* # type `EventsInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/EventsInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ExternalPaymentData
* 
* `@xlsft/smartshell-sdk`
*/
export type ExternalPaymentData = {
    external_id?: string
    external_method?: string
}

/**
* # type `ExternalPaymentDataInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ExternalPaymentDataInput
* 
* `@xlsft/smartshell-sdk`
*/
export type ExternalPaymentDataInput = {
    external_id?: string
    external_method?: string
}

/**
* # type `FeatureFlags`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/FeatureFlags
* 
* `@xlsft/smartshell-sdk`
*/
export type FeatureFlags = {
    subscription: string
    expires_at: DateTime
    modules: string[]
    host_count: number
    used_trial: boolean
    deposit_transfer_enabled: boolean
    shortcuts_sync_enabled: boolean
    it_adviser_support: boolean
    flocktory_url: string
    company_owner?: LiteOwner
    company_key_hash: string
}

/**
* # type `FilterInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/FilterInput
* 
* `@xlsft/smartshell-sdk`
*/
export type FilterInput = {
    groupUUID?: string
}

/**
* # type `FinancialInfo`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/FinancialInfo
* 
* `@xlsft/smartshell-sdk`
*/
export type FinancialInfo = {
    gross_amount: Decimal
    net_amount: Decimal
    commission_amount: Decimal
    commission_rate: Decimal
}

/**
* # type `FinishWorkShiftInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/FinishWorkShiftInput
* 
* `@xlsft/smartshell-sdk`
*/
export type FinishWorkShiftInput = {
    comment?: string
}

/**
* # type `FinishedWorkShiftInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/FinishedWorkShiftInput
* 
* `@xlsft/smartshell-sdk`
*/
export type FinishedWorkShiftInput = {
    from: Date
    to: Date
}

/**
* # type `FlagInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/FlagInput
* 
* `@xlsft/smartshell-sdk`
*/
export type FlagInput = {
    value: boolean
}

/**
* # type `FreeGameAccount`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/FreeGameAccount
* 
* `@xlsft/smartshell-sdk`
*/
export type FreeGameAccount = {
    id: number
    login: string
    password: string
}

/**
* # type `GameAccount`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/GameAccount
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/GameAccountAssignment
* 
* `@xlsft/smartshell-sdk`
*/
export type GameAccountAssignment = {
    host?: Host
}

/**
* # type `GameAccountGroup`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/GameAccountGroup
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/GameAccountGroupInput
* 
* `@xlsft/smartshell-sdk`
*/
export type GameAccountGroupInput = {
    title: string
    launcher: GameAccountLauncher
}

/**
* # enum `GameAccountLauncher`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/GameAccountLauncher
* 
* `@xlsft/smartshell-sdk`
*/
export type GameAccountLauncher = "STEAM" | "EGS" | "BATTLENET" | "ORIGIN" | "EA" | "VKPLAY"

/**
* # enum `GameAccountStatus`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/GameAccountStatus
* 
* `@xlsft/smartshell-sdk`
*/
export type GameAccountStatus = "OFFLINE" | "ONLINE" | "IN_GAME"

/**
* # type `GenerateQRInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/GenerateQRInput
* 
* `@xlsft/smartshell-sdk`
*/
export type GenerateQRInput = {
    host_id: number
}

/**
* # type `GetActiveClientListInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/GetActiveClientListInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/GetBeneficiaryMovementsOfFunds
* 
* `@xlsft/smartshell-sdk`
*/
export type GetBeneficiaryMovementsOfFunds = {
    beneficiary_id: string
    from?: DateTime
    to?: DateTime
    preset?: DateReportEnum
}

/**
* # type `GetBeneficiaryMovementsOfFundsReport`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/GetBeneficiaryMovementsOfFundsReport
* 
* `@xlsft/smartshell-sdk`
*/
export type GetBeneficiaryMovementsOfFundsReport = {
    beneficiary_id: string
    from: DateTime
    to: DateTime
}

/**
* # type `GetCurrentTariff`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/GetCurrentTariff
* 
* `@xlsft/smartshell-sdk`
*/
export type GetCurrentTariff = {
    client_session_id: number
}

/**
* # type `Good`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/Good
* 
* `@xlsft/smartshell-sdk`
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
* # type `GoodHistory`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/GoodHistory
* 
* `@xlsft/smartshell-sdk`
*/
export type GoodHistory = {
    paginatorInfo?: PaginatorInfo
    data: GoodHistoryItem[]
    url?: string
}

/**
* # type `GoodHistoryInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/GoodHistoryInput
* 
* `@xlsft/smartshell-sdk`
*/
export type GoodHistoryInput = {
    id: number
    from: DateTime
    to: DateTime
    operations: WarehouseHistoryOperationType[]
    page?: number
    first?: number
}

/**
* # type `GoodHistoryItem`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/GoodHistoryItem
* 
* `@xlsft/smartshell-sdk`
*/
export type GoodHistoryItem = {
    created_at: DateTime
    operation: WarehouseOperationType
    delta: number
    quantity_after: number
    comment: string
    initiator?: User
}

/**
* # type `GoodInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/GoodInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/GoodsInput
* 
* `@xlsft/smartshell-sdk`
*/
export type GoodsInput = {
    client_uuid?: string
    category_id?: number
    title_search?: string
    use_global_discounts?: boolean
}

/**
* # enum `HallType`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/HallType
* 
* `@xlsft/smartshell-sdk`
*/
export type HallType = "PC" | "CONSOLE"

/**
* # type `Host`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/Host
* 
* `@xlsft/smartshell-sdk`
*/
export type Host = {
    id: number
    group_id: number
    group: HostGroup
    type: HostTypeValue
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/HostAccessTokenInput
* 
* `@xlsft/smartshell-sdk`
*/
export type HostAccessTokenInput = {
    mac_address: MacAddress
    public_key: string
}

/**
* # type `HostCommand`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/HostCommand
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/HostCommandAction
* 
* `@xlsft/smartshell-sdk`
*/
export type HostCommandAction = "SHUTDOWN" | "REBOOT" | "ALLOW_ADMIN_MODE" | "DISABLE_SHELL" | "SHOW_MESSAGE" | "LOGOFF" | "RUN" | "SEND_LOGS" | "SHELL_UNINSTALL" | "SHELL_UPDATE" | "LOGIN_QR" | "TINKOFF_SBP_PAYMENT"

/**
* # type `HostCommandList`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/HostCommandList
* 
* `@xlsft/smartshell-sdk`
*/
export type HostCommandList = {
    commands: HostCommand[]
}

/**
* # type `HostCommandTemplate`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/HostCommandTemplate
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/HostCounters
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/HostDevice
* 
* `@xlsft/smartshell-sdk`
*/
export type HostDevice = {
    alias: string
    old: string
    new: string
}

/**
* # type `HostDiskInfo`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/HostDiskInfo
* 
* `@xlsft/smartshell-sdk`
*/
export type HostDiskInfo = {
    letter: string
    total: number
    used: number
}

/**
* # type `HostDiskInfoInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/HostDiskInfoInput
* 
* `@xlsft/smartshell-sdk`
*/
export type HostDiskInfoInput = {
    letter: string
    total: number
    used: number
}

/**
* # type `HostGroup`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/HostGroup
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/HostGroupCustomization
* 
* `@xlsft/smartshell-sdk`
*/
export type HostGroupCustomization = {
    color?: string
    background?: string
    screensaver?: string
}

/**
* # type `HostGroupCustomizationInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/HostGroupCustomizationInput
* 
* `@xlsft/smartshell-sdk`
*/
export type HostGroupCustomizationInput = {
    color?: string
    background?: string
    screensaver?: string
}

/**
* # type `HostGroupInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/HostGroupInput
* 
* `@xlsft/smartshell-sdk`
*/
export type HostGroupInput = {
    title: string
    customization?: HostGroupCustomizationInput
    priority?: number
}

/**
* # type `HostGroupOverview`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/HostGroupOverview
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/HostGroupTitle
* 
* `@xlsft/smartshell-sdk`
*/
export type HostGroupTitle = {
    id: number
    title: string
    priority: number
}

/**
* # type `HostInfo`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/HostInfo
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/HostInput
* 
* `@xlsft/smartshell-sdk`
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
    type?: HostTypeValue
}

/**
* # type `HostOverview`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/HostOverview
* 
* `@xlsft/smartshell-sdk`
*/
export type HostOverview = {
    id: number
    group_id: number
    type_id?: number
    type: HostTypeValue
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
    qr?: string
}

/**
* # type `HostSession`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/HostSession
* 
* `@xlsft/smartshell-sdk`
*/
export type HostSession = {
    id: number
    host_id: number
    company_id: number
    alias?: string
    user?: User
    started_at: DateTime
    finished_at?: DateTime
    qr?: string
}

/**
* # type `HostSessionInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/HostSessionInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/HostStatus
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/HostType
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/HostTypeInput
* 
* `@xlsft/smartshell-sdk`
*/
export type HostTypeInput = {
    title: string
    description: string
}

/**
* # enum `HostTypeValue`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/HostTypeValue
* 
* `@xlsft/smartshell-sdk`
*/
export type HostTypeValue = "PC" | "CONSOLE" | "VR" | "BILLIARD" | "BOARD_GAME" | "RACING_SIM"

/**
* # type `HostsOccupationReport`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/HostsOccupationReport
* 
* `@xlsft/smartshell-sdk`
*/
export type HostsOccupationReport = {
    from: DateTime
    to: DateTime
}

/**
* # type `IPResidentInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/IPResidentInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/Import
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ImportFailure
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ImportStatusEnum
* 
* `@xlsft/smartshell-sdk`
*/
export type ImportStatusEnum = "NEW" | "PROCESSING" | "FINISH" | "FINISH_HAS_ERROR"

/**
* # type `ImportUserColumnsInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ImportUserColumnsInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ImportUserHoursColumnsInput
* 
* `@xlsft/smartshell-sdk`
*/
export type ImportUserHoursColumnsInput = {
    phone?: number
    time?: number
}

/**
* # enum `IntegrationService`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/IntegrationService
* 
* `@xlsft/smartshell-sdk`
*/
export type IntegrationService = "TINKOFF" | "STRIPE"

/**
* # type `LeaderboardUser`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/LeaderboardUser
* 
* `@xlsft/smartshell-sdk`
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
    place: number
    current_user: boolean
}

/**
* # type `License`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/License
* 
* `@xlsft/smartshell-sdk`
*/
export type License = {
    id: number
    expires_at: DateTime
    starts_at: DateTime
    payment: LicensePaymentData
}

/**
* # type `LicenseModulePrice`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/LicenseModulePrice
* 
* `@xlsft/smartshell-sdk`
*/
export type LicenseModulePrice = {
    module_id: number
    price: Decimal
}

/**
* # type `LicensePayment`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/LicensePayment
* 
* `@xlsft/smartshell-sdk`
*/
export type LicensePayment = {
    id: string
    url: string
    qr?: string
    license_payment_method: LicensePaymentMethod
    additional?: AdditionalPaymentData
    currency: string
}

/**
* # type `LicensePaymentData`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/LicensePaymentData
* 
* `@xlsft/smartshell-sdk`
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
    license?: License
    base_payment?: number
    with_debt: boolean
    club: Club
    promo_code?: string
    currency: string
}

/**
* # type `LicensePaymentInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/LicensePaymentInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/LicensePaymentMethod
* 
* `@xlsft/smartshell-sdk`
*/
export type LicensePaymentMethod = "CARD" | "BILL" | "CLOUD_PAYMENTS" | "KASPI_QR" | "STRIPE"

/**
* # enum `LicensePaymentStatus`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/LicensePaymentStatus
* 
* `@xlsft/smartshell-sdk`
*/
export type LicensePaymentStatus = "NEW" | "SUCCESS" | "FAILED"

/**
* # type `LicensePrice`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/LicensePrice
* 
* `@xlsft/smartshell-sdk`
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
    currency: Currency
}

/**
* # type `LicensePriceInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/LicensePriceInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/LicenseTariff
* 
* `@xlsft/smartshell-sdk`
*/
export type LicenseTariff = {
    id: number
    name: string
    description?: string
    cost: Decimal
    module_categories?: LicenseTariffCategory[]
    currency: Currency
}

/**
* # type `LicenseTariffCategory`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/LicenseTariffCategory
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/LicenseTariffCategoryInput
* 
* `@xlsft/smartshell-sdk`
*/
export type LicenseTariffCategoryInput = {
    id: number
    name: string
    tariff_id: number
}

/**
* # type `LicenseTariffGrid`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/LicenseTariffGrid
* 
* `@xlsft/smartshell-sdk`
*/
export type LicenseTariffGrid = {
    tariffs: LicenseTariff[]
    modules: LicenseTariffModule[]
}

/**
* # type `LicenseTariffInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/LicenseTariffInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/LicenseTariffModule
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/LicenseTariffModuleInput
* 
* `@xlsft/smartshell-sdk`
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
* # type `ListBeneficiaryMovementsOfFunds`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ListBeneficiaryMovementsOfFunds
* 
* `@xlsft/smartshell-sdk`
*/
export type ListBeneficiaryMovementsOfFunds = {
    type?: MovementTypeEnum
    beneficiary_id: string
    from?: DateTime
    to?: DateTime
    preset?: DateReportEnum
}

/**
* # type `ListMovementOfFundsPaginated`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ListMovementOfFundsPaginated
* 
* `@xlsft/smartshell-sdk`
*/
export type ListMovementOfFundsPaginated = {
    paginatorInfo?: PaginatorInfo
    summary?: MovementOfFundsSummary
    data: MovementOfFunds[]
}

/**
* # type `LiteClient`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/LiteClient
* 
* `@xlsft/smartshell-sdk`
*/
export type LiteClient = {
    nickname: string
    phone: string
}

/**
* # type `LiteCompany`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/LiteCompany
* 
* `@xlsft/smartshell-sdk`
*/
export type LiteCompany = {
    id: number
    name: string
    address?: string
}

/**
* # type `LiteOwner`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/LiteOwner
* 
* `@xlsft/smartshell-sdk`
*/
export type LiteOwner = {
    uuid: string
    inn: string
    type: string
    name: string
    ogrn: string
    legal_address: string
    kpp: string
    policy_url?: string
    private_policy: string
    email: Email
}

/**
* # type `LitePaymentTransaction`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/LitePaymentTransaction
* 
* `@xlsft/smartshell-sdk`
*/
export type LitePaymentTransaction = {
    id: string
    company: LiteCompany
    client: LiteClient
    sum: Decimal
    commission_details?: CommissionDetails
    service: ServiceEnum
    status: string
    created_at: DateTime
    receipt?: string
}

/**
* # type `LoginExistsInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/LoginExistsInput
* 
* `@xlsft/smartshell-sdk`
*/
export type LoginExistsInput = {
    login: string
}

/**
* # type `LoginInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/LoginInput
* 
* `@xlsft/smartshell-sdk`
*/
export type LoginInput = {
    login: string
    password: string
    company_id?: number
}

/**
* # type `LoginQRInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/LoginQRInput
* 
* `@xlsft/smartshell-sdk`
*/
export type LoginQRInput = {
    qr: string
}

/**
* # type `LowStockNotification`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/LowStockNotification
* 
* `@xlsft/smartshell-sdk`
*/
export type LowStockNotification = {
    enabled: boolean
    threshold: number
}

/**
* # type `LowStockNotificationInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/LowStockNotificationInput
* 
* `@xlsft/smartshell-sdk`
*/
export type LowStockNotificationInput = {
    enabled?: boolean
    threshold?: number
}

/**
* # type `MagicInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/MagicInput
* 
* `@xlsft/smartshell-sdk`
*/
export type MagicInput = {
    id: number
    id2: number
}

/**
* # type `Me`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/Me
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/MethodType
* 
* `@xlsft/smartshell-sdk`
*/
export type MethodType = "CASCADE" | "EMAIL" | "TELEGRAM"

/**
* # type `MobileEventsInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/MobileEventsInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/MoneyByTypes
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/MoneyData
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/MovementOfFunds
* 
* `@xlsft/smartshell-sdk`
*/
export type MovementOfFunds = {
    operation: OperationType
    transaction?: LitePaymentTransaction
    deal?: BeneficiaryDeal
    confirmed: boolean
    sum: Decimal
    created_at: DateTime
    updated_at: DateTime
}

/**
* # type `MovementOfFundsPaginated`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/MovementOfFundsPaginated
* 
* `@xlsft/smartshell-sdk`
*/
export type MovementOfFundsPaginated = {
    paginatorInfo?: PaginatorInfo
    data: MovementOfFunds[]
    deposit: Decimal
    withdrawal: Decimal
}

/**
* # type `MovementOfFundsSummary`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/MovementOfFundsSummary
* 
* `@xlsft/smartshell-sdk`
*/
export type MovementOfFundsSummary = {
    values: Decimal[]
    labels: string[]
}

/**
* # enum `MovementTypeEnum`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/MovementTypeEnum
* 
* `@xlsft/smartshell-sdk`
*/
export type MovementTypeEnum = "DEPOSIT" | "WITHDRAWAL"

/**
* # type `Network`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/Network
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/NetworkCompaniesData
* 
* `@xlsft/smartshell-sdk`
*/
export type NetworkCompaniesData = {
    data: NetworkCompany[]
    total: number
}

/**
* # type `NetworkCompany`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/NetworkCompany
* 
* `@xlsft/smartshell-sdk`
*/
export type NetworkCompany = {
    club: LiteCompany
    network: Network
    is_main: boolean
    settings: NetworkCompanySettings
}

/**
* # type `NetworkCompanyInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/NetworkCompanyInput
* 
* `@xlsft/smartshell-sdk`
*/
export type NetworkCompanyInput = {
    max_discount_enabled?: boolean
    deposit_transfer_enabled?: boolean
    shortcut_sync?: SyncInput
}

/**
* # type `NetworkCompanySettings`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/NetworkCompanySettings
* 
* `@xlsft/smartshell-sdk`
*/
export type NetworkCompanySettings = {
    max_discount_enabled: boolean
    deposit_transfer_enabled: boolean
    shortcut_sync_enabled: boolean
}

/**
* # type `News`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/News
* 
* `@xlsft/smartshell-sdk`
*/
export type News = {
    data: Article[]
    paginatorInfo: PaginatorInfo
}

/**
* # type `NewsConsent`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/NewsConsent
* 
* `@xlsft/smartshell-sdk`
*/
export type NewsConsent = {
    isGiven: boolean
    givenAt?: DateTime
    revokedAt?: DateTime
}

/**
* # type `NewsFeed`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/NewsFeed
* 
* `@xlsft/smartshell-sdk`
*/
export type NewsFeed = {
    data: NewsFeedArticle[]
    paginatorInfo: PaginatorInfo
}

/**
* # type `NewsFeedArticle`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/NewsFeedArticle
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/OperationType
* 
* `@xlsft/smartshell-sdk`
*/
export type OperationType = "DEPOSIT" | "WITHDRAWAL"

/**
* # enum `OpfType`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/OpfType
* 
* `@xlsft/smartshell-sdk`
*/
export type OpfType = "OOO" | "OAO" | "AO"

/**
* # enum `OrderByDirection`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/OrderByDirection
* 
* `@xlsft/smartshell-sdk`
*/
export type OrderByDirection = "ASC" | "DESC"

/**
* # type `Organization`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/Organization
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/OrganizationConfirmationCodeInput
* 
* `@xlsft/smartshell-sdk`
*/
export type OrganizationConfirmationCodeInput = {
    phone: string
    type: OrganizationConfirmationCodeType
    code: string
}

/**
* # enum `OrganizationConfirmationCodeType`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/OrganizationConfirmationCodeType
* 
* `@xlsft/smartshell-sdk`
*/
export type OrganizationConfirmationCodeType = "REGISTER" | "RESET_PASSWORD" | "WITHDRAW"

/**
* # type `OrganizationInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/OrganizationInput
* 
* `@xlsft/smartshell-sdk`
*/
export type OrganizationInput = {
    email?: Email
    news_consent?: boolean
}

/**
* # type `OrganizationLoginInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/OrganizationLoginInput
* 
* `@xlsft/smartshell-sdk`
*/
export type OrganizationLoginInput = {
    phone: string
    password: string
}

/**
* # type `OrganizationPaymentCard`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/OrganizationPaymentCard
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/OrganizationRegisterInput
* 
* `@xlsft/smartshell-sdk`
*/
export type OrganizationRegisterInput = {
    phone: string
    email: Email
    password: string
    password_confirmation: string
    captcha_token: string
    news_consent?: boolean
    license_agreement?: boolean
}

/**
* # type `OrganizationResetPasswordInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/OrganizationResetPasswordInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/OrganizationSendConfirmationCodeInput
* 
* `@xlsft/smartshell-sdk`
*/
export type OrganizationSendConfirmationCodeInput = {
    phone: string
    type: OrganizationConfirmationCodeType
    captcha_token: string
}

/**
* # type `OrganizationStartResetPasswordInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/OrganizationStartResetPasswordInput
* 
* `@xlsft/smartshell-sdk`
*/
export type OrganizationStartResetPasswordInput = {
    phone: string
    captcha_token: string
}

/**
* # enum `OrganizationUserType`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/OrganizationUserType
* 
* `@xlsft/smartshell-sdk`
*/
export type OrganizationUserType = "OWNER" | "DIRECTOR" | "SYSTEM_ADMINISTRATOR" | "HALL_ADMINISTRATOR"

/**
* # type `OrganizationVerifyConfirmationCodeInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/OrganizationVerifyConfirmationCodeInput
* 
* `@xlsft/smartshell-sdk`
*/
export type OrganizationVerifyConfirmationCodeInput = {
    hash: string
    code: string
}

/**
* # type `OverviewExportInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/OverviewExportInput
* 
* `@xlsft/smartshell-sdk`
*/
export type OverviewExportInput = {
    from: DateTime
    to: DateTime
}

/**
* # type `OverviewReport`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/OverviewReport
* 
* `@xlsft/smartshell-sdk`
*/
export type OverviewReport = {
    url?: string
    data: UnifiedReport[]
}

/**
* # type `Owner`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/Owner
* 
* `@xlsft/smartshell-sdk`
*/
export type Owner = {
    id: number
    type: OwnerType
    name: string
    inn: string
    email: Email
    private_policy: string
    private_policy_url?: string
    counterparty_data?: CounterpartyData
}

/**
* # type `OwnerInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/OwnerInput
* 
* `@xlsft/smartshell-sdk`
*/
export type OwnerInput = {
    inn: string
    company_id: number
    email: Email
    private_policy: string
}

/**
* # enum `OwnerType`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/OwnerType
* 
* `@xlsft/smartshell-sdk`
*/
export type OwnerType = "COMPANY" | "ENTREPRENEUR"

/**
* # enum `PaginateType`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/PaginateType
* 
* `@xlsft/smartshell-sdk`
*/
export type PaginateType = "PAGINATOR"

/**
* # type `PaginatorInfo`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/PaginatorInfo
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/PassportInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/PausableClientSession
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/Payment
* 
* `@xlsft/smartshell-sdk`
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
    sums?: PaymentSums
}

/**
* # type `PaymentHistory`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/PaymentHistory
* 
* `@xlsft/smartshell-sdk`
*/
export type PaymentHistory = {
    paginatorInfo: PaginatorInfo
    data: PaymentHistoryItem[]
}

/**
* # type `PaymentHistoryItem`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/PaymentHistoryItem
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/PaymentInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/PaymentItem
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/PaymentItemEntity
* 
* `@xlsft/smartshell-sdk`
*/
export type PaymentItemEntity = Record<string, Good | Service | Tariff | Combo>

/**
* # type `PaymentItemInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/PaymentItemInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/PaymentItemType
* 
* `@xlsft/smartshell-sdk`
*/
export type PaymentItemType = "DEPOSIT" | "GOOD" | "SERVICE" | "TARIFF" | "COMBO" | "BONUS" | "TIPS"

/**
* # enum `PaymentMethod`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/PaymentMethod
* 
* `@xlsft/smartshell-sdk`
*/
export type PaymentMethod = "CARD" | "CASH" | "DEPOSIT" | "BONUS" | "COMPOSITE" | "CLOUD_PAYMENTS" | "POST_PAY" | "KASPI_QR" | "KASPI_CARD"

/**
* # type `PaymentReportItem`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/PaymentReportItem
* 
* `@xlsft/smartshell-sdk`
*/
export type PaymentReportItem = {
    value: Decimal
    currency?: Currency
}

/**
* # enum `PaymentStatus`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/PaymentStatus
* 
* `@xlsft/smartshell-sdk`
*/
export type PaymentStatus = "PENDING" | "PAID" | "UNPAID"

/**
* # type `PaymentSums`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/PaymentSums
* 
* `@xlsft/smartshell-sdk`
*/
export type PaymentSums = {
    deposit?: Decimal
    bonus?: Decimal
    promo_code?: Decimal
    cashback?: Decimal
}

/**
* # type `PaymentTransaction`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/PaymentTransaction
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/PaymentTransactionInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/PaymentTransactionPaginated
* 
* `@xlsft/smartshell-sdk`
*/
export type PaymentTransactionPaginated = {
    paginatorInfo: PaginatorInfo
    data: PaymentTransaction[]
}

/**
* # enum `PaymentTransactionStatus`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/PaymentTransactionStatus
* 
* `@xlsft/smartshell-sdk`
*/
export type PaymentTransactionStatus = "PENDING" | "SUCCESS" | "EXPIRED" | "FAILED" | "CANCELED"

/**
* # enum `PaymentTransactionType`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/PaymentTransactionType
* 
* `@xlsft/smartshell-sdk`
*/
export type PaymentTransactionType = "MANAGER" | "CLIENT"

/**
* # type `PaymentsReport`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/PaymentsReport
* 
* `@xlsft/smartshell-sdk`
*/
export type PaymentsReport = {
    from: DateTime
    to: DateTime
}

/**
* # type `PenaltyHostInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/PenaltyHostInput
* 
* `@xlsft/smartshell-sdk`
*/
export type PenaltyHostInput = {
    host_id: number
    seconds: number
}

/**
* # type `Permission`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/Permission
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/PermissionData
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/PermissionInput
* 
* `@xlsft/smartshell-sdk`
*/
export type PermissionInput = {
    id: number
    alias: string
    enabled: boolean
}

/**
* # type `PhoneExistsInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/PhoneExistsInput
* 
* `@xlsft/smartshell-sdk`
*/
export type PhoneExistsInput = {
    phone: string
}

/**
* # type `PremiumPayment`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/PremiumPayment
* 
* `@xlsft/smartshell-sdk`
*/
export type PremiumPayment = {
    id: number
    sum: Decimal
    status: string
}

/**
* # type `ProcessPostPaymentInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ProcessPostPaymentInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ProcessStatsInput
* 
* `@xlsft/smartshell-sdk`
*/
export type ProcessStatsInput = {
    windows: ProcessStatsItemInput[]
    applications: ProcessStatsItemInput[]
}

/**
* # type `ProcessStatsItemInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ProcessStatsItemInput
* 
* `@xlsft/smartshell-sdk`
*/
export type ProcessStatsItemInput = {
    name: string
    path: string
    seconds: number
}

/**
* # type `PromoCode`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/PromoCode
* 
* `@xlsft/smartshell-sdk`
*/
export type PromoCode = {
    id: number
    author: User
    client?: User
    code: string
    value: Decimal
    promo_value?: PromoValue
    amount?: number
    entity?: CartEntity
    entity_id?: number
    created_at: DateTime
    is_tracked: boolean
}

/**
* # type `PromoCodeInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/PromoCodeInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/PromoCodePaginated
* 
* `@xlsft/smartshell-sdk`
*/
export type PromoCodePaginated = {
    paginatorInfo?: PaginatorInfo
    data: PromoCode[]
}

/**
* # type `PromoValue`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/PromoValue
* 
* `@xlsft/smartshell-sdk`
*/
export type PromoValue = {
    type: PromoValueType
    value: Decimal
    currency?: Currency
}

/**
* # enum `PromoValueType`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/PromoValueType
* 
* `@xlsft/smartshell-sdk`
*/
export type PromoValueType = "DISCOUNT" | "DEPOSIT" | "BONUS"

/**
* # type `PublicationPeriod`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/PublicationPeriod
* 
* `@xlsft/smartshell-sdk`
*/
export type PublicationPeriod = {
    from?: DateTime
    until?: DateTime
}

/**
* # type `PublicationPeriodInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/PublicationPeriodInput
* 
* `@xlsft/smartshell-sdk`
*/
export type PublicationPeriodInput = {
    from?: DateTime
    until?: DateTime
}

/**
* # type `RefreshTokenInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/RefreshTokenInput
* 
* `@xlsft/smartshell-sdk`
*/
export type RefreshTokenInput = {
    refresh_token: string
}

/**
* # type `RefundPaymentInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/RefundPaymentInput
* 
* `@xlsft/smartshell-sdk`
*/
export type RefundPaymentInput = {
    id: number
    comment?: string
}

/**
* # type `Region`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/Region
* 
* `@xlsft/smartshell-sdk`
*/
export type Region = {
    alias: string
    code: string
}

/**
* # type `RegisterHostInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/RegisterHostInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/RegisterInput
* 
* `@xlsft/smartshell-sdk`
*/
export type RegisterInput = {
    login: string
    email?: Email
    phone: string
    password: string
    dob: Date
    news_consent?: boolean
    captcha_token?: string
    consents?: UserConsentsInput
    type?: RegisterType
    first_name?: string
}

/**
* # enum `RegisterType`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/RegisterType
* 
* `@xlsft/smartshell-sdk`
*/
export type RegisterType = "SHELL" | "STATION" | "MANAGER"

/**
* # type `Report`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/Report
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ReportInput
* 
* `@xlsft/smartshell-sdk`
*/
export type ReportInput = {
    start: DateTime
    end: DateTime
}

/**
* # type `ReportSortInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ReportSortInput
* 
* `@xlsft/smartshell-sdk`
*/
export type ReportSortInput = {
    field: string
    direction: string
}

/**
* # type `ResetPasswordInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ResetPasswordInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ResultHostCommandInput
* 
* `@xlsft/smartshell-sdk`
*/
export type ResultHostCommandInput = {
    id: number
    status: boolean
    result?: string
}

/**
* # enum `ReturnFormatEnum`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ReturnFormatEnum
* 
* `@xlsft/smartshell-sdk`
*/
export type ReturnFormatEnum = "LINK" | "QR_CODE" | "QR_CODE_BASE64"

/**
* # type `Reward`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/Reward
* 
* `@xlsft/smartshell-sdk`
*/
export type Reward = {
    name: string
    value: Decimal
}

/**
* # type `RewardRequest`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/RewardRequest
* 
* `@xlsft/smartshell-sdk`
*/
export type RewardRequest = {
    name: string
    value: number
}

/**
* # type `Role`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/Role
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/RulesMessage
* 
* `@xlsft/smartshell-sdk`
*/
export type RulesMessage = {
    rule: string
    message: string
}

/**
* # type `SalesExportInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/SalesExportInput
* 
* `@xlsft/smartshell-sdk`
*/
export type SalesExportInput = {
    from: DateTime
    to: DateTime
}

/**
* # type `Seance`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/Seance
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/SeanceOverview
* 
* `@xlsft/smartshell-sdk`
*/
export type SeanceOverview = {
    id: number
    status: ClientSessionType
    tariff: TariffOverview
}

/**
* # type `SearchComboInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/SearchComboInput
* 
* `@xlsft/smartshell-sdk`
*/
export type SearchComboInput = {
    q?: string
    host_group_id?: number
}

/**
* # type `SearchReportInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/SearchReportInput
* 
* `@xlsft/smartshell-sdk`
*/
export type SearchReportInput = {
    q: string
}

/**
* # type `SendConfirmationCodeInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/SendConfirmationCodeInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/SendConfirmationCodeToEnterInput
* 
* `@xlsft/smartshell-sdk`
*/
export type SendConfirmationCodeToEnterInput = {
    login: string
    password: string
    email: string
}

/**
* # type `SendWakePacketInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/SendWakePacketInput
* 
* `@xlsft/smartshell-sdk`
*/
export type SendWakePacketInput = {
    host_id: number
}

/**
* # type `SendWakePacketsInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/SendWakePacketsInput
* 
* `@xlsft/smartshell-sdk`
*/
export type SendWakePacketsInput = {
    host_ids: number[]
}

/**
* # type `Service`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/Service
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ServiceEnum
* 
* `@xlsft/smartshell-sdk`
*/
export type ServiceEnum = "CLOUD_PAYMENTS" | "KASPI_PAY" | "SBP" | "STRIPE"

/**
* # type `ServiceInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ServiceInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ServicesInput
* 
* `@xlsft/smartshell-sdk`
*/
export type ServicesInput = {
    client_uuid?: string
    use_global_discounts?: boolean
}

/**
* # type `SessionsMoneyReport`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/SessionsMoneyReport
* 
* `@xlsft/smartshell-sdk`
*/
export type SessionsMoneyReport = {
    from: DateTime
    to: DateTime
    slice: SliceType
}

/**
* # type `SetBonusInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/SetBonusInput
* 
* `@xlsft/smartshell-sdk`
*/
export type SetBonusInput = {
    client_uuid: string
    value: number
}

/**
* # type `SetCloudPaymentsAccountToCompanyInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/SetCloudPaymentsAccountToCompanyInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/SetDepositInput
* 
* `@xlsft/smartshell-sdk`
*/
export type SetDepositInput = {
    client_uuid: string
    value: number
}

/**
* # type `SetTelegramChannelInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/SetTelegramChannelInput
* 
* `@xlsft/smartshell-sdk`
*/
export type SetTelegramChannelInput = {
    value?: string
}

/**
* # type `SetTelegramSettingsInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/SetTelegramSettingsInput
* 
* `@xlsft/smartshell-sdk`
*/
export type SetTelegramSettingsInput = {
    token?: string
    chat_id?: string
    notification?: string
}

/**
* # type `SetUserDiscountInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/SetUserDiscountInput
* 
* `@xlsft/smartshell-sdk`
*/
export type SetUserDiscountInput = {
    client_uuid: string
    value: number
}

/**
* # type `Setting`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/Setting
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/SettingPair
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ShellMode
* 
* `@xlsft/smartshell-sdk`
*/
export type ShellMode = "NORMAL" | "DISABLED" | "HIGH_ACCESS"

/**
* # type `Shortcut`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/Shortcut
* 
* `@xlsft/smartshell-sdk`
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
    high_access_only?: boolean
}

/**
* # type `ShortcutGroup`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ShortcutGroup
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ShortcutGroupInput
* 
* `@xlsft/smartshell-sdk`
*/
export type ShortcutGroupInput = {
    title: string
    sort?: number
    groupType?: AppGroupType
}

/**
* # type `ShortcutGroupItem`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ShortcutGroupItem
* 
* `@xlsft/smartshell-sdk`
*/
export type ShortcutGroupItem = {
    title: string
    groupType?: AppGroupType
}

/**
* # type `ShortcutImageInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ShortcutImageInput
* 
* `@xlsft/smartshell-sdk`
*/
export type ShortcutImageInput = {
    file: Upload
}

/**
* # type `ShortcutInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ShortcutInput
* 
* `@xlsft/smartshell-sdk`
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
    high_access_only?: boolean
}

/**
* # type `ShortcutPath`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ShortcutPath
* 
* `@xlsft/smartshell-sdk`
*/
export type ShortcutPath = {
    value: string[]
}

/**
* # type `ShortcutStatsInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ShortcutStatsInput
* 
* `@xlsft/smartshell-sdk`
*/
export type ShortcutStatsInput = {
    id: number
}

/**
* # enum `SliceType`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/SliceType
* 
* `@xlsft/smartshell-sdk`
*/
export type SliceType = "DAY" | "WEEK" | "MONTH"

/**
* # enum `SortActiveClientEnum`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/SortActiveClientEnum
* 
* `@xlsft/smartshell-sdk`
*/
export type SortActiveClientEnum = "ByPayments" | "ByTime"

/**
* # type `SortInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/SortInput
* 
* `@xlsft/smartshell-sdk`
*/
export type SortInput = {
    field: string
    direction: string
}

/**
* # type `StartClientSessionInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/StartClientSessionInput
* 
* `@xlsft/smartshell-sdk`
*/
export type StartClientSessionInput = {
    user_id?: number
    host_id?: number
    post_paid?: boolean
}

/**
* # type `StartWorkShiftInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/StartWorkShiftInput
* 
* `@xlsft/smartshell-sdk`
*/
export type StartWorkShiftInput = {
    cash: number
}

/**
* # type `StatByGoods`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/StatByGoods
* 
* `@xlsft/smartshell-sdk`
*/
export type StatByGoods = {
    amount: number
    money: MoneyByTypes
}

/**
* # type `StatByOrders`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/StatByOrders
* 
* `@xlsft/smartshell-sdk`
*/
export type StatByOrders = {
    rko: number
    pko: number
}

/**
* # type `StatByRefunds`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/StatByRefunds
* 
* `@xlsft/smartshell-sdk`
*/
export type StatByRefunds = {
    amount: number
    money: MoneyByTypes
}

/**
* # type `StatBySeances`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/StatBySeances
* 
* `@xlsft/smartshell-sdk`
*/
export type StatBySeances = {
    amount: number
    hours: number
    money: MoneyByTypes
}

/**
* # type `StatByServices`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/StatByServices
* 
* `@xlsft/smartshell-sdk`
*/
export type StatByServices = {
    amount: number
    money: MoneyByTypes
}

/**
* # type `StatByTransfers`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/StatByTransfers
* 
* `@xlsft/smartshell-sdk`
*/
export type StatByTransfers = {
    income: Decimal
    outcome: Decimal
}

/**
* # type `StripeAccountInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/StripeAccountInput
* 
* `@xlsft/smartshell-sdk`
*/
export type StripeAccountInput = {
    secret_key: string
    publishable_key: string
}

/**
* # type `SyncInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/SyncInput
* 
* `@xlsft/smartshell-sdk`
*/
export type SyncInput = {
    enabled: boolean
    mode: SyncMode
}

/**
* # enum `SyncMode`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/SyncMode
* 
* `@xlsft/smartshell-sdk`
*/
export type SyncMode = "COPY" | "REPLACE"

/**
* # enum `SyncScope`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/SyncScope
* 
* `@xlsft/smartshell-sdk`
*/
export type SyncScope = "LOCAL" | "NETWORK"

/**
* # type `Tariff`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/Tariff
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/TariffGridInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/TariffGridItem
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/TariffInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/TariffKind
* 
* `@xlsft/smartshell-sdk`
*/
export type TariffKind = "PER_MINUTE" | "PAUSABLE" | "FIXED" | "PACKET"

/**
* # type `TariffOverview`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/TariffOverview
* 
* `@xlsft/smartshell-sdk`
*/
export type TariffOverview = {
    id: number
    title: string
    kind: TariffKind
}

/**
* # type `TariffPaginated`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/TariffPaginated
* 
* `@xlsft/smartshell-sdk`
*/
export type TariffPaginated = {
    paginatorInfo?: PaginatorInfo
    data: Tariff[]
}

/**
* # type `TariffPeriod`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/TariffPeriod
* 
* `@xlsft/smartshell-sdk`
*/
export type TariffPeriod = {
    start: number
    end: number
}

/**
* # type `TariffPeriodInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/TariffPeriodInput
* 
* `@xlsft/smartshell-sdk`
*/
export type TariffPeriodInput = {
    start: number
    end: number
}

/**
* # type `TariffPricelist`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/TariffPricelist
* 
* `@xlsft/smartshell-sdk`
*/
export type TariffPricelist = {
    host_groups: HostGroup[]
    cost_map: TariffPricelistCostMap[]
}

/**
* # type `TariffPricelistCostMap`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/TariffPricelistCostMap
* 
* `@xlsft/smartshell-sdk`
*/
export type TariffPricelistCostMap = {
    title: string
    value: number
    currency: Currency
}

/**
* # type `TariffPricelistCostMapInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/TariffPricelistCostMapInput
* 
* `@xlsft/smartshell-sdk`
*/
export type TariffPricelistCostMapInput = {
    title: TariffPricelistCostMapType
    value: number
    currency: string
}

/**
* # enum `TariffPricelistCostMapType`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/TariffPricelistCostMapType
* 
* `@xlsft/smartshell-sdk`
*/
export type TariffPricelistCostMapType = "DEFAULT" | "USER_COST"

/**
* # type `TariffPricelistInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/TariffPricelistInput
* 
* `@xlsft/smartshell-sdk`
*/
export type TariffPricelistInput = {
    host_groups: number[]
    cost_map: TariffPricelistCostMapInput[]
}

/**
* # type `TariffPurchaseByQRInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/TariffPurchaseByQRInput
* 
* `@xlsft/smartshell-sdk`
*/
export type TariffPurchaseByQRInput = {
    tariff_id: number
    qr: string
}

/**
* # type `TariffSchedule`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/TariffSchedule
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/TariffScheduleInterval
* 
* `@xlsft/smartshell-sdk`
*/
export type TariffScheduleInterval = {
    week_day: number
    time_from: Time
    time_to: Time
}

/**
* # type `TariffsFilterInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/TariffsFilterInput
* 
* `@xlsft/smartshell-sdk`
*/
export type TariffsFilterInput = {
    use_global_discounts?: boolean
}

/**
* # enum `Tax`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/Tax
* 
* `@xlsft/smartshell-sdk`
*/
export type Tax = "NONE" | "VAT0" | "VAT5" | "VAT7" | "VAT10" | "VAT20" | "VAT110" | "VAT120"

/**
* # enum `TaxSystem`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/TaxSystem
* 
* `@xlsft/smartshell-sdk`
*/
export type TaxSystem = "SIMPLE_INCOME" | "SIMPLE_INCOME_EXPENSES" | "PATENT" | "MAIN"

/**
* # type `TelegramChannel`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/TelegramChannel
* 
* `@xlsft/smartshell-sdk`
*/
export type TelegramChannel = {
    id: string
    type: TelegramChannelType
    title: string
}

/**
* # enum `TelegramChannelType`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/TelegramChannelType
* 
* `@xlsft/smartshell-sdk`
*/
export type TelegramChannelType = "SUPERGROUP" | "GROUP" | "CHANNEL" | "PRIVATE"

/**
* # type `TelegramSettings`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/TelegramSettings
* 
* `@xlsft/smartshell-sdk`
*/
export type TelegramSettings = {
    token?: string
    channel?: TelegramChannel
    notification: string
}

/**
* # type `TransferDepositInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/TransferDepositInput
* 
* `@xlsft/smartshell-sdk`
*/
export type TransferDepositInput = {
    source_company_id: number
    target_company_id?: number
    value: number
}

/**
* # type `ULResidentInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ULResidentInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UnifiedReport
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UnifiedReportData
* 
* `@xlsft/smartshell-sdk`
*/
export type UnifiedReportData = {
    values: Decimal[]
}

/**
* # type `UnifiedReportPaginated`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UnifiedReportPaginated
* 
* `@xlsft/smartshell-sdk`
*/
export type UnifiedReportPaginated = {
    report: UnifiedReport
    hasNext: boolean
}

/**
* # type `UnifiedSummaryData`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UnifiedSummaryData
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UniqueUsersReport
* 
* `@xlsft/smartshell-sdk`
*/
export type UniqueUsersReport = {
    from: DateTime
    to: DateTime
    slice: SliceType
}

/**
* # type `UpcomingAutoPaymentData`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UpcomingAutoPaymentData
* 
* `@xlsft/smartshell-sdk`
*/
export type UpcomingAutoPaymentData = {
    card: OrganizationPaymentCard
    amount: Decimal
    payment_date: Date
}

/**
* # type `UpdateBankAccountInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UpdateBankAccountInput
* 
* `@xlsft/smartshell-sdk`
*/
export type UpdateBankAccountInput = {
    bank_name: string
    bank_bik: string
    bank_kpp?: string
    bank_account: string
    correspondent_account: string
}

/**
* # type `UpdateClientMeInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UpdateClientMeInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UpdateClubInput
* 
* `@xlsft/smartshell-sdk`
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
    metro?: string
}

/**
* # type `UpdateCompanyPermissionsInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UpdateCompanyPermissionsInput
* 
* `@xlsft/smartshell-sdk`
*/
export type UpdateCompanyPermissionsInput = {
    company_permissions: CompanyPermissionsInput[]
}

/**
* # type `UpdateGameAccountInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UpdateGameAccountInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UpdateGoodInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UpdateGoodsInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UpdateHostCommandStatusInput
* 
* `@xlsft/smartshell-sdk`
*/
export type UpdateHostCommandStatusInput = {
    id: number
    success: boolean
}

/**
* # type `UpdateHostCommandTemplateInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UpdateHostCommandTemplateInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UpdateHostStateInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UpdateMeInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UpdateMultipleSettingsInput
* 
* `@xlsft/smartshell-sdk`
*/
export type UpdateMultipleSettingsInput = {
    list: UpdateSettingInput[]
}

/**
* # type `UpdateNetworkInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UpdateNetworkInput
* 
* `@xlsft/smartshell-sdk`
*/
export type UpdateNetworkInput = {
    name?: string
    main_company_id?: number
    description?: string
}

/**
* # type `UpdateNewsArticleInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UpdateNewsArticleInput
* 
* `@xlsft/smartshell-sdk`
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
* # type `UpdateOwnerInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UpdateOwnerInput
* 
* `@xlsft/smartshell-sdk`
*/
export type UpdateOwnerInput = {
    private_policy: string
}

/**
* # type `UpdatePasswordInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UpdatePasswordInput
* 
* `@xlsft/smartshell-sdk`
*/
export type UpdatePasswordInput = {
    old_password: string
    password: string
    password_confirmation: string
}

/**
* # type `UpdateSettingInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UpdateSettingInput
* 
* `@xlsft/smartshell-sdk`
*/
export type UpdateSettingInput = {
    alias: string
    value?: string
}

/**
* # type `UpdateShortcutGroupSortInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UpdateShortcutGroupSortInput
* 
* `@xlsft/smartshell-sdk`
*/
export type UpdateShortcutGroupSortInput = {
    id: number
    sort: number
}

/**
* # type `UpdateShortcutSortInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UpdateShortcutSortInput
* 
* `@xlsft/smartshell-sdk`
*/
export type UpdateShortcutSortInput = {
    id: number
    sort: number
}

/**
* # type `UpdateTariffsSortInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UpdateTariffsSortInput
* 
* `@xlsft/smartshell-sdk`
*/
export type UpdateTariffsSortInput = {
    id: number
    sort: number
}

/**
* # type `UpdateWorkerInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UpdateWorkerInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/User
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UserAchievement
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UserAchievements
* 
* `@xlsft/smartshell-sdk`
*/
export type UserAchievements = {
    single: UserAchievement[]
    continuous: UserAchievement[]
}

/**
* # type `UserClub`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UserClub
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UserClubsInput
* 
* `@xlsft/smartshell-sdk`
*/
export type UserClubsInput = {
    login: string
    password: string
}

/**
* # type `UserConsents`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UserConsents
* 
* `@xlsft/smartshell-sdk`
*/
export type UserConsents = {
    privacy_policy: boolean
    marketing: boolean
    news: boolean
}

/**
* # type `UserConsentsInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UserConsentsInput
* 
* `@xlsft/smartshell-sdk`
*/
export type UserConsentsInput = {
    privacy_policy?: boolean
    marketing?: boolean
}

/**
* # type `UserDiscount`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UserDiscount
* 
* `@xlsft/smartshell-sdk`
*/
export type UserDiscount = {
    type: UserDiscountType
    value: number
}

/**
* # enum `UserDiscountType`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UserDiscountType
* 
* `@xlsft/smartshell-sdk`
*/
export type UserDiscountType = "PERSONAL" | "GROUP" | "NETWORK"

/**
* # type `UserGroup`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UserGroup
* 
* `@xlsft/smartshell-sdk`
*/
export type UserGroup = {
    id: number
    uuid: string
    title: string
    user_count: number
    discount: number
    created_at: DateTime
}

/**
* # type `UserGroupInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UserGroupInput
* 
* `@xlsft/smartshell-sdk`
*/
export type UserGroupInput = {
    title: string
    discount: number
}

/**
* # type `UserPaginated`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UserPaginated
* 
* `@xlsft/smartshell-sdk`
*/
export type UserPaginated = {
    paginatorInfo?: PaginatorInfo
    data: User[]
    total_deposits?: Decimal
}

/**
* # type `UserTableInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UserTableInput
* 
* `@xlsft/smartshell-sdk`
*/
export type UserTableInput = {
    file: Upload
}

/**
* # type `UsersBonusReport`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UsersBonusReport
* 
* `@xlsft/smartshell-sdk`
*/
export type UsersBonusReport = {
    from: DateTime
    to: DateTime
}

/**
* # type `UsersInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/UsersInput
* 
* `@xlsft/smartshell-sdk`
*/
export type UsersInput = {
    q?: string
}

/**
* # type `ValidatePromoCodeInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ValidatePromoCodeInput
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/ValidateQRInput
* 
* `@xlsft/smartshell-sdk`
*/
export type ValidateQRInput = {
    qr: string
}

/**
* # enum `Vat`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/Vat
* 
* `@xlsft/smartshell-sdk`
*/
export type Vat = "NO_NDS" | "NDS_0" | "NDS_5" | "NDS_7" | "NDS_10" | "NDS_20" | "NDS_110" | "NDS_120"

/**
* # type `VerifyUserInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/VerifyUserInput
* 
* `@xlsft/smartshell-sdk`
*/
export type VerifyUserInput = {
    code: string
}

/**
* # type `Versions`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/Versions
* 
* `@xlsft/smartshell-sdk`
*/
export type Versions = {
    easter_egg?: string
    frontend?: string
    backend?: string
}

/**
* # enum `WarehouseHistoryOperationType`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/WarehouseHistoryOperationType
* 
* `@xlsft/smartshell-sdk`
*/
export type WarehouseHistoryOperationType = "ADD" | "DISPOSAL" | "SOLD" | "CREATE" | "REFUND"

/**
* # enum `WarehouseOperationType`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/WarehouseOperationType
* 
* `@xlsft/smartshell-sdk`
*/
export type WarehouseOperationType = "ADD" | "DISPOSAL" | "SOLD" | "CREATE" | "SET"

/**
* # type `WarehouseState`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/WarehouseState
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/WithdrawToCheckingAccountInput
* 
* `@xlsft/smartshell-sdk`
*/
export type WithdrawToCheckingAccountInput = {
    beneficiary_id: string
    code: string
}

/**
* # type `WorkShift`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/WorkShift
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/WorkShiftEvent
* 
* `@xlsft/smartshell-sdk`
*/
export type WorkShiftEvent = {
    id: number
    type: string
    created_at: DateTime
}

/**
* # type `WorkShiftInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/WorkShiftInput
* 
* `@xlsft/smartshell-sdk`
*/
export type WorkShiftInput = {
    created_from?: DateTime
    created_to?: DateTime
    worker_id?: number
}

/**
* # type `WorkShiftMoney`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/WorkShiftMoney
* 
* `@xlsft/smartshell-sdk`
*/
export type WorkShiftMoney = {
    sum: MoneyByTypes
    cash_on_start: Decimal
}

/**
* # type `WorkShiftPaginated`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/WorkShiftPaginated
* 
* `@xlsft/smartshell-sdk`
*/
export type WorkShiftPaginated = {
    paginatorInfo?: PaginatorInfo
    data: WorkShift[]
}

/**
* # type `WorkShiftPaymentOverviewComboData`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/WorkShiftPaymentOverviewComboData
* 
* `@xlsft/smartshell-sdk`
*/
export type WorkShiftPaymentOverviewComboData = {
    title: string
    amount: number
    sum: Decimal
}

/**
* # type `WorkShiftPaymentOverviewData`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/WorkShiftPaymentOverviewData
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/WorkShiftPaymentOverviewGoodData
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/WorkShiftPaymentOverviewServiceData
* 
* `@xlsft/smartshell-sdk`
*/
export type WorkShiftPaymentOverviewServiceData = {
    title: string
    amount: number
    sum: Decimal
}

/**
* # enum `WorkShiftStatus`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/WorkShiftStatus
* 
* `@xlsft/smartshell-sdk`
*/
export type WorkShiftStatus = "NONE" | "OPEN" | "MY" | "LOCKED"

/**
* # type `WorkShiftSummary`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/WorkShiftSummary
* 
* `@xlsft/smartshell-sdk`
*/
export type WorkShiftSummary = {
    id: number
    summary?: string
}

/**
* # type `WorkShiftsReport`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/WorkShiftsReport
* 
* `@xlsft/smartshell-sdk`
*/
export type WorkShiftsReport = {
    from: DateTime
    to: DateTime
    workerUuid?: string
}

/**
* # type `WorkerTask`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/WorkerTask
* 
* `@xlsft/smartshell-sdk`
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
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/WorkerTaskInput
* 
* `@xlsft/smartshell-sdk`
*/
export type WorkerTaskInput = {
    title: string
    assigned_to?: number
    deadline_at?: DateTime
}

/**
* # type `WorkerTaskPaginated`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/WorkerTaskPaginated
* 
* `@xlsft/smartshell-sdk`
*/
export type WorkerTaskPaginated = {
    paginatorInfo?: PaginatorInfo
    data: WorkerTask[]
}

/**
* # type `WorkersInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/WorkersInput
* 
* `@xlsft/smartshell-sdk`
*/
export type WorkersInput = {
    q?: string
}

/**
* # type `pickGameAccountInput`
* 
* 🔗 https://smartshell.xlsft.ru/docs/reference/types/pickGameAccountInput
* 
* `@xlsft/smartshell-sdk`
*/
export type pickGameAccountInput = {
    shortcut_id: number
}
