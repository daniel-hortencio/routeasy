'use client'

import { ButtonSecondary } from 'components/elements/Button'
import Icon from 'components/elements/Icon'
import Link from 'next/link'
import { useState } from 'react'

export const NavigationMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  const routes = [
    { label: 'Início', href: '/' },
    { label: 'Soluções', href: '/' },
    { label: 'Segmentos', href: '/' },
    { label: 'Conteúdos', href: '/' },
    { label: 'Sobre', href: '/' }
  ]

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="cursor-pointer border-2 border-background-light2 w-12 h-12 flex items-center justify-center"
      >
        <Icon name={isOpen ? 'FiX' : 'FiMenu'} size={24} />
      </button>
      <nav
        onClick={() => setIsOpen(false)}
        className={`pt-[124px] z-50 fixed h-screen top-0 left-0 overflow-hidden ${
          isOpen ? 'w-full' : 'w-0'
        }`}
      >
        <div className="flex flex-col justify-between bg-yellow-300 h-full w-full pt-16 px-6 pb-8">
          <div>
            {routes.map((route, index) => (
              <Link
                key={route.label}
                href={route.href}
                className={`font-semibold pl-4 mb-6 h-14 flex items-center border-l-4 border-primary text-lg uppercase hover:text-primary-dark transition-all`}
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
