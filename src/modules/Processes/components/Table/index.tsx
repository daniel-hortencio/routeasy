import Link from "next/link";
import { Box } from "../../../../shared/components/elements";
import { Icon } from "../../../../shared/components/elements";
import { Text } from "../../../../shared/components/elements";

import "./styles.css";

const TableHeader = () => {
  return (
    <Box className="TableHeader p-1 md:pl-4">
      <Box className="uppercase text-textGray-light text-sm pb-4">
        Atualizado em:
      </Box>
      <Box className="uppercase text-textGray-light text-sm pb-4">Número:</Box>
      <Box className="uppercase text-textGray-light text-sm pb-4">
        Processo:
      </Box>
      <Box className="uppercase text-textGray-light text-sm pb-4">
        Tribunal:
      </Box>
      <Box className="uppercase text-textGray-light text-sm pb-4">Tipo:</Box>
    </Box>
  );
};

const TableRow = () => {
  return (
    <Box className="TableRow bg-white rounded-lg overflow-hidden p-1 md:pl-4 md:h-14 hover:ring-2 ring-primary transition-all">
      <Box className="hidden TableRowData md:grid p-4 md:p-0">
        <Box className="flex items-center">
          <Text>05/03/23 às 15h38</Text>
        </Box>
        <Box className="flex items-center">
          <Text>0136156-24.2023.8.09.0001</Text>
        </Box>
        <Box className="flex items-center">
          <Text className="font-bold">CESAR SANTOS x VOLVO BRASIL LTDA</Text>
        </Box>
        <Box className="flex items-center">
          <Text>PJERJ</Text>
        </Box>
        <Box className="flex items-center">
          <Text>Web</Text>
        </Box>
      </Box>

      <Box as="ul" className="md:hidden p-4">
        <Text className="font-bold mb-2 text-lg">
          CESAR SANTOS x VOLVO BRASIL LTDA
        </Text>
        <Text className="flex items-center">
          <Box className="w-1 h-1 bg-textGray-dark mr-2 rounded-full" />
          Atualizado em 05/03/23 às 15h38
        </Text>
        <Text className="flex items-center">
          <Box className="w-1 h-1 bg-textGray-dark mr-2 rounded-full" />
          Nº 0136156-24.2023.8.09.0001
        </Text>
        <Text className="flex items-center">
          <Box className="w-1 h-1 bg-textGray-dark mr-2 rounded-full" />
          Tribunal PJERJ
        </Text>
        <Text className="flex items-center">
          <Box className="w-1 h-1 bg-textGray-dark mr-2 rounded-full" />
          Consulta Web
        </Text>
      </Box>

      <Box className="bg-secondary fill-primary rounded-md flex items-center justify-center h-full transition-all TableRow__IconFolder">
        <Icon name="FolderSimple" size={24} />
      </Box>
    </Box>
  );
};

export const Table = () => {
  return (
    <Box className="w-full mb-">
      <TableHeader />

      <Link href="/dashboard/processos/1">
        <TableRow />
      </Link>
      <Link href="/dashboard/processos/2">
        <TableRow />
      </Link>
      <Link href="/dashboard/processos/2">
        <TableRow />
      </Link>
      <Link href="/dashboard/processos/2">
        <TableRow />
      </Link>
      <Link href="/dashboard/processos/2">
        <TableRow />
      </Link>
      <Link href="/dashboard/processos/2">
        <TableRow />
      </Link>
      <Link href="/dashboard/processos/2">
        <TableRow />
      </Link>
      <Link href="/dashboard/processos/2">
        <TableRow />
      </Link>
      <Link href="/dashboard/processos/2">
        <TableRow />
      </Link>
      <Link href="/dashboard/processos/2">
        <TableRow />
      </Link>
      <Link href="/dashboard/processos/2">
        <TableRow />
      </Link>
    </Box>
  );
};
