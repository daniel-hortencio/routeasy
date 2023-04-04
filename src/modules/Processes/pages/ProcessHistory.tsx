"use client";

import { Box, InputSearch } from "../../../shared/components/elements";
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
        <Box className="mb-12 mt-8 flex justify-between items-center">
          <Text as="h1" className="font-extrabold text-2xl">
            Histórico de precessos
          </Text>

          <Box className="flex items-center">
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
