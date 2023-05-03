export type IRegisterUserRequestDTO = {
  name: string
  email: string
  password: string
}

export type IAuthLoginRequestDTO = Omit<IRegisterUserRequestDTO, 'name'>

export type IAuthLoginResponse = {
  access_token: string
  expires_in: number
  refresh_token: string
  scope: string
  token_type: string
}
