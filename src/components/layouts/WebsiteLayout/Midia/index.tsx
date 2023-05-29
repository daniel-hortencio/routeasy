'use client'

import Image from 'next/image'
import { Section } from 'components/elements/Section'
import S from './styles.module.css'
import { TextHighlight, Title } from 'components/elements/Texts'
import { useKeenSlider } from 'keen-slider/react'
import { useEffect, useState } from 'react'
import 'keen-slider/keen-slider.min.css'

export const Midia = () => {
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
      return 2.25
    }

    return 1.25
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
        className="pt-16 md:pt-36"
        title={
          <Title>
            Rout<TextHighlight>easy</TextHighlight> na mídia
          </Title>
        }
        subtitle="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. "
      >
        <div className="hidden md:block">
          <div className={`${S.MidiaGrid} grid w-full gap-6`}>
            <div className={`${S.MidiaBoxPrimary}`}>
              <div className="absolute top-4 right-4 w-12 h-12 rounded overflow-hidden z-10">
                <Image
                  src="/images/logos/logo Log Web.png"
                  fill
                  alt="Log Web"
                />
              </div>
              <Image
                src="/images/pictures/Log Web.png"
                fill
                alt="Log Web"
                style={{ objectFit: 'fill' }}
              />
              <div className={`${S.MidiaBoxText}`}>
                <div className={`${S.border} h-[74px]`}></div>
                <p className={`${S.MidiaText}`}>
                  Tecnologia é a base para um futuro global do Supply Chain,
                  ligando cadeias instaladas em vários locais
                </p>
              </div>
            </div>
            <div className={`${S.MidiaBoxPrimary}`}>
              <div className="absolute top-4 right-4 w-12 h-12 rounded overflow-hidden z-10">
                <Image
                  src="/images/logos/logo Valor.png"
                  fill
                  alt="Valor Econômico"
                />
              </div>
              <Image
                fill
                src="/images/pictures/Valor Digitalizacao.png"
                alt="Valor Econômico"
                style={{ objectFit: 'fill' }}
              />
              <div className={`${S.MidiaBoxText}`}>
                <div className={`${S.border} h-12`}></div>
                <p className={`${S.MidiaText}`}>
                  Digitalização mapeais rotas e reduz custos
                </p>
              </div>
            </div>
            <div className="h-96 grid gap-6">
              <div className={`${S.MidiaBoxPrimary}`}>
                <div className="absolute top-4 right-4 w-12 h-12 rounded overflow-hidden z-10">
                  <Image
                    src="/images/logos/logo Valor.png"
                    fill
                    alt="Valor Econômico"
                  />
                </div>
                <Image
                  fill
                  src="/images/pictures/Valor Iot.png"
                  alt="Valor Econômico"
                  style={{ objectFit: 'fill' }}
                />
                <div className={`${S.MidiaBoxText}`}>
                  <div className={`${S.border} h-20`}></div>
                  <p className={`${S.MidiaText}`}>
                    Internet das coisas e IA ganham espaço em processos
                    logísticos
                  </p>
                </div>
              </div>
              <div className={`${S.MidiaBoxPrimary}`}>
                <div className="absolute top-4 right-4 w-12 h-12 rounded overflow-hidden z-10">
                  <Image
                    src="/images/logos/logo Mundo Logistica.png"
                    fill
                    alt="Mundo Logística"
                  />
                </div>
                <Image
                  fill
                  src="/images/pictures/Mundo Logistica.png"
                  alt="Mundo Logística"
                  style={{ objectFit: 'fill' }}
                />
                <div className={`${S.MidiaBoxText}`}>
                  <div className={`${S.border} h-20`}></div>
                  <p className={`${S.MidiaText}`}>
                    Principais desafios do same day delivery e como usar a
                    tecnologia...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <div className="lg:hidden">
        <div ref={sliderRef} className="keen-slider mb-12">
          <div className="keen-slider__slide pr-6 ml-5">
            <div className={`${S.MidiaBoxPrimary} h-full`}>
              <div className="absolute top-4 right-4 w-12 h-12 rounded overflow-hidden z-10">
                <Image
                  src="/images/logos/logo Log Web.png"
                  fill
                  alt="Log Web"
                />
              </div>
              <Image
                fill
                src="/images/pictures/Log Web.png"
                alt="Log Web"
                style={{ objectFit: 'fill' }}
              />
              <div className={`${S.MidiaBoxText}`}>
                <div className={`${S.border} h-[100px]`}></div>
                <p className={`${S.MidiaText}`}>
                  Tecnologia é a base para um futuro global do Supply Chain,
                  ligando cadeias instaladas em vários locais
                </p>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide pr-6">
            <div className={`${S.MidiaBoxPrimary} h-full`}>
              <div className="absolute top-4 right-4 w-12 h-12 rounded overflow-hidden z-10">
                <Image
                  src="/images/logos/logo Valor.png"
                  fill
                  alt="Valor Econômico"
                />
              </div>
              <Image
                fill
                src="/images/pictures/Valor Digitalizacao.png"
                alt="Valor Econômico"
                style={{ objectFit: 'fill' }}
              />
              <div className={`${S.MidiaBoxText}`}>
                <div className={`${S.border} h-12`}></div>
                <p className={`${S.MidiaText}`}>
                  Digitalização mapeais rotas e reduz custos
                </p>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide pr-6">
            <div className={`${S.MidiaGridMobile} h-96`}>
              <div className={`${S.MidiaBoxPrimary}`}>
                <div className="absolute top-4 right-4 w-12 h-12 rounded overflow-hidden z-10">
                  <Image src="/images/logos/logo Valor.png" fill alt="Valor" />
                </div>
                <Image
                  fill
                  src="/images/pictures/Valor Iot.png"
                  alt="Valor Econômico"
                  style={{ objectFit: 'fill' }}
                />
                <div className={`${S.MidiaBoxText}`}>
                  <div className={`${S.border} h-20`}></div>
                  <p className={`${S.MidiaText}`}>
                    Internet das coisas e IA ganham espaço em processos
                    logísticos
                  </p>
                </div>
              </div>
              <div className={`${S.MidiaBoxPrimary}`}>
                <div className="absolute top-4 right-4 w-12 h-12 rounded overflow-hidden z-10">
                  <Image
                    src="/images/logos/logo Mundo Logistica.png"
                    fill
                    alt="Mundo Logística"
                  />
                </div>
                <Image
                  fill
                  src="/images/pictures/Mundo Logistica.png"
                  alt="Mundo Logística"
                  style={{ objectFit: 'fill' }}
                />
                <div className={`${S.MidiaBoxText}`}>
                  <div className={`${S.border} h-20`}></div>
                  <p className={`${S.MidiaText}`}>
                    Principais desafios do same day delivery e como usar a
                    tecnologia...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Section className="pb-14 mb-8 md:mb-4 md:py-20 w-full">
          <h2 className="font-medium text-[32px] uppercase mb-4 text-center">
            PRÊMIOS
          </h2>
          <div className="flex mx-auto justify-center">
            <div className="rounded-lg w-[100px] h-[100px] relative mr-6">
              <Image
                src="/images/pictures/premio-inbrasc.png"
                fill
                alt="Premio INBRASC"
              />
            </div>
            <div className="rounded-lg w-[100px] h-[100px] relative mr-6">
              <Image
                src="/images/pictures/premio-100-open-startups.png"
                fill
                alt="Premio INBRASC"
              />
            </div>
            <div className="rounded-lg w-[100px] h-[100px] relative">
              <Image
                src="/images/pictures/premio-startups-to-watch.png"
                fill
                alt="Premio INBRASC"
              />
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
}
