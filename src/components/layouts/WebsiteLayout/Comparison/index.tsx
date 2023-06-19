import { Section } from 'components/elements/Section'
import { TextHighlight, Title } from 'components/elements/Texts'
import { CardComparison } from 'components/elements/CardComparison'
import Image from 'next/image'
import { ButtonPrimary } from 'components/elements/Button'

export const Comparison = () => {
  return (
    <Section
      title={
        <Title>
          Estamos <TextHighlight>a frente</TextHighlight> do mercado
        </Title>
      }
      subtitle="Nosso algoritmo de roteirização é comprovadamente o mais rápido do mercado brasileiro. Faça planejamento de rotas sem precisar com velocidade quase instantânea."
    >
      <div className="relative flex items-center justify-center">
        <CardComparison label="Routeasy" seconds="30" isHighlight />
        <div className="mx-8">
          <Image
            src="/images/icons/image-cross.svg"
            alt="Detalhe"
            width={47}
            height={47}
          />
        </div>
        <CardComparison label="Mercado" seconds="300" />
      </div>

      <div className="w-full sm:w-[232px] my-16 text-center mx-[auto]">
        <ButtonPrimary href="">Solicite uma demonstração</ButtonPrimary>
      </div>
    </Section>
  )
}
