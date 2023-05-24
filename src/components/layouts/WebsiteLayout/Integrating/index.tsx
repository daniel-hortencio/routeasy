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
      <div className="relative text-center pt-0 md:pt-11 pb-16 md:pb-56 flex justify-center">
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
