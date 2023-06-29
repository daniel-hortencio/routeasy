'use client'

import Image from 'next/image'
import { Section } from 'components/elements/Section'
import { ButtonPrimary } from 'components/elements/Button'
import { useEffect, useState } from 'react'
import { TextHighlight, Text } from 'components/elements/Texts'
import TextTransition, { presets } from 'react-text-transition'

const list_operations = [
  'ROTEIRIZAÇÃO',
  'GESTÃO DE ENTREGA',
  'LASTMILE',
  'FIRST MILE',
  'SAME DAY DELIVERY',
  'MONITORAMENTO'
]

export const Banner = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex(index => index + 1),
      3000 // every 3 seconds
    )
    return () => clearTimeout(intervalId)
  }, [])

  return (
    <Section className="flex lg:mb-12">
      <div className="flex h-full relative min-h-[640px]">
        <div className="md:max-w-[32rem] pt-20 md:mx-auto lg:mx-0 flex flex-col justify-center w-full h-full text-center lg:text-left">
          <h1 className="text-white uppercase font-semibold text-5xl lg:text-[47px]/[68px] pb-5">
            Tecnologia avançada para
            <div className="flex justify-center lg:justify-start mb-12 lg:mb-0">
              <TextHighlight>
                <TextTransition springConfig={presets.wobbly}>
                  {list_operations[index % list_operations.length]}
                </TextTransition>
              </TextHighlight>
            </div>
          </h1>
          <Text className="pb-8 font-light text-grayscale-50 text-[15px]">
            Nossas soluções são a chave para aumentar a eficiência da sua
            operação. Acelere processos, reduza custos e ganhe mais
            produtividade com uma plataforma completa de otimização de rotas e
            gestão de entregas e coletas.
          </Text>
          <div className="lg:w-56">
            <ButtonPrimary href="demonstracao">
              Quero uma demonstração
            </ButtonPrimary>
          </div>
        </div>
        <div className="hidden lg:block absolute w-[80%] -right-36 top-0 h-full">
          <div className="relative h-full">
            <Image
              style={{
                objectFit: 'contain'
              }}
              fill
              src="/images/pictures/frame_hero_home.svg"
              alt="Banner"
              priority={true}
            />
          </div>
        </div>
      </div>
    </Section>
  )
}
