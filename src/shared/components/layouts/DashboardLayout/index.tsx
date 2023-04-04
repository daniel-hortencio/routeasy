"use client";

import { Box } from "../../elements";
import { DashboardLayoutFooter } from "./Footer";

export default function DashboardLayout({ children }) {
  return (
    <Box className="bg-backgroundGray w-full min-h-screen overflow-x-hidden flex flex-col pt-20 lg:pt-28">
      {children}
      <DashboardLayoutFooter />
    </Box>
  );
}
