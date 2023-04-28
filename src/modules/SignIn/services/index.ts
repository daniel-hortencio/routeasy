import { AxiosInstance } from 'axios'
import { api } from 'shared/api'
import { IAuthLoginRequestDTO, IAuthLoginResponse } from '../types'
import { ApiResponse } from 'shared/api/types'

class SignInServices {
  private readonly api: AxiosInstance

  constructor(api: AxiosInstance) {
    this.api = api
  }

  async login(
    dto: IAuthLoginRequestDTO
  ): Promise<ApiResponse<IAuthLoginResponse>> {
    return this.api.post('/auth/login', dto)
  }
}

export const signInServices = new SignInServices(api)
