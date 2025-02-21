import achievements from './query/achievements.ts'
import activeWorkShift from './query/activeWorkShift.ts'
import additionalLicensePrice from './query/additionalLicensePrice.ts'
import applicationsReport from './query/applicationsReport.ts'
import bonusHistoryReport from './query/bonusHistoryReport.ts'
import bonusReport from './query/bonusReport.ts'
import boughtTariffsReport from './query/boughtTariffsReport.ts'
import canFinishWorkShift from './query/canFinishWorkShift.ts'
import canStartWorkShift from './query/canStartWorkShift.ts'
import canUnpauseClientSession from './query/canUnpauseClientSession.ts'
import canUseDebt from './query/canUseDebt.ts'
import cashBoxLicenseToken from './query/cashBoxLicenseToken.ts'
import categories from './query/categories.ts'
import category from './query/category.ts'
import clientBookingCheckPenalty from './query/clientBookingCheckPenalty.ts'
import clientBookings from './query/clientBookings.ts'
import clientEmailExists from './query/clientEmailExists.ts'
import clientHostGroups from './query/clientHostGroups.ts'
import clientHosts from './query/clientHosts.ts'
import clientMe from './query/clientMe.ts'
import clientPhoneExists from './query/clientPhoneExists.ts'
import clientSession from './query/clientSession.ts'
import clientSessions from './query/clientSessions.ts'
import clientTariffGrid from './query/clientTariffGrid.ts'
import clients from './query/clients.ts'
import clientsPaymentReport from './query/clientsPaymentReport.ts'
import club from './query/club.ts'
import clubComments from './query/clubComments.ts'
import clubOrganization from './query/clubOrganization.ts'
import clubs from './query/clubs.ts'
import combo from './query/combo.ts'
import comboList from './query/comboList.ts'
import combos from './query/combos.ts'
import comments from './query/comments.ts'
import companyPermissions from './query/companyPermissions.ts'
import contractors from './query/contractors.ts'
import currencies from './query/currencies.ts'
import currency from './query/currency.ts'
import currentClub from './query/currentClub.ts'
import currentHost from './query/currentHost.ts'
import depositCashback from './query/depositCashback.ts'
import depositCashbacks from './query/depositCashbacks.ts'
import discount from './query/discount.ts'
import discounts from './query/discounts.ts'
import emailExists from './query/emailExists.ts'
import eventList from './query/eventList.ts'
import events from './query/events.ts'
import exportGoods from './query/exportGoods.ts'
import exportUsers from './query/exportUsers.ts'
import featureFlags from './query/featureFlags.ts'
import finishedWorkShifts from './query/finishedWorkShifts.ts'
import freeHosts from './query/freeHosts.ts'
import gameAccount from './query/gameAccount.ts'
import gameAccountGroup from './query/gameAccountGroup.ts'
import gameAccountGroups from './query/gameAccountGroups.ts'
import gameAccounts from './query/gameAccounts.ts'
import getActiveClientList from './query/getActiveClientList.ts'
import getAgeRatings from './query/getAgeRatings.ts'
import getBeneficiaries from './query/getBeneficiaries.ts'
import getBeneficiaryMovementsOfFunds from './query/getBeneficiaryMovementsOfFunds.ts'
import getBeneficiaryMovementsOfFundsCsv from './query/getBeneficiaryMovementsOfFundsCsv.ts'
import getBonusHistory from './query/getBonusHistory.ts'
import getBooking from './query/getBooking.ts'
import getBookings from './query/getBookings.ts'
import getClientDepositAccounts from './query/getClientDepositAccounts.ts'
import getClientDepositTransfers from './query/getClientDepositTransfers.ts'
import getClubOptions from './query/getClubOptions.ts'
import getCurrentBeneficiary from './query/getCurrentBeneficiary.ts'
import getCurrentTariff from './query/getCurrentTariff.ts'
import getDepositHistory from './query/getDepositHistory.ts'
import getDetailedWorkShiftMoneyData from './query/getDetailedWorkShiftMoneyData.ts'
import getOrganizationPaymentCard from './query/getOrganizationPaymentCard.ts'
import getOrganizationPaymentCards from './query/getOrganizationPaymentCards.ts'
import getPaymentsByClientId from './query/getPaymentsByClientId.ts'
import getSumForWithdrawToCheckingAccount from './query/getSumForWithdrawToCheckingAccount.ts'
import getUpcomingAutoPaymentData from './query/getUpcomingAutoPaymentData.ts'
import getWorkShiftPaymentOverviewData from './query/getWorkShiftPaymentOverviewData.ts'
import good from './query/good.ts'
import goods from './query/goods.ts'
import host from './query/host.ts'
import hostAccessToken from './query/hostAccessToken.ts'
import hostGroup from './query/hostGroup.ts'
import hostGroupTitles from './query/hostGroupTitles.ts'
import hostGroups from './query/hostGroups.ts'
import hostGroupsOverview from './query/hostGroupsOverview.ts'
import hostType from './query/hostType.ts'
import hostTypes from './query/hostTypes.ts'
import hosts from './query/hosts.ts'
import hostsByIds from './query/hostsByIds.ts'
import hostsOccupationReport from './query/hostsOccupationReport.ts'
import hostsOverview from './query/hostsOverview.ts'
import income from './query/income.ts'
import leaderboard from './query/leaderboard.ts'
import licenseModule from './query/licenseModule.ts'
import licenseModuleCategory from './query/licenseModuleCategory.ts'
import licensePayments from './query/licensePayments.ts'
import licensePrice from './query/licensePrice.ts'
import licenseTariff from './query/licenseTariff.ts'
import licenseTariffGrid from './query/licenseTariffGrid.ts'
import licenseTariffs from './query/licenseTariffs.ts'
import loginExists from './query/loginExists.ts'
import magicPeriods from './query/magicPeriods.ts'
import magicSuperInit from './query/magicSuperInit.ts'
import me from './query/me.ts'
import myClub from './query/myClub.ts'
import myClubs from './query/myClubs.ts'
import myLastVisitedClub from './query/myLastVisitedClub.ts'
import news from './query/news.ts'
import nicknameExists from './query/nicknameExists.ts'
import now from './query/now.ts'
import organizationClubs from './query/organizationClubs.ts'
import organizationMe from './query/organizationMe.ts'
import pausableClientSessions from './query/pausableClientSessions.ts'
import paymentTransaction from './query/paymentTransaction.ts'
import paymentTransactions from './query/paymentTransactions.ts'
import permissions from './query/permissions.ts'
import phoneExists from './query/phoneExists.ts'
import promoCode from './query/promoCode.ts'
import promoCodes from './query/promoCodes.ts'
import publicKey from './query/publicKey.ts'
import regions from './query/regions.ts'
import report from './query/report.ts'
import roles from './query/roles.ts'
import salesReport from './query/salesReport.ts'
import searchByEan from './query/searchByEan.ts'
import searchClients from './query/searchClients.ts'
import searchClubs from './query/searchClubs.ts'
import service from './query/service.ts'
import services from './query/services.ts'
import sessionsMoneyReport from './query/sessionsMoneyReport.ts'
import settingValues from './query/settingValues.ts'
import shellSettingList from './query/shellSettingList.ts'
import shellSettingValues from './query/shellSettingValues.ts'
import shortcut from './query/shortcut.ts'
import shortcutGroup from './query/shortcutGroup.ts'
import shortcutGroups from './query/shortcutGroups.ts'
import shortcuts from './query/shortcuts.ts'
import tariffGrid from './query/tariffGrid.ts'
import tariffs from './query/tariffs.ts'
import tasks from './query/tasks.ts'
import uniqueUsersReport from './query/uniqueUsersReport.ts'
import updateLicensePayment from './query/updateLicensePayment.ts'
import user from './query/user.ts'
import userClubs from './query/userClubs.ts'
import userGroup from './query/userGroup.ts'
import userGroups from './query/userGroups.ts'
import userImportStatus from './query/userImportStatus.ts'
import validatePayment from './query/validatePayment.ts'
import validatePromoCode from './query/validatePromoCode.ts'
import versions from './query/versions.ts'
import workShift from './query/workShift.ts'
import workShiftSummary from './query/workShiftSummary.ts'
import workShifts from './query/workShifts.ts'
import workShiftsReport from './query/workShiftsReport.ts'
import workShiftsSummaryReport from './query/workShiftsSummaryReport.ts'
import workers from './query/workers.ts'


