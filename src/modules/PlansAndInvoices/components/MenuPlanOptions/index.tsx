'use client'

import { Fragment, ReactNode } from 'react'
import Link from 'next/link'

import { Menu, Transition } from '@headlessui/react'
import { Box } from '../../../../shared/components/elements'
import { Text } from '../../../../shared/components/elements/Text'
import Icon from '../../../../shared/components/elements/Icon'

interface Props {
  button: ReactNode
  isCanceled?: boolean
  // onChange: Dispatch<SetStateAction<boolean>>;
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const MenuPlanOptions = ({ button, isCanceled }: Props) => {
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
        /* beforeEnter={() => onChange(true)}
        beforeLeave={() => onChange(false)} */
      >
        <Menu.Items className="absolute w-60 right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            <Text className="uppercase px-4 pt-3 pb-2 text-sm text-custom-gray-300">
              Opções
            </Text>
          </Menu.Item>

          <Box className=" py-2">
            <Menu.Item>
              {({ active }) => (
                <Link href="#">
                  <Text
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex items-center px-4 py-2 text-sm fill-custom-gray-300'
                    )}
                  >
                    <Icon name="FilePdf" />
                    <span className="ml-2">Exportar todas as faturas</span>
                  </Text>
                </Link>
              )}
            </Menu.Item>
            {!isCanceled && (
              <Menu.Item>
                {({ active }) => (
                  <Link href="#">
                    <Text
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'flex items-center px-4 py-2 text-sm fill-custom-gray-300'
                      )}
                    >
                      <Icon name="SmileySad" />
                      <span className="ml-2">Reduzir meu plano</span>
                    </Text>
                  </Link>
                )}
              </Menu.Item>
            )}
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

          {!isCanceled && (
            <Box className="border-t-2 border-custom-gray-100 py-2">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={classNames(
                      active ? 'bg-gray-100 ' : '',
                      'flex items-center px-4 py-2 text-sm w-full text-danger hover:text-danger-dark fill-danger hover:fill-danger-dark'
                    )}
                  >
                    <Icon name="XCircle" size={22} />
                    <span className="ml-2">Cancelar assinatura</span>
                  </button>
                )}
              </Menu.Item>
            </Box>
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
