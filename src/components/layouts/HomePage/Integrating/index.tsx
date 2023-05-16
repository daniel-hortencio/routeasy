import { Section } from 'components/elements/Section'
import Image from 'next/image'

export const Integrating = () => {
  return (
    <Section
      title={
        <h1>
          Integrando para <span className="text-primary">potencializar</span> a
          sua automação
        </h1>
      }
      subtitle="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. "
    >
      <div className="max-w-[939px] h-[465px] m-auto relative">
        <Image src="/images/pictures/integracao.png" fill alt="Integração" />
      </div>
    </Section>
  )
}
