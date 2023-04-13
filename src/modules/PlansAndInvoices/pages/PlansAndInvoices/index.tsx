'use client'

import {
  Box,
  Button,
  Icon,
  Text,
  Wrapper,
  IconCardFlag
} from '../../../../shared/components/elements'
import { DashboardLayoutHeader } from '../../../../shared/components/layouts/DashboardLayout/Header'

import { WhiteSection } from '../../../../shared/components/layouts/DashboardLayout/WhiteSection'
import { Table } from '../../../../shared/components/elements/Table'
import {
  TableHeaderLastInvoices,
  TableRowLastInvoices
} from '../../components/TableRowLastInvoices'
import { MenuPlanOptions } from '../../components/MenuPlanOptions'

interface Props {
  isCanceled?: boolean
}

export default function PlansAndInvoices({ isCanceled }: Props) {
  return (
    <Box className="flex-auto">
      <DashboardLayoutHeader />

      <WhiteSection>
        <Box className="md:flex md:justify-between">
          <Box className="mb-8 md:mb-0 ">
            <Text className="font-extrabold text-28px mb-4 text-custom-gray-500">
              Planos & faturas
            </Text>
            <Text className="text-4xl font-light text-custom-gray-400 mb-4">
              1.000 - 10.000 consultas
            </Text>
            <Box className="flex">
              <Text
                className={`uppercase p-1 rounded  text-white text-xs font-medium mr-2 whitespace-nowrap w-min ${
                  isCanceled ? 'bg-custom-gray-300' : 'bg-custom-gray-500'
                }`}
              >
                {isCanceled ? 'PLANO CANCELADO' : 'PLANO ATIVO'}
              </Text>

              <Text className="text-custom-gray-400">
                Pagamento mínimo mensal: R$ 501,50
              </Text>
            </Box>
          </Box>

          <Box className="md:w-80 flex flex-col justify-between">
            <Box className="flex md:justify-end mb-4 md:mb-0">
              <Box className="w-48">
                {isCanceled ? (
                  <Button
                    text="Reativar meu plano"
                    size="large"
                    color="primary"
                  />
                ) : (
                  <Button
                    text="Aumentar meu plano"
                    size="large"
                    color="primary"
                  />
                )}
              </Box>
              <Box className="ml-5">
                <MenuPlanOptions
                  isCanceled={isCanceled}
                  button={
                    <Button text={<Icon name="DotsThreeOutline" size={24} />} />
                  }
                />
              </Box>
            </Box>
            <Box className="md:text-right text-custom-gray-300">
              <Text>Última fatura em 10/02/23 de R$ 2.250,00</Text>
              {isCanceled ? (
                <Text>
                  Plano cancelado em{' '}
                  <span className="font-semibold">Abril de 2023</span>
                </Text>
              ) : (
                <Text>
                  Próxima fatura em{' '}
                  <span className="font-semibold">Abril de 2023</span>
                </Text>
              )}
            </Box>
          </Box>
        </Box>
      </WhiteSection>

      <Wrapper className="py-7">
        <Text className="text-xl font-bold mb-5 text-custom-gray-500">
          Forma de Pagamento
        </Text>

        <Box className="bg-white rounded-lg py-6 px-7 mb-10 md:flex justify-between shadow-md">
          <Box className="mb-6 md:mb-0">
            <Text className="text-lg font-bold mb-5">Cartão de crédito</Text>

            <Box className="flex">
              <Box
                className={`w-20 h-14 flex items-center justify-center rounded-lg border-1 border-custom-gray-200 ${
                  isCanceled && 'saturate-0'
                }`}
              >
                <IconCardFlag flag="Mastercard" />
              </Box>
              <Box
                className={`ml-5 ${
                  isCanceled ? 'text-custom-gray-300' : 'text-custom-gray-400'
                }`}
              >
                <Text className="mb-2">Mastercard</Text>
                <Text>**** **** **** 0987</Text>
              </Box>
            </Box>
          </Box>

          {isCanceled ? (
            <Box>
              <Button text={<Icon name="DotsThreeOutline" size={24} />} />
            </Box>
          ) : (
            <Box>
              <Box className="mb-5">
                <Button text="Alterar forma de pagamento" size="large" />
              </Box>

              <Text className="text-custom-gray-300">
                Sua assinatura tem recorrencia mensal
              </Text>
            </Box>
          )}
        </Box>

        <Text className="text-xl font-bold mb-5 text-custom-gray-500">
          Últimas faturas
        </Text>

        <Table
          data={[
            {
              id: '1',
              vencimento: '15/04/2023',
              periodo: '05/03/23 · 05/04/23',
              plano: '1.000 - 10.000',
              consumo: '1.125 consultas',
              forma_de_pagamento: 'Previsto: Cartão final 0987',
              valor: 'R$ 2.250,00',
              status: 'error'
            },
            {
              id: '2',
              vencimento: '15/04/2023',
              periodo: '05/03/23 · 05/04/23',
              plano: '1.000 - 10.000',
              consumo: '1.125 consultas',
              forma_de_pagamento: 'Previsto: Cartão final 0987',
              valor: 'R$ 2.250,00',
              status: 'pending'
            },
            {
              id: '3',
              vencimento: '15/04/2023',
              periodo: '05/03/23 · 05/04/23',
              plano: '1.000 - 10.000',
              consumo: '1.125 consultas',
              forma_de_pagamento: 'Previsto: Cartão final 0987',
              valor: 'R$ 2.250,00',
              status: 'success'
            }
          ]}
          HeaderComponent={TableHeaderLastInvoices}
          RowComponent={TableRowLastInvoices}
        />
      </Wrapper>
    </Box>
  )
}
