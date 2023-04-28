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
  const access_token = useCookies(null).getAccessToken()
  const token_type = useCookies(null).getTokenType()

  if (access_token && access_token) {
    request.headers.Authorization = `${token_type} ${access_token}`
  }

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
    return Promise.reject({
      message: onError.code
    })
  }
)
