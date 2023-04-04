import { useState } from "react";

import { Box } from "../../../elements/Box";
import { Logo } from "../../../elements/Logo";
import { MenuMobile, MenuMobileButton } from "../MenuMobile";
import { MenuDesktop } from "../MenuDesktop";

interface Props {}

export const DashboardLayoutHeader = ({}: Props) => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  return (
    <Box className="bg-white fixed flex top-0 left-0 w-full h-20 lg:h-28 backdrop-blur-lg z-20">
      <Box className="w-full max-w-6xl mx-auto flex items-center p-5 justify-between border-b-2 border-backgroundGray">
        <Logo color="black" />

        <MenuDesktop />

        <MenuMobileButton
          isOpen={isOpenMobileMenu}
          onChange={setIsOpenMobileMenu}
        />
      </Box>

      <MenuMobile isOpen={isOpenMobileMenu} onChange={setIsOpenMobileMenu} />
    </Box>
  );
};
