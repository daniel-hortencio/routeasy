import axios from 'axios'
import { IConversionIdentifier, SendContactDTO } from 'services'

interface IRequestBody extends SendContactDTO {
  conversion_identifier: IConversionIdentifier
}

export default async function handler(req, res) {
  const body = req.body as IRequestBody

  const dataReq = {
    conversion_url: 'http://localhost:3006/',
    conversion_domain: 'localhost:3002',
    company_name: body.company_name,
    conversion_identifier: body.conversion_identifier,
    internal_source: '6',
    name: body.name,
    personal_phone: `+55 ${body.personal_phone}`,
    email: body.email,
    cf_quantidade_de_veiculos_proprios_e_ou_terceirizados:
      body.cf_quantidade_de_veiculos_proprios_e_ou_terceirizados,
    redirect_to:
      'https://lp.routeasy.com.br/agradecimento-roteirizador-aproveite-para-conhecer-mais'
  }

  const config = {
    headers: {
      authority: 'gyruss.rdops.systems',
      authorization: 'PublicToken 8f24fb763a4fe60e5e110624116f9c5e',
      contentType: 'application/json'
    }
  }

  try {
    const response = await axios.post(
      'https://gyruss.rdops.systems/v2/conversions',
      dataReq,
      config
    )
    console.log('RESPONSE DATA: ', response.data)
    return res.status(200).json(response.data)
  } catch (err) {
    console.log('ERRO: ', err)
    return res.status(500).json(err)
  }
}
