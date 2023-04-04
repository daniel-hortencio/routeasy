"use client";

import { Box } from "../../../shared/components/elements/Box";
import { Text } from "../../../shared/components/elements/Text";
import { Wrapper } from "../../../shared/components/elements/Wrapper";
import { DashboardLayoutHeader } from "../../../shared/components/layouts/DashboardLayout/Header";
import { Button } from "../../../shared/components/elements/Button";
import Icon from "../../../shared/components/elements/Icon";
import { TimeLine } from "../components/TimeLine";

export default function ProcessDetails() {
  return (
    <>
      <DashboardLayoutHeader />

      <Wrapper as="section" className="justify-center pt-6 pb-12  bg-white">
        <Box className="mb-9 xl:flex">
          <Box className="flex-auto mb-5 xl:mb-0">
            <Box className="flex items-center mb-5 flex-wrap">
              <Text className="uppercase p-1 rounded bg-backgroundBlack text-white text-xs font-medium mr-2 whitespace-nowrap">
                Em monitoramento
              </Text>
              <Text>Processo nº 0136156-24.2023.8.09.0001</Text>
            </Box>

            <Text as="h1" className="text-3xl font-bold">
              CESAR SANTOS x VOLVO BRASIL LTDA
            </Text>
          </Box>
          <Box className="flex">
            <Box className="w-48">
              <Button text="Documentos anexos" color="primary" size="large" />
            </Box>
            <Box className="ml-5">
              <Button text={<Icon name="FiRefreshCw" size={20} />} />
            </Box>
            <Box className="ml-5">
              <Button text={<Icon name="CgMore" size={24} />} />
            </Box>
          </Box>
        </Box>

        <Box className="grid gap-4 sm:grid-cols-2 lg:flex lg:items-center">
          <Text className="flex items-center md:mr-8">
            <Box className="text-textGray-dark mr-2">
              <Icon name="AiOutlineBank" size={24} />
            </Box>{" "}
            PJE · Rio de Janeiro, RJ
          </Text>
          <Text className="flex items-center md:mr-8">
            <Box className="text-textGray-dark mr-2">
              <Icon name="GiInjustice" size={24} />
            </Box>{" "}
            [CÍVEL] EXECUÇÃO FISCAL
          </Text>
          <Text className="flex items-center md:mr-8">
            <Box className="text-textGray-dark mr-2 rounded-full border-2 border-textGray-dark">
              <Icon name="MdAttachMoney" />
            </Box>{" "}
            Valor da causa: R$ 5.978,19
          </Text>
          <Text className="flex items-center md:mr-8">
            <Box className="opacity-60 mr-2 ">
              <Icon name="GrGroup" size={20} />
            </Box>{" "}
            5 partes envolvidas
          </Text>
        </Box>
      </Wrapper>

      <Wrapper>
        <Box className="mb-8 mt-8 ">
          <Text as="h2" className="font-extrabold text-2xl mb-4">
            Movimentação processual
          </Text>
          <Text>
            Processo monitorado e sincronizado automaticamente a cada 24h com
            todos os tribunais e Diários Oficiais.
          </Text>
        </Box>

        <TimeLine />
      </Wrapper>
    </>
  );
}
