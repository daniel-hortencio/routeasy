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

const init_data = {
  name: '',
  phone: '',
  email: '',
  segment: '',
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
      name: yup
        .string()
        .required('Nome obrigatório')
        .min(1, 'Nome obrigatório'),
      email: yup
        .string()
        .required('Email obrigatório')
        .email('Insira um e-mail com formato válido'),
      phone: yup
        .string()
        .required('Telefone obrigatório')
        .min(9, 'Deve conter pelo menos 9 dígitos')
    })

    yupValidator({
      schema: contactFormSchema,
      data,
      setError: handleSetError,
      onSuccess: () => console.log('Deu certo')
    })
  }

  const handleChange = (param: keyof typeof data, value: string) => {
    setData({ ...data, [param]: value })
    setErrors({ ...errors, [param]: '' })
  }

  return (
    <Section className="mb-20">
      <form
        onSubmit={handleSubmit}
        className="bg-grayscale-600 px-4 pt-20 pb-12 rounded-lg"
      >
        <Title className="mb-4">
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
              placeholder="Placeholder"
            />
          </InputGroup>
          <InputGroup label="Telefone" error={errors.phone}>
            <InputPhone
              value={data.phone}
              onChange={(value: string) => handleChange('phone', value)}
              placeholder="Placeholder"
            />
          </InputGroup>
          <InputGroup label="Email" error={errors.email}>
            <InputText
              value={data.email}
              onChange={(value: string) => handleChange('email', value)}
              placeholder="Placeholder"
            />
          </InputGroup>
          <InputGroup label="Segmento" error={errors.segment}>
            <InputText
              value={data.segment}
              onChange={(value: string) => handleChange('segment', value)}
              placeholder="Placeholder"
            />
          </InputGroup>
          <InputGroup label="Empresa" error={errors.company}>
            <InputText
              value={data.company}
              onChange={(value: string) => handleChange('company', value)}
              placeholder="Placeholder"
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
              placeholder="Placeholder"
            />
          </InputGroup>
        </div>

        <div className="sm:w-20 sm:mx-auto">
          <ButtonSecondary type="submit">Enviar</ButtonSecondary>
        </div>
      </form>
    </Section>
  )
}
