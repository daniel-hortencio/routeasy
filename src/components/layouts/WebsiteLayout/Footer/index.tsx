import Icon from 'components/elements/Icon'
import { LinkExternal } from 'components/elements/LinkExternal/LinkExternal'
import { Section } from 'components/elements/Section'
import { Text, Title } from 'components/elements/Texts'
import Link from 'next/link'
import { FormNewsletter } from './FormNewsletter'

export const Footer = () => {
  const links_navegation = [
    { label: 'Início', href: '/' },
    { label: 'Soluções', href: 'solucoes' },
    { label: 'Sobre nós', href: 'sobre-nos' },
    { label: 'Trabalhe conosco', href: 'trabalhe-conosco' },
    { label: 'Contato', href: 'contato' }
  ]

  const links_solutions = [
    { label: 'Todas soluções', href: 'soluções' },
    { label: 'Roteirizador', href: 'roteirizacao' },
    { label: "API's", href: 'api' },
    { label: 'Onboarding', href: 'onboarding' }
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
    {
      label: 'Cases',
      href: 'https://routeasy.com.br/content/cases/'
    },
    {
      label: 'Materiais',
      href: 'https://routeasy.com.br/content/materiais-gratuitos/'
    }
  ]

  const links_legal = [
    { label: 'Politica de privacidade', href: '/' },
    { label: 'Termos de uso', href: '/' }
  ]

  const FooterLink = ({ href, label }) => {
    const className = 'text-sm hover:text-primary-100 mt-6 block font-light'

    return href.startsWith('http') ? (
      <LinkExternal href={href} className={className}>
        {label}
      </LinkExternal>
    ) : (
      <Link href={href} className={className}>
        {label}
      </Link>
    )
  }

  return (
    <Section className="pt-12 pb-8 border-t-2 border-primary-100">
      <div className="lg:grid grid-cols-5 mb-6 lg:mb-20 px-10">
        <div className="hidden lg:block">
          <p>Navegação</p>
          {links_navegation.map((link, index) => (
            <FooterLink key={index} href={link.href} label={link.label} />
          ))}
        </div>

        <div className="hidden lg:block">
          <p>Soluções</p>
          {links_solutions.map((link, index) => (
            <FooterLink key={index} href={link.href} label={link.label} />
          ))}
        </div>

        <div className="hidden lg:block">
          <p>Conteúdo</p>
          {links_routeasy.map((link, index) => (
            <FooterLink key={index} href={link.href} label={link.label} />
          ))}
        </div>

        <div className="hidden lg:block">
          <p>Legal</p>
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
            <LinkExternal
              className="h-14 w-14 lg:h-10 lg:w-10 flex items-center justify-center rounded-lg bg-grayscale-600"
              href="https://br.linkedin.com/company/routeasy"
            >
              <Icon name="FaLinkedin" size={20} />
            </LinkExternal>
            <LinkExternal
              className="h-14 w-14 lg:h-10 lg:w-10 flex items-center justify-center rounded-lg bg-grayscale-600"
              href="https://www.instagram.com/routeasy/"
            >
              <Icon name="FaInstagram" size={20} />
            </LinkExternal>
            <LinkExternal
              className="h-14 w-14 lg:h-10 lg:w-10 flex items-center justify-center rounded-lg bg-grayscale-600"
              href="https://www.facebook.com/routeasy/"
            >
              <Icon name="FaFacebookF" size={20} />
            </LinkExternal>
            <LinkExternal
              className="h-14 w-14 lg:h-10 lg:w-10 flex items-center justify-center rounded-lg bg-grayscale-600"
              href="https://www.youtube.com/c/CanalRoutEasy"
            >
              <Icon name="FaYoutube" size={20} />
            </LinkExternal>
          </div>
        </div>
      </div>

      <div className="border-y-2 border-grayscale-400 lg:flex lg:items-center justify-between py-9 px-10">
        <div className="lg:pr-32">
          <Title className="text-center text-base lg:text-left uppercase mb-1">
            Escreva-se em nossa newsletter
          </Title>
          <Text className="text-center lg:text-left mb-5 lg:mb-0 text-sm text-grayscale-100 font-light">
            Fique por dentro de tudo o que acontece com a Routeasy e com o
            mercado de logística.
          </Text>
        </div>

        <FormNewsletter />
      </div>

      <p className="text-center lg:text-left px-10 pt-7 text-sm text-grayscale-100 w-full h-full font-light">
        ©2022 Todos os direitos reservados - RoutEasy
      </p>
    </Section>
  )
}
