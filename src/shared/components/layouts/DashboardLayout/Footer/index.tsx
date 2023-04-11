import Link from "next/link";
import { Box } from "../../../elements";
import { Text } from "../../../elements";
import { Wrapper } from "../../../elements";

export const DashboardLayoutFooter = () => {
  return (
    <Wrapper as="footer">
      <Box className="flex flex-col-reverse md:flex-row items-center justify-between">
        <Text className="text-sm text-custom-gray-300">
          2023 © Judit.io
          <span className="hidden md:inline">
            {" "}
            · Todos os direitos reservados
          </span>
        </Text>
        <Text className="text-sm text-custom-gray-400 text-center mb-2 md:mb-0">
          <Link href="/" className="hover:underline">
            Termos de uso
          </Link>{" "}
          ·
          <Link href="/" className="hover:underline">
            Política de privacidade
          </Link>{" "}
          ·{" "}
          <Link href="/" className="hover:underline">
            Cookies
          </Link>
        </Text>
      </Box>
    </Wrapper>
  );
};
