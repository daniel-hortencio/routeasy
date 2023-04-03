import { useState, Fragment, ReactNode } from "react";
import Image from "next/image";

import { Menu, Transition } from "@headlessui/react";
import { Box } from "../Box";
import { Text } from "../Text";
import { Logo } from "../Logo";
import Icon from "../Icon";

interface Props {
  button: ReactNode;
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const MenuDropDown = ({ button }: Props) => {
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
          <div className="pb-1">
            <Menu.Item>
              <Text className="uppercase px-4 pt-3 pb-2 text-sm">
                Configuração de Conta
              </Text>
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "flex items-center px-4 py-2 text-sm"
                  )}
                >
                  <Icon name="FiLock" />
                  <span className="ml-2">Account settings</span>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "flex items-center px-4 py-2 text-sm"
                  )}
                >
                  <Icon name="MdAlternateEmail" />
                  <span className="ml-2">Support</span>
                </a>
              )}
            </Menu.Item>

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
          </div>

          <div className="border-t-2 border-backgroundGray pb-1">
            <Menu.Item>
              <button className="flex items-center px-4 py-2 text-sm">
                <Icon name="FiLogOut" /> <span className="ml-2">Sair</span>
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
