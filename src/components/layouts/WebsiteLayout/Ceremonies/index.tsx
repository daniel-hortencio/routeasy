'use client'

import { Section } from 'components/elements/Section'
import { Title, Text } from 'components/elements/Texts'
import Icon from 'components/elements/Icon'
import { useState } from 'react'
import { ceremoniesSlides } from './Slides'

export const Ceremonies = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const next = 1
  const previous = -1

  function handleChangeSlide(to: 1 | -1) {
    if (currentSlide + to === ceremoniesSlides.length) {
      setCurrentSlide(0)
      return
    }

    if (currentSlide + to < 0) {
      setCurrentSlide(ceremoniesSlides.length - 1)
      return
    }

    setCurrentSlide(currentSlide + to)
  }

  return (
    <Section className="pb-10 lg:pb-28">
      <div className="mb-12 text-center md:text-left md:ml-12 lg:ml-28 md:hidden">
        <Title className="text-[40px]/[52px]">Cerimônias</Title>
        <Text className="text-[13px]/[20px] text-grayscale-50">
          Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut
          assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis
          voluptatem hic dolores fuga eum dolorum tenetur est iusto quis.
        </Text>
      </div>

      <div className={`pb-24 pmd:b-40 block items-center grid-cols-2 md:grid`}>
        {ceremoniesSlides[currentSlide].grid}

        <div className="text-center md:text-left md:ml-12 lg:ml-28">
          <header className="md:flex md:items-center md:justify-between">
            <Title className="text-[32px]/[40px]">
              {ceremoniesSlides[currentSlide].title}
            </Title>

            <div className="md:grid grid-cols-2 gap-2 w-16 hidden">
              <button
                onClick={() => handleChangeSlide(previous)}
                className="bg-white rounded-full w-6 h-6 flex items-center justify-center fill-grayscale-300"
              >
                <Icon name="FiArrowLeft" size={14} />
              </button>
              <button
                onClick={() => handleChangeSlide(next)}
                className="bg-white rounded-full w-6 h-6 flex items-center justify-center fill-grayscale-300"
              >
                <Icon name="FiArrowRight" size={14} />
              </button>
            </div>
          </header>
          <Text className="text-[13px]/[20px] text-grayscale-50">
            {ceremoniesSlides[currentSlide].description}
          </Text>
          <div className="grid grid-cols-2 gap-2 w-16  mx-auto md:hidden mt-10">
            <button
              onClick={() => handleChangeSlide(previous)}
              className="bg-white rounded-full w-8 h-8 flex items-center justify-center fill-grayscale-300"
            >
              <Icon name="FiArrowLeft" size={14} />
            </button>
            <button
              onClick={() => handleChangeSlide(next)}
              className="bg-white rounded-full w-8 h-8 flex items-center justify-center fill-grayscale-300"
            >
              <Icon name="FiArrowRight" size={14} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  )
}
