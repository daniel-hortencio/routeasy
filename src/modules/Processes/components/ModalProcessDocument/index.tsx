import { Box, Button, Icon } from "../../../../shared/components/elements";
import { Text } from "../../../../shared/components/elements";

import "./styles.css";

const Header = () => {
  return (
    <Box className="ModalProcessDocument__TableRow mb-4 ">
      <Text className="text-sm text-textGray-light test">NOME</Text>
      <Text className="text-sm text-textGray-light test">TAMANHO</Text>
      <Text className="text-sm text-textGray-light test">DATA</Text>
      <Box className="w-8 test" />
    </Box>
  );
};

interface RowProps {
  name: string;
  size: string;
  date: string;
  downloadLink: string;
}

const Row = ({ name, size, date, downloadLink }: RowProps) => {
  return (
    <Box className="ModalProcessDocument__TableRow mb-2">
      <Text>
        <Text as="span" className="text-textGray-dark font-medium">
          {name}
        </Text>
      </Text>
      <Text className="text-textGray-dark test">{size}</Text>
      <Text className="text-textGray-dark test">{date}</Text>

      <Box className="flex justify-center transform -translate-y-2 test">
        <a
          href={downloadLink}
          className="flex justify-center items-center w-8 h-8  transition-all text-primary hover:text-primaryHover"
        >
          <Icon name="FiDownload" size={16} />
        </a>
      </Box>
    </Box>
  );
};

export const ModalProcessDocument = () => {
  return (
    <Box>
      <Box className="mb-9">
        <Box className="flex items-center w-full mb-7">
          <Text className="text-xl font-bold">Últimas publicações</Text>
          <button className="ml-2 text-textGray-light">
            <Icon name="IoIosArrowDown" size={20} />
          </button>
        </Box>

        <Box className="bg-backgroundGray rounded-lg p-5">
          <Box>
            <Header />
            <Row
              name="092231 - Despacho urgente.pdf"
              size="150kb"
              date="18/03/2023"
              downloadLink="#"
            />
            <Row
              name="Extrato mensal (ABR/22).xls"
              size="1.9MB"
              date="18/03/2023"
              downloadLink="#"
            />
            <Row
              name="Apresentação de negócios.doc"
              size="849kb"
              date="18/03/2023"
              downloadLink="#"
            />
          </Box>
        </Box>
      </Box>

      <Box>
        <Box className="flex items-center w-full justify-between mb-4">
          <Box className="flex items-center">
            <Text className="text-xl font-bold">Todos os documentos</Text>
            <button className="ml-2 text-textGray-light">
              <Icon name="IoIosArrowDown" size={20} />
            </button>
          </Box>
          <Box className="w-64">
            <Button text="Baixar todos os documentos" size="large" />
          </Box>
        </Box>

        <Box className="bg-backgroundGray rounded-lg p-5">
          <Box>
            <Header />
            <Row
              name="092231 - Despacho urgente.pdf"
              size="150kb"
              date="18/03/2023"
              downloadLink="#"
            />
            <Row
              name="092231 - Despacho urgente.pdf"
              size="1.9MB"
              date="18/03/2023"
              downloadLink="#"
            />
            <Row
              name="Extrato mensal (ABR/22).xls"
              size="849kb"
              date="18/03/2023"
              downloadLink="#"
            />
            <Row
              name="092231 - Despacho urgente.pdf"
              size="150kb"
              date="18/03/2023"
              downloadLink="#"
            />
            <Row
              name="092231 - Despacho urgente.pdf"
              size="1.9MB"
              date="18/03/2023"
              downloadLink="#"
            />
            <Row
              name="Extrato mensal (ABR/22).xls"
              size="849kb"
              date="18/03/2023"
              downloadLink="#"
            />
            <Row
              name="092231 - Despacho urgente.pdf"
              size="150kb"
              date="18/03/2023"
              downloadLink="#"
            />
            <Row
              name="092231 - Despacho urgente.pdf"
              size="1.9MB"
              date="18/03/2023"
              downloadLink="#"
            />
            <Row
              name="Extrato mensal (ABR/22).xls"
              size="849kb"
              date="18/03/2023"
              downloadLink="#"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
