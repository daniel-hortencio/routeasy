import { ButtonWhite } from 'components/elements/Button'
import { Section } from 'components/elements/Section'
import Image from 'next/image'
import { Text } from 'components/elements/Texts'

export const Eventos = () => {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl w-full text-center py-10 md:py-11 pb-16">
        <Image
          src="/images/pictures/Log-Trend.png"
          fill
          alt="Background"
          style={{ objectFit: 'cover' }}
        />
        <div className="relative mx-auto w-16 h-16 mb-8 md:mb-10">
          <Image src="/images/logos/union.svg" fill alt="Recicável" />
        </div>
        <div className="relative mx-auto max-w-[514px] h-[64px] mb-8 md:mb-10">
          <Image src="/images/logos/log-trends-logo.png" fill alt="Recicável" />
        </div>
        <div className="relative z-10">
          <Text className="mb-12">
            Conheça o maior evento de tecnologia logística do brasil.
          </Text>
          <div className="m-auto mt-12 mb-8">
            <ButtonWhite href="/">Quero saber mais</ButtonWhite>
          </div>
        </div>
      </div>
    </Section>
  )
}
