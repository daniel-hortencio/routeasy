import Icon from 'components/elements/Icon'
import { Section } from 'components/elements/Section'
import { TextHighlight, Title, Text } from 'components/elements/Texts'
import { useState } from 'react'
import { foodSlides } from './Slides'
import { ButtonSecondary } from 'components/elements/Button'
import { LinkExternal } from 'components/elements/LinkExternal/LinkExternal'

export const Food = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const next = 1
  const previous = -1

  function handleChangeSlide(to: 1 | -1) {
    if (currentSlide + to === foodSlides.length) {
      setCurrentSlide(0)
      return
    }

    if (currentSlide + to < 0) {
      setCurrentSlide(foodSlides.length - 1)
      return
    }

    setCurrentSlide(currentSlide + to)
  }

  return (
    <Section
      className="lg:pb-20"
      title={
        <Title>
          Gostamos muito de <TextHighlight>NOS REUNIR (e comer)</TextHighlight>
        </Title>
      }
      subtitle={
        <Text className="text-grayscale-50 text-[15px] font-light">
          Aqui, valorizamos a troca de ideias e o compartilhamento de
          experiências em um ambiente descontraído. E se tiver comida, melhor
          ainda!
        </Text>
      }
    >
      <div className={`pb-24 pmd:b-40 block items-center grid-cols-2 md:grid`}>
        <div className={`mb-8 md:mb-0`}>{foodSlides[currentSlide].grid}</div>

        <div className="text-center md:text-left md:ml-12 lg:ml-28">
          <header className="md:flex md:items-center md:justify-between">
            <Title className="text-[32px]/[40px]">
              {' '}
              {foodSlides[currentSlide].title}
            </Title>

            <div className="md:grid grid-cols-2 gap-1 w-16 hidden">
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
            {foodSlides[currentSlide].description}
          </Text>
          <div className="hidden md:block mt-6 max-w-[160px]">
            <LinkExternal href="https://routeasy.gupy.io/">
              <ButtonSecondary>Junte-se a nós</ButtonSecondary>
            </LinkExternal>
          </div>
          <div className="grid grid-cols-2 gap-2 w-16 mx-auto md:hidden mt-10">
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
          <div className="flex md:hidden items-end w-full h-full justify-center mt-10">
            {foodSlides.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full bg-primary-100 dot ${
                  index === currentSlide ? 'opacity-100' : 'opacity-20'
                } ${index === 0 ? 'mx-2' : 'mr-2'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
