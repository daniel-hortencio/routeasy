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

export default function PageSignUp() {
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
      <form onSubmit={() => {}}>
        <Box className="mb-8">
          <InputGroup label="Nome">
            <InputText placeholder="Insira seu nome" />
          </InputGroup>
        </Box>
        <Box className="mb-8">
          <InputGroup label="E-mail">
            <InputText placeholder="Insira seu e-mail" />
          </InputGroup>
        </Box>

        <Box className="flex mb-8">
          <Box className="w-28 md:w-36">
            <InputGroup label="País (DDI)">
              <SelectCountryDDI />
            </InputGroup>
          </Box>
          <Box className="flex-auto pl-5">
            <InputGroup label="DDD + Celular">
              <InputText placeholder="Insira seu nº de celular" />
            </InputGroup>
          </Box>
        </Box>

        <Box className="mb-14">
          <InputGroup label="Senha (mín. 8 caracteres)">
            <InputPassword placeholder="Defina sua senha de acesso" />
          </InputGroup>
        </Box>

        <Box className="mt-1">
          <Button
            text="Criar minha conta"
            onClick={() => {}}
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
