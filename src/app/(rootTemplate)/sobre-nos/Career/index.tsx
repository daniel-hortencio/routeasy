import { Section } from 'components/elements/Section'
import Image from 'next/image'
import { Text, Title } from 'components/elements/Texts'
import { ButtonSecondary } from 'components/elements/Button'

export const Career = () => {
  return (
    <Section className="pb-24">
      <div className="relative flex items-center justify-center overflow-hidden rounded-3xl w-full h-[404px] text-center py-10 md:py-11 pb-16">
        <Image
          src="/images/pictures/trabalhe-conosco.png"
          fill
          alt="Background"
          style={{ objectFit: 'cover' }}
        />
        <div className="relative py-12 px-12">
          <Title>Trabalhe conosco</Title>
          <Text className="mb-12">
            Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut
            assumenda voluptates qui beatae.
          </Text>
          <div className="w-40 text-sm m-auto">
            <ButtonSecondary href="/">Quero saber mais</ButtonSecondary>
          </div>
        </div>
      </div>
    </Section>
  )
}
