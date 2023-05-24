'use client'

import { ButtonSecondary } from 'components/elements/Button'
import Icon from 'components/elements/Icon'
import Link from 'next/link'
import { useState } from 'react'
import routes from '../Header/routes'
import { usePathname } from 'next/navigation'

export const NavigationMobile = () => {
  const pathname = usePathname()

  const getClassName = (isActive: boolean, index: number) => {
    return `font-semibold pl-4 mb-6 h-14 flex items-center border-l-2 text-lg uppercase hover:text-primary-200 transition-all ${
      isActive ? 'border-primary-200 text-primary-200' : 'border-transparent'
    }
    ${index < routes.length - 1 && 'mr-8'}`
  }

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="cursor-pointer border-2 border-grayscale-700 w-12 h-12 flex items-center justify-center"
      >
        <Icon name={isOpen ? 'FiX' : 'FiMenu'} size={24} />
      </button>
      <nav
        onClick={() => setIsOpen(false)}
        className={`pt-[124px] z-50 fixed h-screen top-0 left-0 overflow-hidden ${
          isOpen ? 'w-full' : 'w-0'
        }`}
      >
        <div className="bg-grayscale-700 flex flex-col justify-between h-full w-full pt-16 px-6 pb-8">
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
            <ButtonSecondary href="/">
              Solicite uma Demonstração
            </ButtonSecondary>
          </div>
        </div>
      </nav>
    </>
  )
}
