'use client'

import { ButtonSecondary } from 'components/elements/Button'
import Icon from 'components/elements/Icon'
import Link from 'next/link'
import { Dispatch, SetStateAction, useState } from 'react'
import routes from '../Header/routes'
import { usePathname } from 'next/navigation'

interface Props {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const NavigationMobile = ({ isOpen, setIsOpen }: Props) => {
  const pathname = usePathname()

  const getClassName = (isActive: boolean, index: number) => {
    return `font-semibold pl-4 mb-6 h-14 flex items-center border-l-2 text-lg uppercase hover:text-primary-200 transition-all ${
      isActive ? 'border-primary-200 text-primary-200' : 'border-transparent'
    }
    ${index < routes.length - 1 && 'mr-8'}`
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="cursor-pointer border-2 border-grayscale-500 w-12 h-12 flex items-center justify-center text-white"
      >
        <Icon name={isOpen ? 'FiX' : 'FiMenu'} size={24} />
      </button>
      <nav
        onClick={() => setIsOpen(false)}
        className={`pt-[124px] z-50 fixed h-screen top-0 left-0 transition-opacity overflow-hidden ${
          isOpen ? 'w-full opacity-100' : 'w-0 opacity-0'
        }`}
      >
        <div className="border-t-2 border-primary bg-grayscale-700 flex flex-col justify-between h-full w-full pt-16 px-6 pb-8">
          <div>
            {routes.map((route, index) => (
              <Link
                key={index}
                href={route.href}
                className={getClassName(pathname === route.href, index)}
              >
                {route.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center">
            <ButtonSecondary href="/demonstracao">
              Solicite uma Demonstração
            </ButtonSecondary>
          </div>
        </div>
      </nav>
    </>
  )
}
