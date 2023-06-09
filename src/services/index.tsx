class ApiFetch {
  private async fetchMethod(
    endpoint: string,
    method: 'GET' | 'POST',
    config?: RequestInit | undefined
  ): Promise<any> {
    return await fetch(endpoint, {
      method,
      ...config
    })
      .then(res => {
        if (!res.ok) {
          throw new Error()
        }
        return res.json()
      })
      .then(({ data }) => data)
      .catch(err => err)
  }

  private get(endpoint, config?: RequestInit | undefined) {
    return this.fetchMethod(endpoint, 'GET', config)
  }

  private post(endpoint, config?: RequestInit | undefined) {
    return this.fetchMethod(endpoint, 'POST', config)
  }

  async sendContactForm(dto: {
    // client_tracking_id: string
    conversion_url: string
    conversion_domain: string
    company_name: string
    google_analytics_client_id: string
    conversion_identifier: string
    internal_source: string
    privacy_data: {
      // browser: string
      consent: string
      consent_privacy_policy: string
    }
    name: string
    personal_phone: string
    email: string
    cf_quantidade_de_veiculos_proprios_e_ou_terceirizados: string
    // emP7yF13ld: string
    // sh0uldN07ch4ng3: string
    redirect_to: string
  }) {
    return this.post('https://gyruss.rdops.systems/v2/conversions', {
      body: JSON.stringify(dto),
      headers: {
        authorization: 'PublicToken 8f24fb763a4fe60e5e110624116f9c5e',
        authority: 'gyruss.rdops.systems'
      }
    })
  }
}
