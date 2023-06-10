'use client'

import { FormEvent, useCallback, useState } from 'react'
import * as yup from 'yup'

import { ButtonSecondary } from 'components/elements/Button'
import {
  InputGroup,
  InputNumber,
  InputPhone,
  InputText
} from 'components/elements/Inputs'
import { Section } from 'components/elements/Section'
import { Text, TextHighlight, Title } from 'components/elements/Texts'
import { yupValidator } from 'utils/yupValidator'
import axios from 'axios'

const init_data = {
  name: '',
  phone: '',
  email: '',
  company: '',
  amountOfVehicles: ''
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
      phone: yup
        .string()
        .required('Campo obrigatório')
        .min(15, 'Deve conter pelo menos 9 dígitos'),
      company: yup.string().required('Campo obrigatório'),
      amountOfVehicles: yup.string().required('Campo obrigatório')
    })

    yupValidator({
      schema: contactFormSchema,
      data,
      setError: handleSetError,
      onSuccess: async () => {
        await axios
          .post('https://api.example.com/endpoint', data, {
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
          })
          .then(success => {
            console.log({ success })
          })
          .catch(error => {
            console.error(error)
          })
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
      className="bg-grayscale-600 px-4 lg:px-20 pt-20 lg:py-16 pb-12 rounded-lg"
    >
      <Title className="mb-4">Contato</Title>
      <Text className="mb-10 text-grayscale-200">
        Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut
        assumenda voluptates qui beatae quis id Quis cupiditate.
      </Text>
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
        <InputGroup label="Nome" error={errors.name}>
          <InputText
            value={data.name}
            onChange={(value: string) => handleChange('name', value)}
            placeholder="José da Silva"
          />
        </InputGroup>
        <InputGroup label="Telefone" error={errors.phone}>
          <InputPhone
            value={data.phone}
            onChange={(value: string) => handleChange('phone', value)}
            placeholder="(00) 00000-0000"
          />
        </InputGroup>
        <InputGroup
          label="Email"
          error={errors.email}
          className="md:col-span-2"
        >
          <InputText
            value={data.email}
            onChange={(value: string) => handleChange('email', value)}
            placeholder="josedasilva@gmail.com"
          />
        </InputGroup>
        <InputGroup label="Empresa" error={errors.company}>
          <InputText
            value={data.company}
            onChange={(value: string) => handleChange('company', value)}
            placeholder="Routeasy"
          />
        </InputGroup>
        <InputGroup
          label="Quantidade de veículos"
          error={errors.amountOfVehicles}
          className="mb-10"
        >
          <InputNumber
            value={data.amountOfVehicles}
            onChange={(value: string) =>
              handleChange('amountOfVehicles', value)
            }
            placeholder="00"
          />
        </InputGroup>
      </div>
      <div className="sm:w-20">
        <ButtonSecondary type="submit">Enviar</ButtonSecondary>
      </div>
    </form>
  )
}
