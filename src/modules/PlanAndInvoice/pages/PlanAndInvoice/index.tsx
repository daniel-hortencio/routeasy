"use client";

import { Box } from "../../../../shared/components/elements";
import { Text } from "../../../../shared/components/elements";
import { Wrapper } from "../../../../shared/components/elements";
import { DashboardLayoutHeader } from "../../../../shared/components/layouts/DashboardLayout/Header";

import { useState } from "react";
import { WhiteSection } from "../../../../shared/components/layouts/DashboardLayout/WhiteSection";
import { Table } from "../../../../shared/components/elements/Table";
import {
  TableHeaderLastInvoices,
  TableRowLastInvoices,
} from "../../components/TableRowLastInvoices";

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
        <Text className="text-xl font-bold mb-5">Últimas faturas</Text>

        <Table
          data={[
            {
              id: "1",
              vencimento: "15/04/2023",
              periodo: "05/03/23 · 05/04/23",
              plano: "1.000 - 10.000",
              consumo: "1.125 consultas",
              forma_de_pagamento: "Previsto: Cartão final 0987",
              valor: "R$ 2.250,00",
              status: "error",
            },
            {
              id: "2",
              vencimento: "15/04/2023",
              periodo: "05/03/23 · 05/04/23",
              plano: "1.000 - 10.000",
              consumo: "1.125 consultas",
              forma_de_pagamento: "Previsto: Cartão final 0987",
              valor: "R$ 2.250,00",
              status: "pending",
            },
            {
              id: "3",
              vencimento: "15/04/2023",
              periodo: "05/03/23 · 05/04/23",
              plano: "1.000 - 10.000",
              consumo: "1.125 consultas",
              forma_de_pagamento: "Previsto: Cartão final 0987",
              valor: "R$ 2.250,00",
              status: "success",
            },
          ]}
          HeaderComponent={TableHeaderLastInvoices}
          RowComponent={TableRowLastInvoices}
        />
      </Wrapper>
    </Box>
  );
}
