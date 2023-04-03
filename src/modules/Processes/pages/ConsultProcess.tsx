"use client";

import Image from "next/image";
import { Box } from "../../../shared/components/elements/Box";
import { Text } from "../../../shared/components/elements/Text";
import { Wrapper } from "../../../shared/components/elements/Wrapper";
import { DashboardLayoutHeader } from "../../../shared/components/layouts/DashboardLayout/Header";

export default function ConsultProcess() {
  return (
    <>
      <DashboardLayoutHeader
        desktopLinkText=""
        desktopText=""
        linkTo=""
        mobileLinkText=""
      />

      <Wrapper as="section" className="flex-auto flex flex-col justify-center">
        <Box className="text-center">
          <Text
            as="h1"
            className="font-extrabold text-2xl md:text-3xl lg:text-5xl mb-8"
          >
            Consulta processual
          </Text>

          <Text>
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Duis vehicula lacinia turpis et maximus.
          </Text>
        </Box>

        <Box className="grid md:grid-cols-3 gap-12">
          <Box className="flex items-start">
            <Box className="pt-2">
              <Image
                src={`/images/icons/FolderSimpleLock.svg`}
                alt="Logo Judit"
                width={80}
                height={80}
              />
            </Box>
            <Box className="flex-auto pl-6">
              <Text as="h2" className="font-bold text-xl">
                Fusce faucibus sodales tellusitt amet
              </Text>
              <Text>
                Mauris sed luctus justo, rhoncus mollis libero. Quisque sed
                gravida lectus iaculis sapien in arcu.
              </Text>
            </Box>
          </Box>

          <Box className="flex items-start">
            <Box className="pt-2">
              <Image
                src={`/images/icons/Cpu.svg`}
                alt="Logo Judit"
                width={80}
                height={80}
              />
            </Box>
            <Box className="flex-auto pl-6">
              <Text as="h2" className="font-bold text-xl">
                Vestibulum maximus laoreet sapien, sed convallis
              </Text>
              <Text>
                Etiam nec bibendum nisl. Duis lorem felis, porttitor eu
                condimentum eu, vestibulum et lectus.
              </Text>
            </Box>
          </Box>

          <Box className="flex items-start">
            <Box className="pt-2">
              <Image
                src={`/images/icons/Database.svg`}
                alt="Logo Judit"
                width={80}
                height={80}
              />
            </Box>
            <Box className="flex-auto pl-6">
              <Text as="h2" className="font-bold text-xl">
                Duis eros orci, blandit nec dolor ac, fringilla
              </Text>
              <Text>
                Maecenas molestie, dolor id eleifend volutpat, elit odio dictum
                lectus, ut laoreet diam ipsum at mauris.
              </Text>
            </Box>
          </Box>
        </Box>
      </Wrapper>
    </>
  );
}
