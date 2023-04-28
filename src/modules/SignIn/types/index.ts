export type IAuthLoginRequestDTO = {
  email: string
  password: string
}

export type IAuthLoginResponse = {
  access_token: string
  expires_in: string
  refresh_token: string
  scope: string
  token_type: string
}
