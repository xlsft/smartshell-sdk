
import type { InputType as UserClubsInput } from "./query/userClubs.ts"
import type { ResponseType as UserClubsResponse } from "./query/userClubs.ts"

export type {
    UserClubsInput, UserClubsResponse,
}

import type { InputType as LoginInput } from "./mutation/login.ts"
import type { ResponseType as LoginResponse } from "./mutation/login.ts"


import type { InputType as ReloginInput } from "./mutation/relogin.ts"
import type { ResponseType as ReloginResponse } from "./mutation/relogin.ts"


import type { InputType as RefreshTokenInput } from "./mutation/refreshToken.ts"
import type { ResponseType as RefreshTokenResponse } from "./mutation/refreshToken.ts"

export type {
    LoginInput, LoginResponse,
    ReloginInput, ReloginResponse,
    RefreshTokenInput, RefreshTokenResponse,
}