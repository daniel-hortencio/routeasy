"use client";

import { Box } from "../../elements/Box";
import { Wrapper } from "../../elements/Wrapper";
import { DashboardLayoutFooter } from "./Footer";

export default function DashboardLayout({ children }) {
  return (
    <Box className="bg-backgroundGray w-full h-screen overflow-x-hidden overflow-y-auto flex flex-col">
      {children}
      <DashboardLayoutFooter />
    </Box>
  );
}
