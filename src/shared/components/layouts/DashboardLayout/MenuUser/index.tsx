import { useState, Fragment, ReactNode, Dispatch, SetStateAction } from 'react'
import Image from 'next/image'

import { Menu, Transition } from '@headlessui/react'
import { Box } from '../../../elements/Box'
import { Text } from '../../../elements/Text'
import Icon from '../../../elements/Icon'
import Link from 'next/link'

interface Props {
  button: ReactNode
  onChange: Dispatch<SetStateAction<boolean>>
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const MenuUser = ({ button, onChange }: Props) => {
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
        beforeEnter={() => onChange(true)}
        beforeLeave={() => onChange(false)}
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            <Text className="uppercase px-4 pt-3 pb-2 text-sm text-custom-gray-300">
              Configuração de Conta
            </Text>
          </Menu.Item>

          <Box className=" py-2">
            <Menu.Item>
              {({ active }) => {
                return (
                  <Link href="#">
                    <Text
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'flex items-center px-4 py-2 text-sm fill-custom-gray-300'
                      )}
                    >
                      <Icon name="LockSimple" />
                      <span className="ml-2">Alterar senha</span>
                    </Text>
                  </Link>
                )
              }}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="#">
                  <Text
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex items-center px-4 py-2 text-sm fill-custom-gray-300'
                    )}
                  >
                    <Icon name="At" />
                    <span className="ml-2">Alterar email</span>
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

          <Box className="border-t-2 border-custom-gray-100 py-2">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    active ? 'bg-gray-100 ' : '',
                    'flex items-center px-4 py-2 text-sm w-full text-danger hover:text-danger-dark fill-danger hover:fill-danger-dark'
                  )}
                >
                  <Box className="mr-2">
                    <Icon name="SignOut" />
                  </Box>
                  Sair
                </button>
              )}
            </Menu.Item>
          </Box>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
