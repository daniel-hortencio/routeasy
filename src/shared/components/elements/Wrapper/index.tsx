import { ReactNode } from "react";
import { Box, BoxElementType } from "../Box";

interface Props {
  children: ReactNode;
  as?: BoxElementType;
  className?: string;
  noLimitWidth?: boolean;
}

export const Wrapper = ({ className, children, as, noLimitWidth }: Props) => {
  return (
    <Box as={as} className={className}>
      <Box className={`w-full  p-5 mx-auto ${!noLimitWidth && "max-w-6xl"}`}>
        {children}
      </Box>
    </Box>
  );
};
