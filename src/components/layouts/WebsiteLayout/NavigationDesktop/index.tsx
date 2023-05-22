import Link from 'next/link'

export const NavigationDesktop = () => {
  const routes = [
    { label: 'Início', href: '/' },
    { label: 'Soluções', href: '/solucoes' },
    { label: 'Segmentos', href: '/' },
    { label: 'Conteúdos', href: '/' },
    { label: 'Sobre', href: '/' }
  ]

  return (
    <nav className="flex items-center">
      {routes.map((route, index) => (
        <Link
          key={index}
          href={route.href}
          className={`hover:text-primary-200 transition-all ${
            index < routes.length - 1 && 'mr-8'
          }`}
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
          href="/"
          className="ml-10 text-primary-100 hover:text-primary-200 border-2 rounded border-primary-100 hover:border-primary-200 transition-all h-12 w-36 flex items-center justify-center"
        >
          Demonstração
        </Link>
        <button className="border-[1px] border-grayscale-500 h-12 px-[10px] flex items-center justify-center rounded ml-2">
          EN
        </button>
      </div>
    </nav>
  )
}
