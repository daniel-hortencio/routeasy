"use client";

import { Box } from "../../elements";
import { DashboardLayoutFooter } from "./Footer";

export default function DashboardLayout({ children }) {
  return (
    <Box className=" w-full min-h-screen overflow-x-hidden flex flex-col pt-20 lg:pt-28 relative">
      <Box className="fixed top-0 left-0 bg-backgroundGray w-full h-full -z-20" />
      {children}
      <DashboardLayoutFooter />
    </Box>
  );
}
