import axios from 'axios'
import { SendNewsletterDTO } from 'services'

export default async function handler(req, res) {
  const body = req.body as SendNewsletterDTO

  console.log({ body })

  const dataReq = {
    conversion_url: 'http://localhost:3006/',
    conversion_domain: 'localhost:3002',
    conversion_identifier: 'newsletter-infografico-sustentabilidade',
    internal_source: '6',
    name: body.name,
    email: body.email,
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
