import { createSlice } from '@reduxjs/toolkit'
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
        expires_in: null, // Remover
        refresh_token,
        scope,
        token_type
      })

      return {
        ...payload
      }
    },
    getUserByCookies: () => {
      const { access_token, refresh_token, scope_token, token_type } =
        useCookies(null).getUserAuth()

      if (access_token) {
        return {
          access_token
        }
      }
    }
  }
})
