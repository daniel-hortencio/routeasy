import Image from 'next/image'
import { Section } from 'components/elements/Section'
import { ButtonPrimary } from 'components/elements/Button'

export const Banner = () => {
  return (
    <Section className="h-screen flex mb-12">
      <div className="flex h-full relative min-h-[640px]">
        <div className="md:max-w-xl md:mx-auto lg:mx-0 flex flex-col justify-center w-full h-full text-center lg:text-left">
          <h1 className="text-white uppercase font-semibold text-5xl lg:text-[50px]/[68px] pb-5">
            A melhor solução para{' '}
            <span className="text-primary-100">last-mile</span>
          </h1>
          <p className="font-normal text-base pb-8">
            Nossas soluções são a chave para aumentar a eficiência da sua
            operação. Acelere processos, reduza custos e ganhe mais
            produtividade com uma plataforma completa de otimização de rotas e
            gestão de entregas e coletas.
          </p>
          <div className="lg:w-56">
            <ButtonPrimary href="/">Quero uma demonstração</ButtonPrimary>
          </div>
        </div>
        <div className="hidden lg:block absolute w-[70%] -right-36 top-0 h-full">
          <div className="relative h-full">
            <Image
              style={{
                objectFit: 'contain'
              }}
              fill
              src="/images/pictures/home-banner-1.svg"
              alt="Banner"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}
