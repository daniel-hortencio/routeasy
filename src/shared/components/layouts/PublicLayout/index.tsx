"use client";

import background from "../../../../../public/images/pictures/background-public-layout.svg";
import background_gradient from "../../../../../public/images/pictures/background-public-layout-gradient.png";
import { Box } from "../../elements";

export default function PublicLayout({ children }) {
  return (
    <Box
      className="bg-backgroundBlack w-full min-h-screen overflow-x-hidden overflow-y-auto"
      style={{
        backgroundImage: `url(${background_gradient.src})`,
        backgroundPosition: "left bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <Box
        className="w-screen h-screen fixed top-0 left-0 z-0"
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundPosition: "left bottom",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      />
      <Box className="min-h-full w-full max-w-6xl p-5 mx-auto flex flex-col justify-center relative z-10">
        <Box className="sm:w-2/3 md:w-1/2 mx-auto lg:ml-auto lg:mr-0 mt-28 mb-24">
          {children}
        </Box>
      </Box>
    </Box>
  );
}
