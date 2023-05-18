import Icon from 'components/elements/Icon'
import { Section } from 'components/elements/Section'
import Link from 'next/link'

export const Footer = () => {
  const links_navegation = [
    { label: 'Início', href: '/' },
    { label: 'Soluções', href: '/' },
    { label: 'Segmentos', href: '/' },
    { label: 'Sobre nós', href: '/' },
    { label: 'Contato', href: '/' }
  ]

  const links_solutions = [
    { label: 'Roteirizador', href: '/' },
    { label: 'Automação', href: '/' },
    { label: 'Gestão de entregas', href: '/' },
    { label: 'Aplicativo', href: '/' },
    { label: 'Outros', href: '/' }
  ]

  const links_routeasy = [
    { label: 'Blog', href: '/' },
    { label: 'Route Academy', href: '/' },
    { label: 'Routeasy na mídia', href: '/' },
    { label: 'Trabalhe conosco', href: '/' },
    { label: 'Eventos', href: '/' }
  ]

  const links_legal = [
    { label: 'Politica de privacidade', href: '/' },
    { label: 'Termos de uso', href: '/' }
  ]

  const FooterLink = ({ href, label }) => {
    return (
      <Link
        key={href}
        href={href}
        className="text-sm hover:text-primary-100 mt-6 block"
      >
        {label}
      </Link>
    )
  }

  return (
    <Section className="pt-12 pb-8 border-t-2 border-primary-100">
      <div className="lg:grid grid-cols-5 mb-6 lg:mb-20 px-10">
        <div className="hidden lg:block">
          <p>NAVEGAÇÃO</p>
          {links_navegation.map(link => (
            <FooterLink key={link.href} href={link.href} label={link.label} />
          ))}
        </div>

        <div className="hidden lg:block">
          <p>SOLUÇÕES</p>
          {links_solutions.map(link => (
            <FooterLink key={link.href} href={link.href} label={link.label} />
          ))}
        </div>

        <div className="hidden lg:block">
          <p>ROUTEASY</p>
          {links_routeasy.map(link => (
            <FooterLink key={link.href} href={link.href} label={link.label} />
          ))}
        </div>

        <div className="hidden lg:block">
          <p>LEGAL</p>
          {links_legal.map(link => (
            <FooterLink key={link.href} href={link.href} label={link.label} />
          ))}
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <p className="mb-6">LINGUAGEM</p>

          <button className="bg-grayscale-600 rounded h-12 flex items-center px-2 justify-between w-full mb-6 max-w-[272px]">
            Português
          </button>

          <p className="mb-6">SOCIAL MEDIA</p>

          <div className="grid gap-4 lg:gap-1 grid-cols-4">
            <a
              className="h-14 w-14 lg:h-10 lg:w-10 flex items-center justify-center rounded-lg bg-grayscale-600"
              href="/"
              target="_blank"
              rel="noopener"
            >
              <Icon name="FaLinkedin" size={20} />
            </a>
            <a
              className="h-14 w-14 lg:h-10 lg:w-10 flex items-center justify-center rounded-lg bg-grayscale-600"
              href="/"
              target="_blank"
              rel="noopener"
            >
              <Icon name="FaInstagram" size={20} />
            </a>
            <a
              className="h-14 w-14 lg:h-10 lg:w-10 flex items-center justify-center rounded-lg bg-grayscale-600"
              href="/"
              target="_blank"
              rel="noopener"
            >
              <Icon name="FaFacebookF" size={20} />
            </a>
            <a
              className="h-14 w-14 lg:h-10 lg:w-10 flex items-center justify-center rounded-lg bg-grayscale-600"
              href="/"
              target="_blank"
              rel="noopener"
            >
              <Icon name="FaYoutube" size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-y-2 border-grayscale-400 lg:flex lg:items-center justify-between py-9 px-10">
        <div className="lg:pr-32">
          <h1 className="text-center lg:text-left uppercase mb-1">
            Escreva-se em nossa newsletter
          </h1>
          <p className="text-center lg:text-left mb-5 lg:mb-0 text-sm text-grayscale-100">
            Fique por dentro de tudo o que acontece com a Routeasy e com o
            mercado de logística.
          </p>
        </div>

        <div className="h-14 lg:h-12 flex items-center rounded overflow-hidden">
          <input
            placeholder="Escreva seu e-mail"
            className="bg-[#1A1C30] h-full px-6 flex-auto"
          />
          <button className="bg-primary-100 h-full w-40 hover:bg-primary-200">
            INSCREVER
          </button>
        </div>
      </div>

      <p className="text-center lg:text-left px-10 pt-7 text-sm text-grayscale-100 w-full h-full">
        ©2022 Todos os direitos reservados - RoutEasy
      </p>
    </Section>
  )
}
