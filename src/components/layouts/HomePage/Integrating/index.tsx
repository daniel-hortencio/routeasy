import { Section } from 'components/elements/Section'
import { TextHighlight, Title } from 'components/elements/Texts'
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
      subtitle="Nossas soluções se conectam facilmente a outras ferramentas como ERP, WMS  TMS. Sincronize dados em tempo real e garanta um fluxo contínuo de informações."
    >
      <div className="relative w-full h-[453px] text-center py-11 pb-16">
        <Image src="/images/pictures/integracao.png" fill alt="Integração" />
      </div>
    </Section>
  )
}
