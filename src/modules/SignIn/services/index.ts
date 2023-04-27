import { AxiosInstance, AxiosResponse } from 'axios'
import { api } from 'shared/api'
import { ICreateLoginDTO, IGetLoginUserToken } from '../types'

class SignInServices {
  private readonly api: AxiosInstance

  constructor(api: AxiosInstance) {
    this.api = api
  }

  login(dto: ICreateLoginDTO): Promise<AxiosResponse<IGetLoginUserToken>> {
    return this.api.post('/login', dto)
  }
}

export const signInServices = new SignInServices(api)
