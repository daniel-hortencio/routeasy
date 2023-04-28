import axios from 'axios'
import { Environments } from 'shared/constants/environments'
import { ApiResponse } from './types'
import { useCookies } from 'shared/utils/cookies'

export const api = axios.create({
  baseURL: Environments.API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.request.use(request => {
  const token = useCookies(null).getAccessToken()

  console.log({ token })
  // Implementar refresh token

  return request
})

api.interceptors.response.use(
  (onSuccess): any => {
    const { data } = onSuccess

    return {
      data
    } as ApiResponse<any>
  },
  onError => {
    console.log({ onError })

    return Promise.reject({
      message: onError.code
    })
  }
)

export const setHeaderAuthorization = ({
  access_token,
  token_type
}: {
  access_token: string
  token_type: string
}) => {
  api.defaults.headers.common.Authorization = `${token_type} ${access_token}`
}
