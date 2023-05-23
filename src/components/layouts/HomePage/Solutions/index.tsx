'use client'

import Image from 'next/image'
import { Section } from 'components/elements/Section'
import { ButtonPrimary } from 'components/elements/Button'
import { useKeenSlider } from 'keen-slider/react'
import { useEffect, useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { TextHighlight, Title } from 'components/elements/Texts'
import S from './styles.module.css'

const CardSoluctions = ({ icon = '', title, onClick, isActive }) => {
  return (
    <div
      onClick={onClick}
      className={`rounded-lg border w-44 h-40 border-grayscale-500 hover:bg-grayscale-600 cursor-pointer flex items-center justify-center ${
        isActive && 'bg-grayscale-500'
      }`}
    >
      <div>
        <div className="border border-white h-10 w-10 rounded-full m-auto">
          {icon}
        </div>
        <div>
          <p className="text-sm font-sans text-center font-semibold mt-4">
            {title}
          </p>
        </div>
      </div>
    </div>
  )
}

const CardRoute = ({ icon = '', title }) => {
  return (
    <div className="rounded-lg border md:w-60 h-16 border-grayscale-500 cursor-pointer flex items-center justify-start md:justify-center px-4 mx-auto mb-4 md:mb-0">
      <div className="border border-white h-6 w-6">{icon}</div>
      <div>
        <p className="text-sm font-sans font-semibold ml-8">{title}</p>
      </div>
    </div>
  )
}

export const Solutions = () => {
  const [tab, setTab] = useState(1)

  const [windowWidth, setWindowWidth] = useState(null)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const useWindowWidth = () => {
    if (windowWidth > 640) {
      return 3.25
    }

    return 2.4
  }

  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: useWindowWidth()
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    }
  })
  return (
    <div>
      <Section
        title={
          <Title>
            Encontre as soluções ideais para sua{' '}
            <TextHighlight>operação</TextHighlight>
          </Title>
        }
        subtitle="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. "
      >
        {' '}
      </Section>
      <Section>
        <div className="hidden md:block">
          <div
            className={`${S.SoluctionsGrid} mt-2 grid items-center justify-evenly`}
          >
            <CardSoluctions
              isActive={tab === 1}
              onClick={() => setTab(1)}
              title="Roteirização"
            />
            <CardSoluctions
              isActive={tab === 2}
              onClick={() => setTab(2)}
              title="Gestão de entregas"
            />
            <CardSoluctions
              isActive={tab === 3}
              onClick={() => setTab(3)}
              title="Automação"
            />
            <CardSoluctions
              isActive={tab === 4}
              onClick={() => setTab(4)}
              title="Aplicativo"
            />
            <CardSoluctions
              isActive={tab === 5}
              onClick={() => setTab(5)}
              title="API"
            />
          </div>
        </div>
      </Section>
      <div className="lg:hidden">
        <div ref={sliderRef} className="keen-slider ">
          <div className="ml-5 mt-2 flex items-center justify-between">
            <div className="keen-slider__slide pr-6">
              <CardSoluctions
                isActive={tab === 1}
                onClick={() => setTab(1)}
                title="Roteirização"
              />
            </div>
            <div className="keen-slider__slide pr-6">
              <CardSoluctions
                isActive={tab === 2}
                onClick={() => setTab(2)}
                title="Gestão de entregas"
              />
            </div>
            <div className="keen-slider__slide pr-6">
              <CardSoluctions
                isActive={tab === 3}
                onClick={() => setTab(3)}
                title="Automação"
              />
            </div>
            <div className="keen-slider__slide pr-6">
              <CardSoluctions
                isActive={tab === 4}
                onClick={() => setTab(4)}
                title="Aplicativo"
              />
            </div>
            <div className="keen-slider__slide pr-6">
              <CardSoluctions
                isActive={tab === 5}
                onClick={() => setTab(5)}
                title="API"
              />
            </div>
          </div>
        </div>
      </div>
      <Section>
        <div className="w-full relative my-12 flex justify-center">
          {tab === 1 && (
            <Image
              src="/images/pictures/Screen roteirizacao.svg"
              width="842"
              height="543"
              alt="Roteirização"
            />
          )}
          {tab === 2 && (
            <Image
              src="/images/pictures/Screen gestao.svg"
              width="842"
              height="543"
              alt="Gestão de Entregas"
            />
          )}
          {tab === 3 && (
            <Image
              src="/images/pictures/Screen automacao API.svg"
              width="842"
              height="543"
              alt="Automação"
            />
          )}
          {tab === 4 && (
            <Image
              src="/images/pictures/Screen aplicativo.svg"
              width="280"
              height="544"
              alt="Aplicativo"
            />
          )}
          {tab === 5 && (
            <Image
              src="/images/pictures/Screen automacao API.svg"
              width="842"
              height="543"
              alt="API"
            />
          )}
        </div>

        <div className="md:flex mb-8 items-center justify-between">
          <CardRoute
            icon=""
            title="Personalização de objetivos de otimização"
          ></CardRoute>
          <CardRoute
            icon=""
            title="Entregas e coletas na mesma rota"
          ></CardRoute>
          <CardRoute icon="" title="Resequenciamento automático"></CardRoute>
          <CardRoute
            icon=""
            title="Configuração de restrições operacionais"
          ></CardRoute>
        </div>
        <div className="">
          <p className="md:max-w-[60%] m-auto text-grayscale-200 text-base font-normal text-center">
            Com o Routing Studio você pode realizar todo o planajamento de suas
            rotas, sejam elas D+0, D+1 ou Apenas estudar o melhor planejamento.
          </p>
        </div>
        <div className="md:w-32 m-auto mt-8 mb-20 md:mb-24 md:mt-12">
          <ButtonPrimary href="/">Saiba mais</ButtonPrimary>
        </div>
      </Section>
    </div>
  )
}
