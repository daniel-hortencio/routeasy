'use client'

import {
  Box,
  Icon,
  InputSearch,
  Text,
  Wrapper,
  Button
} from '../../../shared/components/elements'
import { DashboardLayoutHeader } from '../../../shared/components/layouts/DashboardLayout/Header'
import { Table } from '../../../shared/components/elements/Table'
import ProcessesSummary from '../components/ProcessesSummary'
import {
  TableHeaderProcessHistory,
  TableRowProcessHistory
} from '../components/TableRowProcessHistory'

export default function ProcessHistory() {
  return (
    <>
      <DashboardLayoutHeader />

      <ProcessesSummary />

      <Wrapper>
        <Box className="mb-8 md:mb-12 mt-8 md:flex justify-between items-center">
          <Text
            as="h1"
            className="font-bold text-2xl md:text-28px mb-4 md:mb-0"
          >
            Total de 459.235 processos
          </Text>

          <Box className="flex items-center md:hidden w-full">
            <InputSearch placeholder="Pesquisar Processo" />

            <Box className="ml-5">
              <Button
                color="primary"
                text={<Icon name="Funnel" />}
                onClick={() => {}}
              />
            </Box>
          </Box>

          <Box className="hidden md:flex md:items-center">
            <InputSearch
              variant="collapsible"
              placeholder="Pesquisar Processo"
            />

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

        <Table
          data={[
            {
              id: '1',
              updated_at: '05/03/23 às 15h38',
              number: '0136156-24.2023.8.09.0001',
              processo: 'CESAR SANTOS x VOLVO BRASIL LTDA',
              tribunal: 'PJERJ',
              tipo: 'Web'
            },
            {
              id: '2',
              updated_at: '05/03/23 às 15h38',
              number: '0136156-24.2023.8.09.0001',
              processo: 'CESAR SANTOS x VOLVO BRASIL LTDA',
              tribunal: 'PJERJ',
              tipo: 'Web'
            }
          ]}
          HeaderComponent={TableHeaderProcessHistory}
          RowComponent={TableRowProcessHistory}
        />
      </Wrapper>
    </>
  )
}
