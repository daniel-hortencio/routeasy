import { Section } from 'components/elements/Section'
import { TextHighlight, Title, Text } from 'components/elements/Texts'
import Image from 'next/image'

export const Integrating = () => {
  return (
    <Section
      title={
        <Title>
          Integração simples para <TextHighlight>potencializar</TextHighlight>{' '}
          seus resultados
        </Title>
      }
      subtitle={
        <Text className="text-grayscale-50 text-[15px]">
          Nossass soluções se conectam facilmente a outras ferramentas como ERP,
          WMS TMS. Sincronize dados em tempo real e garanta um fluxo contínuo de
          informações.
        </Text>
      }
    >
      <div className="relative text-center pt-4 lg:pt-20 pb-40 flex justify-center">
        <Image
          src="/images/pictures/integracao.png"
          width="939"
          height="465"
          alt="Integração"
        />
      </div>
    </Section>
  )
}
