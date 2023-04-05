import { Box } from "../../../../shared/components/elements";
import { Button } from "../../../../shared/components/elements";
import { Icon } from "../../../../shared/components/elements";
import { Text } from "../../../../shared/components/elements";

interface Props {
  isMonitoring: boolean;
}

export const TimeLine = ({ isMonitoring }: Props) => {
  return (
    <Box>
      <Box className="mb-7">
        {!isMonitoring && (
          <>
            <Box className="flex items-center mb-5">
              <Box className="w-1 h-1 mr-5 bg-textGray-light rounded-full" />
              <Text className="text-textGray-dark uppercase text-sm">
                01/04/2023 · HOJE
              </Text>
            </Box>
            <Box className="border-l-2 pl-5 border-dotted border-gray-300">
              <Box className="bg-white rounded-lg p-4 md:p-6 mb-5 shadow-md">
                <Text as="h3" className="text-lg font-bold mb-2">
                  Podem existir novas movimentações
                </Text>
                <Text className="mb-6">
                  Atualize ou volte a monitorar este processo para verificar se
                  há novas informações em todos os tribunais e Diários Oficiais.
                </Text>

                <Box className="md:flex">
                  <Box className="w-52 mr-5 mb-2 md:mb-0">
                    <Button text="Ativar Processo" size="large" />
                  </Box>
                  <Box className="w-56">
                    <Button text="Ativar Monitoramento" size="large" />
                  </Box>
                </Box>
              </Box>
            </Box>
          </>
        )}

        <Box className="flex items-center mb-5">
          <Box className="w-1 h-1 mr-5 bg-textGray-light rounded-full" />
          <Text className="text-textGray-dark uppercase text-sm">
            24/02/2023 · há 13 dias
          </Text>
        </Box>
        <Box className="border-l-2 pl-5 border-dotted border-gray-300">
          <Box className="bg-white rounded-lg p-4 md:p-6 mb-5 shadow-md">
            <Text as="h3" className="text-lg font-bold mb-2">
              Andamento
            </Text>
            <Text>
              Cumpra-se o despacho no apenso, sem prejuízo junte o exequente
              cópia da certidão junto ao Registro de Imóveis do bem que pretende
              ver penhorado.
            </Text>
          </Box>
          <Box className="bg-white rounded-lg p-6 shadow-md">
            <Text as="h3" className="text-lg font-bold mb-2">
              Publicação
            </Text>
            <Text>Comarca da Capital</Text>
            <Text className="font-bold">Varas Cíveis</Text>
            <Text>6ª Vara Cível</Text>
            <Text className="font-bold">
              Juiz Titular: Luciana de Oliveira Leal Halbritter
            </Text>
            <Text className="font-bold">
              Chefe de Serventia: Marcia Teixeira Amaral
            </Text>
            <Text>Expediente do Dia: 26/01/2023</Text>
            <Text>Execução de Título Extrajudicial - Cpc</Text>
            <Text>
              <Text as="strong" className="font-bold">
                Proc.
              </Text>{" "}
              <Text
                as="span"
                className="text-primary font-bold hover:text-primaryHover underline"
              >
                {" "}
                0101014-15.2006.8.19.0001{" "}
              </Text>
              <Text as="strong" className="font-bold">
                (2XXX.001.1XX005-5)
              </Text>{" "}
              -{" "}
              <Text
                as="span"
                className="text-primary hover:text-primaryHover underline"
              >
                CAIXA DE PREVIDENCIA DOS FUNCIONARIOS DO BANCO DO BRASIL PREVI{" "}
              </Text>
              (Adv(s). Dr(a).{" "}
              <Text
                as="span"
                className="text-primary hover:text-primaryHover underline"
              >
                ALEXANDRE GHAZI
              </Text>{" "}
              (OAB/RJ-070771) X{" "}
              <Text
                as="span"
                className="text-primary hover:text-primaryHover underline"
              >
                SERGIO MAURICIO CARNEIRO
              </Text>{" "}
              (Adv(s). Dr(a). ERICA CARLA SILVA DE SOUSA ANDRADE
              (OAB/RJ-116306), Dr(a).{" "}
              <Text
                as="span"
                className="text-primary hover:text-primaryHover underline"
              >
                RODRIGO LESSA PEREIRA
              </Text>{" "}
              (OAB/RJ-131983) Despacho: Cumpra-se o despacho no apenso, sem
              prejuízo junte o exequente cópia da certidão junto ao Registro de
              Imóveis do bem que pretende ver penhorado.
            </Text>
          </Box>
        </Box>
      </Box>

      <Box className="mb-7">
        <Box className="flex items-center mb-5">
          <Box className="w-1 h-1 mr-5 bg-textGray-light rounded-full" />
          <Text className="text-textGray-dark uppercase text-sm">
            18/01/2023 · mês passado
          </Text>
        </Box>
        <Box className="border-l-2 pl-5 border-dotted border-gray-300">
          <Box className="bg-white rounded-lg p-4 md:p-6 mb-5 shadow-md">
            <Text as="h3" className="text-lg font-bold mb-2">
              Andamento
            </Text>
            <Text className="mb-5">
              Certifico, que trasladei cópias conforme determinado no despacho
              de fls. 944 dos autos em apenso. 0059693-63/2007, bem como
              desapensei o mencionado processo para remete-los ao arquivo.
            </Text>

            <Box className="w-52">
              <Button
                size="large"
                text={
                  <>
                    <Box className="flex items-center font-semibold">
                      <Box className="mr-2">
                        <Icon name="BsFiletypePdf" size={24} />
                      </Box>
                      Despacho.pdf
                    </Box>
                  </>
                }
                color="secondary"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
