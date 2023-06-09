'use client'

import Image from 'next/image'
import { Section } from 'components/elements/Section'

import { useEffect, useState } from 'react'
import { ButtonWhite } from 'components/elements/Button'
import { TextHighlight, Title } from 'components/elements/Texts'
import { SlideTestimonials } from './Slide'

export const Testimonials = () => {
  const [count, setCount] = useState(50)

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 600) {
        setCount(prevCount => prevCount + (prevCount < 100 ? 50 : 100))
      } else {
        setCount(50)
      }
    }, 500)

    return () => {
      clearInterval(interval)
    }
  }, [count])

  return (
    <Section
      title={
        <Title>
          Quem usa <TextHighlight>confia</TextHighlight>
        </Title>
      }
      subtitle="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. "
    >
      <div className="mb-[88px] lg:mb-44">
        <div className="mb-12 ">
          <SlideTestimonials />
        </div>
      </div>

      <div className="relative overflow-hidden rounded-3xl w-full text-center py-10 md:py-11 pb-16">
        <Image
          src="/images/pictures/background-way.png"
          fill
          alt="Background"
          style={{ objectFit: 'cover' }}
        />
        <div className="relative mx-auto w-16 h-16 mb-8 md:mb-10">
          <Image src="/images/logos/union.svg" fill alt="Recicável" />
        </div>
        <div className="relative z-10">
          <p className="text-lg text-typography-50 font-bold mb-6 md:mb-8">
            Nossos clientes já reduziram
          </p>
          <h1 className="text-[88px] font-semibold mb-14 hidden lg:flex justify-center">
            {count} Toneladas de Co2
          </h1>
          <h1 className="lg:hidden ">
            <span className="block text-[88px] font-semibold">{count}</span>
            <span className="block text-[32px] mb-2 font-medium">
              Toneladas <br />
              de
            </span>
            <span className="block text-7xl mb-6 font-semibold">Co2</span>
          </h1>
          <ButtonWhite href="/">Veja alguns cases de sucesso</ButtonWhite>
        </div>
      </div>
    </Section>
  )
}
