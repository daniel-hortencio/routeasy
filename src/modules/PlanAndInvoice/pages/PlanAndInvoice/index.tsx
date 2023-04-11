"use client";

import { Box, Button } from "../../../../shared/components/elements";
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
        <Text className="text-xl font-bold mb-5">Forma de Pagamento</Text>

        <Box className="bg-white rounded-lg py-6 px-7 mb-10 flex justify-between">
          <Box>
            <Text className="text-lg font-bold mb-5">Cartão de crédito</Text>
          </Box>

          <Box>
            <Button text="Alterar forma de pagamento" size="large" />

            <Text className="text-lg text-custom-gray-300">
              Sua assinatura tem recorrencia mensal
            </Text>
          </Box>
        </Box>

        <Text className="font-bold mb-5">Últimas faturas</Text>

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
