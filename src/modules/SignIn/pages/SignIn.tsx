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
        <Box className="mb-14">
          <InputGroup label="Senha" linkText="Esqueceu sua senha?" linkTo="/">
            <InputPassword placeholder="Insira sua senha de acesso" />
          </InputGroup>
        </Box>

        <Box className="mt-1">
          <Button
            text="Acessar minha conta"
            onClick={() => {}}
            color="primary"
            size="large"
          />
        </Box>
      </form>
    </>
  )
}
