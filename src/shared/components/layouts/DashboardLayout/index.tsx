"use client";

import { Box } from "../../elements/Box";

export default function DashboardLayout({ children }) {
  return (
    <Box className="w-full min-h-screen overflow-x-hidden overflow-y-auto">
      <Box className="min-h-full w-full max-w-6xl p-5 mx-auto flex flex-col justify-center relative z-10">
        <Box className="sm:w-2/3 md:w-1/2 mx-auto lg:ml-auto lg:mr-0 mt-28 mb-24">
          {children}
        </Box>
      </Box>
    </Box>
  );
}
