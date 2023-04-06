"use client";

import { Fragment, ReactNode, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Box } from "../Box";
import { Text } from "../Text";
import Icon from "../Icon";

interface Props {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  headerAlign?: "left" | "center" | "right";
  children: ReactNode;
  footer?: ReactNode;
}

export default function Modal({
  title,
  isOpen,
  headerAlign = "left",
  onClose,
  description,
  children,
  footer,
}: Props) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-20"
        initialFocus={cancelButtonRef}
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg md:max-w-screen-md rounded-3xl ">
                <Box className="p-8 ">
                  <Dialog.Title as="h3">
                    <button
                      type="button"
                      className="absolute top-5 right-5 p-0.5 fill-textGray-light hover:fill-primary transition-all"
                      onClick={onClose}
                      ref={cancelButtonRef}
                    >
                      <Icon name="X" />
                    </button>
                    <Box as="header">
                      <Text
                        className={`font-bold text-2xl mb-4 text-${headerAlign}`}
                      >
                        {title}
                      </Text>

                      <Text className={`text-${headerAlign}`}>
                        {description}
                      </Text>
                    </Box>
                  </Dialog.Title>

                  <Box className="pt-6">{children}</Box>
                </Box>
                {footer && (
                  <Box
                    as="footer"
                    className="p-8 border-t-1 border-backgroundGrayLight"
                  >
                    {footer}
                  </Box>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
