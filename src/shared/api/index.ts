import axios from 'axios'
import { Environments } from 'shared/constants/environments'
import { ApiResponse } from './types'

export const api = axios.create({
  baseURL: Environments.API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
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
