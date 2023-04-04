import { Box } from "../../../../shared/components/elements";
import { Text } from "../../../../shared/components/elements";
import Select from "../Select";

interface Props {
  label: string;
  filterDays?: number[];
  data: number;
}

export const CardProcessesSummary = ({ label, filterDays, data }: Props) => {
  return (
    <Box className="bg-secondary p-4 sm:px-6 rounded-lg flex flex-col h-32">
      <Box as="header" className="flex flex-auto justify-between pb-3">
        <Text className="mr-4">{label}</Text>
        {/* <Text>{filterDays}</Text> */}

        {filterDays && (
          <Box className="transform -translate-y-2">
            <Select options={filterDays} />
          </Box>
        )}
      </Box>
      <Text className="text-4xl">{data}</Text>
    </Box>
  );
};
