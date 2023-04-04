"use client";

import { Box, Icon, InputSearch } from "../../../shared/components/elements";
import { Text } from "../../../shared/components/elements";
import { Wrapper } from "../../../shared/components/elements";
import { DashboardLayoutHeader } from "../../../shared/components/layouts/DashboardLayout/Header";
import { Button } from "../../../shared/components/elements";
import { Table } from "../components/Table";
import ProcessesSummary from "../components/ProcessesSummary";

export default function ProcessHistory() {
  return (
    <>
      <DashboardLayoutHeader />

      <Wrapper as="section" className="justify-center pt-6 pb-12  bg-white">
        <ProcessesSummary />
      </Wrapper>

      <Wrapper>
        <Box className="mb-8 md:mb-12 mt-8 md:flex justify-between items-center">
          <Text as="h1" className="font-bold text-2xl md:text-3xl mb-4 md:mb-0">
            Total de 459.235 processos
          </Text>

          <Box className="flex items-center md:hidden w-full">
            <InputSearch />

            <Box className="ml-5">
              <Button
                color="primary"
                text={<Icon name="BiFilterAlt" />}
                onClick={() => {}}
              />
            </Box>
          </Box>

          <Box className="hidden md:flex md:items-center">
            <InputSearch variant="collapsible" />

            <Box className="w-24 ml-5">
              <Button
                color="primary"
                text="Filtrar"
                onClick={() => {}}
                size="large"
              />
            </Box>
          </Box>
        </Box>

        <Table />
      </Wrapper>
    </>
  );
}
