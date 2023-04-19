'use client'

import { useState } from 'react'
import {
  Box,
  Button,
  InputGroup,
  InputPassword,
  InputText,
  Text
} from '../../../shared/components/elements'
import { PublicLayoutHeader } from '../../../shared/components/layouts/PublicLayout/Header'
import Modal from '../../../shared/components/elements/Modal'
import { ModalForgotPassword } from '../ModalForgotPassword'
import { ModalSendEmailRecoverConfirmation } from '../ModalSendEmailRecoverConfirmation'

export default function PageSignIn() {
  const [showModalForgetPassword, setModalForgetPassword] = useState(false)
  const [
    showModalSendEmailRecoverConfirmation,
    setShowModalSendEmailRecoverConfirmation
  ] = useState(false)

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
          <InputGroup
            label="Senha"
            buttonText="Esqueceu sua senha?"
            buttonOnClick={() => setModalForgetPassword(true)}
          >
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

      <Modal
        title="Esqueceu sua senha?"
        headerAlign="center"
        subtitle="Não se preocupe, insira o seu e-mail de cadastro e receba o código para redefinir a sua senha de acesso a JUDIT:"
        footer={
          <Box className="w-60 mx-auto">
            <Button
              text="Recuperar minha senha"
              color="primary"
              size="large"
              onClick={() => {
                setModalForgetPassword(false)
                setShowModalSendEmailRecoverConfirmation(true)
              }}
            />
          </Box>
        }
        isOpen={showModalForgetPassword}
        onClose={() => setModalForgetPassword(false)}
      >
        <ModalForgotPassword />
      </Modal>

      <Modal
        isOpen={showModalSendEmailRecoverConfirmation}
        onClose={() => setShowModalSendEmailRecoverConfirmation(false)}
      >
        <ModalSendEmailRecoverConfirmation />
      </Modal>
    </>
  )
}
