import Icon from 'components/elements/Icon'
import { Section } from 'components/elements/Section'
import { Text, Title } from 'components/elements/Texts'
import Link from 'next/link'

export const Footer = () => {
  const links_navegation = [
    { label: 'Início', href: '/' },
    { label: 'Soluções', href: 'solucoes' },
    { label: 'Segmentos', href: '/' },
    { label: 'Sobre nós', href: 'sobre-nos' },
    { label: 'Contato', href: 'contato' }
  ]

  const links_solutions = [
    { label: 'Roteirizador', href: 'roteirizacao' },
    { label: 'Automação', href: '/' },
    { label: 'Gestão de entregas', href: '/' },
    { label: 'Aplicativo', href: '/' },
    { label: 'Outros', href: '/' }
  ]

  const links_routeasy = [
    {
      label: 'Blog',
      href: 'https://routeasy.com.br/content/'
    },
    {
      label: 'Route Academy',
      href: 'https://routeasy.com.br/content/routingacademy/'
    },
    { label: 'Routeasy na mídia', href: '/' },
    { label: 'Trabalhe conosco', href: 'trabalhe-conosco' },
    { label: 'Eventos', href: '/' }
  ]

  const links_legal = [
    { label: 'Politica de privacidade', href: '/' },
    { label: 'Termos de uso', href: '/' }
  ]

  const FooterLink = ({ href, label }) => {
    return (
      <Link href={href} className="text-sm hover:text-primary-100 mt-6 block">
        {label}
      </Link>
    )
  }

  return (
    <Section className="pt-12 pb-8 border-t-2 border-primary-100">
      <div className="lg:grid grid-cols-5 mb-6 lg:mb-20 px-10">
        <div className="hidden lg:block">
          <p>NAVEGAÇÃO</p>
          {links_navegation.map((link, index) => (
            <FooterLink key={index} href={link.href} label={link.label} />
          ))}
        </div>

        <div className="hidden lg:block">
          <p>SOLUÇÕES</p>
          {links_solutions.map((link, index) => (
            <FooterLink key={index} href={link.href} label={link.label} />
          ))}
        </div>

        <div className="hidden lg:block">
          <p>ROUTEASY</p>
          {links_routeasy.map((link, index) => (
            <FooterLink key={index} href={link.href} label={link.label} />
          ))}
        </div>

        <div className="hidden lg:block">
          <p>LEGAL</p>
          {links_legal.map((link, index) => (
            <FooterLink key={index} href={link.href} label={link.label} />
          ))}
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <div className="hidden">
            <p className="mb-6">LINGUAGEM</p>

            <button className="text-white bg-grayscale-600 rounded h-12 flex items-center px-2 justify-between w-full mb-6 max-w-[272px]">
              Português
            </button>
          </div>

          <p className="mb-6">SOCIAL MEDIA</p>

          <div className="grid gap-4 lg:gap-1 grid-cols-4">
            <a
              className="h-14 w-14 lg:h-10 lg:w-10 flex items-center justify-center rounded-lg bg-grayscale-600"
              href="https://br.linkedin.com/company/routeasy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="FaLinkedin" size={20} />
            </a>
            <a
              className="h-14 w-14 lg:h-10 lg:w-10 flex items-center justify-center rounded-lg bg-grayscale-600"
              href="https://www.instagram.com/routeasy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="FaInstagram" size={20} />
            </a>
            <a
              className="h-14 w-14 lg:h-10 lg:w-10 flex items-center justify-center rounded-lg bg-grayscale-600"
              href="https://www.facebook.com/routeasy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="FaFacebookF" size={20} />
            </a>
            <a
              className="h-14 w-14 lg:h-10 lg:w-10 flex items-center justify-center rounded-lg bg-grayscale-600"
              href="https://www.youtube.com/c/CanalRoutEasy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="FaYoutube" size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-y-2 border-grayscale-400 lg:flex lg:items-center justify-between py-9 px-10">
        <div className="lg:pr-32">
          <Title className="text-center text-base lg:text-left uppercase mb-1">
            Escreva-se em nossa newsletter
          </Title>
          <Text className="text-center lg:text-left mb-5 lg:mb-0 text-sm text-grayscale-100">
            Fique por dentro de tudo o que acontece com a Routeasy e com o
            mercado de logística.
          </Text>
        </div>

        <div className="h-14 lg:h-12 flex items-center rounded overflow-hidden">
          <input
            placeholder="Escreva seu e-mail"
            className="bg-grayscale-600 h-full px-6 flex-auto"
          />
          <button className="bg-primary-100 h-full w-40 hover:bg-primary-200 text-white">
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
