import axios from 'axios'

export default async function handler(req, res) {
  const { body } = req

  console.log({ body })

  try {
    const response = await axios.post(
      'https://gyruss.rdops.systems/v2/conversions',
      {
        client_tracking_id: '',
        conversion_url: 'http://localhost:3006/',
        conversion_domain: 'localhost:3002',
        company_name: body.company_name,
        conversion_identifier: 'lp-roteirizador-teste',
        internal_source: '6',
        c_utmz: '',
        traffic_source: '',
        _doe: '',
        privacy_data: {
          browser: '',
          consent: '1',
          consent_privacy_policy: '1'
        },
        name: body.name,
        personal_phone: `+55 ${body.personal_phone}`,
        email: body.email,
        cf_quantidade_de_veiculos_proprios_e_ou_terceirizados:
          body.cf_quantidade_de_veiculos_proprios_e_ou_terceirizados,
        emP7yF13ld: '',
        sh0uldN07ch4ng3: 'should_not_change',
        redirect_to:
          'https://lp.routeasy.com.br/agradecimento-roteirizador-aproveite-para-conhecer-mais'
      },
      {
        headers: {
          authority: 'gyruss.rdops.systems',
          accept: '*/*',
          'accept-language': 'es-ES,es;q=0.9,pt;q=0.8,en;q=0.7',
          authorization: 'PublicToken 8f24fb763a4fe60e5e110624116f9c5e',
          'cache-control': 'no-cache',
          'content-type': 'application/json; charset=UTF-8',
          origin: 'http://localhost:3006',
          pragma: 'no-cache',
          referer: 'http://localhost:3006/',
          'sec-ch-ua':
            '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
        }
      }
    )
    console.log({ response })
    return res.status(200).json(response)
  } catch (err) {
    console.log({ err })
    return res.status(500).json(err)
  }
}
