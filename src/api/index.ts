import now from './query/now.ts'
import clients from './query/clients.ts'
import getBookings from './query/getBookings.ts'
import userClubs from './query/userClubs.ts'


export const query = {
    now,
    clients,
    getBookings,
    userClubs,
}


import login from './mutation/login.ts'
import refreshToken from './mutation/refreshToken.ts'
import relogin from './mutation/relogin.ts'


export const mutation = {
    login,
    refreshToken,
    relogin,
}

