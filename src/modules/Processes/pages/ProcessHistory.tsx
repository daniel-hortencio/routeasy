"use client";

import Image from "next/image";
import { Box } from "../../../shared/components/elements/Box";
import { Text } from "../../../shared/components/elements/Text";
import { Wrapper } from "../../../shared/components/elements/Wrapper";
import { DashboardLayoutHeader } from "../../../shared/components/layouts/DashboardLayout/Header";
import { InputSearch } from "../../../shared/components/elements/Inputs/InputSearch";
import { CardProcessesSummary } from "../components/CardProcessesSummary";

export default function ProcessHistory() {
  return (
    <>
      <DashboardLayoutHeader />

      <Wrapper as="section" className="justify-center pt-6 pb-12  bg-white">
        <Box className="grid md:grid-cols-3 gap-8">
          <CardProcessesSummary label="Em monitoramento" data={100592} />
          <CardProcessesSummary
            label="Consultas realizadas"
            data={19437}
            filterDays={[30, 60, 90]}
          />
          <CardProcessesSummary
            label="Movimentações"
            data={286195}
            filterDays={[30, 60, 90]}
          />
        </Box>
      </Wrapper>

      <Wrapper>
        <Box className="mb-12">
          <Text as="h1" className="font-extrabold text-2xl">
            Histórico de precessos
          </Text>
        </Box>
      </Wrapper>
    </>
  );
}
