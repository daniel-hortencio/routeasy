import { Box } from "../../../elements";
import { Text } from "../../../elements";
import { Wrapper } from "../../../elements";

export const DashboardLayoutFooter = () => {
  return (
    <Wrapper as="footer">
      <Box className="flex flex-col-reverse md:flex-row items-center justify-between">
        <Text className="text-sm text-textGray-light">
          2023 © Judit.io
          <span className="hidden md:block">
            {" "}
            · Todos os direitos reservados
          </span>
        </Text>
        <Text className="text-sm text-textGray-dark text-center mb-2 md:mb-0">
          Termos de uso · Política de privacidade · Cookies
        </Text>
      </Box>
    </Wrapper>
  );
};
