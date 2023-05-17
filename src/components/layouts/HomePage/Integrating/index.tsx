import { Section } from 'components/elements/Section'
import Image from 'next/image'

export const Integrating = () => {
  return (
    <Section
      title={
        <h1>
          Integração simples para{' '}
          <span className="text-primary">potencializar</span> seus resultados
        </h1>
      }
      subtitle="Nossas soluções se conectam facilmente a outras ferramentas como ERP, WMS  TMS. Sincronize dados em tempo real e garanta um fluxo contínuo de informações."
    >
      <div className="relative text-center pt-0 md:pt-11 pb-16 md:pb-28 flex justify-center">
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
