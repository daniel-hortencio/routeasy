import { Box } from "..";

interface Props {
  titles: string[];
}

export const TableHeader = ({ titles }: Props) => {
  return (
    <Box className="TableHeader p-1 md:pl-4">
      {titles.map((title) => (
        <Box key={title} className="uppercase text-textGray-light text-sm pb-4">
          {title}
        </Box>
      ))}
    </Box>
  );
};
