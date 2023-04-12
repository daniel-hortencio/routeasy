'use client'

import {
  Box,
  Button,
  InputGroup,
  InputPassword,
  InputText,
  Text
} from '../../../shared/components/elements'
import { PublicLayoutHeader } from '../../../shared/components/layouts/PublicLayout/Header'

export default function PageSignIn() {
  return (
    <>
      <PublicLayoutHeader
        linkTo="/sign-up"
        desktopText="Não tem conta?"
        desktopLinkText="Criar agora"
        mobileLinkText="Criar conta"
      />

      <Text className="text-white font-extrabold text-2xl md:text-3xl lg:text-5xl mb-8">
        Olá, seja bem vindo(a) novamente!
      </Text>
      <Text className="text-custom-gray-300 mb-8">
        Você que já tem uma conta, utilize os seus dados para realizar o acesso
        a plataforma da JUDIT:
      </Text>
      <form onSubmit={() => {}}>
        <Box className="mb-8">
          <InputGroup label="Email">
            <InputText placeholder="Insira seu e-mail" />
          </InputGroup>
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
          text="Acessar minha conta"
          onClick={() => {}}
          color="primary"
          size="large"
        />
      </form>
    </>
  )
}
