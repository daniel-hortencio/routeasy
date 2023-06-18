'use client'
import { Section } from 'components/elements/Section'
import { TextHighlight, Title, Text } from 'components/elements/Texts'
import { SlideTestimonials } from './Slide'

export const Testimonials = () => {
  return (
    <Section
      className="pb-20"
      title={
        <Title>
          Quem usa <TextHighlight>confia</TextHighlight>
        </Title>
      }
      subtitle={
        <Text className="text-grayscale-50 font-light text-[15px]">
          Nosso maior objetivo é impactar de verdade a operação de nossos
          clientes, diminuindo custos e otimizando processos. Veja o que nossos
          clientes falam sobre a RoutEasy:
        </Text>
      }
    >
      <div>
        <div className="mb-12 ">
          <SlideTestimonials />
        </div>
      </div>
    </Section>
  )
}
