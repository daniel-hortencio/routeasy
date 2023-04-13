import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CircleFlag as CountryFlag } from 'react-circle-flags'
import {
  CountryDDIPhoneCodeType,
  countries_ddi_phone_code
} from '../../../../constants/countriesPhoneCode'
import { SelectBase } from '../SelectBase'
import Icon from '../../Icon'
import { Text } from '../../Text'
import { Box } from '../../Box'

import S from './styles.module.css'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const SelectCountryDDI = () => {
  const [selected, setSelected] = useState<CountryDDIPhoneCodeType>({
    name: 'Brasil',
    code: 'BR',
    ddi: '55'
  })

  const anything = 123

  anything = 'asdw'

  return (
    <SelectBase>
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <div className="relative h-full w-28 md:w-36">
              <Listbox.Button
                className={`${S.SelectCountryDDI__ListBoxButton} flex items-center justify-between relative w-full cursor-default rounded-full px-6 h-full text-left text-custom-gray-500 `}
              >
                <Box className="flex items-center">
                  <Box className="hidden md:flex mr-2 w-6 h-6 rounded-full items-center relative">
                    <CountryFlag countryCode={selected.code.toLowerCase()} />
                  </Box>
                  <Text>+{selected.ddi}</Text>
                </Box>
                <Box
                  className={`transition-all fill-custom-gray-300 ${
                    S.SelectCountryDDI__ListBoxButtonArrow
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
                <Listbox.Options className="absolute z-10 mt-1 max-h-56 max-w-xs overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {countries_ddi_phone_code
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map(country => (
                      <Listbox.Option
                        key={country.code}
                        className={({ active }) =>
                          classNames(
                            active
                              ? 'bg-custom-gray-200 text-white'
                              : 'text-gray-900',
                            'relative select-none py-2 pl-3 pr-9 cursor-pointer'
                          )
                        }
                        value={country}
                      >
                        {({ selected, active }) => (
                          <div className="flex">
                            <Box className="w-6 h-6">
                              <CountryFlag
                                countryCode={country.code.toLowerCase()}
                              />
                            </Box>
                            <Text className="text-custom-gray-500 mx-2 truncate">
                              {country.name}
                            </Text>
                            <Text className="text-custom-gray-300 whitespace-nowrap">
                              (+{country.ddi})
                            </Text>
                          </div>
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
