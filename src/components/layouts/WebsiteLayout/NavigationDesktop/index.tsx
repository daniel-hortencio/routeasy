'use client'
import Link from 'next/link'
import routes from '../Header/routes'
import { usePathname } from 'next/navigation'

export const NavigationDesktop = () => {
  const pathname = usePathname()

  const getClassName = (isActive: boolean, index: number) => {
    return `hover:text-primary-200 transition-all ${
      isActive && 'text-primary-200'
    }
    ${index < routes.length - 1 && 'mr-8'}`
  }

  return (
    <nav className="flex items-center">
      {routes.map((route, index) => (
        <Link
          key={index}
          href={route.href}
          className={getClassName(pathname === route.href, index)}
        >
          {route.label}
        </Link>
      ))}

      <div className="flex items-center ml-24">
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
        <button className="text-white border-[1px] border-grayscale-500 h-12 px-[10px] flex items-center justify-center rounded ml-2">
          EN
        </button>
      </div>
    </nav>
  )
}