export const query = {
    achievements,
    activeWorkShift,
    additionalLicensePrice,
    applicationsReport,
    bonusHistoryReport,
    bonusReport,
    boughtTariffsReport,
    canFinishWorkShift,
    canStartWorkShift,
    canUnpauseClientSession,
    canUseDebt,
    cashBoxLicenseToken,
    categories,
    category,
    clientBookingCheckPenalty,
    clientBookings,
    clientEmailExists,
    clientHostGroups,
    clientHosts,
    clientMe,
    clientPhoneExists,
    clientSession,
    clientSessions,
    clientTariffGrid,
    clients,
    clientsPaymentReport,
    club,
    clubComments,
    clubOrganization,
    clubs,
    combo,
    comboList,
    combos,
    comments,
    companyPermissions,
    contractors,
    currencies,
    currency,
    currentClub,
    currentHost,
    depositCashback,
    depositCashbacks,
    discount,
    discounts,
    emailExists,
    eventList,
    events,
    exportGoods,
    exportUsers,
    featureFlags,
    finishedWorkShifts,
    freeHosts,
    gameAccount,
    gameAccountGroup,
    gameAccountGroups,
    gameAccounts,
    getActiveClientList,
    getAgeRatings,
    getBeneficiaries,
    getBeneficiaryMovementsOfFunds,
    getBeneficiaryMovementsOfFundsCsv,
    getBonusHistory,
    getBooking,
    getBookings,
    getClientDepositAccounts,
    getClientDepositTransfers,
    getClubOptions,
    getCurrentBeneficiary,
    getCurrentTariff,
    getDepositHistory,
    getDetailedWorkShiftMoneyData,
    getOrganizationPaymentCard,
    getOrganizationPaymentCards,
    getPaymentsByClientId,
    getSumForWithdrawToCheckingAccount,
    getUpcomingAutoPaymentData,
    getWorkShiftPaymentOverviewData,
    good,
    goods,
    host,
    hostAccessToken,
    hostGroup,
    hostGroupTitles,
    hostGroups,
    hostGroupsOverview,
    hostType,
    hostTypes,
    hosts,
    hostsByIds,
    hostsOccupationReport,
    hostsOverview,
    income,
    leaderboard,
    licenseModule,
    licenseModuleCategory,
    licensePayments,
    licensePrice,
    licenseTariff,
    licenseTariffGrid,
    licenseTariffs,
    loginExists,
    magicPeriods,
    magicSuperInit,
    me,
    myClub,
    myClubs,
    myLastVisitedClub,
    news,
    nicknameExists,
    now,
    organizationClubs,
    organizationMe,
    pausableClientSessions,
    paymentTransaction,
    paymentTransactions,
    permissions,
    phoneExists,
    promoCode,
    promoCodes,
    publicKey,
    regions,
    report,
    roles,
    salesReport,
    searchByEan,
    searchClients,
    searchClubs,
    service,
    services,
    sessionsMoneyReport,
    settingValues,
    shellSettingList,
    shellSettingValues,
    shortcut,
    shortcutGroup,
    shortcutGroups,
    shortcuts,
    tariffGrid,
    tariffs,
    tasks,
    uniqueUsersReport,
    updateLicensePayment,
    user,
    userClubs,
    userGroup,
    userGroups,
    userImportStatus,
    validatePayment,
    validatePromoCode,
    versions,
    workShift,
    workShiftSummary,
    workShifts,
    workShiftsReport,
    workShiftsSummaryReport,
    workers,
}


