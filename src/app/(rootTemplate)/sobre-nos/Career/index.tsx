import { Section } from 'components/elements/Section'
import Image from 'next/image'
import { Text, Title } from 'components/elements/Texts'
import { ButtonSecondary } from 'components/elements/Button'

export const Career = () => {
  return (
    <Section className="pb-24">
      <div className="relative flex items-center justify-center overflow-hidden rounded-3xl w-full h-[404px] text-center py-10 md:py-11">
        <Image
          src="/images/pictures/trabalhe-conosco.png"
          fill
          alt="Background"
          style={{ objectFit: 'cover' }}
        />
        <div className="relative py-12 px-12 h-full">
          <Title className="mb-4">Trabalhe conosco</Title>
          <Text className="mb-12 max-w-xl font-light">
            Seja parte de uma equipe que valoriza cada sucesso e construa seu
            futuro com a gente!
          </Text>
          <div className="w-40 text-sm m-auto">
            <ButtonSecondary href="/trabalhe-conosco">
              Quero saber mais
            </ButtonSecondary>
          </div>
        </div>
      </div>
    </Section>
  )
}
