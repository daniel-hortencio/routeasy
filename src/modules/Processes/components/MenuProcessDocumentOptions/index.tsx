import { useState, Fragment, ReactNode } from "react";
import Link from "next/link";

import { Menu, Transition } from "@headlessui/react";
import { Box } from "../../../../shared/components/elements";
import { Text } from "../../../../shared/components/elements/Text";
import Icon from "../../../../shared/components/elements/Icon";

interface Props {
  button: ReactNode;
  cancelMonitoring: () => void;
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const MenuProcessDocumentOptions = ({
  button,
  cancelMonitoring,
}: Props) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex">{button}</Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            <Text className="uppercase px-4 pt-3 pb-2 text-sm">Opções</Text>
          </Menu.Item>

          <Box className=" py-2">
            <Menu.Item>
              {({ active }) => (
                <Link href="#">
                  <Text
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "flex items-center px-4 py-2 text-sm"
                    )}
                  >
                    <Icon name="BsFiletypeJson" />
                    <span className="ml-2">Exportar JSON</span>
                  </Text>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="#">
                  <Text
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "flex items-center px-4 py-2 text-sm"
                    )}
                  >
                    <Icon name="BsFiletypePdf" />
                    <span className="ml-2">Exportar PDF</span>
                  </Text>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="#">
                  <Text
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "flex items-center px-4 py-2 text-sm"
                    )}
                  >
                    <Icon name="BsPrinter" />
                    <span className="ml-2">Imprimir</span>
                  </Text>
                </Link>
              )}
            </Menu.Item>
          </Box>

          {/*  <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block w-full px-4 py-2 text-left text-sm"
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form> */}

          <Box className="border-t-2 border-backgroundGray py-2">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={cancelMonitoring}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "flex items-center px-4 py-2 text-sm w-full hover:text-red-600"
                  )}
                >
                  <Box className="mr-2">
                    <Icon name="FiLogOut" />
                  </Box>
                  Cancelar monitoramento
                </button>
              )}
            </Menu.Item>
          </Box>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
