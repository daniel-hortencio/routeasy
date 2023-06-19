import * as yup from 'yup'

export const ContactFormSchemaValidation = yup.object().shape({
  name: yup.string().min(1, 'Obrigatório'),
  email: yup
    .string()
    .required('Obrigatório')
    .email('Insira um e-mail com formato válido')
    .test('is-corporate-email', 'Deve ser um e-mail corporativo', email => {
      if (!email) return true // O valor está vazio, a validação é ignorada

      const [_, e_mail_domain] = email.split('@')

      const not_corporative_email_domains = [
        'gmail.com',
        'yahoo.com',
        'outlook.com',
        'hotmail.com',
        'icloud.com',
        'aol.com',
        'mail.com',
        'protonmail.com',
        'zoho.com',
        'yandex.com',
        'gmx.com',
        'outlook.com.br',
        'live.com',
        'rediffmail.com',
        'mail.ru'
      ]
      if (not_corporative_email_domains.includes(e_mail_domain)) return false // Não é um e-mail corporativo válido

      return true // Não é um e-mail corporativo válido
    }),
  personal_phone: yup
    .string()
    .required('Obrigatório')
    .min(15, 'Mínimo 9 dígitos'),
  company_name: yup.string().required('Obrigatório'),
  cf_quantidade_de_veiculos_proprios_e_ou_terceirizados: yup
    .string()
    .required('Obrigatório')
})
