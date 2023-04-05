"use client";

import { Box, Button } from "../../../../shared/components/elements";
import { Text } from "../../../../shared/components/elements";

import "./styles.css";

export const ModalCancelMonitoring = () => {
  return (
    <Box>
      <Box className="bg-backgroundGray p-5 rounded-lg mb-6 md:mb-9">
        <Box className="mb-2 md:grid md:gap-5 ModalCancelMonitoring__Row">
          <Text className="text-textGray-light md:text-right">PROCESSO Nº</Text>
          <Text>0136156-24.2023.8.09.0001</Text>
        </Box>
        <Box className="mb-2 md:grid md:gap-5 ModalCancelMonitoring__Row">
          <Text className="text-textGray-light md:text-right">
            MONITORANDO DESDE
          </Text>
          <Text>15/12/2022</Text>
        </Box>
        <Box className="mb-2 md:grid md:gap-5 ModalCancelMonitoring__Row">
          <Text className="text-textGray-light md:text-right">
            RESULTADOS DO MONITORAMENTO
          </Text>
          <Text>174 movimentações e 25 documentos</Text>
        </Box>
        <Box className="mb-2 md:grid md:gap-5 ModalCancelMonitoring__Row">
          <Text className="text-textGray-light md:text-right">
            TOTAL DE CONSUMO
          </Text>
          <Text>590 consultas · Sendo 48 manuais</Text>
        </Box>
      </Box>

      <Text>
        Após o cancelamento, as movimentações processuais não serão mais
        sincronizadas com todos os tribunais e Diários Oficiais.
      </Text>
    </Box>
  );
};
