import { configureStore, createSlice } from '@reduxjs/toolkit'
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import { api } from '../api'
import { IAuthLoginResponse } from 'modules/SignIn/types'
import { useCookies } from 'shared/utils/cookies'

export const userSlice = createSlice({
  name: 'user',
  initialState: null as any | null,
  reducers: {
    authenticateUser: (state, { payload }: { payload: IAuthLoginResponse }) => {
      const { access_token, expires_in, refresh_token, scope, token_type } =
        payload

      useCookies(null).saveUserAuth({
        access_token,
        expires_in,
        refresh_token,
        scope,
        token_type
      })

      /* setCookie(null, 'FinancesWeb.token', payload.token, {
        path: '/',
        expires: new Date(payload.refresh_token.expires_in * 1000)
      })
      setCookie(
        null,
        'FinancesWeb.refresh_token',
        JSON.stringify({
          id_refresh_token: payload.refresh_token.id_refresh_token,
          expires_in: payload.refresh_token.expires_in * 1000
        }),
        {
          path: '/',
          expires: new Date(payload.refresh_token.expires_in * 1000)
        }
      )
      setCookie(
        null,
        'FinancesWeb.userInfos',
        JSON.stringify({
          id_user,
          name,
          email
        }),
        {
          path: '/',
          expires: new Date(payload.refresh_token.expires_in * 1000)
        }
      )

      setCookie(
        null,
        'FinancesWeb.userPreferences',
        JSON.stringify({
          language,
          preferred_currency
        }),
        {
          path: '/',
          expires: new Date(payload.refresh_token.expires_in * 1000)
        }
      )

      api.defaults.headers.common.auth = `Bearer ${payload.token.id_token}` */

      return {
        ...payload
      }
    }
    /*     logoutUser: () => {
      cookies.destroyAll()

      return null
    },
    setUserPreferences: (state, { payload }) => {
      const { language, preferred_currency } =
        payload as UpdateUserPreferencesDTO

      const {
        refresh_token: { expires_in }
      } = cookies.getAll()

      setCookie(
        null,
        'FinancesWeb.userPreferences',
        JSON.stringify({
          language,
          preferred_currency
        }),
        {
          path: '/',
          expires: new Date(expires_in)
        }
      )

      return {
        ...(state as User),
        language,
        preferred_currency
      }
    },
    setUserInfoData: (state, { payload }) => {
      const { name } = payload as User

      const {
        refresh_token: { expires_in }
      } = cookies.getAll()

      setCookie(
        null,
        'FinancesWeb.userInfos',
        JSON.stringify({
          id_user: state?.id_user,
          name,
          email: state?.email
        }),
        {
          path: '/',
          expires: new Date(expires_in)
        }
      )

      return {
        ...(state as User),
        name
      }
    },
    recoverUserByCookies: () => {
      const { token, user_infos, user_preferences } = cookies.getAll()

      if (token) {
        api.defaults.headers.common.auth = `Bearer ${token}`
      }

      if (user_infos && user_preferences) {
        return {
          ...user_infos,
          ...user_preferences
        }
      }
    } */
  }
})

export const store = configureStore({
  reducer: {
    user: userSlice.reducer
  }
})

export const useAuthenticateUser = (state: { user: any | null }) => {
  return state
}

export const { authenticateUser } = userSlice.actions

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
