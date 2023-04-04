"use client";

import Image from "next/image";
import { Box } from "../../../shared/components/elements";
import { Text } from "../../../shared/components/elements";
import { Wrapper } from "../../../shared/components/elements";
import { DashboardLayoutHeader } from "../../../shared/components/layouts/DashboardLayout/Header";
import { InputSearch } from "../../../shared/components/elements";

export default function SearchProcess() {
  return (
    <>
      <DashboardLayoutHeader />

      <Wrapper
        as="section"
        className="flex-auto flex flex-col justify-center pt-16 pb-20"
      >
        <Box className="text-center mb-12">
          <Text
            as="h1"
            className="font-extrabold text-2xl md:text-3xl lg:text-5xl mb-8 max-w-lg mx-auto"
          >
            Consulta processual
          </Text>

          <Text className="max-w-3xl mx-auto">
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Duis vehicula lacinia turpis et maximus.
          </Text>
        </Box>

        <Box className="mb-20 max-w-lg mx-auto">
          <InputSearch />
        </Box>

        <Box className="grid lg:grid-cols-3 gap-8 md:gap-12">
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
