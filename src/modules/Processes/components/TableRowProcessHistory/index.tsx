import Link from "next/link";
import { Box, Icon, Text } from "../../../../shared/components/elements";

interface Props {
  id: string;
  updated_at: string;
  number: string;
  processo: string;
  tribunal: string;
  tipo: string;
}

export const TableRowProcessHistory = ({
  id,
  updated_at,
  number,
  processo,
  tribunal,
  tipo,
}: Props) => {
  return (
    <Link href={`/dashboard/processos/${id}`}>
      <Box className="TableRow shadow-md bg-white rounded-lg overflow-hidden p-1 md:pl-4 md:h-14 hover:ring-2 ring-primary transition-all">
        <Box className="hidden TableRowData md:grid p-4 md:p-0">
          <Box className="flex items-center">
            <Text>{updated_at}</Text>
          </Box>
          <Box className="flex items-center">
            <Text>{number}</Text>
          </Box>
          <Box className="flex items-center">
            <Text className="font-bold">{processo}</Text>
          </Box>
          <Box className="flex items-center">
            <Text>{tribunal}</Text>
          </Box>
          <Box className="flex items-center">
            <Text>{tipo}</Text>
          </Box>
        </Box>

        <Box as="ul" className="md:hidden p-4">
          <Text className="font-bold mb-2 text-lg">{processo}</Text>
          <Text className="flex items-center">
            <Box className="w-1 h-1 bg-textGray-dark mr-2 rounded-full" />
            Atualizado em {updated_at}
          </Text>
          <Text className="flex items-center">
            <Box className="w-1 h-1 bg-textGray-dark mr-2 rounded-full" />
            Nº {number}
          </Text>
          <Text className="flex items-center">
            <Box className="w-1 h-1 bg-textGray-dark mr-2 rounded-full" />
            Tribunal {tribunal}
          </Text>
          <Text className="flex items-center">
            <Box className="w-1 h-1 bg-textGray-dark mr-2 rounded-full" />
            Consulta {tipo}
          </Text>
        </Box>

        <Box className="bg-secondary fill-primary rounded-md flex items-center justify-center h-full transition-all TableRow__IconFolder">
          <Icon name="FolderSimple" size={24} />
        </Box>
      </Box>
    </Link>
  );
};
