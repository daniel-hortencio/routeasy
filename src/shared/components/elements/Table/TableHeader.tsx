import { Box } from "..";

interface Props {
  titles: string[];
  className?: string;
}

export const TableHeader = ({ titles, className }: Props) => {
  return (
    <Box className={`p-1 md:pl-4 ${className}`}>
      {titles.map((title) => (
        <Box key={title} className="uppercase text-textGray-light text-sm pb-4">
          {title}
        </Box>
      ))}
    </Box>
  );
};
