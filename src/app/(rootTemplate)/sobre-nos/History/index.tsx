'use client'

import { Section } from 'components/elements/Section'
import { Title } from 'components/elements/Texts'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useEffect, useState } from 'react'
import { Skeleton } from 'components/elements/Skeleton'
import Icon from 'components/elements/Icon'

export const History = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
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
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    }
  })

  useEffect(() => {
    setLoaded(true)
  }, [])

  const Dot = () => (
    <div className="translate-x-[0.5px] ml-[0.7rem] mb-4 bg-primary bg-opacity-25 w-7 h-7 rounded-full flex items-center justify-center">
      <div className="bg-primary h-[14px] w-[14px] rounded-full" />
    </div>
  )

  const CardHistory = ({ title, text }) => {
    return (
      <div>
        <div className="mb-8 flex items-center">
          <p className="text-2xl font-semibold pr-6">{title}</p>
          <div className="w-full border-t border-dashed border-bluescale-100"></div>
        </div>
        <Dot />
        <div className="pl-6 lg:pl-[1.7rem]">
          <p className="pl-0 lg:pl-4 pb-4 lg:pb-0 border-b lg:border-b-0 border-l-0 lg:border-l border-[#424678]">
            {text}
          </p>
        </div>
      </div>
    )
  }

  return (
    <Section
      className="pb-12 lg:pb-20 bg-grayscale-700 pt-16"
      title={<Title>Nossa história</Title>}
      subtitle="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. "
    >
      {loaded && instanceRef.current && (
        <div className="grid grid-cols-2 gap-4 w-28 lg:w-20 mx-auto pb-16">
          <button
            className="bg-white rounded-full w-12 lg:w-8 h-12 lg:h-8 flex items-center justify-center fill-grayscale-300 disabled:opacity-50"
            onClick={() => instanceRef.current?.prev()}
          >
            <Icon name="FiArrowLeft" size={16} />
          </button>
          <button
            className="bg-white rounded-full w-12 lg:w-8 h-12 lg:h-8 flex items-center justify-center fill-grayscale-300 disabled:opacity-50"
            onClick={() => instanceRef.current?.next()}
          >
            <Icon name="FiArrowRight" size={16} />
          </button>
        </div>
      )}
      {loaded ? (
        <div ref={sliderRef} className="keen-slider mb-12">
          <div className="keen-slider__slide pr-6">
            <CardHistory
              title="2016"
              text="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum
          aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum
          veritatis voluptatem hic dolores fuga eum dolorum tenetur est
          iusto quis."
            />
          </div>
          <div className="keen-slider__slide pr-6">
            <CardHistory
              title="2017"
              text="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum
          aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum
          veritatis voluptatem hic dolores fuga eum dolorum tenetur est
          iusto quis."
            />
          </div>
          <div className="keen-slider__slide pr-6">
            <CardHistory
              title="2018"
              text="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum
          aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum
          veritatis voluptatem hic dolores fuga eum dolorum tenetur est
          iusto quis."
            />
          </div>
        </div>
      ) : (
        <Skeleton className="w-full h-[204px] rounded-lg" />
      )}
    </Section>
  )
}
