import axios from 'axios'

export type IConversionIdentifier = 'lp-roteirizador-teste'

export interface SendContactDTO {
  name: string
  personal_phone: string
  email: string
  company_name: string
  cf_quantidade_de_veiculos_proprios_e_ou_terceirizados: string
}

export const services = {
  sendContact: (
    data: SendContactDTO,
    conversion_identifier: IConversionIdentifier
  ) => axios.post('/api/send-contact', { ...data, conversion_identifier })
}
