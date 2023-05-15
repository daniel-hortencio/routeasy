import Link from 'next/link'

export const Navigation = () => {
  const routes = [
    { label: 'Início', href: '/' },
    { label: 'Soluções', href: '/' },
    { label: 'Segmentos', href: '/' },
    { label: 'Conteúdos', href: '/' },
    { label: 'Sobre', href: '/' }
  ]

  return (
    <nav className="flex items-center">
      {routes.map((route, index) => (
        <Link
          key={route.label}
          href={route.href}
          className={`hover:text-primary-dark transition-all ${
            index < routes.length - 1 && 'mr-8'
          }`}
        >
          {route.label}
        </Link>
      ))}

      <div className="flex items-center ml-24">
        <Link
          href="/"
          className="text-primary hover:text-primary-dark transition-all"
        >
          Login
        </Link>
        <Link
          href="/"
          className="ml-10 text-primary hover:text-primary-dark border-2 rounded border-primary hover:border-primary-dark transition-all h-12 w-36 flex items-center justify-center"
        >
          Demonstração
        </Link>
        <button className="border-[1px] border-[#282A48] h-12 px-[10px] flex items-center justify-center rounded ml-2">
          EN
        </button>
      </div>
    </nav>
  )
}
