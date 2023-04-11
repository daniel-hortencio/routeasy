"use client";

import { Box } from "../../../../shared/components/elements";
import { Text } from "../../../../shared/components/elements";
import { Wrapper } from "../../../../shared/components/elements";
import { DashboardLayoutHeader } from "../../../../shared/components/layouts/DashboardLayout/Header";

import { useState } from "react";
import { WhiteSection } from "../../../../shared/components/layouts/DashboardLayout/WhiteSection";
import { Table } from "../../../../shared/components/elements/Table";

export default function PlanAndInvoice() {
  return (
    <Box className="flex-auto">
      <DashboardLayoutHeader />

      <WhiteSection>
        <Text>Planos & faturas</Text>
        <Text>1.000 - 10.000 consultas</Text>
        <Text>PLANO ATIVO</Text>
        <Text>Pagamento mínimo mensal: R$ 501,50</Text>
      </WhiteSection>

      <Wrapper>
        <Text>Últimas faturas</Text>

        {/* <Table columns={[]} data={[]} /> */}
      </Wrapper>
    </Box>
  );
}
