'use client'

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
          <InputGroup label="Email">
            <InputText placeholder="Insira seu e-mail" />
          </InputGroup>
        </Box>

        <Box className="flex mb-8">
          <InputGroup label="País (DDI)">
            <SelectCountryDDI />
          </InputGroup>
          <Box className="flex-auto pl-5">
            <InputGroup label="DDD + Celular">
              <InputText placeholder="Insira seu nº de celular" />
            </InputGroup>
          </Box>
        </Box>

        <Box className="mb-8">
          <InputGroup label="Senha" linkText="Esqueceu sua senha?" linkTo="/">
            <InputPassword placeholder="Insira sua senha de acesso" />
          </InputGroup>
        </Box>

        {/*         <Box className="flex items-center mb-6">
          <Box className="border-b-2 h-1 border-dotted border-custom-gray-300 flex-auto" />
          <Text className="flex-1 text-center text-custom-gray-300">
            para a sua segurança
          </Text>
          <Box className="border-b-2 h-1 border-dotted border-custom-gray-300 flex-auto" />
        </Box>

        <Box className="mb-8">
          <p className="bg-white">Recaptcha</p>
        </Box> */}

        <Button
          text="Criar minha conta"
          onClick={() => {}}
          color="primary"
          size="large"
        />
      </form>
    </>
  )
}