import activateTrial from './mutation/activateTrial.ts'
import adminCallDone from './mutation/adminCallDone.ts'
import applyNewHostDevices from './mutation/applyNewHostDevices.ts'
import banClient from './mutation/banClient.ts'
import callAdmin from './mutation/callAdmin.ts'
import changeClientSessionHost from './mutation/changeClientSessionHost.ts'
import changeGoodsQuantity from './mutation/changeGoodsQuantity.ts'
import changeUsersGroup from './mutation/changeUsersGroup.ts'
import clientBookingCancel from './mutation/clientBookingCancel.ts'
import clientBuyPremium from './mutation/clientBuyPremium.ts'
import clientLogin from './mutation/clientLogin.ts'
import clientRefreshToken from './mutation/clientRefreshToken.ts'
import clientRegister from './mutation/clientRegister.ts'
import clientResetPassword from './mutation/clientResetPassword.ts'
import clientUpdateMe from './mutation/clientUpdateMe.ts'
import clientUpdatePassword from './mutation/clientUpdatePassword.ts'
import connectPaymentService from './mutation/connectPaymentService.ts'
import createAchievement from './mutation/createAchievement.ts'
import createAdditionalLicensePayment from './mutation/createAdditionalLicensePayment.ts'
import createBooking from './mutation/createBooking.ts'
import createCashOrder from './mutation/createCashOrder.ts'
import createCategory from './mutation/createCategory.ts'
import createClientBooking from './mutation/createClientBooking.ts'
import createClientClubComment from './mutation/createClientClubComment.ts'
import createClub from './mutation/createClub.ts'
import createClubComment from './mutation/createClubComment.ts'
import createCombo from './mutation/createCombo.ts'
import createCommand from './mutation/createCommand.ts'
import createComment from './mutation/createComment.ts'
import createContractor from './mutation/createContractor.ts'
import createDepositCashback from './mutation/createDepositCashback.ts'
import createDiscount from './mutation/createDiscount.ts'
import createGameAccount from './mutation/createGameAccount.ts'
import createGameAccountGroup from './mutation/createGameAccountGroup.ts'
import createGood from './mutation/createGood.ts'
import createHost from './mutation/createHost.ts'
import createHostGroup from './mutation/createHostGroup.ts'
import createHostType from './mutation/createHostType.ts'
import createLicenseModule from './mutation/createLicenseModule.ts'
import createLicenseModuleCategory from './mutation/createLicenseModuleCategory.ts'
import createLicensePayment from './mutation/createLicensePayment.ts'
import createLicenseTariff from './mutation/createLicenseTariff.ts'
import createPayment from './mutation/createPayment.ts'
import createPaymentTransaction from './mutation/createPaymentTransaction.ts'
import createPromoCode from './mutation/createPromoCode.ts'
import createService from './mutation/createService.ts'
import createShortcut from './mutation/createShortcut.ts'
import createShortcutGroup from './mutation/createShortcutGroup.ts'
import createShortcutGroups from './mutation/createShortcutGroups.ts'
import createTariff from './mutation/createTariff.ts'
import createUserGroup from './mutation/createUserGroup.ts'
import createWorker from './mutation/createWorker.ts'
import createWorkerTask from './mutation/createWorkerTask.ts'
import deleteAchievement from './mutation/deleteAchievement.ts'
import deleteCategory from './mutation/deleteCategory.ts'
import deleteClub from './mutation/deleteClub.ts'
import deleteCombo from './mutation/deleteCombo.ts'
import deleteComment from './mutation/deleteComment.ts'
import deleteContractor from './mutation/deleteContractor.ts'
import deleteDepositCashback from './mutation/deleteDepositCashback.ts'
import deleteDiscount from './mutation/deleteDiscount.ts'
import deleteGameAccount from './mutation/deleteGameAccount.ts'
import deleteGameAccountGroup from './mutation/deleteGameAccountGroup.ts'
import deleteGood from './mutation/deleteGood.ts'
import deleteGoods from './mutation/deleteGoods.ts'
import deleteHost from './mutation/deleteHost.ts'
import deleteHostGroup from './mutation/deleteHostGroup.ts'
import deleteHostType from './mutation/deleteHostType.ts'
import deleteLicenseModule from './mutation/deleteLicenseModule.ts'
import deleteLicenseModuleCategory from './mutation/deleteLicenseModuleCategory.ts'
import deleteLicenseTariff from './mutation/deleteLicenseTariff.ts'
import deleteOrganizationPaymentCard from './mutation/deleteOrganizationPaymentCard.ts'
import deletePromoCode from './mutation/deletePromoCode.ts'
import deleteService from './mutation/deleteService.ts'
import deleteShortcut from './mutation/deleteShortcut.ts'
import deleteShortcutGroup from './mutation/deleteShortcutGroup.ts'
import deleteTariff from './mutation/deleteTariff.ts'
import deleteUserGroup from './mutation/deleteUserGroup.ts'
import deleteWorker from './mutation/deleteWorker.ts'
import deleteWorkerTask from './mutation/deleteWorkerTask.ts'
import disableWorker from './mutation/disableWorker.ts'
import disconnectPaymentService from './mutation/disconnectPaymentService.ts'
import emailRegister from './mutation/emailRegister.ts'
import executeDealAndPayToCheckingAccount from './mutation/executeDealAndPayToCheckingAccount.ts'
import finishClientSession from './mutation/finishClientSession.ts'
import finishHostSession from './mutation/finishHostSession.ts'
import finishWorkShift from './mutation/finishWorkShift.ts'
import forceDeleteUser from './mutation/forceDeleteUser.ts'
import forceFinishWorkShift from './mutation/forceFinishWorkShift.ts'
import freeGameAccount from './mutation/freeGameAccount.ts'
import generateQR from './mutation/generateQR.ts'
import importClub from './mutation/importClub.ts'
import importUsers from './mutation/importUsers.ts'
import importUsersHours from './mutation/importUsersHours.ts'
import login from './mutation/login.ts'
import loginQR from './mutation/loginQR.ts'
import logout from './mutation/logout.ts'
import magicInit from './mutation/magicInit.ts'
import magicRoles from './mutation/magicRoles.ts'
import magicRoles2 from './mutation/magicRoles2.ts'
import organizationConfirmCode from './mutation/organizationConfirmCode.ts'
import organizationLogin from './mutation/organizationLogin.ts'
import organizationLogout from './mutation/organizationLogout.ts'
import organizationRegister from './mutation/organizationRegister.ts'
import organizationResetPassword from './mutation/organizationResetPassword.ts'
import organizationSendConfirmationCode from './mutation/organizationSendConfirmationCode.ts'
import organizationStartResetPassword from './mutation/organizationStartResetPassword.ts'
import organizationUpdate from './mutation/organizationUpdate.ts'
import organizationVerifyConfirmationCode from './mutation/organizationVerifyConfirmationCode.ts'
import penaltyHost from './mutation/penaltyHost.ts'
import pickGameAccount from './mutation/pickGameAccount.ts'
import processPostPayment from './mutation/processPostPayment.ts'
import processStats from './mutation/processStats.ts'
import readAllClubComments from './mutation/readAllClubComments.ts'
import readClubComment from './mutation/readClubComment.ts'
import recalculateAchievements from './mutation/recalculateAchievements.ts'
import refreshToken from './mutation/refreshToken.ts'
import refundPayment from './mutation/refundPayment.ts'
import register from './mutation/register.ts'
import registerHost from './mutation/registerHost.ts'
import relogin from './mutation/relogin.ts'
import resetPassword from './mutation/resetPassword.ts'
import resetUserPassword from './mutation/resetUserPassword.ts'
import sendClientConfirmationCode from './mutation/sendClientConfirmationCode.ts'
import sendClubOnVerification from './mutation/sendClubOnVerification.ts'
import sendConfirmationCode from './mutation/sendConfirmationCode.ts'
import sendConfirmationCodeToEnter from './mutation/sendConfirmationCodeToEnter.ts'
import sendExtendConfirmationCode from './mutation/sendExtendConfirmationCode.ts'
import sendWakePacket from './mutation/sendWakePacket.ts'
import setBonus from './mutation/setBonus.ts'
import setBookingStatus from './mutation/setBookingStatus.ts'
import setCloudPaymentsAccountToCompany from './mutation/setCloudPaymentsAccountToCompany.ts'
import setClubAutoPayCardId from './mutation/setClubAutoPayCardId.ts'
import setClubAutoPayStatus from './mutation/setClubAutoPayStatus.ts'
import setClubDepositTransferStatus from './mutation/setClubDepositTransferStatus.ts'
import setDeposit from './mutation/setDeposit.ts'
import setHostServiceMode from './mutation/setHostServiceMode.ts'
import setMultipleSettingValues from './mutation/setMultipleSettingValues.ts'
import setSetting from './mutation/setSetting.ts'
import setSettingValue from './mutation/setSettingValue.ts'
import setSettings from './mutation/setSettings.ts'
import setShellMode from './mutation/setShellMode.ts'
import setTelegramChannel from './mutation/setTelegramChannel.ts'
import setUserDiscount from './mutation/setUserDiscount.ts'
import setWorkerTaskComplete from './mutation/setWorkerTaskComplete.ts'
import shortcutClicked from './mutation/shortcutClicked.ts'
import startClientSession from './mutation/startClientSession.ts'
import startHostSession from './mutation/startHostSession.ts'
import startWorkShift from './mutation/startWorkShift.ts'
import stopClientSession from './mutation/stopClientSession.ts'
import transferDeposit from './mutation/transferDeposit.ts'
import unpauseClientSession from './mutation/unpauseClientSession.ts'
import updateBooking from './mutation/updateBooking.ts'
import updateCategory from './mutation/updateCategory.ts'
import updateClub from './mutation/updateClub.ts'
import updateCombo from './mutation/updateCombo.ts'
import updateCompanyPermissions from './mutation/updateCompanyPermissions.ts'
import updateContractor from './mutation/updateContractor.ts'
import updateDepositCashback from './mutation/updateDepositCashback.ts'
import updateDiscount from './mutation/updateDiscount.ts'
import updateGameAccount from './mutation/updateGameAccount.ts'
import updateGameAccountGroup from './mutation/updateGameAccountGroup.ts'
import updateGood from './mutation/updateGood.ts'
import updateGoods from './mutation/updateGoods.ts'
import updateHost from './mutation/updateHost.ts'
import updateHostCommandStatus from './mutation/updateHostCommandStatus.ts'
import updateHostGroup from './mutation/updateHostGroup.ts'
import updateHostIpAddress from './mutation/updateHostIpAddress.ts'
import updateHostState from './mutation/updateHostState.ts'
import updateHostType from './mutation/updateHostType.ts'
import updateLicenseModule from './mutation/updateLicenseModule.ts'
import updateLicenseModuleCategory from './mutation/updateLicenseModuleCategory.ts'
import updateLicenseTariff from './mutation/updateLicenseTariff.ts'
import updateMe from './mutation/updateMe.ts'
import updateNewsConsent from './mutation/updateNewsConsent.ts'
import updatePassword from './mutation/updatePassword.ts'
import updatePromoCode from './mutation/updatePromoCode.ts'
import updateService from './mutation/updateService.ts'
import updateShortcut from './mutation/updateShortcut.ts'
import updateShortcutGroup from './mutation/updateShortcutGroup.ts'
import updateShortcutGroupSort from './mutation/updateShortcutGroupSort.ts'
import updateShortcutSort from './mutation/updateShortcutSort.ts'
import updateTariff from './mutation/updateTariff.ts'
import updateTariffSort from './mutation/updateTariffSort.ts'
import updateUserGroup from './mutation/updateUserGroup.ts'
import updateWorker from './mutation/updateWorker.ts'
import updateWorkerTask from './mutation/updateWorkerTask.ts'
import uploadShortcutImage from './mutation/uploadShortcutImage.ts'
import uploadUserTable from './mutation/uploadUserTable.ts'
import useDebt from './mutation/useDebt.ts'
import validateQR from './mutation/validateQR.ts'
import verifyClient from './mutation/verifyClient.ts'
import verifyMe from './mutation/verifyMe.ts'
import verifyUser from './mutation/verifyUser.ts'


