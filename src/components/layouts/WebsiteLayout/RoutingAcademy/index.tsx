import { ButtonWhite } from 'components/elements/Button'
import { Section } from 'components/elements/Section'
import Image from 'next/image'
import { Text } from 'components/elements/Texts'

export const RoutingAcademy = () => {
  return (
    <Section className="pb-20 lg:pb-28">
      <div className="relative overflow-hidden rounded-3xl w-full text-center px-5 md:px-20 lg:px-48 py-10 md:py-11 pb-16">
        <Image
          src="/images/pictures/fundo_routing_academy.png"
          fill
          alt="Background"
          style={{ objectFit: 'cover' }}
        />
        <div className="relative mx-auto w-16 h-16 mb-8 md:mb-10">
          <Image src="/images/logos/union.svg" fill alt="Routing Academy" />
        </div>
        <div className="relative mx-auto max-w-[514px] h-[64px]">
          <Image
            src="/images/logos/logo_routing_academy.png"
            fill
            alt="Routing Academy"
            style={{
              objectFit: 'contain'
            }}
          />
        </div>
        <div className="relative z-10">
          <Text className="text-lg/[24px] text-grayscale-50 mb-8">
            Aprenda todos os conceitos fundamentais envolvidos na otimização de
            processos logísticos.Saiba como a aplicação de tecnologias com
            inteligência artificial podem transformar os resultados das
            empresas!
          </Text>
          <div className="mx-auto mb-8">
            <ButtonWhite href="/">Quero saber mais</ButtonWhite>
          </div>
        </div>
      </div>
    </Section>
  )
}
