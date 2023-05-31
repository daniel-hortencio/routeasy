'use client'

import { Section } from 'components/elements/Section'
import { Title } from 'components/elements/Texts'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useEffect, useState } from 'react'
import { Skeleton } from 'components/elements/Skeleton'

export const Historia = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 1.25,
      spacing: 20
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: {
          perView: 2.25
        }
      }
    }
  })

  useEffect(() => {
    setLoaded(true)
  }, [])

  const Dot = () => (
    <div className="translate-x-[0.5px] ml-[1.1rem] mb-4 bg-primary bg-opacity-25 w-7 h-7 rounded-full flex items-center justify-center">
      <div className="bg-primary h-[14px] w-[14px] rounded-full" />
    </div>
  )

  const CardHistoria = ({ title, text }) => {
    return (
      <div>
        <div className="mb-8">
          <p className="text-2xl font-semibold">{title}</p>
        </div>
        <Dot />
        <div className="pl-6 lg:pl-8">
          <p className="pl-0 lg:pl-4 pb-4 lg:pb-0 border-b lg:border-b-0 border-l-0 lg:border-l border-[#424678]">
            {text}
          </p>
        </div>
      </div>
    )
  }

  return (
    <Section
      className="pb-28"
      title={<Title>Nossa história</Title>}
      subtitle="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. "
    >
      {loaded ? (
        <div ref={sliderRef} className="keen-slider mb-12">
          <div className="keen-slider__slide pr-6">
            <CardHistoria
              title="2016"
              text="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum
          aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum
          veritatis voluptatem hic dolores fuga eum dolorum tenetur est
          iusto quis."
            />
          </div>
          <div className="keen-slider__slide pr-6">
            <CardHistoria
              title="2017"
              text="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum
          aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum
          veritatis voluptatem hic dolores fuga eum dolorum tenetur est
          iusto quis."
            />
          </div>
          <div className="keen-slider__slide pr-6">
            <CardHistoria
              title="2018"
              text="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum
          aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum
          veritatis voluptatem hic dolores fuga eum dolorum tenetur est
          iusto quis."
            />
          </div>
        </div>
      ) : (
        <Skeleton className="w-full h-[400px] rounded-lg" />
      )}
    </Section>
  )
}
