'use client'

import Link from 'next/link'
import {
  Box,
  Button,
  InputGroup,
  InputPassword,
  InputText,
  Text,
  SelectCountryDDI
} from '../../../shared/components/elements'
import { PublicLayoutHeader } from '../../../shared/components/layouts/PublicLayout/Header'
import { FormEvent, useState } from 'react'
import { signInServices } from '../services'
import { useDispatch } from 'react-redux'

export default function PageRegister() {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPasswordConfirmation] = useState('')
  const [ddi, setDDI] = useState({ name: 'Brasil', code: 'BR', ddi: '55' })
  const [phone, setPhone] = useState('')

  const dispatch = useDispatch()

  const handleRegister = (e: FormEvent) => {
    e.preventDefault()

    setLoading(true)

    console.log({
      name,
      email,
      password,
      password_confirmation,
      ddi,
      phone
    })

    /*  signInServices
      .login({ email, password })
      .then(({ data }) => {
        // dispatch(authenticateUser(data))
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      }) */
  }

  return (
    <>
      <PublicLayoutHeader
        linkTo="/"
        desktopText="Já tem conta?"
        desktopLinkText="Acessar agora"
        mobileLinkText="Entrar"
      />

      <Text className="text-white font-extrabold text-2xl md:text-3xl lg:text-5xl mb-8">
        Crie a sua conta e ganhe 5 consultas grátis
      </Text>
      <form onSubmit={handleRegister}>
        <Box className="mb-8">
          <InputGroup label="Nome">
            <InputText
              value={name}
              placeholder="Insira seu nome"
              onChange={setName}
            />
          </InputGroup>
        </Box>
        <Box className="mb-8">
          <InputGroup label="E-mail">
            <InputText
              value={email}
              placeholder="Insira seu e-mail"
              onChange={setEmail}
            />
          </InputGroup>
        </Box>

        <Box className="flex mb-8">
          <Box className="w-28 md:w-36">
            <InputGroup label="País (DDI)">
              <SelectCountryDDI onSelect={setDDI} selected={ddi} />
            </InputGroup>
          </Box>
          <Box className="flex-auto pl-5">
            <InputGroup label="DDD + Celular">
              <InputText
                value={phone}
                placeholder="Insira seu nº de celular"
                onChange={setPhone}
              />
            </InputGroup>
          </Box>
        </Box>

        <Box className="mb-8">
          <InputGroup label="Senha (mín. 8 caracteres)">
            <InputPassword
              value={password}
              onChange={setPassword}
              placeholder="Defina sua senha de acesso"
            />
          </InputGroup>
        </Box>

        <Box className="mb-14">
          <InputGroup label="Confirme sua senha">
            <InputPassword
              value={password_confirmation}
              placeholder="Confirme sua senha"
              onChange={setPasswordConfirmation}
            />
          </InputGroup>
        </Box>

        <Box className="mt-1">
          <Button
            text="Criar minha conta"
            type="submit"
            color="primary"
            size="large"
          />
        </Box>

        <Box className="mt-6">
          <Text className="text-custom-gray-300 text-sm text-center">
            Ao se cadastrar, você concorda com os{' '}
            <Link href="/" className="underline">
              Termos
            </Link>{' '}
            e as{' '}
            <Link href="/" className="underline">
              Política de Privacidade
            </Link>
            .
          </Text>
        </Box>
      </form>
    </>
  )
}
