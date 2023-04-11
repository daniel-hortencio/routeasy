"use client";

import Link from "next/link";
import { Box } from "../../../elements";
import { usePathname } from "next/navigation";

export const DashboardLayoutNavigation = () => {
  const path = usePathname();

  return (
    <Box as="nav" className="flex">
      {[
        {
          label: "Início",
          href: "/dashboard",
          isActive: () => path === "/dashboard",
        },
        {
          label: "Processos Judiciais",
          href: "/dashboard/processos",
          isActive: () => path.startsWith("/dashboard/processos"),
        },
        {
          label: "Plano & faturas",
          href: "/dashboard/plano-e-faturas",
          isActive: () => path.startsWith("/dashboard/plano-e-faturas"),
        },
      ].map((item, index) => (
        <Box
          key={item.href}
          className={`h-28 flex items-center border-spacing-2 border-b-2 ${
            item.isActive() ? "border-primary" : "border-transparent"
          } ${index > 0 && "ml-10"}`}
        >
          <Link href={item.href} className="text-custom-gray-500">
            {item.label}
          </Link>
        </Box>
      ))}
    </Box>
  );
};
