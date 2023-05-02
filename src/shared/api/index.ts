/* eslint-disable prefer-const */
import axios from 'axios'
import { Environments } from 'shared/constants/environments'
import { ApiResponse } from './types'
import { useCookies } from 'shared/utils/cookies'
import { IAuthLoginResponse } from 'modules/SignIn/types'

export const api = axios.create({
  baseURL: Environments.API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

let is_refreshing_token = false
let pending_requests_queue: any = []

const api_public_routes = ['/auth/login']

// Adiciona o interceptor de solicitação ao Axios
/* axios.interceptors.request.use(
  async config => {
    // Verifica se o token expirou
    const { access_token, token_type, refresh_token } =
      useCookies(null).getUserAuth()

    if (
      !access_token &&
      !api_public_routes.some(route => route === config.url)
    ) {
      // Se o token expirou e não estiver atualizando, inicia a atualização do token
      if (!is_refreshing_token) {
        is_refreshing_token = true
        await axios
          .post(
            `${Environments.API_URL}/auth/refresh`,
            {},
            {
              headers: {
                Authorization: `${token_type} ${refresh_token}`
              }
            }
          )
          .then(data => {
            console.log({ data })
            is_refreshing_token = false
            // Executa as solicitações pendentes após atualizar o token
            pending_requests_queue.forEach(callback => callback())
            pending_requests_queue = []
          })
      }

      // Adiciona a solicitação à fila de solicitações pendentes
      return new Promise(resolve => {
        pending_requests_queue.push(() => {
          // Atualiza o cabeçalho Authorization com o novo token
          config.headers.Authorization = `Bearer ${localStorage.getItem(
            'token'
          )}`
          resolve(config)
        })
      })
    }
    // Adiciona o cabeçalho Authorization com o token atual ao objeto de configuração
    config.headers.Authorization = `Bearer ${access_token}`
    return config
  },
  error => {
    return Promise.reject(error)
  }
) */

api.interceptors.request.use(
  async config => {
    const { access_token, token_type, refresh_token } =
      useCookies(null).getUserAuth()

    console.log({ config })

    if (api_public_routes.some(route => route === config.url)) {
      return config
    }

    if (!is_refreshing_token) {
      if (access_token) {
        console.log('Entrou no access_token para setar o header')
        config.headers.Authorization = `${token_type} ${access_token}`

        return config
      } else if (refresh_token) {
        console.log('Entrou no refresh_token para iniciar o fluxo de refresh')
        is_refreshing_token = true

        await fetch(`${Environments.API_URL}/auth/refresh`, {
          method: 'POST',
          headers: {
            Authorization: `${token_type} ${refresh_token}`
          }
        })
          .then(res => res.json())
          .then((new_token: IAuthLoginResponse) => {
            console.log({ new_token })
            console.log('Entrou no sucesso do refresh')
            useCookies().saveUserAuth(new_token)

            console.log({ pending_requests_queue })

            is_refreshing_token = false
            pending_requests_queue.forEach((request: any) =>
              request.onSuccess(new_token.access_token)
            )
            pending_requests_queue = []
          })
          .catch(refresh_token_err => {
            console.log('Entrou no error do refresh')

            is_refreshing_token = false
            pending_requests_queue.forEach((request: any) =>
              request.onFailure(refresh_token_err)
            )
            pending_requests_queue = []
          })
      }
    }

    return new Promise((resolve, reject) => {
      pending_requests_queue.push({
        onSuccess: (new_token: string) => {
          console.log('Entrou no promise onSuccess')
          const new_config = config
          new_config.headers.Authorization = `${token_type} ${new_token}`

          console.log({ new_config, pending_requests_queue })

          return resolve(new_config)
        },
        onFailure: (err: any) => {
          console.log('Entrou no promise onFailure')
          console.log({ err })

          const { status } = err.response
          const { message } = err.response.data

          return reject({
            status,
            message,
            isError: true
          })
        }
      })
    })
  },
  error => {
    return Promise.reject(error)
  }
)

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
