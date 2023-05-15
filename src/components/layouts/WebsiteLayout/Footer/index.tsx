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
        className="text-sm hover:text-primary mt-6 block"
      >
        {label}
      </Link>
    )
  }

  return (
    <Section className="pt-12 pb-8">
      <div className="grid grid-cols-5 mb-20 px-10">
        <div>
          <p>NAVEGAÇÃO</p>
          {links_navegation.map(link => (
            <FooterLink key={link.href} href={link.href} label={link.label} />
          ))}
        </div>

        <div>
          <p>SOLUÇÕES</p>
          {links_solutions.map(link => (
            <FooterLink key={link.href} href={link.href} label={link.label} />
          ))}
        </div>

        <div>
          <p>ROUTEASY</p>
          {links_routeasy.map(link => (
            <FooterLink key={link.href} href={link.href} label={link.label} />
          ))}
        </div>

        <div>
          <p>LEGAL</p>
          {links_legal.map(link => (
            <FooterLink key={link.href} href={link.href} label={link.label} />
          ))}
        </div>

        <div>
          <p className="mb-6">LINGUAGEM</p>

          <button className="bg-background-light rounded h-12 flex items-center px-2 justify-between w-36 mb-5">
            Português
          </button>

          <p className="mb-6">SOCIAL MEDIA</p>
        </div>
      </div>

      <div className="border-y-2 border-[#353860] flex items-center justify-between py-9 px-10">
        <div>
          <h1>Newsletter</h1>
          <p>
            Fique por dentro de tudo o que acontece com a Routeasy e com o
            mercado de logística.
          </p>
        </div>

        <div>
          <input placeholder="Escreva seu e-mail" />
          <button>INSCREVER</button>
        </div>
      </div>

      <p className="px-10 py-8">
        ©2022 Todos os direitos reservados - RoutEasy
      </p>
    </Section>
  )
}
