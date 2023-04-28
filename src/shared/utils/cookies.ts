import { IAuthLoginResponse } from 'modules/SignIn/types'
import { NextApiResponse, NextPageContext } from 'next'
import nookies, { destroyCookie, parseCookies, setCookie } from 'nookies'

const cookies_names = {
  access_token: '@judit.io.access_token',
  refresh_token: '@judit.io.refresh_token',
  scope: '@judit.io.scope',
  token_type: '@judit.io.token_type'
}

export function useCookies(ctx?: any | null) {
  return {
    // Getters
    getAccessToken: () => {
      return parseCookies(ctx)[cookies_names.access_token]
    },
    getRefreshToken: () => {
      return parseCookies(ctx)[cookies_names.refresh_token]
    },
    getScope: () => {
      return parseCookies(ctx)[cookies_names.scope]
    },
    getTokenType: () => {
      return parseCookies(ctx)[cookies_names.token_type]
    },
    getUserAuth: () => ({
      access_token: this.getAccessToken(),
      refresh_token: this.getRefreshToken(),
      scope_token: this.getScope(),
      token_type: this.getTokenType()
    }),

    // Setters
    setAccessToken: (access_token: string, expires_in: number) => {
      setCookie(ctx, cookies_names.access_token, access_token, {
        maxAge: expires_in,
        path: '/'
      })
    },
    setRefreshToken: (refresh_token: string) => {
      setCookie(ctx, cookies_names.refresh_token, refresh_token, {
        path: '/'
      })
    },
    setScope: (scope: string) => {
      setCookie(ctx, cookies_names.scope, scope, {
        path: '/'
      })
    },
    setTokenType: (token_type: string) => {
      setCookie(ctx, cookies_names.token_type, token_type, {
        path: '/'
      })
    },
    saveUserAuth: (auth: IAuthLoginResponse) => {
      const { access_token, expires_in, refresh_token, scope, token_type } =
        auth

      useCookies(ctx).setAccessToken(access_token, expires_in)
      useCookies(ctx).setRefreshToken(refresh_token)
      useCookies(ctx).setScope(scope)
      useCookies(ctx).setTokenType(token_type)
    }
  }
}
