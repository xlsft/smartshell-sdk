import userClubs from './query/userClubs.ts'


export const query = {
    userClubs,
}


import login from './mutation/login.ts'
import relogin from './mutation/relogin.ts'
import refreshToken from './mutation/refreshToken.ts'


export const mutation = {
    login,
    relogin,
    refreshToken,
}

