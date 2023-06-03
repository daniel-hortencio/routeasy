import Image from 'next/image'
import { Section } from 'components/elements/Section'
import { ButtonSecondary } from 'components/elements/Button'
import { TextHighlight, Title } from 'components/elements/Texts'

export const Banner = () => {
  return (
    <Section className="lg:h-screen flex mb-36 lg:mb-12">
      <div className="flex items-center lg:h-full relative pt-56 lg:pt-0">
        <div className="md:max-w-xl md:mx-auto lg:pr-20 lg:mx-0 flex flex-col justify-center w-full h-full text-center lg:text-left">
          <Title className="text-5xl lg:text-[50px]/[68px]">
            Carreira ROUT<TextHighlight>EASY</TextHighlight>
          </Title>
          <p className="font-normal text-base pb-8">
            Nossas soluções são a chave para aumentar a eficiência da sua
            operação. Acelere processos, reduza custos e ganhe mais
            produtividade com uma plataforma completa de otimização de rotas e
            gestão de entregas e coletas.
          </p>
          <div className="lg:w-56">
            <ButtonSecondary href="/demonstracao">
              Quero uma demonstração
            </ButtonSecondary>
          </div>
        </div>
        <div className="hidden w-full h-full lg:flex items-center">
          <div className="grid gap-5 grid-cols-3 w-full ">
            <div className="grid gap-5 translate-y-12">
              <div className="w-full pt-[110%] rounded-md saturate-0 relative">
                <Image
                  fill
                  alt="Colaborador"
                  src="/images/pictures/avatar-employee-1.png"
                  style={{
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div className="w-full pt-[110%] rounded-md saturate-0 relative">
                <Image
                  fill
                  alt="Colaborador"
                  src="/images/pictures/avatar-employee-1.png"
                  style={{
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div className="w-full pt-[110%] rounded-md saturate-0 relative">
                <Image
                  fill
                  alt="Colaborador"
                  src="/images/pictures/avatar-employee-1.png"
                  style={{
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
            <div className="grid gap-5 -translate-y-10">
              <div className="w-full pt-[110%] rounded-md saturate-0 relative">
                <Image
                  fill
                  alt="Colaborador"
                  src="/images/pictures/avatar-employee-1.png"
                  style={{
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div className="w-full pt-[110%] rounded-md saturate-0 relative">
                <Image
                  fill
                  alt="Colaborador"
                  src="/images/pictures/avatar-employee-1.png"
                  style={{
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div className="w-full pt-[110%] rounded-md saturate-0 relative">
                <Image
                  fill
                  alt="Colaborador"
                  src="/images/pictures/avatar-employee-1.png"
                  style={{
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
            <div className="grid gap-5">
              <div className="w-full pt-[110%] rounded-md saturate-0 relative">
                <Image
                  fill
                  alt="Colaborador"
                  src="/images/pictures/avatar-employee-1.png"
                  style={{
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div className="w-full pt-[110%] rounded-md saturate-0 relative">
                <Image
                  fill
                  alt="Colaborador"
                  src="/images/pictures/avatar-employee-1.png"
                  style={{
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div className="w-full pt-[110%] rounded-md saturate-0 relative">
                <Image
                  fill
                  alt="Colaborador"
                  src="/images/pictures/avatar-employee-1.png"
                  style={{
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
