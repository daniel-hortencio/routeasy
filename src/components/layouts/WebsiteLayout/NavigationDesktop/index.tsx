'use client'

import Link from 'next/link'
import routes from '../Header/routes'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Icon from 'components/elements/Icon'
import { LinkDropDown } from '../LinkDropDown'

export const NavigationDesktop = () => {
  const pathname = usePathname()
  const [isOpenDropDown, setIsOpenDropDown] = useState(false)

  const getClassName = (isActive: boolean, isLast?: boolean) => {
    return `hover:text-primary-200 font-medium transition-all ${
      isActive && 'text-primary-200'
    }
    ${isLast && 'mr-8'}`
  }

  return (
    <nav className="flex items-center text-[15px] font-medium">
      {routes.map((route, index) =>
        route.href ? (
          <Link
            key={route.label}
            href={route.href}
            className={getClassName(
              pathname === route.href,
              index < routes.length - 1
            )}
          >
            {route.label}
          </Link>
        ) : (
          route?.sub_items?.length && (
            <LinkDropDown
              label={route.label}
              key={route.label}
              sub_items={route.sub_items}
              isActive={!!pathname?.startsWith('/solucoes')}
              isLast={index < routes.length - 1}
            />
          )
        )
      )}
      <div className="flex items-center ml-24 text-sm">
        <Link
          href="/"
          className="text-primary-100 hover:text-primary-200 transition-all text-gray"
        >
          Login
        </Link>
        <Link
          href="/demonstracao"
          className="ml-10 text-primary-100 hover:text-primary-200 border-[1px] rounded border-primary-100 hover:border-primary-200 transition-all h-12 w-36 flex items-center justify-center"
        >
          Demonstração
        </Link>
        <div className="hidden">
          <button className="text-white border-[1px] border-grayscale-500 h-12 px-[10px] flex items-center justify-center rounded ml-2">
            EN
          </button>
        </div>
      </div>
    </nav>
  )
}
