'use client'

import { Section } from 'components/elements/Section'
import { Title, Text } from 'components/elements/Texts'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useEffect, useState } from 'react'
import { Skeleton } from 'components/elements/Skeleton'
import Icon from 'components/elements/Icon'
import { Element as ScrollElement } from 'react-scroll'

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
          <p className="h-[287px] lg:h-36 pl-0 lg:pl-4 pb-4 lg:pb-0 border-b lg:border-b-0 border-l-0 lg:border-l border-[#424678]">
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
      subtitle={
        <Text className="text-grayscale-50 text-[15px] font-light">
          Nossa história é moldada inovação contínua e uma mentalidade voltada
          para o futuro. Estamos animados para continuar a crescer, levando mais
          tecnologia para o setor de logística.
        </Text>
      }
    >
      <ScrollElement name="our-history">
        <div className="grid grid-cols-2 gap-4 w-28 lg:w-20 mx-auto pb-16">
          {loaded ? (
            <button
              className="bg-white rounded-full w-12 lg:w-8 h-12 lg:h-8 flex items-center justify-center fill-grayscale-300 disabled:opacity-50"
              onClick={() => instanceRef.current?.prev()}
            >
              <Icon name="FiArrowLeft" size={16} />
            </button>
          ) : (
            <Skeleton className="w-12 lg:w-8 h-12 lg:h-8 rounded-full" />
          )}
          {loaded ? (
            <button
              className="bg-white rounded-full w-12 lg:w-8 h-12 lg:h-8 flex items-center justify-center fill-grayscale-300 disabled:opacity-50"
              onClick={() => instanceRef.current?.next()}
            >
              <Icon name="FiArrowRight" size={16} />
            </button>
          ) : (
            <Skeleton className="w-12 lg:w-8 h-12 lg:h-8 rounded-full" />
          )}
        </div>
      </ScrollElement>
      {loaded ? (
        <div ref={sliderRef} className="keen-slider mb-12">
          <div className="keen-slider__slide pr-6">
            <CardHistory
              title="2016"
              text={
                <Text className="text-grayscale-50 text-[15px] font-light">
                  Durantesssss seu projeto de mestrado, nosso CEO, Caio Reina,
                  criou um algoritmo de roteirização capaz de superar resultados
                  de soluções já estabelecidas no mercado. Após vários testes em
                  operações reais, o algoritmo foi integrado em uma plataforma
                  web e, assim, nascia a RoutEasy.
                </Text>
              }
            />
          </div>
          <div className="keen-slider__slide pr-6">
            <CardHistory
              title="2017"
              text={
                <Text className="text-grayscale-50 text-[15px] font-light">
                  Lançamos nossa torre de controle para que nossos clientes
                  pudessem ter visibilidade total da operação, além de controle
                  de indicadores. Aprimoramos nossa solução para oferecer ainda
                  mais eficiência, e tudo em uma única plataforma.
                </Text>
              }
            />
          </div>
          <div className="keen-slider__slide pr-6">
            <CardHistory
              title="2019"
              text={
                <Text className="text-grayscale-50 text-[15px] font-light">
                  Nos consolidamos no mercado iniciando parcerias com clientes
                  de alta representatividade em diversos segmentos. Consolidamos
                  também o nosso produto como uma solução completa, com
                  roteirização, torre de controle e app do motorista em uma
                  única ferramenta.
                </Text>
              }
            />
          </div>
          <div className="keen-slider__slide pr-6">
            <CardHistory
              title="2020"
              text={
                <Text className="text-grayscale-50 text-[15px] font-light">
                  Em meio a uma emergência global, nosso time se manteve focado
                  e, acima de tudo, unido. Mais que triplicamos o nosso
                  faturamento, passando a investir ainda mais em melhorar nossas
                  soluções e recrutar novos talentos.
                </Text>
              }
            />
          </div>
          <div className="keen-slider__slide pr-6">
            <CardHistory
              title="2021"
              text={
                <Text className="text-grayscale-50 text-[15px] font-light">
                  Captamos o nosso primeiro investimento, com o objetivo de
                  expandir nossa atuação nas operações dinâmicas. Com esse
                  aporte, iniciamos o desenvolvimento de um novo módulo e
                  triplicamos o tamanho do nosso time.
                </Text>
              }
            />
          </div>
          <div className="keen-slider__slide pr-6">
            <CardHistory
              title="2022"
              text={
                <Text className="text-grayscale-50 text-[15px] font-light">
                  Realizamos a primeira edição do LogTrends, um evento focado
                  nas novas tendências e tecnologias da logística. Foi a ocasião
                  perfeita para apresentar ao mercado o Maestro, nosso módulo de
                  orquestração. Um ano cheio de conquistas, e que chegou ao fim
                  com mais uma realização: passamos a integrar a plataforma de
                  open logistics da nstech.
                </Text>
              }
            />
          </div>
          <div className="keen-slider__slide pr-6">
            <CardHistory
              title="2023"
              text={
                <Text className="text-grayscale-50 text-[15px] font-light">
                  Ultrapassamos a marca de 100 profissionais que, juntos, vão
                  continuar escrevendo essa história de sucesso e crescendo em
                  ritmo acelerado.
                </Text>
              }
            />
          </div>
        </div>
      ) : (
        <Skeleton className="w-full h-[204px] rounded-lg" />
      )}
    </Section>
  )
}
