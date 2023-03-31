"use client";
import { Box } from "../../../components/elements/Box";
import { Button } from "../../../components/elements/Button";
import {
  InputGroup,
  InputPassword,
  InputText,
} from "../../../components/elements/Inputs";
import { Text } from "../../../components/elements/Text";

export default function SignIn() {
  return (
    <>
      <Text className="text-white font-extrabold text-2xl md:text-3xl lg:text-5xl mb-8">
        Olá, seja bem vindo(a) novamente!
      </Text>
      <Text className="text-textGray-light mb-8">
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

        <Box className="flex items-center mb-6">
          <Box className="border-b-2 h-1 border-dotted border-textGray-light flex-auto" />
          <Text className="flex-1 text-center text-textGray-light">
            para a sua segurança
          </Text>
          <Box className="border-b-2 h-1 border-dotted border-textGray-light flex-auto" />
        </Box>

        <Box className="mb-8">
          <p className="bg-white">Recaptcha</p>
        </Box>

        <Button
          text="Acessar minha conta"
          onClick={() => {}}
          color="primary"
          size="large"
        />
      </form>
    </>
  );
}
