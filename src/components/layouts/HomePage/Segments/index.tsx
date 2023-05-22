import { Section } from 'components/elements/Section'
import { TextHighlight, Title } from 'components/elements/Texts'
import { useKeenSlider } from 'keen-slider/react'
import { useEffect, useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import Image from 'next/image'

export const Segments = () => {
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

    return 2.3
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
    <Section
      title={
        <Title>
          Soluções que se <TextHighlight>adaptam</TextHighlight> ao seu negócio
        </Title>
      }
      className="mb-20"
      subtitle="Sabemos que cada operação é única e, por isso, nosso time de especialistas está preparado para: "
    >
      <div className="hidden md:block">
        <div className="flex mb-12 bg-grayscale-500 p-2 w-min mx-auto items-center rounded-full">
          <button
            className={`px-6 h-12 whitespace-nowrap rounded-full ${
              tab === 1 && 'bg-primary-100'
            }`}
            onClick={() => setTab(1)}
          >
            Last mile B2C
          </button>
          <button
            className={`px-6 h-12 whitespace-nowrap rounded-full ${
              tab === 2 && 'bg-primary-100'
            }`}
            onClick={() => setTab(2)}
          >
            E-Last Mile B2B
          </button>
          <button
            className={`px-6 h-12 whitespace-nowrap rounded-full ${
              tab === 3 && 'bg-primary-100'
            }`}
            onClick={() => setTab(3)}
          >
            Same day delivery
          </button>
          <button
            className={`px-6 h-12 whitespace-nowrap rounded-full ${
              tab === 4 && 'bg-primary-100'
            }`}
            onClick={() => setTab(4)}
          >
            First e Middle e Mile
          </button>
          <button
            className={`px-6 h-12 whitespace-nowrap rounded-full ${
              tab === 5 && 'bg-primary-100'
            }`}
            onClick={() => setTab(5)}
          >
            Outros
          </button>
        </div>
      </div>

      <div className="block md:hidden">
        <div ref={sliderRef} className="keen-slider ">
          <div className="flex">
            <div className="keen-slider__slide pr-6">
              <div className="mb-12 bg-grayscale-500 w-[170px] h-12 mx-auto items-center rounded-full">
                <button
                  className={`w-[170px] h-12 whitespace-nowrap rounded-full ${
                    tab === 1 && 'bg-primary-100'
                  }`}
                  onClick={() => setTab(1)}
                >
                  Last mile B2C
                </button>
              </div>
            </div>
            <div className="keen-slider__slide pr-6">
              <div className="mb-12 bg-grayscale-500 w-[170px] h-12 mx-auto items-center rounded-full">
                <button
                  className={`w-[170px] h-12 whitespace-nowrap rounded-full items-center ${
                    tab === 2 && 'bg-primary-100'
                  }`}
                  onClick={() => setTab(2)}
                >
                  E-Last Mile B2B
                </button>
              </div>
            </div>
            <div className="keen-slider__slide pr-6">
              <div className="mb-12 bg-grayscale-500 w-[170px] h-12 mx-auto items-center rounded-full">
                <button
                  className={`w-[170px] h-12 whitespace-nowrap rounded-full ${
                    tab === 3 && 'bg-primary-100'
                  }`}
                  onClick={() => setTab(3)}
                >
                  Same day delivery
                </button>
              </div>
            </div>
            <div className="keen-slider__slide pr-6">
              <div className="mb-12 bg-grayscale-500 w-[170px] h-12 mx-auto items-center rounded-full">
                <button
                  className={`w-[170px] h-12 whitespace-nowrap rounded-full ${
                    tab === 4 && 'bg-primary-100'
                  }`}
                  onClick={() => setTab(4)}
                >
                  First e Middle e Mile
                </button>
              </div>
            </div>
            <div className="keen-slider__slide pr-6">
              <div className="mb-12 bg-grayscale-500 w-[170px] h-12 mx-auto items-center rounded-full">
                <button
                  className={`w-[170px] h-12 whitespace-nowrap rounded-full ${
                    tab === 5 && 'bg-primary-100'
                  }`}
                  onClick={() => setTab(5)}
                >
                  Outros
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center md:w-[878px] m-auto pt-6 px-6 md:px-16 pb-10 rounded-lg bg-grayscale-500">
        {tab === 1 && (
          <>
            <div className="md:w-[56%]">
              <h3 className="mb-2 md:mb-3 text-[32px] font-medium">
                Last Mile B2C
              </h3>
              <div className="h-[2px] w-full bg-primary-100 mb-4 md:mb-9" />
              <p>
                Conte com o algoritmo de roteirização mais avançado do mercado
                para reduzir o tempo e as etapas do seu planejamento rotas,
                aumentando a produtividade e reduzindo custos operacionais.
                Tenha também visibilidade completa e em tempo real de todas as
                rotas, para responder mais rápido a qualquer imprevisto e
                garantir a satisfação dos seus clientes.
              </p>
            </div>
            <div className="w-[256px] h-[256px] relative hidden md:block">
              <Image
                src="/images/pictures/Rectangle 1856.png"
                fill
                alt="Last Mile B2C"
              />
            </div>
          </>
        )}
        {tab === 2 && (
          <>
            <div className="md:w-[56%]">
              <h3 className="mb-2 md:mb-3 text-[32px] font-medium">
                E-Last Mile B2B
              </h3>
              <div className="h-[2px] w-full bg-primary-100 mb-4 md:mb-9" />
              <p>
                Planeje rotas mais inteligentes para aproveitar toda a
                capacidade da sua frota. Com nossas soluções, sua operação reduz
                prazos de entrega, evita falhas e elimina ineficiências para
                otimizar custos operacionais. Além disso, você tem visibilidade
                completa e em tempo real de todas as rotas em andamento,
                mantendo seus clientes informados a cada etapa do processo.
              </p>
            </div>
            <div className="w-[256px] h-[256px] relative hidden md:block">
              <Image
                src="/images/pictures/Rectangle 1856.png"
                fill
                alt="E-Last Mile B2B"
              />
            </div>
          </>
        )}
        {tab === 3 && (
          <>
            <div className="md:w-[56%]">
              <h3 className="mb-2 md:mb-3 text-[32px] font-medium">
                Same day delivery
              </h3>
              <div className="h-[2px] w-full bg-primary-100 mb-4 md:mb-9" />
              <p>
                Nossa tecnologia de orquestração automatiza 100% do fluxo
                operacional para viabilizar o same day e o same hour delivery.
                Por meio de regras e parametrizações pré definidas, o Maestro
                executa a roteirização e o despacho para os motoristas de forma
                totalmente automática, sem qualquer trabalho manual. É ideal
                operações complexas que envolvem diversos pontos de origem,
                clientes e parceiros de entrega.
              </p>
            </div>
            <div className="w-[256px] h-[256px] relative hidden md:block">
              <Image
                src="/images/pictures/Rectangle 1856.png"
                fill
                alt="Same day delivery"
              />
            </div>
          </>
        )}
        {tab === 4 && (
          <>
            <div className="md:w-[56%]">
              <h3 className="mb-2 md:mb-3 text-[32px] font-medium">
                First e Middle Mile
              </h3>
              <div className="h-[2px] w-full bg-primary-100 mb-4 md:mb-9" />
              <p>
                Planeje rotas de entrega e coleta com máxima eficiência,
                considerando todas as restrições da operacionais de
                clientes/fornecedores. Conte com uma torre de controle
                inteligente, que garante visibilidade total da operação, além de
                relatórios completos com indicadores de desempenho relevantes,
                como taxas de sucesso na entrega/coleta, tempos de espera em
                cada parada e quantidade de ocorrências por rota.
              </p>
            </div>
            <div className="w-[256px] h-[256px] relative hidden md:block">
              <Image
                src="/images/pictures/Rectangle 1856.png"
                fill
                alt="First e Middle Mile"
              />
            </div>
          </>
        )}
        {tab === 5 && (
          <>
            <div className="md:w-[56%]">
              <h3 className="mb-2 md:mb-3 text-[32px] font-medium">
                First e Middle Mile
              </h3>
              <div className="h-[2px] w-full bg-primary-100 mb-4 md:mb-9" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="w-[256px] h-[256px] relative hidden md:block">
              <Image
                src="/images/pictures/Rectangle 1856.png"
                fill
                alt="First e Middle Mile"
              />
            </div>
          </>
        )}
      </div>
    </Section>
  )
}
