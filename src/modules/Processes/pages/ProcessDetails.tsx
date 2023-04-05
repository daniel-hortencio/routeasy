"use client";

import { Box } from "../../../shared/components/elements";
import { Text } from "../../../shared/components/elements";
import { Wrapper } from "../../../shared/components/elements";
import { DashboardLayoutHeader } from "../../../shared/components/layouts/DashboardLayout/Header";
import { Button } from "../../../shared/components/elements";
import { Icon } from "../../../shared/components/elements";
import { TimeLine } from "../components/TimeLine";
import { useState } from "react";
import Modal from "../../../shared/components/elements/Modal";
import { ModalProcessDocument } from "../components/ModalProcessDocument";
import { MenuProcessDocumentOptions } from "../components/MenuProcessDocumentOptions";
import { ModalCancelMonitoring } from "../components/ModalCancelMonitoring";

export default function ProcessDetails() {
  const [isOpenModalDocuments, setIsOpenModalDocuments] = useState(false);
  const [isOpenModalCancelMonitoring, setIsOpenModalCancelMonitoring] =
    useState(false);

  return (
    <>
      <DashboardLayoutHeader />

      <Wrapper
        as="section"
        className="justify-center pt-6 pb-10 xl:pb-12  bg-white"
      >
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

          <Box className="hidden xl:flex">
            <Box className="w-48">
              <Button
                text="Documentos anexos"
                color="primary"
                size="large"
                onClick={() => setIsOpenModalDocuments(!isOpenModalDocuments)}
              />
            </Box>
            <Box className="ml-5">
              <Button text={<Icon name="FiRefreshCw" size={20} />} />
            </Box>
            <Box className="ml-5">
              <MenuProcessDocumentOptions
                cancelMonitoring={() => setIsOpenModalCancelMonitoring(true)}
                button={<Button text={<Icon name="CgMore" size={24} />} />}
              />
            </Box>
          </Box>
        </Box>

        <Modal
          title="Documentos do processo"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum sagittis pharetra. Proin pellentesque urna arcu, ut feugiat tellus porttitor vel."
          isOpen={isOpenModalDocuments}
          onClose={() => setIsOpenModalDocuments(false)}
        >
          <ModalProcessDocument />
        </Modal>

        <Modal
          headerAlign="center"
          title="Tem certeza que deseja continuar?"
          description="Você está prestes a cancelar o monitoramento automático deste Processo Judicial, antes de continuar avalie o histórico do período monitorado:"
          isOpen={isOpenModalCancelMonitoring}
          onClose={() => setIsOpenModalCancelMonitoring(false)}
          footer={
            <Box className="grid gap-3 md:gap-5 md:grid-cols-2 md:w-3/4 mx-auto">
              <Button text="Manter monitoramento" size="large" />
              <Button
                text="Cancelar monitoramento"
                size="large"
                color="warning"
              />
            </Box>
          }
        >
          <ModalCancelMonitoring />
        </Modal>

        <Box className="grid gap-4 sm:grid-cols-2 lg:flex lg:items-center mb-8 xl:mb-0">
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

        <Box className="flex xl:hidden">
          <Box className="w-48">
            <Button
              text="Documentos anexos"
              color="primary"
              size="large"
              onClick={() => setIsOpenModalDocuments(!isOpenModalDocuments)}
            />
          </Box>
          <Box className="ml-5">
            <Button text={<Icon name="FiRefreshCw" size={20} />} />
          </Box>
          <Box className="ml-5">
            <MenuProcessDocumentOptions
              cancelMonitoring={() => setIsOpenModalCancelMonitoring(true)}
              button={<Button text={<Icon name="CgMore" size={24} />} />}
            />
          </Box>
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
