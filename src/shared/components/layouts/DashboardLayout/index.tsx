"use client";

import { Box } from "../../elements/Box";
import { DashboardLayoutFooter } from "./Footer";

export default function DashboardLayout({ children }) {
  return (
    <Box className="bg-backgroundGray w-full min-h-screen overflow-x-hidden flex flex-col">
      {children}
      <DashboardLayoutFooter />
    </Box>
  );
}
