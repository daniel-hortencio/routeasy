import { Section } from 'components/elements/Section'
import { TextHighlight, Title, Text } from 'components/elements/Texts'
import { CardComparison } from 'components/elements/CardComparison'
import Image from 'next/image'
import { ButtonPrimary } from 'components/elements/Button'

export const Comparison = () => {
  return (
    <Section
      className="pb-20"
      title={
        <Title>
          Estamos <TextHighlight>a frente</TextHighlight> do mercado
        </Title>
      }
      subtitle={
        <Text className="text-grayscale-50 text-[15px] font-light">
          Após diversos testes para analisar a estabilidade e a capacidade de
          resposta do nosso roteirizador, os resultados foram impressionantes: a
          RoutEasy tem um desempenho até 20 vezes maior que a média da
          concorrência.
        </Text>
      }
    >
      <div className="relative flex items-center justify-center">
        <CardComparison label="Routeasy" seconds="100" isHighlight />
        <div className="mx-8">
          <Image
            src="/images/icons/image-cross.svg"
            alt="Detalhe"
            width={47}
            height={47}
          />
        </div>
        <CardComparison label="Mercado" seconds="600" />
      </div>

      <div className="w-full sm:w-[232px] my-16 text-center mx-[auto]">
        <ButtonPrimary href="/demonstracao">
          Solicite uma demonstração
        </ButtonPrimary>
      </div>
    </Section>
  )
}
