'use client'

import { FormEvent, useState } from 'react'
import * as yup from 'yup'

import { ButtonSecondary } from 'components/elements/Button'
import {
  InputGroup,
  InputPhone,
  InputText,
  InputSelect
} from 'components/elements/Inputs'
import { Text, TextHighlight, Title } from 'components/elements/Texts'
import { yupValidator } from 'utils/yupValidator'
import axios from 'axios'

const init_data = {
  name: '',
  personal_phone: '',
  email: '',
  company_name: '',
  cf_quantidade_de_veiculos_proprios_e_ou_terceirizados: ''
}

export const ContactForm = () => {
  const [data, setData] = useState(init_data)
  const [errors, setErrors] = useState(init_data)

  const handleSetError = (errors_list: { param: any; value: string }[]) => {
    const errors_dto = { ...errors }
    errors_list.forEach(error => {
      errors_dto[error.param] = error.value
    })

    setErrors(errors_dto)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const contactFormSchema = yup.object().shape({
      name: yup.string().min(1, 'Campo obrigatório'),
      email: yup
        .string()
        .required('Campo obrigatório')
        .email('Insira um e-mail com formato válido'),
      personal_phone: yup
        .string()
        .required('Campo obrigatório')
        .min(15, 'Deve conter pelo menos 9 dígitos'),
      company_name: yup.string().required('Campo obrigatório'),
      cf_quantidade_de_veiculos_proprios_e_ou_terceirizados: yup
        .string()
        .required('Campo obrigatório')
    })

    yupValidator({
      schema: contactFormSchema,
      data,
      setError: handleSetError,
      onSuccess: async () => {
        const response = await axios.post('/api/hello', data)

        console.log('RESPONSE', { response })
      }
    })
  }

  const handleChange = (param: keyof typeof data, value: string) => {
    setData({ ...data, [param]: value })
    setErrors({ ...errors, [param]: '' })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-grayscale-600 px-4 lg:px-24 pt-20 pb-12 rounded-lg"
    >
      <Title className="mb-4 text-3xl text-center">
        Nós entramos em <TextHighlight>contato</TextHighlight> com você!
      </Title>
      <Text className="text-center mb-10">
        Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut
        assumenda voluptates qui beatae quis id Quis cupiditate.{' '}
      </Text>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
        <InputGroup label="Nome" error={errors.name}>
          <InputText
            value={data.name}
            onChange={(value: string) => handleChange('name', value)}
            placeholder="José da Silva"
          />
        </InputGroup>
        <InputGroup label="Telefone" error={errors.personal_phone}>
          <InputPhone
            value={data.personal_phone}
            onChange={(value: string) => handleChange('personal_phone', value)}
            placeholder="(00) 00000-0000"
          />
        </InputGroup>
        <InputGroup
          label="Email"
          error={errors.email}
          className="sm:col-span-2 md:col-span-1"
        >
          <InputText
            value={data.email}
            onChange={(value: string) => handleChange('email', value)}
            placeholder="josedasilva@gmail.com"
          />
        </InputGroup>
        <InputGroup label="Empresa" error={errors.company_name}>
          <InputText
            value={data.company_name}
            onChange={(value: string) => handleChange('company_name', value)}
            placeholder="Routeasy"
          />
        </InputGroup>
        {/* <InputGroup
          label="Quantidade de veículos"
          error={errors.cf_quantidade_de_veiculos_proprios_e_ou_terceirizados}
          className="mb-10"
        >
          <InputText
            value={data.cf_quantidade_de_veiculos_proprios_e_ou_terceirizados}
            onChange={(value: string) =>
              handleChange(
                'cf_quantidade_de_veiculos_proprios_e_ou_terceirizados',
                value
              )
            }
            placeholder="00 a 100"
          />
        </InputGroup> */}
        <InputGroup
          label="Quantidade de veículos"
          error={errors.cf_quantidade_de_veiculos_proprios_e_ou_terceirizados}
          className="mb-10"
        >
          <InputSelect
            value={data.cf_quantidade_de_veiculos_proprios_e_ou_terceirizados}
            options={['5 a 15', '15 a 50', '50 a 100', 'Mais de 100']}
            onChoose={(value: string) =>
              handleChange(
                'cf_quantidade_de_veiculos_proprios_e_ou_terceirizados',
                value
              )
            }
          />
        </InputGroup>
      </div>

      <div className="md:w-[91px] md:mx-auto">
        <ButtonSecondary type="submit">Enviar</ButtonSecondary>
      </div>
    </form>
  )
}
