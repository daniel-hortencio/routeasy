import { ReactNode } from "react";
import { Box, BoxElementType } from "../Box";

interface Props {
  children: ReactNode;
  as?: BoxElementType;
  className?: string;
}

export const Wrapper = ({ className, children, as }: Props) => {
  return (
    <Box as={as} className={className}>
      <Box className="w-full max-w-6xl p-5 mx-auto">{children}</Box>
    </Box>
  );
};
