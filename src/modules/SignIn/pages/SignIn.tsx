'use client'

import { FormEvent, useCallback, useState } from 'react'
import {
  Box,
  Button,
  InputGroup,
  InputPassword,
  InputText,
  Text
} from '../../../shared/components/elements'
import { PublicLayoutHeader } from '../../../shared/components/layouts/PublicLayout/Header'
import { ModalForgotPassword } from '../components/ModalForgotPassword'
import { ModalSendEmailRecoverConfirmation } from '../components/ModalSendEmailRecoverConfirmation'
import { useModal } from '../../../shared/contexts/Modal'
import { signInServices } from '../services'

export default function PageSignIn() {
  const { createModal } = useModal()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const createModalSendEmailRecoverConfirmation = useCallback(() => {
    createModal({
      body: <ModalSendEmailRecoverConfirmation />
    })
  }, [])

  const createModalForgotPassword = useCallback(
    () =>
      createModal({
        header: {
          title: 'Esqueceu sua senha?',
          align: 'center',
          subtitle:
            'Não se preocupe, insira o seu e-mail de cadastro e receba o código para redefinir a sua senha de acesso a JUDIT:'
        },
        body: <ModalForgotPassword />,
        footer: (
          <Box className="w-60 mx-auto">
            <Button
              text="Recuperar minha senha"
              color="primary"
              size="large"
              onClick={createModalSendEmailRecoverConfirmation}
            />
          </Box>
        )
      }),
    []
  )

  const handleLogin = (e: FormEvent) => {
    e.preventDefault()

    signInServices
      .login({ username, password })
      .then(res => console.log({ res }))
  }

  return (
    <form onSubmit={handleLogin}>
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

      <Box className="mb-8">
        <InputGroup label="Email">
          <InputText
            placeholder="Insira seu e-mail"
            value={username}
            onChange={setUsername}
          />
        </InputGroup>
      </Box>
      <Box className="mb-14">
        <InputGroup
          label="Senha"
          buttonText="Esqueceu sua senha?"
          buttonOnClick={createModalForgotPassword}
        >
          <InputPassword
            placeholder="Insira sua senha de acesso"
            value={password}
            onChange={setPassword}
          />
        </InputGroup>
      </Box>

      <Box className="mt-1">
        <Button
          text="Acessar minha conta"
          onClick={() => {}}
          color="primary"
          size="large"
          type="submit"
        />
      </Box>
    </form>
  )
}
