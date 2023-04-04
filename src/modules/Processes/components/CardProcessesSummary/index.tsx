import { Listbox, Transition } from "@headlessui/react";

import { Box } from "../../../../shared/components/elements/Box";
import { Text } from "../../../../shared/components/elements/Text";
import Select from "../Select";

interface Props {
  label: string;
  filterDays?: number[];
  data: number;
}

export const CardProcessesSummary = ({ label, filterDays, data }: Props) => {
  return (
    <Box className="bg-secondary px-6 py-4 rounded-lg">
      <Box as="header" className="flex justify-between items-center pb-3">
        <Text>{label}</Text>
        {/* <Text>{filterDays}</Text> */}

        {filterDays && <Select options={filterDays} />}
      </Box>
      <Text className="text-4xl">{data}</Text>
    </Box>
  );
};
