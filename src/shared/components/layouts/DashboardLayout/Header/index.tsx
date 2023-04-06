import { useState } from "react";

import { Box } from "../../../elements";
import { Logo } from "../../../elements";
import { MenuMobile, MenuMobileButton } from "../MenuMobile";
import { MenuDesktop } from "../MenuDesktop";

interface Props {}

export const DashboardLayoutHeader = ({}: Props) => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  return (
    <Box>
      <Box className="fixed flex top-0 left-0 w-full h-20 lg:h-28 z-20 backdrop-blur-md">
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
      <Box className="fixed bg-white  w-full h-20 lg:h-28 top-0 left-0 -z-10" />
    </Box>
  );
};
