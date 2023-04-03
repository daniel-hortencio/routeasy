import { Box } from "../../../elements/Box";
import { Text } from "../../../elements/Text";
import { Wrapper } from "../../../elements/Wrapper";

export const DashboardLayoutFooter = () => {
  return (
    <Wrapper as="footer" className="flex items-center justify-between">
      <Box className="flex items-center justify-between">
        <Text>2023 © Judit.io · Todos os direitos reservados</Text>
        <Text>Termos de uso · Política de privacidade · Cookies</Text>
      </Box>
    </Wrapper>
  );
};
