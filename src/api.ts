import type { Shell } from "../mod.ts";
    import { query as q, mutation as m } from "./api/index.ts";
    import type { ShellSdkPaginatorInput } from "./types/sdk.ts";

    export const api = (ctx: Shell) => {
        return {

        // query

        /**
            * # query `achievements`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/achievements
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        achievements: async (input: Parameters<typeof q.achievements>[1],) => await q.achievements(ctx, input,),
        /**
            * # query `activeWorkShift`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/activeWorkShift
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        activeWorkShift: async () => await q.activeWorkShift(ctx),
        /**
            * # query `additionalLicensePrice`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/additionalLicensePrice
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        additionalLicensePrice: async (input: Parameters<typeof q.additionalLicensePrice>[1],) => await q.additionalLicensePrice(ctx, input,),
        /**
            * # query `applicationsReport`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/applicationsReport
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        applicationsReport: async (input: Parameters<typeof q.applicationsReport>[1],) => await q.applicationsReport(ctx, input,),
        /**
            * # query `bonusHistoryReport`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/bonusHistoryReport
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        bonusHistoryReport: async (input: Parameters<typeof q.bonusHistoryReport>[1],) => await q.bonusHistoryReport(ctx, input,),
        /**
            * # query `bonusReport`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/bonusReport
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        bonusReport: async (input: Parameters<typeof q.bonusReport>[1],) => await q.bonusReport(ctx, input,),
        /**
            * # query `boughtTariffsReport`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/boughtTariffsReport
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        boughtTariffsReport: async (input: Parameters<typeof q.boughtTariffsReport>[1],) => await q.boughtTariffsReport(ctx, input,),
        /**
            * # query `canFinishWorkShift`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/canFinishWorkShift
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        canFinishWorkShift: async () => await q.canFinishWorkShift(ctx),
        /**
            * # query `canStartWorkShift`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/canStartWorkShift
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        canStartWorkShift: async () => await q.canStartWorkShift(ctx),
        /**
            * # query `canUnpauseClientSession`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/canUnpauseClientSession
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        canUnpauseClientSession: async (input: Parameters<typeof q.canUnpauseClientSession>[1],) => await q.canUnpauseClientSession(ctx, input,),
        /**
            * # query `canUseDebt`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/canUseDebt
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        canUseDebt: async () => await q.canUseDebt(ctx),
        /**
            * # query `cashBoxLicenseToken`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/cashBoxLicenseToken
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        cashBoxLicenseToken: async () => await q.cashBoxLicenseToken(ctx),
        /**
            * # query `categories`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/categories
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        categories: async (input: Parameters<typeof q.categories>[1],) => await q.categories(ctx, input,),
        /**
            * # query `category`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/category
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        category: async (input: Parameters<typeof q.category>[1],) => await q.category(ctx, input,),
        /**
            * # query `clientBookingCheckPenalty`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/clientBookingCheckPenalty
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        clientBookingCheckPenalty: async (input: Parameters<typeof q.clientBookingCheckPenalty>[1],) => await q.clientBookingCheckPenalty(ctx, input,),
        /**
            * # query `clientBookings`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/clientBookings
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        clientBookings: async (input: Parameters<typeof q.clientBookings>[1],) => await q.clientBookings(ctx, input,),
        /**
            * # query `clientEmailExists`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/clientEmailExists
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        clientEmailExists: async (input: Parameters<typeof q.clientEmailExists>[1],) => await q.clientEmailExists(ctx, input,),
        /**
            * # query `clientHostGroups`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/clientHostGroups
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        clientHostGroups: async (input: Parameters<typeof q.clientHostGroups>[1],) => await q.clientHostGroups(ctx, input,),
        /**
            * # query `clientHosts`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/clientHosts
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        clientHosts: async (input: Parameters<typeof q.clientHosts>[1],) => await q.clientHosts(ctx, input,),
        /**
            * # query `clientMe`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/clientMe
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        clientMe: async () => await q.clientMe(ctx),
        /**
            * # query `clientPhoneExists`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/clientPhoneExists
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        clientPhoneExists: async (input: Parameters<typeof q.clientPhoneExists>[1],) => await q.clientPhoneExists(ctx, input,),
        /**
            * # query `clientSession`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/clientSession
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        clientSession: async (input: Parameters<typeof q.clientSession>[1],) => await q.clientSession(ctx, input,),
        /**
            * # query `clientSessions`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/clientSessions
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        clientSessions: async (input: Parameters<typeof q.clientSessions>[1],paginator?: ShellSdkPaginatorInput) => await q.clientSessions(ctx, input, paginator),
        /**
            * # query `clientTariffGrid`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/clientTariffGrid
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        clientTariffGrid: async (input: Parameters<typeof q.clientTariffGrid>[1],) => await q.clientTariffGrid(ctx, input,),
        /**
            * # query `clients`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/clients
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        clients: async (input: Parameters<typeof q.clients>[1],paginator?: ShellSdkPaginatorInput) => await q.clients(ctx, input, paginator),
        /**
            * # query `clientsPaymentReport`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/clientsPaymentReport
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        clientsPaymentReport: async (input: Parameters<typeof q.clientsPaymentReport>[1],paginator?: ShellSdkPaginatorInput) => await q.clientsPaymentReport(ctx, input, paginator),
        /**
            * # query `club`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/club
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        club: async (input: Parameters<typeof q.club>[1],) => await q.club(ctx, input,),
        /**
            * # query `clubComments`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/clubComments
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        clubComments: async (input: Parameters<typeof q.clubComments>[1],paginator?: ShellSdkPaginatorInput) => await q.clubComments(ctx, input, paginator),
        /**
            * # query `clubOrganization`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/clubOrganization
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        clubOrganization: async (input: Parameters<typeof q.clubOrganization>[1],) => await q.clubOrganization(ctx, input,),
        /**
            * # query `clubs`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/clubs
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        clubs: async () => await q.clubs(ctx),
        /**
            * # query `combo`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/combo
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        combo: async (input: Parameters<typeof q.combo>[1],) => await q.combo(ctx, input,),
        /**
            * # query `comboList`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/comboList
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        comboList: async (input: Parameters<typeof q.comboList>[1],) => await q.comboList(ctx, input,),
        /**
            * # query `combos`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/combos
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        combos: async (input: Parameters<typeof q.combos>[1],paginator?: ShellSdkPaginatorInput) => await q.combos(ctx, input, paginator),
        /**
            * # query `comments`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/comments
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        comments: async (input: Parameters<typeof q.comments>[1],paginator?: ShellSdkPaginatorInput) => await q.comments(ctx, input, paginator),
        /**
            * # query `companyPermissions`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/companyPermissions
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        companyPermissions: async () => await q.companyPermissions(ctx),
        /**
            * # query `contractors`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/contractors
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        contractors: async () => await q.contractors(ctx),
        /**
            * # query `currencies`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/currencies
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        currencies: async () => await q.currencies(ctx),
        /**
            * # query `currency`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/currency
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        currency: async (input: Parameters<typeof q.currency>[1],) => await q.currency(ctx, input,),
        /**
            * # query `currentClub`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/currentClub
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        currentClub: async () => await q.currentClub(ctx),
        /**
            * # query `currentHost`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/currentHost
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        currentHost: async () => await q.currentHost(ctx),
        /**
            * # query `depositCashback`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/depositCashback
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        depositCashback: async (input: Parameters<typeof q.depositCashback>[1],) => await q.depositCashback(ctx, input,),
        /**
            * # query `depositCashbacks`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/depositCashbacks
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        depositCashbacks: async () => await q.depositCashbacks(ctx),
        /**
            * # query `discount`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/discount
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        discount: async (input: Parameters<typeof q.discount>[1],) => await q.discount(ctx, input,),
        /**
            * # query `discounts`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/discounts
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        discounts: async (input: Parameters<typeof q.discounts>[1],paginator?: ShellSdkPaginatorInput) => await q.discounts(ctx, input, paginator),
        /**
            * # query `emailExists`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/emailExists
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        emailExists: async (input: Parameters<typeof q.emailExists>[1],) => await q.emailExists(ctx, input,),
        /**
            * # query `eventList`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/eventList
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        eventList: async (input: Parameters<typeof q.eventList>[1],paginator?: ShellSdkPaginatorInput) => await q.eventList(ctx, input, paginator),
        /**
            * # query `events`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/events
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        events: async (input: Parameters<typeof q.events>[1],paginator?: ShellSdkPaginatorInput) => await q.events(ctx, input, paginator),
        /**
            * # query `exportGoods`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/exportGoods
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        exportGoods: async (input: Parameters<typeof q.exportGoods>[1],) => await q.exportGoods(ctx, input,),
        /**
            * # query `exportUsers`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/exportUsers
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        exportUsers: async () => await q.exportUsers(ctx),
        /**
            * # query `featureFlags`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/featureFlags
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        featureFlags: async () => await q.featureFlags(ctx),
        /**
            * # query `finishedWorkShifts`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/finishedWorkShifts
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        finishedWorkShifts: async (input: Parameters<typeof q.finishedWorkShifts>[1],) => await q.finishedWorkShifts(ctx, input,),
        /**
            * # query `freeHosts`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/freeHosts
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        freeHosts: async (input: Parameters<typeof q.freeHosts>[1],) => await q.freeHosts(ctx, input,),
        /**
            * # query `gameAccount`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/gameAccount
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        gameAccount: async (input: Parameters<typeof q.gameAccount>[1],) => await q.gameAccount(ctx, input,),
        /**
            * # query `gameAccountGroup`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/gameAccountGroup
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        gameAccountGroup: async (input: Parameters<typeof q.gameAccountGroup>[1],) => await q.gameAccountGroup(ctx, input,),
        /**
            * # query `gameAccountGroups`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/gameAccountGroups
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        gameAccountGroups: async () => await q.gameAccountGroups(ctx),
        /**
            * # query `gameAccounts`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/gameAccounts
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        gameAccounts: async () => await q.gameAccounts(ctx),
        /**
            * # query `getActiveClientList`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/getActiveClientList
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        getActiveClientList: async (input: Parameters<typeof q.getActiveClientList>[1],paginator?: ShellSdkPaginatorInput) => await q.getActiveClientList(ctx, input, paginator),
        /**
            * # query `getAgeRatings`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/getAgeRatings
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        getAgeRatings: async () => await q.getAgeRatings(ctx),
        /**
            * # query `getBeneficiaries`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/getBeneficiaries
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        getBeneficiaries: async () => await q.getBeneficiaries(ctx),
        /**
            * # query `getBeneficiaryMovementsOfFunds`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/getBeneficiaryMovementsOfFunds
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        getBeneficiaryMovementsOfFunds: async (input: Parameters<typeof q.getBeneficiaryMovementsOfFunds>[1],paginator?: ShellSdkPaginatorInput) => await q.getBeneficiaryMovementsOfFunds(ctx, input, paginator),
        /**
            * # query `getBeneficiaryMovementsOfFundsCsv`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/getBeneficiaryMovementsOfFundsCsv
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        getBeneficiaryMovementsOfFundsCsv: async (input: Parameters<typeof q.getBeneficiaryMovementsOfFundsCsv>[1],) => await q.getBeneficiaryMovementsOfFundsCsv(ctx, input,),
        /**
            * # query `getBonusHistory`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/getBonusHistory
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        getBonusHistory: async (input: Parameters<typeof q.getBonusHistory>[1],paginator?: ShellSdkPaginatorInput) => await q.getBonusHistory(ctx, input, paginator),
        /**
            * # query `getBooking`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/getBooking
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        getBooking: async (input: Parameters<typeof q.getBooking>[1],) => await q.getBooking(ctx, input,),
        /**
            * # query `getBookings`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/getBookings
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        getBookings: async (input: Parameters<typeof q.getBookings>[1],paginator?: ShellSdkPaginatorInput) => await q.getBookings(ctx, input, paginator),
        /**
            * # query `getClientDepositAccounts`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/getClientDepositAccounts
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        getClientDepositAccounts: async (input: Parameters<typeof q.getClientDepositAccounts>[1],) => await q.getClientDepositAccounts(ctx, input,),
        /**
            * # query `getClientDepositTransfers`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/getClientDepositTransfers
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        getClientDepositTransfers: async (input: Parameters<typeof q.getClientDepositTransfers>[1],paginator?: ShellSdkPaginatorInput) => await q.getClientDepositTransfers(ctx, input, paginator),
        /**
            * # query `getClubOptions`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/getClubOptions
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        getClubOptions: async () => await q.getClubOptions(ctx),
        /**
            * # query `getCurrentBeneficiary`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/getCurrentBeneficiary
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        getCurrentBeneficiary: async () => await q.getCurrentBeneficiary(ctx),
        /**
            * # query `getCurrentTariff`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/getCurrentTariff
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        getCurrentTariff: async (input: Parameters<typeof q.getCurrentTariff>[1],) => await q.getCurrentTariff(ctx, input,),
        /**
            * # query `getDepositHistory`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/getDepositHistory
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        getDepositHistory: async (input: Parameters<typeof q.getDepositHistory>[1],) => await q.getDepositHistory(ctx, input,),
        /**
            * # query `getDetailedWorkShiftMoneyData`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/getDetailedWorkShiftMoneyData
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        getDetailedWorkShiftMoneyData: async (input: Parameters<typeof q.getDetailedWorkShiftMoneyData>[1],) => await q.getDetailedWorkShiftMoneyData(ctx, input,),
        /**
            * # query `getOrganizationPaymentCard`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/getOrganizationPaymentCard
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        getOrganizationPaymentCard: async (input: Parameters<typeof q.getOrganizationPaymentCard>[1],) => await q.getOrganizationPaymentCard(ctx, input,),
        /**
            * # query `getOrganizationPaymentCards`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/getOrganizationPaymentCards
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        getOrganizationPaymentCards: async () => await q.getOrganizationPaymentCards(ctx),
        /**
            * # query `getPaymentsByClientId`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/getPaymentsByClientId
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        getPaymentsByClientId: async (input: Parameters<typeof q.getPaymentsByClientId>[1],paginator?: ShellSdkPaginatorInput) => await q.getPaymentsByClientId(ctx, input, paginator),
        /**
            * # query `getSumForWithdrawToCheckingAccount`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/getSumForWithdrawToCheckingAccount
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        getSumForWithdrawToCheckingAccount: async (input: Parameters<typeof q.getSumForWithdrawToCheckingAccount>[1],) => await q.getSumForWithdrawToCheckingAccount(ctx, input,),
        /**
            * # query `getUpcomingAutoPaymentData`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/getUpcomingAutoPaymentData
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        getUpcomingAutoPaymentData: async (input: Parameters<typeof q.getUpcomingAutoPaymentData>[1],) => await q.getUpcomingAutoPaymentData(ctx, input,),
        /**
            * # query `getWorkShiftPaymentOverviewData`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/getWorkShiftPaymentOverviewData
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        getWorkShiftPaymentOverviewData: async (input: Parameters<typeof q.getWorkShiftPaymentOverviewData>[1],) => await q.getWorkShiftPaymentOverviewData(ctx, input,),
        /**
            * # query `good`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/good
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        good: async (input: Parameters<typeof q.good>[1],) => await q.good(ctx, input,),
        /**
            * # query `goods`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/goods
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        goods: async (input: Parameters<typeof q.goods>[1],) => await q.goods(ctx, input,),
        /**
            * # query `host`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/host
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        host: async (input: Parameters<typeof q.host>[1],) => await q.host(ctx, input,),
        /**
            * # query `hostAccessToken`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/hostAccessToken
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        hostAccessToken: async (input: Parameters<typeof q.hostAccessToken>[1],) => await q.hostAccessToken(ctx, input,),
        /**
            * # query `hostGroup`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/hostGroup
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        hostGroup: async (input: Parameters<typeof q.hostGroup>[1],) => await q.hostGroup(ctx, input,),
        /**
            * # query `hostGroupTitles`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/hostGroupTitles
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        hostGroupTitles: async () => await q.hostGroupTitles(ctx),
        /**
            * # query `hostGroups`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/hostGroups
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        hostGroups: async () => await q.hostGroups(ctx),
        /**
            * # query `hostGroupsOverview`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/hostGroupsOverview
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        hostGroupsOverview: async () => await q.hostGroupsOverview(ctx),
        /**
            * # query `hostType`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/hostType
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        hostType: async (input: Parameters<typeof q.hostType>[1],) => await q.hostType(ctx, input,),
        /**
            * # query `hostTypes`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/hostTypes
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        hostTypes: async () => await q.hostTypes(ctx),
        /**
            * # query `hosts`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/hosts
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        hosts: async () => await q.hosts(ctx),
        /**
            * # query `hostsByIds`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/hostsByIds
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        hostsByIds: async (input: Parameters<typeof q.hostsByIds>[1],) => await q.hostsByIds(ctx, input,),
        /**
            * # query `hostsOccupationReport`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/hostsOccupationReport
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        hostsOccupationReport: async (input: Parameters<typeof q.hostsOccupationReport>[1],) => await q.hostsOccupationReport(ctx, input,),
        /**
            * # query `hostsOverview`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/hostsOverview
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        hostsOverview: async () => await q.hostsOverview(ctx),
        /**
            * # query `income`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/income
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        income: async () => await q.income(ctx),
        /**
            * # query `leaderboard`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/leaderboard
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        leaderboard: async (input: Parameters<typeof q.leaderboard>[1],) => await q.leaderboard(ctx, input,),
        /**
            * # query `licenseModule`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/licenseModule
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        licenseModule: async (input: Parameters<typeof q.licenseModule>[1],) => await q.licenseModule(ctx, input,),
        /**
            * # query `licenseModuleCategory`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/licenseModuleCategory
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        licenseModuleCategory: async (input: Parameters<typeof q.licenseModuleCategory>[1],) => await q.licenseModuleCategory(ctx, input,),
        /**
            * # query `licensePayments`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/licensePayments
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        licensePayments: async (input: Parameters<typeof q.licensePayments>[1],paginator?: ShellSdkPaginatorInput) => await q.licensePayments(ctx, input, paginator),
        /**
            * # query `licensePrice`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/licensePrice
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        licensePrice: async (input: Parameters<typeof q.licensePrice>[1],) => await q.licensePrice(ctx, input,),
        /**
            * # query `licenseTariff`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/licenseTariff
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        licenseTariff: async (input: Parameters<typeof q.licenseTariff>[1],) => await q.licenseTariff(ctx, input,),
        /**
            * # query `licenseTariffGrid`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/licenseTariffGrid
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        licenseTariffGrid: async (input: Parameters<typeof q.licenseTariffGrid>[1],) => await q.licenseTariffGrid(ctx, input,),
        /**
            * # query `licenseTariffs`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/licenseTariffs
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        licenseTariffs: async () => await q.licenseTariffs(ctx),
        /**
            * # query `loginExists`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/loginExists
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        loginExists: async (input: Parameters<typeof q.loginExists>[1],) => await q.loginExists(ctx, input,),
        /**
            * # query `magicPeriods`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/magicPeriods
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        magicPeriods: async () => await q.magicPeriods(ctx),
        /**
            * # query `magicSuperInit`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/magicSuperInit
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        magicSuperInit: async () => await q.magicSuperInit(ctx),
        /**
            * # query `me`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/me
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        me: async () => await q.me(ctx),
        /**
            * # query `myClub`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/myClub
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        myClub: async (input: Parameters<typeof q.myClub>[1],) => await q.myClub(ctx, input,),
        /**
            * # query `myClubs`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/myClubs
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        myClubs: async () => await q.myClubs(ctx),
        /**
            * # query `myLastVisitedClub`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/myLastVisitedClub
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        myLastVisitedClub: async () => await q.myLastVisitedClub(ctx),
        /**
            * # query `news`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/news
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        news: async (input: Parameters<typeof q.news>[1],paginator?: ShellSdkPaginatorInput) => await q.news(ctx, input, paginator),
        /**
            * # query `nicknameExists`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/nicknameExists
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        nicknameExists: async (input: Parameters<typeof q.nicknameExists>[1],) => await q.nicknameExists(ctx, input,),
        /**
            * # query `now`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/now
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        now: async () => await q.now(ctx),
        /**
            * # query `organizationClubs`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/organizationClubs
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        organizationClubs: async (input: Parameters<typeof q.organizationClubs>[1],) => await q.organizationClubs(ctx, input,),
        /**
            * # query `organizationMe`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/organizationMe
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        organizationMe: async () => await q.organizationMe(ctx),
        /**
            * # query `pausableClientSessions`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/pausableClientSessions
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        pausableClientSessions: async (input: Parameters<typeof q.pausableClientSessions>[1],) => await q.pausableClientSessions(ctx, input,),
        /**
            * # query `paymentTransaction`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/paymentTransaction
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        paymentTransaction: async (input: Parameters<typeof q.paymentTransaction>[1],) => await q.paymentTransaction(ctx, input,),
        /**
            * # query `paymentTransactions`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/paymentTransactions
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        paymentTransactions: async (input: Parameters<typeof q.paymentTransactions>[1],paginator?: ShellSdkPaginatorInput) => await q.paymentTransactions(ctx, input, paginator),
        /**
            * # query `permissions`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/permissions
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        permissions: async () => await q.permissions(ctx),
        /**
            * # query `phoneExists`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/phoneExists
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        phoneExists: async (input: Parameters<typeof q.phoneExists>[1],) => await q.phoneExists(ctx, input,),
        /**
            * # query `promoCode`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/promoCode
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        promoCode: async (input: Parameters<typeof q.promoCode>[1],) => await q.promoCode(ctx, input,),
        /**
            * # query `promoCodes`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/promoCodes
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        promoCodes: async (input: Parameters<typeof q.promoCodes>[1],paginator?: ShellSdkPaginatorInput) => await q.promoCodes(ctx, input, paginator),
        /**
            * # query `publicKey`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/publicKey
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        publicKey: async () => await q.publicKey(ctx),
        /**
            * # query `regions`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/regions
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        regions: async () => await q.regions(ctx),
        /**
            * # query `report`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/report
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        report: async (input: Parameters<typeof q.report>[1],) => await q.report(ctx, input,),
        /**
            * # query `roles`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/roles
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        roles: async () => await q.roles(ctx),
        /**
            * # query `salesReport`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/salesReport
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        salesReport: async (input: Parameters<typeof q.salesReport>[1],) => await q.salesReport(ctx, input,),
        /**
            * # query `searchByEan`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/searchByEan
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        searchByEan: async (input: Parameters<typeof q.searchByEan>[1],) => await q.searchByEan(ctx, input,),
        /**
            * # query `searchClients`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/searchClients
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        searchClients: async (input: Parameters<typeof q.searchClients>[1],paginator?: ShellSdkPaginatorInput) => await q.searchClients(ctx, input, paginator),
        /**
            * # query `searchClubs`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/searchClubs
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        searchClubs: async (input: Parameters<typeof q.searchClubs>[1],paginator?: ShellSdkPaginatorInput) => await q.searchClubs(ctx, input, paginator),
        /**
            * # query `service`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/service
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        service: async (input: Parameters<typeof q.service>[1],) => await q.service(ctx, input,),
        /**
            * # query `services`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/services
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        services: async (input: Parameters<typeof q.services>[1],) => await q.services(ctx, input,),
        /**
            * # query `sessionsMoneyReport`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/sessionsMoneyReport
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        sessionsMoneyReport: async (input: Parameters<typeof q.sessionsMoneyReport>[1],) => await q.sessionsMoneyReport(ctx, input,),
        /**
            * # query `settingValues`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/settingValues
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        settingValues: async () => await q.settingValues(ctx),
        /**
            * # query `shellSettingList`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/shellSettingList
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        shellSettingList: async () => await q.shellSettingList(ctx),
        /**
            * # query `shellSettingValues`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/shellSettingValues
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        shellSettingValues: async () => await q.shellSettingValues(ctx),
        /**
            * # query `shortcut`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/shortcut
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        shortcut: async (input: Parameters<typeof q.shortcut>[1],) => await q.shortcut(ctx, input,),
        /**
            * # query `shortcutGroup`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/shortcutGroup
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        shortcutGroup: async (input: Parameters<typeof q.shortcutGroup>[1],) => await q.shortcutGroup(ctx, input,),
        /**
            * # query `shortcutGroups`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/shortcutGroups
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        shortcutGroups: async () => await q.shortcutGroups(ctx),
        /**
            * # query `shortcuts`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/shortcuts
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        shortcuts: async () => await q.shortcuts(ctx),
        /**
            * # query `tariffGrid`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/tariffGrid
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        tariffGrid: async (input: Parameters<typeof q.tariffGrid>[1],) => await q.tariffGrid(ctx, input,),
        /**
            * # query `tariffs`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/tariffs
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        tariffs: async (input: Parameters<typeof q.tariffs>[1],paginator?: ShellSdkPaginatorInput) => await q.tariffs(ctx, input, paginator),
        /**
            * # query `tasks`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/tasks
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        tasks: async (input: Parameters<typeof q.tasks>[1],paginator?: ShellSdkPaginatorInput) => await q.tasks(ctx, input, paginator),
        /**
            * # query `uniqueUsersReport`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/uniqueUsersReport
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        uniqueUsersReport: async (input: Parameters<typeof q.uniqueUsersReport>[1],) => await q.uniqueUsersReport(ctx, input,),
        /**
            * # query `updateLicensePayment`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/updateLicensePayment
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        updateLicensePayment: async (input: Parameters<typeof q.updateLicensePayment>[1],) => await q.updateLicensePayment(ctx, input,),
        /**
            * # query `user`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/user
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        user: async (input: Parameters<typeof q.user>[1],) => await q.user(ctx, input,),
        /**
            * # query `userClubs`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/userClubs
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        userClubs: async (input: Parameters<typeof q.userClubs>[1],) => await q.userClubs(ctx, input,),
        /**
            * # query `userGroup`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/userGroup
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        userGroup: async (input: Parameters<typeof q.userGroup>[1],) => await q.userGroup(ctx, input,),
        /**
            * # query `userGroups`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/userGroups
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        userGroups: async () => await q.userGroups(ctx),
        /**
            * # query `userImportStatus`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/userImportStatus
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        userImportStatus: async (input: Parameters<typeof q.userImportStatus>[1],) => await q.userImportStatus(ctx, input,),
        /**
            * # query `validatePayment`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/validatePayment
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        validatePayment: async (input: Parameters<typeof q.validatePayment>[1],) => await q.validatePayment(ctx, input,),
        /**
            * # query `validatePromoCode`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/validatePromoCode
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        validatePromoCode: async (input: Parameters<typeof q.validatePromoCode>[1],) => await q.validatePromoCode(ctx, input,),
        /**
            * # query `versions`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/versions
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        versions: async () => await q.versions(ctx),
        /**
            * # query `workShift`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/workShift
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        workShift: async (input: Parameters<typeof q.workShift>[1],) => await q.workShift(ctx, input,),
        /**
            * # query `workShiftSummary`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/workShiftSummary
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        workShiftSummary: async (input: Parameters<typeof q.workShiftSummary>[1],) => await q.workShiftSummary(ctx, input,),
        /**
            * # query `workShifts`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/workShifts
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        workShifts: async (input: Parameters<typeof q.workShifts>[1],paginator?: ShellSdkPaginatorInput) => await q.workShifts(ctx, input, paginator),
        /**
            * # query `workShiftsReport`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/workShiftsReport
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        workShiftsReport: async (input: Parameters<typeof q.workShiftsReport>[1],) => await q.workShiftsReport(ctx, input,),
        /**
            * # query `workShiftsSummaryReport`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/workShiftsSummaryReport
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        workShiftsSummaryReport: async (input: Parameters<typeof q.workShiftsSummaryReport>[1],) => await q.workShiftsSummaryReport(ctx, input,),
        /**
            * # query `workers`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/workers
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        workers: async (input: Parameters<typeof q.workers>[1],paginator?: ShellSdkPaginatorInput) => await q.workers(ctx, input, paginator),
        /**
            * # query `clubsOnMap`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/clubsOnMap
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        clubsOnMap: async (input: Parameters<typeof q.clubsOnMap>[1],) => await q.clubsOnMap(ctx, input,),
        /**
            * # query `exportSales`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/exportSales
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        exportSales: async (input: Parameters<typeof q.exportSales>[1],) => await q.exportSales(ctx, input,),
        /**
            * # query `clientHost`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/clientHost
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        clientHost: async (input: Parameters<typeof q.clientHost>[1],) => await q.clientHost(ctx, input,),
        /**
            * # query `hostTokenByPIN`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/hostTokenByPIN
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        hostTokenByPIN: async (input: Parameters<typeof q.hostTokenByPIN>[1],) => await q.hostTokenByPIN(ctx, input,),
        /**
            * # query `network`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/network
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        network: async () => await q.network(ctx),
        /**
            * # query `licensePayment`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/licensePayment
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        licensePayment: async (input: Parameters<typeof q.licensePayment>[1],) => await q.licensePayment(ctx, input,),
        /**
            * # query `depositTransferReport`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/depositTransferReport
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        depositTransferReport: async (input: Parameters<typeof q.depositTransferReport>[1],paginator?: ShellSdkPaginatorInput) => await q.depositTransferReport(ctx, input, paginator),
        /**
            * # query `depositTransferSummaryReport`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/depositTransferSummaryReport
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        depositTransferSummaryReport: async (input: Parameters<typeof q.depositTransferSummaryReport>[1],) => await q.depositTransferSummaryReport(ctx, input,),
        /**
            * # query `overviewReport`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/overviewReport
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        overviewReport: async (input: Parameters<typeof q.overviewReport>[1],) => await q.overviewReport(ctx, input,),
        /**
            * # query `topSoldOverviewItemsReport`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/topSoldOverviewItemsReport
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        topSoldOverviewItemsReport: async (input: Parameters<typeof q.topSoldOverviewItemsReport>[1],) => await q.topSoldOverviewItemsReport(ctx, input,),
        /**
            * # query `clubLoadByDayOfWeekReport`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/clubLoadByDayOfWeekReport
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        clubLoadByDayOfWeekReport: async (input: Parameters<typeof q.clubLoadByDayOfWeekReport>[1],) => await q.clubLoadByDayOfWeekReport(ctx, input,),
        /**
            * # query `getTelegramChannels`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/query/getTelegramChannels
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        getTelegramChannels: async (input: Parameters<typeof q.getTelegramChannels>[1],) => await q.getTelegramChannels(ctx, input,),

        // mutation

        /**
            * # mutation `activateTrial`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/activateTrial
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        activateTrial: async (input: Parameters<typeof m.activateTrial>[1],) => await m.activateTrial(ctx, input,),
        /**
            * # mutation `adminCallDone`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/adminCallDone
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        adminCallDone: async (input: Parameters<typeof m.adminCallDone>[1],) => await m.adminCallDone(ctx, input,),
        /**
            * # mutation `applyNewHostDevices`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/applyNewHostDevices
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        applyNewHostDevices: async (input: Parameters<typeof m.applyNewHostDevices>[1],) => await m.applyNewHostDevices(ctx, input,),
        /**
            * # mutation `banClient`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/banClient
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        banClient: async (input: Parameters<typeof m.banClient>[1],) => await m.banClient(ctx, input,),
        /**
            * # mutation `callAdmin`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/callAdmin
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        callAdmin: async () => await m.callAdmin(ctx),
        /**
            * # mutation `changeClientSessionHost`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/changeClientSessionHost
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        changeClientSessionHost: async (input: Parameters<typeof m.changeClientSessionHost>[1],) => await m.changeClientSessionHost(ctx, input,),
        /**
            * # mutation `changeGoodsQuantity`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/changeGoodsQuantity
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        changeGoodsQuantity: async (input: Parameters<typeof m.changeGoodsQuantity>[1],) => await m.changeGoodsQuantity(ctx, input,),
        /**
            * # mutation `changeUsersGroup`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/changeUsersGroup
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        changeUsersGroup: async (input: Parameters<typeof m.changeUsersGroup>[1],) => await m.changeUsersGroup(ctx, input,),
        /**
            * # mutation `clientBookingCancel`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/clientBookingCancel
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        clientBookingCancel: async (input: Parameters<typeof m.clientBookingCancel>[1],) => await m.clientBookingCancel(ctx, input,),
        /**
            * # mutation `clientBuyPremium`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/clientBuyPremium
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        clientBuyPremium: async () => await m.clientBuyPremium(ctx),
        /**
            * # mutation `clientLogin`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/clientLogin
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        clientLogin: async (input: Parameters<typeof m.clientLogin>[1],) => await m.clientLogin(ctx, input,),
        /**
            * # mutation `clientRefreshToken`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/clientRefreshToken
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        clientRefreshToken: async (input: Parameters<typeof m.clientRefreshToken>[1],) => await m.clientRefreshToken(ctx, input,),
        /**
            * # mutation `clientRegister`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/clientRegister
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        clientRegister: async (input: Parameters<typeof m.clientRegister>[1],) => await m.clientRegister(ctx, input,),
        /**
            * # mutation `clientResetPassword`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/clientResetPassword
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        clientResetPassword: async (input: Parameters<typeof m.clientResetPassword>[1],) => await m.clientResetPassword(ctx, input,),
        /**
            * # mutation `clientUpdateMe`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/clientUpdateMe
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        clientUpdateMe: async (input: Parameters<typeof m.clientUpdateMe>[1],) => await m.clientUpdateMe(ctx, input,),
        /**
            * # mutation `clientUpdatePassword`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/clientUpdatePassword
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        clientUpdatePassword: async (input: Parameters<typeof m.clientUpdatePassword>[1],) => await m.clientUpdatePassword(ctx, input,),
        /**
            * # mutation `connectPaymentService`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/connectPaymentService
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        connectPaymentService: async (input: Parameters<typeof m.connectPaymentService>[1],) => await m.connectPaymentService(ctx, input,),
        /**
            * # mutation `createAchievement`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/createAchievement
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        createAchievement: async (input: Parameters<typeof m.createAchievement>[1],) => await m.createAchievement(ctx, input,),
        /**
            * # mutation `createAdditionalLicensePayment`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/createAdditionalLicensePayment
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        createAdditionalLicensePayment: async (input: Parameters<typeof m.createAdditionalLicensePayment>[1],) => await m.createAdditionalLicensePayment(ctx, input,),
        /**
            * # mutation `createBooking`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/createBooking
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        createBooking: async (input: Parameters<typeof m.createBooking>[1],) => await m.createBooking(ctx, input,),
        /**
            * # mutation `createCashOrder`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/createCashOrder
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        createCashOrder: async (input: Parameters<typeof m.createCashOrder>[1],) => await m.createCashOrder(ctx, input,),
        /**
            * # mutation `createCategory`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/createCategory
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        createCategory: async (input: Parameters<typeof m.createCategory>[1],) => await m.createCategory(ctx, input,),
        /**
            * # mutation `createClientBooking`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/createClientBooking
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        createClientBooking: async (input: Parameters<typeof m.createClientBooking>[1],) => await m.createClientBooking(ctx, input,),
        /**
            * # mutation `createClientClubComment`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/createClientClubComment
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        createClientClubComment: async (input: Parameters<typeof m.createClientClubComment>[1],) => await m.createClientClubComment(ctx, input,),
        /**
            * # mutation `createClub`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/createClub
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        createClub: async (input: Parameters<typeof m.createClub>[1],) => await m.createClub(ctx, input,),
        /**
            * # mutation `createClubComment`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/createClubComment
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        createClubComment: async (input: Parameters<typeof m.createClubComment>[1],) => await m.createClubComment(ctx, input,),
        /**
            * # mutation `createCombo`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/createCombo
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        createCombo: async (input: Parameters<typeof m.createCombo>[1],) => await m.createCombo(ctx, input,),
        /**
            * # mutation `createCommand`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/createCommand
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        createCommand: async (input: Parameters<typeof m.createCommand>[1],) => await m.createCommand(ctx, input,),
        /**
            * # mutation `createComment`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/createComment
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        createComment: async (input: Parameters<typeof m.createComment>[1],) => await m.createComment(ctx, input,),
        /**
            * # mutation `createContractor`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/createContractor
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        createContractor: async (input: Parameters<typeof m.createContractor>[1],) => await m.createContractor(ctx, input,),
        /**
            * # mutation `createDepositCashback`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/createDepositCashback
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        createDepositCashback: async (input: Parameters<typeof m.createDepositCashback>[1],) => await m.createDepositCashback(ctx, input,),
        /**
            * # mutation `createDiscount`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/createDiscount
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        createDiscount: async (input: Parameters<typeof m.createDiscount>[1],) => await m.createDiscount(ctx, input,),
        /**
            * # mutation `createGameAccount`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/createGameAccount
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        createGameAccount: async (input: Parameters<typeof m.createGameAccount>[1],) => await m.createGameAccount(ctx, input,),
        /**
            * # mutation `createGameAccountGroup`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/createGameAccountGroup
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        createGameAccountGroup: async (input: Parameters<typeof m.createGameAccountGroup>[1],) => await m.createGameAccountGroup(ctx, input,),
        /**
            * # mutation `createGood`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/createGood
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        createGood: async (input: Parameters<typeof m.createGood>[1],) => await m.createGood(ctx, input,),
        /**
            * # mutation `createHost`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/createHost
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        createHost: async (input: Parameters<typeof m.createHost>[1],) => await m.createHost(ctx, input,),
        /**
            * # mutation `createHostGroup`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/createHostGroup
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        createHostGroup: async (input: Parameters<typeof m.createHostGroup>[1],) => await m.createHostGroup(ctx, input,),
        /**
            * # mutation `createHostType`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/createHostType
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        createHostType: async (input: Parameters<typeof m.createHostType>[1],) => await m.createHostType(ctx, input,),
        /**
            * # mutation `createLicenseModule`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/createLicenseModule
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        createLicenseModule: async (input: Parameters<typeof m.createLicenseModule>[1],) => await m.createLicenseModule(ctx, input,),
        /**
            * # mutation `createLicenseModuleCategory`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/createLicenseModuleCategory
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        createLicenseModuleCategory: async (input: Parameters<typeof m.createLicenseModuleCategory>[1],) => await m.createLicenseModuleCategory(ctx, input,),
        /**
            * # mutation `createLicensePayment`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/createLicensePayment
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        createLicensePayment: async (input: Parameters<typeof m.createLicensePayment>[1],) => await m.createLicensePayment(ctx, input,),
        /**
            * # mutation `createLicenseTariff`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/createLicenseTariff
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        createLicenseTariff: async (input: Parameters<typeof m.createLicenseTariff>[1],) => await m.createLicenseTariff(ctx, input,),
        /**
            * # mutation `createPayment`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/createPayment
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        createPayment: async (input: Parameters<typeof m.createPayment>[1],) => await m.createPayment(ctx, input,),
        /**
            * # mutation `createPaymentTransaction`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/createPaymentTransaction
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        createPaymentTransaction: async (input: Parameters<typeof m.createPaymentTransaction>[1],) => await m.createPaymentTransaction(ctx, input,),
        /**
            * # mutation `createPromoCode`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/createPromoCode
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        createPromoCode: async (input: Parameters<typeof m.createPromoCode>[1],) => await m.createPromoCode(ctx, input,),
        /**
            * # mutation `createService`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/createService
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        createService: async (input: Parameters<typeof m.createService>[1],) => await m.createService(ctx, input,),
        /**
            * # mutation `createShortcut`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/createShortcut
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        createShortcut: async (input: Parameters<typeof m.createShortcut>[1],) => await m.createShortcut(ctx, input,),
        /**
            * # mutation `createShortcutGroup`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/createShortcutGroup
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        createShortcutGroup: async (input: Parameters<typeof m.createShortcutGroup>[1],) => await m.createShortcutGroup(ctx, input,),
        /**
            * # mutation `createShortcutGroups`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/createShortcutGroups
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        createShortcutGroups: async (input: Parameters<typeof m.createShortcutGroups>[1],) => await m.createShortcutGroups(ctx, input,),
        /**
            * # mutation `createTariff`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/createTariff
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        createTariff: async (input: Parameters<typeof m.createTariff>[1],) => await m.createTariff(ctx, input,),
        /**
            * # mutation `createUserGroup`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/createUserGroup
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        createUserGroup: async (input: Parameters<typeof m.createUserGroup>[1],) => await m.createUserGroup(ctx, input,),
        /**
            * # mutation `createWorker`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/createWorker
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        createWorker: async (input: Parameters<typeof m.createWorker>[1],) => await m.createWorker(ctx, input,),
        /**
            * # mutation `createWorkerTask`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/createWorkerTask
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        createWorkerTask: async (input: Parameters<typeof m.createWorkerTask>[1],) => await m.createWorkerTask(ctx, input,),
        /**
            * # mutation `deleteAchievement`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/deleteAchievement
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        deleteAchievement: async (input: Parameters<typeof m.deleteAchievement>[1],) => await m.deleteAchievement(ctx, input,),
        /**
            * # mutation `deleteCategory`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/deleteCategory
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        deleteCategory: async (input: Parameters<typeof m.deleteCategory>[1],) => await m.deleteCategory(ctx, input,),
        /**
            * # mutation `deleteClub`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/deleteClub
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        deleteClub: async (input: Parameters<typeof m.deleteClub>[1],) => await m.deleteClub(ctx, input,),
        /**
            * # mutation `deleteCombo`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/deleteCombo
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        deleteCombo: async (input: Parameters<typeof m.deleteCombo>[1],) => await m.deleteCombo(ctx, input,),
        /**
            * # mutation `deleteComment`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/deleteComment
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        deleteComment: async (input: Parameters<typeof m.deleteComment>[1],) => await m.deleteComment(ctx, input,),
        /**
            * # mutation `deleteContractor`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/deleteContractor
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        deleteContractor: async (input: Parameters<typeof m.deleteContractor>[1],) => await m.deleteContractor(ctx, input,),
        /**
            * # mutation `deleteDepositCashback`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/deleteDepositCashback
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        deleteDepositCashback: async (input: Parameters<typeof m.deleteDepositCashback>[1],) => await m.deleteDepositCashback(ctx, input,),
        /**
            * # mutation `deleteDiscount`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/deleteDiscount
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        deleteDiscount: async (input: Parameters<typeof m.deleteDiscount>[1],) => await m.deleteDiscount(ctx, input,),
        /**
            * # mutation `deleteGameAccount`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/deleteGameAccount
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        deleteGameAccount: async (input: Parameters<typeof m.deleteGameAccount>[1],) => await m.deleteGameAccount(ctx, input,),
        /**
            * # mutation `deleteGameAccountGroup`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/deleteGameAccountGroup
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        deleteGameAccountGroup: async (input: Parameters<typeof m.deleteGameAccountGroup>[1],) => await m.deleteGameAccountGroup(ctx, input,),
        /**
            * # mutation `deleteGood`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/deleteGood
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        deleteGood: async (input: Parameters<typeof m.deleteGood>[1],) => await m.deleteGood(ctx, input,),
        /**
            * # mutation `deleteGoods`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/deleteGoods
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        deleteGoods: async (input: Parameters<typeof m.deleteGoods>[1],) => await m.deleteGoods(ctx, input,),
        /**
            * # mutation `deleteHost`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/deleteHost
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        deleteHost: async (input: Parameters<typeof m.deleteHost>[1],) => await m.deleteHost(ctx, input,),
        /**
            * # mutation `deleteHostGroup`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/deleteHostGroup
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        deleteHostGroup: async (input: Parameters<typeof m.deleteHostGroup>[1],) => await m.deleteHostGroup(ctx, input,),
        /**
            * # mutation `deleteHostType`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/deleteHostType
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        deleteHostType: async (input: Parameters<typeof m.deleteHostType>[1],) => await m.deleteHostType(ctx, input,),
        /**
            * # mutation `deleteLicenseModule`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/deleteLicenseModule
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        deleteLicenseModule: async (input: Parameters<typeof m.deleteLicenseModule>[1],) => await m.deleteLicenseModule(ctx, input,),
        /**
            * # mutation `deleteLicenseModuleCategory`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/deleteLicenseModuleCategory
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        deleteLicenseModuleCategory: async (input: Parameters<typeof m.deleteLicenseModuleCategory>[1],) => await m.deleteLicenseModuleCategory(ctx, input,),
        /**
            * # mutation `deleteLicenseTariff`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/deleteLicenseTariff
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        deleteLicenseTariff: async (input: Parameters<typeof m.deleteLicenseTariff>[1],) => await m.deleteLicenseTariff(ctx, input,),
        /**
            * # mutation `deleteOrganizationPaymentCard`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/deleteOrganizationPaymentCard
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        deleteOrganizationPaymentCard: async (input: Parameters<typeof m.deleteOrganizationPaymentCard>[1],) => await m.deleteOrganizationPaymentCard(ctx, input,),
        /**
            * # mutation `deletePromoCode`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/deletePromoCode
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        deletePromoCode: async (input: Parameters<typeof m.deletePromoCode>[1],) => await m.deletePromoCode(ctx, input,),
        /**
            * # mutation `deleteService`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/deleteService
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        deleteService: async (input: Parameters<typeof m.deleteService>[1],) => await m.deleteService(ctx, input,),
        /**
            * # mutation `deleteShortcut`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/deleteShortcut
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        deleteShortcut: async (input: Parameters<typeof m.deleteShortcut>[1],) => await m.deleteShortcut(ctx, input,),
        /**
            * # mutation `deleteShortcutGroup`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/deleteShortcutGroup
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        deleteShortcutGroup: async (input: Parameters<typeof m.deleteShortcutGroup>[1],) => await m.deleteShortcutGroup(ctx, input,),
        /**
            * # mutation `deleteTariff`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/deleteTariff
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        deleteTariff: async (input: Parameters<typeof m.deleteTariff>[1],) => await m.deleteTariff(ctx, input,),
        /**
            * # mutation `deleteUserGroup`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/deleteUserGroup
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        deleteUserGroup: async (input: Parameters<typeof m.deleteUserGroup>[1],) => await m.deleteUserGroup(ctx, input,),
        /**
            * # mutation `deleteWorker`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/deleteWorker
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        deleteWorker: async (input: Parameters<typeof m.deleteWorker>[1],) => await m.deleteWorker(ctx, input,),
        /**
            * # mutation `deleteWorkerTask`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/deleteWorkerTask
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        deleteWorkerTask: async (input: Parameters<typeof m.deleteWorkerTask>[1],) => await m.deleteWorkerTask(ctx, input,),
        /**
            * # mutation `disableWorker`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/disableWorker
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        disableWorker: async (input: Parameters<typeof m.disableWorker>[1],) => await m.disableWorker(ctx, input,),
        /**
            * # mutation `disconnectPaymentService`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/disconnectPaymentService
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        disconnectPaymentService: async (input: Parameters<typeof m.disconnectPaymentService>[1],) => await m.disconnectPaymentService(ctx, input,),
        /**
            * # mutation `emailRegister`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/emailRegister
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        emailRegister: async (input: Parameters<typeof m.emailRegister>[1],) => await m.emailRegister(ctx, input,),
        /**
            * # mutation `executeDealAndPayToCheckingAccount`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/executeDealAndPayToCheckingAccount
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        executeDealAndPayToCheckingAccount: async (input: Parameters<typeof m.executeDealAndPayToCheckingAccount>[1],) => await m.executeDealAndPayToCheckingAccount(ctx, input,),
        /**
            * # mutation `finishClientSession`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/finishClientSession
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        finishClientSession: async () => await m.finishClientSession(ctx),
        /**
            * # mutation `finishHostSession`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/finishHostSession
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        finishHostSession: async () => await m.finishHostSession(ctx),
        /**
            * # mutation `finishWorkShift`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/finishWorkShift
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        finishWorkShift: async (input: Parameters<typeof m.finishWorkShift>[1],) => await m.finishWorkShift(ctx, input,),
        /**
            * # mutation `forceDeleteUser`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/forceDeleteUser
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        forceDeleteUser: async (input: Parameters<typeof m.forceDeleteUser>[1],) => await m.forceDeleteUser(ctx, input,),
        /**
            * # mutation `forceFinishWorkShift`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/forceFinishWorkShift
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        forceFinishWorkShift: async (input: Parameters<typeof m.forceFinishWorkShift>[1],) => await m.forceFinishWorkShift(ctx, input,),
        /**
            * # mutation `freeGameAccount`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/freeGameAccount
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        freeGameAccount: async (input: Parameters<typeof m.freeGameAccount>[1],) => await m.freeGameAccount(ctx, input,),
        /**
            * # mutation `generateQR`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/generateQR
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        generateQR: async (input: Parameters<typeof m.generateQR>[1],) => await m.generateQR(ctx, input,),
        /**
            * # mutation `importClub`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/importClub
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        importClub: async (input: Parameters<typeof m.importClub>[1],) => await m.importClub(ctx, input,),
        /**
            * # mutation `importUsers`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/importUsers
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        importUsers: async (input: Parameters<typeof m.importUsers>[1],) => await m.importUsers(ctx, input,),
        /**
            * # mutation `importUsersHours`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/importUsersHours
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        importUsersHours: async (input: Parameters<typeof m.importUsersHours>[1],) => await m.importUsersHours(ctx, input,),
        /**
            * # mutation `login`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/login
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        login: async (input: Parameters<typeof m.login>[1],) => await m.login(ctx, input,),
        /**
            * # mutation `loginQR`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/loginQR
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        loginQR: async (input: Parameters<typeof m.loginQR>[1],) => await m.loginQR(ctx, input,),
        /**
            * # mutation `logout`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/logout
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        logout: async () => await m.logout(ctx),
        /**
            * # mutation `magicInit`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/magicInit
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        magicInit: async (input: Parameters<typeof m.magicInit>[1],) => await m.magicInit(ctx, input,),
        /**
            * # mutation `magicRoles`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/magicRoles
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        magicRoles: async () => await m.magicRoles(ctx),
        /**
            * # mutation `magicRoles2`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/magicRoles2
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        magicRoles2: async () => await m.magicRoles2(ctx),
        /**
            * # mutation `organizationConfirmCode`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/organizationConfirmCode
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        organizationConfirmCode: async (input: Parameters<typeof m.organizationConfirmCode>[1],) => await m.organizationConfirmCode(ctx, input,),
        /**
            * # mutation `organizationLogin`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/organizationLogin
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        organizationLogin: async (input: Parameters<typeof m.organizationLogin>[1],) => await m.organizationLogin(ctx, input,),
        /**
            * # mutation `organizationLogout`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/organizationLogout
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        organizationLogout: async () => await m.organizationLogout(ctx),
        /**
            * # mutation `organizationRegister`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/organizationRegister
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        organizationRegister: async (input: Parameters<typeof m.organizationRegister>[1],) => await m.organizationRegister(ctx, input,),
        /**
            * # mutation `organizationResetPassword`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/organizationResetPassword
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        organizationResetPassword: async (input: Parameters<typeof m.organizationResetPassword>[1],) => await m.organizationResetPassword(ctx, input,),
        /**
            * # mutation `organizationSendConfirmationCode`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/organizationSendConfirmationCode
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        organizationSendConfirmationCode: async (input: Parameters<typeof m.organizationSendConfirmationCode>[1],) => await m.organizationSendConfirmationCode(ctx, input,),
        /**
            * # mutation `organizationStartResetPassword`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/organizationStartResetPassword
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        organizationStartResetPassword: async (input: Parameters<typeof m.organizationStartResetPassword>[1],) => await m.organizationStartResetPassword(ctx, input,),
        /**
            * # mutation `organizationUpdate`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/organizationUpdate
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        organizationUpdate: async (input: Parameters<typeof m.organizationUpdate>[1],) => await m.organizationUpdate(ctx, input,),
        /**
            * # mutation `organizationVerifyConfirmationCode`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/organizationVerifyConfirmationCode
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        organizationVerifyConfirmationCode: async (input: Parameters<typeof m.organizationVerifyConfirmationCode>[1],) => await m.organizationVerifyConfirmationCode(ctx, input,),
        /**
            * # mutation `penaltyHost`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/penaltyHost
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        penaltyHost: async (input: Parameters<typeof m.penaltyHost>[1],) => await m.penaltyHost(ctx, input,),
        /**
            * # mutation `pickGameAccount`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/pickGameAccount
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        pickGameAccount: async (input: Parameters<typeof m.pickGameAccount>[1],) => await m.pickGameAccount(ctx, input,),
        /**
            * # mutation `processPostPayment`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/processPostPayment
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        processPostPayment: async (input: Parameters<typeof m.processPostPayment>[1],) => await m.processPostPayment(ctx, input,),
        /**
            * # mutation `processStats`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/processStats
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        processStats: async (input: Parameters<typeof m.processStats>[1],) => await m.processStats(ctx, input,),
        /**
            * # mutation `readAllClubComments`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/readAllClubComments
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        readAllClubComments: async () => await m.readAllClubComments(ctx),
        /**
            * # mutation `readClubComment`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/readClubComment
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        readClubComment: async (input: Parameters<typeof m.readClubComment>[1],) => await m.readClubComment(ctx, input,),
        /**
            * # mutation `recalculateAchievements`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/recalculateAchievements
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        recalculateAchievements: async (input: Parameters<typeof m.recalculateAchievements>[1],) => await m.recalculateAchievements(ctx, input,),
        /**
            * # mutation `refreshToken`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/refreshToken
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        refreshToken: async (input: Parameters<typeof m.refreshToken>[1],) => await m.refreshToken(ctx, input,),
        /**
            * # mutation `refundPayment`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/refundPayment
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        refundPayment: async (input: Parameters<typeof m.refundPayment>[1],) => await m.refundPayment(ctx, input,),
        /**
            * # mutation `register`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/register
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        register: async (input: Parameters<typeof m.register>[1],) => await m.register(ctx, input,),
        /**
            * # mutation `registerHost`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/registerHost
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        registerHost: async (input: Parameters<typeof m.registerHost>[1],) => await m.registerHost(ctx, input,),
        /**
            * # mutation `relogin`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/relogin
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        relogin: async (input: Parameters<typeof m.relogin>[1],) => await m.relogin(ctx, input,),
        /**
            * # mutation `resetPassword`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/resetPassword
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        resetPassword: async (input: Parameters<typeof m.resetPassword>[1],) => await m.resetPassword(ctx, input,),
        /**
            * # mutation `resetUserPassword`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/resetUserPassword
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        resetUserPassword: async (input: Parameters<typeof m.resetUserPassword>[1],) => await m.resetUserPassword(ctx, input,),
        /**
            * # mutation `sendClientConfirmationCode`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/sendClientConfirmationCode
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        sendClientConfirmationCode: async (input: Parameters<typeof m.sendClientConfirmationCode>[1],) => await m.sendClientConfirmationCode(ctx, input,),
        /**
            * # mutation `sendClubOnVerification`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/sendClubOnVerification
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        sendClubOnVerification: async (input: Parameters<typeof m.sendClubOnVerification>[1],) => await m.sendClubOnVerification(ctx, input,),
        /**
            * # mutation `sendConfirmationCode`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/sendConfirmationCode
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        sendConfirmationCode: async (input: Parameters<typeof m.sendConfirmationCode>[1],) => await m.sendConfirmationCode(ctx, input,),
        /**
            * # mutation `sendConfirmationCodeToEnter`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/sendConfirmationCodeToEnter
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        sendConfirmationCodeToEnter: async (input: Parameters<typeof m.sendConfirmationCodeToEnter>[1],) => await m.sendConfirmationCodeToEnter(ctx, input,),
        /**
            * # mutation `sendExtendConfirmationCode`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/sendExtendConfirmationCode
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        sendExtendConfirmationCode: async (input: Parameters<typeof m.sendExtendConfirmationCode>[1],) => await m.sendExtendConfirmationCode(ctx, input,),
        /**
            * # mutation `sendWakePacket`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/sendWakePacket
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        sendWakePacket: async (input: Parameters<typeof m.sendWakePacket>[1],) => await m.sendWakePacket(ctx, input,),
        /**
            * # mutation `setBonus`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/setBonus
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        setBonus: async (input: Parameters<typeof m.setBonus>[1],) => await m.setBonus(ctx, input,),
        /**
            * # mutation `setBookingStatus`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/setBookingStatus
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        setBookingStatus: async (input: Parameters<typeof m.setBookingStatus>[1],) => await m.setBookingStatus(ctx, input,),
        /**
            * # mutation `setCloudPaymentsAccountToCompany`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/setCloudPaymentsAccountToCompany
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        setCloudPaymentsAccountToCompany: async (input: Parameters<typeof m.setCloudPaymentsAccountToCompany>[1],) => await m.setCloudPaymentsAccountToCompany(ctx, input,),
        /**
            * # mutation `setClubAutoPayCardId`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/setClubAutoPayCardId
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        setClubAutoPayCardId: async (input: Parameters<typeof m.setClubAutoPayCardId>[1],) => await m.setClubAutoPayCardId(ctx, input,),
        /**
            * # mutation `setClubAutoPayStatus`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/setClubAutoPayStatus
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        setClubAutoPayStatus: async (input: Parameters<typeof m.setClubAutoPayStatus>[1],) => await m.setClubAutoPayStatus(ctx, input,),
        /**
            * # mutation `setClubDepositTransferStatus`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/setClubDepositTransferStatus
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        setClubDepositTransferStatus: async (input: Parameters<typeof m.setClubDepositTransferStatus>[1],) => await m.setClubDepositTransferStatus(ctx, input,),
        /**
            * # mutation `setDeposit`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/setDeposit
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        setDeposit: async (input: Parameters<typeof m.setDeposit>[1],) => await m.setDeposit(ctx, input,),
        /**
            * # mutation `setHostServiceMode`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/setHostServiceMode
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        setHostServiceMode: async (input: Parameters<typeof m.setHostServiceMode>[1],) => await m.setHostServiceMode(ctx, input,),
        /**
            * # mutation `setMultipleSettingValues`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/setMultipleSettingValues
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        setMultipleSettingValues: async (input: Parameters<typeof m.setMultipleSettingValues>[1],) => await m.setMultipleSettingValues(ctx, input,),
        /**
            * # mutation `setSetting`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/setSetting
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        setSetting: async (input: Parameters<typeof m.setSetting>[1],) => await m.setSetting(ctx, input,),
        /**
            * # mutation `setSettingValue`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/setSettingValue
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        setSettingValue: async (input: Parameters<typeof m.setSettingValue>[1],) => await m.setSettingValue(ctx, input,),
        /**
            * # mutation `setSettings`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/setSettings
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        setSettings: async (input: Parameters<typeof m.setSettings>[1],) => await m.setSettings(ctx, input,),
        /**
            * # mutation `setShellMode`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/setShellMode
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        setShellMode: async (input: Parameters<typeof m.setShellMode>[1],) => await m.setShellMode(ctx, input,),
        /**
            * # mutation `setTelegramChannel`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/setTelegramChannel
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        setTelegramChannel: async (input: Parameters<typeof m.setTelegramChannel>[1],) => await m.setTelegramChannel(ctx, input,),
        /**
            * # mutation `setUserDiscount`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/setUserDiscount
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        setUserDiscount: async (input: Parameters<typeof m.setUserDiscount>[1],) => await m.setUserDiscount(ctx, input,),
        /**
            * # mutation `setWorkerTaskComplete`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/setWorkerTaskComplete
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        setWorkerTaskComplete: async (input: Parameters<typeof m.setWorkerTaskComplete>[1],) => await m.setWorkerTaskComplete(ctx, input,),
        /**
            * # mutation `shortcutClicked`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/shortcutClicked
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        shortcutClicked: async (input: Parameters<typeof m.shortcutClicked>[1],) => await m.shortcutClicked(ctx, input,),
        /**
            * # mutation `startClientSession`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/startClientSession
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        startClientSession: async (input: Parameters<typeof m.startClientSession>[1],) => await m.startClientSession(ctx, input,),
        /**
            * # mutation `startHostSession`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/startHostSession
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        startHostSession: async (input: Parameters<typeof m.startHostSession>[1],) => await m.startHostSession(ctx, input,),
        /**
            * # mutation `startWorkShift`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/startWorkShift
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        startWorkShift: async (input: Parameters<typeof m.startWorkShift>[1],) => await m.startWorkShift(ctx, input,),
        /**
            * # mutation `stopClientSession`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/stopClientSession
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        stopClientSession: async (input: Parameters<typeof m.stopClientSession>[1],) => await m.stopClientSession(ctx, input,),
        /**
            * # mutation `transferDeposit`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/transferDeposit
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        transferDeposit: async (input: Parameters<typeof m.transferDeposit>[1],) => await m.transferDeposit(ctx, input,),
        /**
            * # mutation `unpauseClientSession`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/unpauseClientSession
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        unpauseClientSession: async (input: Parameters<typeof m.unpauseClientSession>[1],) => await m.unpauseClientSession(ctx, input,),
        /**
            * # mutation `updateBooking`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/updateBooking
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        updateBooking: async (input: Parameters<typeof m.updateBooking>[1],) => await m.updateBooking(ctx, input,),
        /**
            * # mutation `updateCategory`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/updateCategory
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        updateCategory: async (input: Parameters<typeof m.updateCategory>[1],) => await m.updateCategory(ctx, input,),
        /**
            * # mutation `updateClub`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/updateClub
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        updateClub: async (input: Parameters<typeof m.updateClub>[1],) => await m.updateClub(ctx, input,),
        /**
            * # mutation `updateCombo`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/updateCombo
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        updateCombo: async (input: Parameters<typeof m.updateCombo>[1],) => await m.updateCombo(ctx, input,),
        /**
            * # mutation `updateCompanyPermissions`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/updateCompanyPermissions
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        updateCompanyPermissions: async (input: Parameters<typeof m.updateCompanyPermissions>[1],) => await m.updateCompanyPermissions(ctx, input,),
        /**
            * # mutation `updateContractor`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/updateContractor
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        updateContractor: async (input: Parameters<typeof m.updateContractor>[1],) => await m.updateContractor(ctx, input,),
        /**
            * # mutation `updateDepositCashback`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/updateDepositCashback
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        updateDepositCashback: async (input: Parameters<typeof m.updateDepositCashback>[1],) => await m.updateDepositCashback(ctx, input,),
        /**
            * # mutation `updateDiscount`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/updateDiscount
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        updateDiscount: async (input: Parameters<typeof m.updateDiscount>[1],) => await m.updateDiscount(ctx, input,),
        /**
            * # mutation `updateGameAccount`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/updateGameAccount
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        updateGameAccount: async (input: Parameters<typeof m.updateGameAccount>[1],) => await m.updateGameAccount(ctx, input,),
        /**
            * # mutation `updateGameAccountGroup`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/updateGameAccountGroup
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        updateGameAccountGroup: async (input: Parameters<typeof m.updateGameAccountGroup>[1],) => await m.updateGameAccountGroup(ctx, input,),
        /**
            * # mutation `updateGood`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/updateGood
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        updateGood: async (input: Parameters<typeof m.updateGood>[1],) => await m.updateGood(ctx, input,),
        /**
            * # mutation `updateGoods`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/updateGoods
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        updateGoods: async (input: Parameters<typeof m.updateGoods>[1],) => await m.updateGoods(ctx, input,),
        /**
            * # mutation `updateHost`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/updateHost
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        updateHost: async (input: Parameters<typeof m.updateHost>[1],) => await m.updateHost(ctx, input,),
        /**
            * # mutation `updateHostCommandStatus`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/updateHostCommandStatus
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        updateHostCommandStatus: async (input: Parameters<typeof m.updateHostCommandStatus>[1],) => await m.updateHostCommandStatus(ctx, input,),
        /**
            * # mutation `updateHostGroup`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/updateHostGroup
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        updateHostGroup: async (input: Parameters<typeof m.updateHostGroup>[1],) => await m.updateHostGroup(ctx, input,),
        /**
            * # mutation `updateHostIpAddress`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/updateHostIpAddress
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        updateHostIpAddress: async (input: Parameters<typeof m.updateHostIpAddress>[1],) => await m.updateHostIpAddress(ctx, input,),
        /**
            * # mutation `updateHostState`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/updateHostState
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        updateHostState: async (input: Parameters<typeof m.updateHostState>[1],) => await m.updateHostState(ctx, input,),
        /**
            * # mutation `updateHostType`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/updateHostType
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        updateHostType: async (input: Parameters<typeof m.updateHostType>[1],) => await m.updateHostType(ctx, input,),
        /**
            * # mutation `updateLicenseModule`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/updateLicenseModule
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        updateLicenseModule: async (input: Parameters<typeof m.updateLicenseModule>[1],) => await m.updateLicenseModule(ctx, input,),
        /**
            * # mutation `updateLicenseModuleCategory`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/updateLicenseModuleCategory
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        updateLicenseModuleCategory: async (input: Parameters<typeof m.updateLicenseModuleCategory>[1],) => await m.updateLicenseModuleCategory(ctx, input,),
        /**
            * # mutation `updateLicenseTariff`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/updateLicenseTariff
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        updateLicenseTariff: async (input: Parameters<typeof m.updateLicenseTariff>[1],) => await m.updateLicenseTariff(ctx, input,),
        /**
            * # mutation `updateMe`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/updateMe
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        updateMe: async (input: Parameters<typeof m.updateMe>[1],) => await m.updateMe(ctx, input,),
        /**
            * # mutation `updateNewsConsent`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/updateNewsConsent
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        updateNewsConsent: async (input: Parameters<typeof m.updateNewsConsent>[1],) => await m.updateNewsConsent(ctx, input,),
        /**
            * # mutation `updatePassword`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/updatePassword
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        updatePassword: async (input: Parameters<typeof m.updatePassword>[1],) => await m.updatePassword(ctx, input,),
        /**
            * # mutation `updatePromoCode`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/updatePromoCode
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        updatePromoCode: async (input: Parameters<typeof m.updatePromoCode>[1],) => await m.updatePromoCode(ctx, input,),
        /**
            * # mutation `updateService`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/updateService
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        updateService: async (input: Parameters<typeof m.updateService>[1],) => await m.updateService(ctx, input,),
        /**
            * # mutation `updateShortcut`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/updateShortcut
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        updateShortcut: async (input: Parameters<typeof m.updateShortcut>[1],) => await m.updateShortcut(ctx, input,),
        /**
            * # mutation `updateShortcutGroup`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/updateShortcutGroup
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        updateShortcutGroup: async (input: Parameters<typeof m.updateShortcutGroup>[1],) => await m.updateShortcutGroup(ctx, input,),
        /**
            * # mutation `updateShortcutGroupSort`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/updateShortcutGroupSort
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        updateShortcutGroupSort: async (input: Parameters<typeof m.updateShortcutGroupSort>[1],) => await m.updateShortcutGroupSort(ctx, input,),
        /**
            * # mutation `updateShortcutSort`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/updateShortcutSort
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        updateShortcutSort: async (input: Parameters<typeof m.updateShortcutSort>[1],) => await m.updateShortcutSort(ctx, input,),
        /**
            * # mutation `updateTariff`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/updateTariff
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        updateTariff: async (input: Parameters<typeof m.updateTariff>[1],) => await m.updateTariff(ctx, input,),
        /**
            * # mutation `updateTariffSort`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/updateTariffSort
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        updateTariffSort: async (input: Parameters<typeof m.updateTariffSort>[1],) => await m.updateTariffSort(ctx, input,),
        /**
            * # mutation `updateUserGroup`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/updateUserGroup
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        updateUserGroup: async (input: Parameters<typeof m.updateUserGroup>[1],) => await m.updateUserGroup(ctx, input,),
        /**
            * # mutation `updateWorker`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/updateWorker
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        updateWorker: async (input: Parameters<typeof m.updateWorker>[1],) => await m.updateWorker(ctx, input,),
        /**
            * # mutation `updateWorkerTask`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/updateWorkerTask
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        updateWorkerTask: async (input: Parameters<typeof m.updateWorkerTask>[1],) => await m.updateWorkerTask(ctx, input,),
        /**
            * # mutation `uploadShortcutImage`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/uploadShortcutImage
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        uploadShortcutImage: async (input: Parameters<typeof m.uploadShortcutImage>[1],) => await m.uploadShortcutImage(ctx, input,),
        /**
            * # mutation `uploadUserTable`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/uploadUserTable
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        uploadUserTable: async (input: Parameters<typeof m.uploadUserTable>[1],) => await m.uploadUserTable(ctx, input,),
        /**
            * # mutation `useDebt`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/useDebt
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        useDebt: async () => await m.useDebt(ctx),
        /**
            * # mutation `validateQR`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/validateQR
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        validateQR: async (input: Parameters<typeof m.validateQR>[1],) => await m.validateQR(ctx, input,),
        /**
            * # mutation `verifyClient`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/verifyClient
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        verifyClient: async (input: Parameters<typeof m.verifyClient>[1],) => await m.verifyClient(ctx, input,),
        /**
            * # mutation `verifyMe`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/verifyMe
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        verifyMe: async (input: Parameters<typeof m.verifyMe>[1],) => await m.verifyMe(ctx, input,),
        /**
            * # mutation `verifyUser`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/verifyUser
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        verifyUser: async (input: Parameters<typeof m.verifyUser>[1],) => await m.verifyUser(ctx, input,),
        /**
            * # mutation `updateComment`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/updateComment
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        updateComment: async (input: Parameters<typeof m.updateComment>[1],) => await m.updateComment(ctx, input,),
        /**
            * # mutation `createHostPIN`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/createHostPIN
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        createHostPIN: async (input: Parameters<typeof m.createHostPIN>[1],) => await m.createHostPIN(ctx, input,),
        /**
            * # mutation `createNetwork`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/createNetwork
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        createNetwork: async (input: Parameters<typeof m.createNetwork>[1],) => await m.createNetwork(ctx, input,),
        /**
            * # mutation `updateNetwork`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/updateNetwork
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        updateNetwork: async (input: Parameters<typeof m.updateNetwork>[1],) => await m.updateNetwork(ctx, input,),
        /**
            * # mutation `addCompaniesToNetwork`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/addCompaniesToNetwork
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        addCompaniesToNetwork: async (input: Parameters<typeof m.addCompaniesToNetwork>[1],) => await m.addCompaniesToNetwork(ctx, input,),
        /**
            * # mutation `updateNetworkCompany`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/updateNetworkCompany
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        updateNetworkCompany: async (input: Parameters<typeof m.updateNetworkCompany>[1],) => await m.updateNetworkCompany(ctx, input,),
        /**
            * # mutation `deleteNetworkCompany`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/deleteNetworkCompany
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        deleteNetworkCompany: async (input: Parameters<typeof m.deleteNetworkCompany>[1],) => await m.deleteNetworkCompany(ctx, input,),
        /**
            * # mutation `updateTelegramSettings`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/updateTelegramSettings
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        updateTelegramSettings: async (input: Parameters<typeof m.updateTelegramSettings>[1],) => await m.updateTelegramSettings(ctx, input,),
        /**
            * # mutation `purchaseTariffByQR`
            * 
            * 🔗 https://smartshell.xlsoftware.ru/docs/reference/api/mutation/purchaseTariffByQR
            * 
            * `@xlsoftware/smartshell-sdk`
            */
        purchaseTariffByQR: async (input: Parameters<typeof m.purchaseTariffByQR>[1],) => await m.purchaseTariffByQR(ctx, input,),
    }
    }