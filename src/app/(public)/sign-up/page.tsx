"use client";

import Image from "next/image";
import { Box } from "../../../components/elements/Box";
import { Button } from "../../../components/elements/Button";
import {
  InputGroup,
  InputPassword,
  InputText,
} from "../../../components/elements/Inputs";
import { Text } from "../../../components/elements/Text";
import { PublicLayoutHeader } from "../../../components/layouts/PublicLayout/Header";

export default function SignIn() {
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
        <Box className="mb-8">
          <InputGroup label="Celular">
            <InputText placeholder="Insira seu celular" />
          </InputGroup>
        </Box>
        <Box className="mb-8">
          <InputGroup label="Senha" linkText="Esqueceu sua senha?" linkTo="/">
            <InputPassword placeholder="Insira sua senha de acesso" />
          </InputGroup>
        </Box>

        <Box className="flex items-center mb-6">
          <Box className="border-b-2 h-1 border-dotted border-textGray-light flex-auto" />
          <Text className="flex-1 text-center text-textGray-light">
            para a sua segurança
          </Text>
          <Box className="border-b-2 h-1 border-dotted border-textGray-light flex-auto" />
        </Box>

        <Box className="mb-8 test">
          <p className="bg-white">Recaptcha</p>
        </Box>

        <Button
          text="Criar minha conta"
          onClick={() => {}}
          color="primary"
          size="large"
        />
      </form>
    </>
  );
}