export const mutation = {
    activateTrial,
    adminCallDone,
    applyNewHostDevices,
    banClient,
    callAdmin,
    changeClientSessionHost,
    changeGoodsQuantity,
    changeUsersGroup,
    clientBookingCancel,
    clientBuyPremium,
    clientLogin,
    clientRefreshToken,
    clientRegister,
    clientResetPassword,
    clientUpdateMe,
    clientUpdatePassword,
    connectPaymentService,
    createAchievement,
    createAdditionalLicensePayment,
    createBooking,
    createCashOrder,
    createCategory,
    createClientBooking,
    createClientClubComment,
    createClub,
    createClubComment,
    createCombo,
    createCommand,
    createComment,
    createContractor,
    createDepositCashback,
    createDiscount,
    createGameAccount,
    createGameAccountGroup,
    createGood,
    createHost,
    createHostGroup,
    createHostType,
    createLicenseModule,
    createLicenseModuleCategory,
    createLicensePayment,
    createLicenseTariff,
    createPayment,
    createPaymentTransaction,
    createPromoCode,
    createService,
    createShortcut,
    createShortcutGroup,
    createShortcutGroups,
    createTariff,
    createUserGroup,
    createWorker,
    createWorkerTask,
    deleteAchievement,
    deleteCategory,
    deleteClub,
    deleteCombo,
    deleteComment,
    deleteContractor,
    deleteDepositCashback,
    deleteDiscount,
    deleteGameAccount,
    deleteGameAccountGroup,
    deleteGood,
    deleteGoods,
    deleteHost,
    deleteHostGroup,
    deleteHostType,
    deleteLicenseModule,
    deleteLicenseModuleCategory,
    deleteLicenseTariff,
    deleteOrganizationPaymentCard,
    deletePromoCode,
    deleteService,
    deleteShortcut,
    deleteShortcutGroup,
    deleteTariff,
    deleteUserGroup,
    deleteWorker,
    deleteWorkerTask,
    disableWorker,
    disconnectPaymentService,
    emailRegister,
    executeDealAndPayToCheckingAccount,
    finishClientSession,
    finishHostSession,
    finishWorkShift,
    forceDeleteUser,
    forceFinishWorkShift,
    freeGameAccount,
    generateQR,
    importClub,
    importUsers,
    importUsersHours,
    login,
    loginQR,
    logout,
    magicInit,
    magicRoles,
    magicRoles2,
    organizationConfirmCode,
    organizationLogin,
    organizationLogout,
    organizationRegister,
    organizationResetPassword,
    organizationSendConfirmationCode,
    organizationStartResetPassword,
    organizationUpdate,
    organizationVerifyConfirmationCode,
    penaltyHost,
    pickGameAccount,
    processPostPayment,
    processStats,
    readAllClubComments,
    readClubComment,
    recalculateAchievements,
    refreshToken,
    refundPayment,
    register,
    registerHost,
    relogin,
    resetPassword,
    resetUserPassword,
    sendClientConfirmationCode,
    sendClubOnVerification,
    sendConfirmationCode,
    sendConfirmationCodeToEnter,
    sendExtendConfirmationCode,
    sendWakePacket,
    setBonus,
    setBookingStatus,
    setCloudPaymentsAccountToCompany,
    setClubAutoPayCardId,
    setClubAutoPayStatus,
    setClubDepositTransferStatus,
    setDeposit,
    setHostServiceMode,
    setMultipleSettingValues,
    setSetting,
    setSettingValue,
    setSettings,
    setShellMode,
    setTelegramChannel,
    setUserDiscount,
    setWorkerTaskComplete,
    shortcutClicked,
    startClientSession,
    startHostSession,
    startWorkShift,
    stopClientSession,
    transferDeposit,
    unpauseClientSession,
    updateBooking,
    updateCategory,
    updateClub,
    updateCombo,
    updateCompanyPermissions,
    updateContractor,
    updateDepositCashback,
    updateDiscount,
    updateGameAccount,
    updateGameAccountGroup,
    updateGood,
    updateGoods,
    updateHost,
    updateHostCommandStatus,
    updateHostGroup,
    updateHostIpAddress,
    updateHostState,
    updateHostType,
    updateLicenseModule,
    updateLicenseModuleCategory,
    updateLicenseTariff,
    updateMe,
    updateNewsConsent,
    updatePassword,
    updatePromoCode,
    updateService,
    updateShortcut,
    updateShortcutGroup,
    updateShortcutGroupSort,
    updateShortcutSort,
    updateTariff,
    updateTariffSort,
    updateUserGroup,
    updateWorker,
    updateWorkerTask,
    uploadShortcutImage,
    uploadUserTable,
    useDebt,
    validateQR,
    verifyClient,
    verifyMe,
    verifyUser,
}

