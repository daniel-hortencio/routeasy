'use client'
import { Section } from 'components/elements/Section'
import { TextHighlight, Title } from 'components/elements/Texts'
import { SlideTestimonials } from './Slide'

export const Testimonials = () => {
  return (
    <Section
      className="pb-20 lg:pb-28"
      title={
        <Title>
          Quem usa <TextHighlight>confia</TextHighlight>
        </Title>
      }
      subtitle="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. "
    >
      <div className="mb-[88px] lg:mb-32">
        <div className="mb-12 ">
          <SlideTestimonials />
        </div>
      </div>
    </Section>
  )
}
