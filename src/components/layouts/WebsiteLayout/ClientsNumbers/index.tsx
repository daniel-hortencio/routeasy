'use client'

import { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import { Section } from 'components/elements/Section'
import { TextHighlight, Title } from 'components/elements/Texts'
import { ButtonSecondary } from 'components/elements/Button'
import Image from 'next/image'

import { clientsContent } from './content'

interface ICardContent {
  number: string
  label: string
}

interface IClientContentProps {
  logo: string
  cards: ICardContent[]
}

const ClientContent = ({ logo, cards }: IClientContentProps) => {
  return (
    <>
      <div className="relative pt-0 md:pt-20 pb-16 md:pb-28 flex items-center flex-col">
        <div className="mb-24">
          <Image src={logo} alt="Detalhe" width={242} height={59} />
        </div>
        <div className="flex gap-3 justify-between">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-lg border border-grayscale-500 pt-9 pb-10 text-center w-[200px] h-[200px]"
            >
              <p className="text-[56px] font-semibold text-white mb-1">
                {card.number}
              </p>
              <p className="text-small font-normal px-2 text-white">
                {card.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export const ClientsNumbers = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [loaded, setLoaded] = useState<boolean>(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    }
  })

  const setDotOpacity = active => (active ? 'opacity-100' : 'opacity-40')

  return (
    <Section
      title={
        <Title>
          Impactando de <TextHighlight>verdade </TextHighlight>
          na operação de clientes
        </Title>
      }
      subtitle="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis."
    >
      <div ref={sliderRef} className="keen-slider">
        {clientsContent.map(item => (
          <div className="keen-slider__slide" key={item.logo}>
            <ClientContent logo={item.logo} cards={item.cards} />
          </div>
        ))}
      </div>

      {loaded && instanceRef.current && (
        <div className="flex gap-2 justify-center">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys()
          ].map(idx => {
            return (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`w-2 h-2 rounded-full bg-primary-100 ${setDotOpacity(
                  currentSlide === idx
                )}`}
              ></button>
            )
          })}
        </div>
      )}

      <div className="w-full sm:w-[232px] mt-16 text-center mx-[auto]">
        <ButtonSecondary href="">Quero saber mais</ButtonSecondary>
      </div>
    </Section>
  )
}
