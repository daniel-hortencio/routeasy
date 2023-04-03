import Image from "next/image";

import { Box } from "../../../elements/Box";
import { Button } from "../../../elements/Button";
import { Text } from "../../../elements/Text";

interface Props {
  desktopText: string;
  linkTo: string;
  desktopLinkText: string;
  mobileLinkText: string;
}

export const PublicLayoutHeader = ({
  desktopText,
  linkTo,
  desktopLinkText,
  mobileLinkText,
}: Props) => {
  return (
    <Box className="fixed flex top-0 left-0 w-full h-20 lg:h-28 backdrop-blur-lg z-20">
      <Box className="w-full max-w-6xl mx-auto flex items-center p-5 justify-between">
        <Image
          src="/logos/judit.svg"
          alt="Logo Judit"
          width={108}
          height={108}
          style={{
            objectFit: "cover",
          }}
        />
        <Box className="w-32 md:hidden">
          <Button
            text={mobileLinkText}
            onClick={() => {}}
            size="large"
            color="primary"
          />
        </Box>
        <Text className="text-white hidden md:block">
          {desktopText}{" "}
          <a
            href={linkTo}
            className="text-primary hover:text-primaryHover transition-all"
          >
            {desktopLinkText}
          </a>
        </Text>
      </Box>
    </Box>
  );
};
