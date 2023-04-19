import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { SelectBase } from '../SelectBase'
import Icon from '../../Icon'
import { Text } from '../../Text'
import { Box } from '../../Box'

import S from './styles.module.css'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const SelectSimple = () => {
  const [selected, setSelected] = useState({
    name: 'Todos'
  })

  return (
    <SelectBase className="border-1 border-custom-gray-100 w-full">
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <div className="relative h-full w-full">
              <Listbox.Button
                className={`${S.SelectSimple__ListBoxButton} flex items-center justify-between relative w-full cursor-default rounded-full px-6 h-full text-left text-custom-gray-500 `}
              >
                <Text>{selected.name}</Text>
                <Box
                  className={`transition-all fill-custom-gray-300 ${
                    S.SelectSimple__ListBoxButtonArrow
                  } ${open && 'rotate-180'}`}
                >
                  <Icon name="CaretDown" size={20} />{' '}
                </Box>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {[
                    { name: 'Todos' },
                    { name: 'Tribunal 1' },
                    { name: 'Tribunal 2' },
                    { name: 'Tribunal 3' },
                    { name: 'Tribunal 4' }
                  ]
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map(tribunal => (
                      <Listbox.Option
                        key={tribunal.name}
                        className={({ active }) =>
                          classNames(
                            active
                              ? 'bg-custom-gray-200 text-white'
                              : 'text-gray-900',
                            'relative select-none py-2 pl-3 pr-9 cursor-pointer'
                          )
                        }
                        value={tribunal}
                      >
                        {({ selected, active }) => (
                          <Text className="text-custom-gray-500 mx-2 truncate">
                            {tribunal.name}
                          </Text>
                        )}
                      </Listbox.Option>
                    ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </SelectBase>
  )
}