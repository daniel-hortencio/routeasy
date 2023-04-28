import { configureStore, createSlice } from '@reduxjs/toolkit'
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

      return {
        ...payload
      }
    }
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
