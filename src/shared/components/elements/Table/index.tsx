import Link from "next/link";
import { Box } from "..";
import { Icon } from "..";
import { Text } from "..";

import "./styles.css";
import { TableHeader } from "./TableHeader";

type TableColumn = {
  title: string;
};

interface TableColumnsDefinition {
  columns: TableColumn[];
  data: any;
  RowComponent: (data: any) => JSX.Element;
}

export const Table = ({
  columns,
  data,
  RowComponent,
}: TableColumnsDefinition) => {
  return (
    <Box className="w-full ">
      <TableHeader titles={columns.map((col) => col.title)} />

      {data?.map((row_data) => (
        <RowComponent key={row_data.id} {...row_data} />
      ))}
    </Box>
  );
};
