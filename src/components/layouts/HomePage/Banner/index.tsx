import Image from 'next/image'
import { Section } from 'components/elements/Section'
import { ButtonPrimary } from 'components/elements/Button'

export const Banner = () => {
  return (
    <div className="relative">
      <Section className="h-screen flex">
        <div className="flex items-center h-full">
          <div className="lg:w-3/5 md:1/2 text-center md:text-left">
            <h1 className="text-white uppercase font-semibold text-5xl md:text-6xl pb-5">
              A melhor solução para{' '}
              <span className="text-primary-100">last-mile</span>
            </h1>
            <p className="font-normal text-base pb-8">
              Nossas soluções são a chave para aumentar a eficiência da sua
              operação. Acelere processos, reduza custos e ganhe mais
              produtividade com uma plataforma completa de otimização de rotas e
              gestão de entregas e coletas.
            </p>
            <div className="lg:w-40">
              <ButtonPrimary href="/">Quero saber mais</ButtonPrimary>
            </div>
          </div>
        </div>
        <div className="h-full absolute top-0 right-0 w-1/2 hidden md:block">
          <Image
            style={{ objectFit: 'cover' }}
            fill
            src="/images/pictures/home-banner.svg"
            alt="Banner"
          />
        </div>
      </Section>
    </div>
  )
}
