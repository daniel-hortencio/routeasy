import { Box } from "../../../elements/Box";
import { Logo } from "../../../elements/Logo";
import { DashboardLayoutNavigation } from "../Navigation";

interface Props {}

export const DashboardLayoutHeader = ({}: Props) => {
  return (
    <Box className="bg-white fixed flex top-0 left-0 w-full h-20 lg:h-28 backdrop-blur-lg z-20">
      <Box className="w-full max-w-6xl mx-auto flex items-center p-5 justify-between border-b-2 border-backgroundGray">
        <Logo color="black" />

        <DashboardLayoutNavigation />
      </Box>
    </Box>
  );
};
