"use client";

import background from "../../../public/images/background-public-layout.svg";
import background_gradient from "../../../public/images/background-public-layout-gradient.png";
import { Box } from "../../components/elements/Box";

export default function PublicLayout({ children }) {
  return (
    <Box
      className="bg-backgroundBlack w-full h-screen"
      style={{
        backgroundImage: `url(${background_gradient.src})`,
        backgroundPosition: "left bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        className="w-full h-screen"
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundPosition: "left bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          className="h-full w-full max-w-6xl p-5 mx-auto flex flex-col justify-center"
          style={{ border: "solid 1px red" }}
        >
          <Box className="md:w-2/3 lg:w-1/2 mx-auto lg:ml-auto lg:mr-0">
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
