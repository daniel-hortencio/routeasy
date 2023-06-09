'use client'

import Image from 'next/image'
import { Section } from 'components/elements/Section'
import S from './styles.module.css'
import { TextHighlight, Title, Text } from 'components/elements/Texts'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { LinkExternal } from 'components/elements/LinkExternal/LinkExternal'

export const Midia = () => {
  const [sliderRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 1.25
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: {
          perView: 2.25
        }
      }
    }
  })

  return (
    <div>
      <Section
        title={
          <Title>
            Rout<TextHighlight>easy</TextHighlight> na mídia
          </Title>
        }
        subtitle={
          <Text className="text-grayscale-50 text-[15px] font-light">
            Nossa dedicação em oferecer soluções inovadoras e eficientes tem
            atraído a atenção dos principais veículos de comunicação. Confira
            algumas das nossas principais aparições.
          </Text>
        }
      >
        <div className="hidden lg:block">
          <div className={`${S.MidiaGrid} grid w-full gap-6`}>
            <div className={`${S.MidiaBoxPrimary} `}>
              <div className="absolute top-4 right-4 w-12 h-12 rounded overflow-hidden z-10">
                <Image
                  src="/images/logos/logo Valor.png"
                  fill
                  alt="Valor Econômico"
                />
              </div>
              <LinkExternal href="https://valor.globo.com/publicacoes/suplementos/noticia/2022/07/29/digitalizacao-mapeia-rotas-e-reduz-custos.ghtml">
                <Image
                  className="cursor-pointer"
                  src="/images/pictures/Log Web.png"
                  fill
                  alt="Valor Econômico"
                  style={{ objectFit: 'fill' }}
                />
              </LinkExternal>
              <div className={`${S.MidiaBoxText}`}>
                <div className={`${S.border} h-[50px]`}></div>
                <p className={`${S.MidiaText}`}>
                  Digitalização mapeia rotas e reduz custos
                </p>
              </div>
            </div>
            <div className={`${S.MidiaBoxPrimary}`}>
              <div className="absolute top-4 right-4 w-12 h-12 rounded overflow-hidden z-10">
                <Image
                  src="/images/logos/logo Log Web.png"
                  fill
                  alt="Log Web"
                />
              </div>
              <LinkExternal href="https://www.logweb.com.br/tecnologia-e-a-base-para-um-futuro-global-do-supply-chain-ligando-cadeias-instaladas-em-varios-locais/">
                <Image
                  className="cursor-pointer"
                  fill
                  src="/images/pictures/Valor Digitalizacao.png"
                  alt="Log Web"
                  style={{ objectFit: 'fill' }}
                />
              </LinkExternal>
              <div className={`${S.MidiaBoxText}`}>
                <div className={`${S.border} h-[128px]`}></div>
                <p className={`${S.MidiaText}`}>
                  Tecnologia é a base para um futuro global do Supply Chain,
                  ligando cadeias instaladas em vários locais
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
                <LinkExternal href="https://valor.globo.com/empresas/noticia/2023/03/30/internet-das-coisas-e-ia-ganham-espaco-em-processos-logisticos.ghtml">
                  <Image
                    className="cursor-pointer"
                    fill
                    src="/images/pictures/Valor Iot.png"
                    alt="Valor Econômico"
                    style={{ objectFit: 'fill' }}
                  />
                </LinkExternal>
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
                <LinkExternal href="https://mundologistica.com.br/artigos/principais-desafios-do-same-day-delivery">
                  <Image
                    className="cursor-pointer"
                    fill
                    src="/images/pictures/Mundo Logistica.png"
                    alt="Mundo Logística"
                    style={{ objectFit: 'fill' }}
                  />
                </LinkExternal>
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
                  src="/images/logos/logo Valor.png"
                  fill
                  alt="Valor Econômico"
                />
              </div>
              <LinkExternal href="https://valor.globo.com/publicacoes/suplementos/noticia/2022/07/29/digitalizacao-mapeia-rotas-e-reduz-custos.ghtml">
                <Image
                  className="cursor-pointer"
                  fill
                  src="/images/pictures/Log Web.png"
                  alt="Valor Econômico"
                  style={{ objectFit: 'fill' }}
                />
              </LinkExternal>
              <div className={`${S.MidiaBoxText}`}>
                <div className={`${S.border} h-[50px]`}></div>
                <p className={`${S.MidiaText}`}>
                  Digitalização mapeia rotas e reduz custos
                </p>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide pr-6">
            <div className={`${S.MidiaBoxPrimary} h-full`}>
              <div className="absolute top-4 right-4 w-12 h-12 rounded overflow-hidden z-10">
                <Image
                  src="/images/logos/logo Log Web.png"
                  fill
                  alt="Log Web"
                />
              </div>
              <LinkExternal href="https://www.logweb.com.br/tecnologia-e-a-base-para-um-futuro-global-do-supply-chain-ligando-cadeias-instaladas-em-varios-locais/">
                <Image
                  className="cursor-pointer"
                  fill
                  src="/images/pictures/Valor Digitalizacao.png"
                  alt="Log Web"
                  style={{ objectFit: 'fill' }}
                />
              </LinkExternal>
              <div className={`${S.MidiaBoxText}`}>
                <div className={`${S.border} h-128`}></div>
                <p className={`${S.MidiaText}`}>
                  Tecnologia é a base para um futuro global do Supply Chain,
                  ligando cadeias instaladas em vários locais
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
                <LinkExternal href="https://valor.globo.com/empresas/noticia/2023/03/30/internet-das-coisas-e-ia-ganham-espaco-em-processos-logisticos.ghtml">
                  <Image
                    className="cursor-pointer"
                    fill
                    src="/images/pictures/Valor Iot.png"
                    alt="Valor Econômico"
                    style={{ objectFit: 'fill' }}
                  />
                </LinkExternal>
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
                <LinkExternal href="https://mundologistica.com.br/artigos/principais-desafios-do-same-day-delivery">
                  <Image
                    className="cursor-pointer"
                    fill
                    src="/images/pictures/Mundo Logistica.png"
                    alt="Mundo Logística"
                    style={{ objectFit: 'fill' }}
                  />
                </LinkExternal>
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
        <Section className="pb-14 lg:pb-16 mb-8 lg:mb-4 lg:py-20 w-full">
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
