'use client'

import { FormEvent, useState } from 'react'
import * as yup from 'yup'

import { ButtonSecondary } from 'components/elements/Button'
import {
  InputGroup,
  InputNumber,
  InputPhone,
  InputSelect,
  InputText
} from 'components/elements/Inputs'
import { Text, Title } from 'components/elements/Texts'
import { yupValidator } from 'utils/yupValidator'
import axios from 'axios'
import Swal from 'sweetalert2'
import { PulseLoader } from 'react-spinners'

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
  const [isLoading, setIsLoading] = useState(false)

  const handleSetError = (errors_list: { param: any; value: string }[]) => {
    const errors_dto = { ...errors }
    errors_list.forEach(error => {
      errors_dto[error.param] = error.value
    })

    setErrors(errors_dto)
  }

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast'
    },
    timer: 5000,
    timerProgressBar: true,
    didOpen: toast => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
    showCloseButton: true
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const contactFormSchema = yup.object().shape({
      name: yup.string().min(1, 'Obrigatório'),
      email: yup
        .string()
        .required('Obrigatório')
        .email('Insira um e-mail com formato válido'),
      personal_phone: yup
        .string()
        .required('Obrigatório')
        .min(15, 'Mínimo 9 dígitos'),
      company_name: yup.string().required('Obrigatório'),
      cf_quantidade_de_veiculos_proprios_e_ou_terceirizados: yup
        .string()
        .required('Obrigatório')
    })

    yupValidator({
      schema: contactFormSchema,
      data,
      setError: errors => {
        setIsLoading(false)
        handleSetError(errors)
      },
      onSuccess: async () => {
        const response = await axios
          .post('/api/hello', data)
          .then(() => {
            setIsLoading(false)
            Toast.fire({
              icon: 'success',
              title: 'Contato enviado com sucesso!'
            })
          })
          .catch(() => {
            setIsLoading(false)
            Toast.fire({
              icon: 'error',
              title:
                'Falha ao enviar contato! Tente novamente em alguns minutos'
            })
          })

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
        <InputGroup
          label="Quantidade de veículos"
          error={errors.cf_quantidade_de_veiculos_proprios_e_ou_terceirizados}
          className="mb-10"
        >
          <InputSelect
            placeholder="5 a 15"
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
      <div className="sm:w-20">
        <ButtonSecondary type="submit" disabled={isLoading}>
          {isLoading ? <PulseLoader size={10} color="#B0E6D2" /> : 'Enviar'}
        </ButtonSecondary>
      </div>
    </form>
  )
}
