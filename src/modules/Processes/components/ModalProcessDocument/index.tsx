"use client";

import { useState } from "react";
import { Box, Button, Icon } from "../../../../shared/components/elements";
import { Text } from "../../../../shared/components/elements";

import "./styles.css";

const Header = () => {
  return (
    <Box className="hidden md:grid ModalProcessDocument__TableRow mb-4 ">
      <Text className="text-sm text-textGray-light">NOME</Text>
      <Text className="text-sm text-textGray-light">TAMANHO</Text>
      <Text className="text-sm text-textGray-light">DATA</Text>
      <Box className="w-8" />
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
    <>
      <Box className="hidden md:grid ModalProcessDocument__TableRow mb-2">
        <Text className="flex items-center">
          <Box className="fill-textGray-light mr-2">
            <Icon name="FilePdf" size={20} />
          </Box>
          <Text as="span" className="text-textGray-dark font-medium">
            {name}
          </Text>
        </Text>
        <Text className="text-textGray-dark">{size}</Text>
        <Text className="text-textGray-dark">{date}</Text>

        <Box className="flex justify-center transform -translate-y-2">
          <a
            href={downloadLink}
            className="flex justify-center items-center w-8 h-8  transition-all fill-primary hover:fill-primaryHover"
          >
            <Icon name="DownloadSimple" />
          </a>
        </Box>
      </Box>

      <Box className="md:hidden flex mb-2">
        <Box className="fill-textGray-light mr-2 pt-1px">
          <Icon name="FilePdf" size={20} />
        </Box>
        <a
          href={downloadLink}
          className=" text-primary hover:text-primaryHover font-medium"
        >
          {name}
        </a>
      </Box>
    </>
  );
};

export const ModalProcessDocument = () => {
  const [showLastPublications, setShowLastPublications] = useState(true);
  const [showAllDocuments, setShowAllDocuments] = useState(false);

  return (
    <Box>
      <Box className="mb-9">
        <Box className="w-full mb-7">
          <button
            onClick={() => setShowLastPublications(!showLastPublications)}
            className={`flex items-center text-textGray-light fill-textGray-light hover:fill-primary`}
          >
            <Text className="text-xl font-bold mr-2">Últimas publicações</Text>

            <Box
              className={`transition-all ${
                showLastPublications && "rotate-180"
              }`}
            >
              <Icon name="CaretDown" size={20} />
            </Box>
          </button>
        </Box>

        {showLastPublications ? (
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
        ) : null}
      </Box>

      <Box>
        <Box className="md:flex items-center w-full justify-between mb-6">
          <Box className="justify-start mb-4 md:mb-0">
            <button
              onClick={() => setShowAllDocuments(!showAllDocuments)}
              className={`flex items-center text-textGray-light fill-textGray-light hover:fill-primary`}
            >
              <Text className="text-xl font-bold mr-2">
                Todos os documentos
              </Text>
              <Box
                className={`transition-all ${showAllDocuments && "rotate-180"}`}
              >
                <Icon name="CaretDown" size={20} />
              </Box>
            </button>
          </Box>
          <Box className="hidden md:flex w-52">
            <Button
              text="Baixar todos os documentos"
              size="large"
              height="low"
            />
          </Box>
        </Box>

        {showAllDocuments && (
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
        )}
      </Box>
    </Box>
  );
};
