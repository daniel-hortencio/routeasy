export type ICreateLoginDTO = {
  username: string
  password: string
}

export type IGetLoginUserToken = {
  access_token: string
  expires_in: string
  refresh_token: string
  scope: string
  token_type: string
}
