import Link from "next/link";
import { Box, Icon, Text } from "../../../../shared/components/elements";

import "./styles.css";
import { TableHeader } from "../../../../shared/components/elements/Table/TableHeader";

interface Props {
  id: string;
  vencimento: string;
  periodo: string;
  plano: string;
  consumo: string;
  forma_de_pagamento: string;
  valor: string;
}

export const TableHeaderLastInvoices = () => {
  return (
    <TableHeader
      titles={[
        "Vencimento",
        "Periodo",
        "Plano",
        "Consumo",
        "Forma de Pagamento",
        "Valor",
      ]}
      className="TableHeaderLastInvoices"
    />
  );
};

export const TableRowLastInvoices = ({
  id,
  vencimento,
  periodo,
  plano,
  consumo,
  forma_de_pagamento,
  valor,
}: Props) => {
  return (
    <Box className="TableRowLastInvoices shadow-md bg-white rounded-lg overflow-hidden p-1 md:pl-4 md:h-14 hover:ring-2 ring-primary transition-all">
      <Box className="hidden TableRowLastInvoicesData md:grid p-4 md:p-0">
        <Box className="flex items-center">
          <Text>{vencimento}</Text>
        </Box>
        <Box className="flex items-center">
          <Text>{periodo}</Text>
        </Box>
        <Box className="flex items-center">
          <Text className="font-bold">{plano}</Text>
        </Box>
        <Box className="flex items-center">
          <Text>{consumo}</Text>
        </Box>
        <Box className="flex items-center">
          <Text>{forma_de_pagamento}</Text>
        </Box>
        <Box className="flex items-center">
          <Text>{valor}</Text>
        </Box>
      </Box>

      <Box as="ul" className="md:hidden p-4">
        <Text className="font-bold mb-2 text-lg">Vencimento {vencimento}</Text>
        <Text className="flex items-center">
          <Box className="w-1 h-1 bg-textGray-dark mr-2 rounded-full" />
          Periodo {periodo}
        </Text>
        <Text className="flex items-center">
          <Box className="w-1 h-1 bg-textGray-dark mr-2 rounded-full" />
          Plano {plano}
        </Text>
        <Text className="flex items-center">
          <Box className="w-1 h-1 bg-textGray-dark mr-2 rounded-full" />
          Consumo {consumo}
        </Text>

        <Text className="flex items-center">
          <Box className="w-1 h-1 bg-textGray-dark mr-2 rounded-full" />
          Forma de pagamento {forma_de_pagamento}
        </Text>
        <Text className="flex items-center">
          <Box className="w-1 h-1 bg-textGray-dark mr-2 rounded-full" />
          Valor {valor}
        </Text>
      </Box>

      <Box className="bg-secondary fill-primary rounded-md flex items-center justify-center h-full transition-all TableRow__IconFolder">
        <Icon name="FolderSimple" size={24} />
      </Box>
    </Box>
  );
};