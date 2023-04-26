import axios from 'axios'
import { Environments } from 'shared/constants/environments'

export const api = axios.create({
  baseURL: Environments.API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})
