import { Box } from "../Box";
import Icon from "../Icon";
import { Text } from "../Text";

import "./styles.css";

const TableHeader = () => {
  return (
    <Box className="TableHeader p-1 md:pl-4">
      <Box className="uppercase text-textGray-dark text-sm pb-4">
        Atualizado em:
      </Box>
      <Box className="uppercase text-textGray-dark text-sm pb-4">Número:</Box>
      <Box className="uppercase text-textGray-dark text-sm pb-4">Processo:</Box>
      <Box className="uppercase text-textGray-dark text-sm pb-4">Tribunal:</Box>
      <Box className="uppercase text-textGray-dark text-sm pb-4">Tipo:</Box>
    </Box>
  );
};

const TableRow = () => {
  return (
    <Box className="TableRow bg-white rounded-lg overflow-hidden p-1 md:pl-4 md:h-14 hover:ring-2 ring-primary">
      <Box className="TableRowData p-4 md:p-0">
        <Box className="flex md:items-center">
          <Text>
            <Text as="span" className="md:hidden font-bold pr-2">
              Atualizado em:{" "}
            </Text>{" "}
            05/03/23 às 15h38
          </Text>
        </Box>
        <Box className="flex md:items-center">
          <Text as="span" className="md:hidden font-bold pr-2">
            Número:{" "}
          </Text>
          <Text>0136156-24.2023.8.09.0001</Text>
        </Box>
        <Box className="flex md:items-center">
          <Text as="span" className="md:hidden font-bold pr-2">
            Processo:{" "}
          </Text>
          <Text className="font-bold">CESAR SANTOS x VOLVO BRASIL LTDA</Text>
        </Box>
        <Box className="flex md:items-center">
          <Text as="span" className="md:hidden font-bold pr-2">
            Tribunal:{" "}
          </Text>
          <Text>PJERJ</Text>
        </Box>
        <Box className="flex md:items-center">
          <Text as="span" className="md:hidden font-bold pr-2">
            Tipo:{" "}
          </Text>
          <Text>Web</Text>
        </Box>
      </Box>
      <Box className="bg-secondary text-primary rounded-md flex items-center justify-center h-full">
        <Icon name="AiOutlineFolder" size={24} />
      </Box>
    </Box>
  );
};

export const Table = () => {
  return (
    <Box className="w-full mb-">
      <TableHeader />

      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
    </Box>
  );
};
