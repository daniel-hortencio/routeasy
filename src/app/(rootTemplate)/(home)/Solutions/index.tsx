'use client'

import Image from 'next/image'
import { Section } from 'components/elements/Section'
import { ButtonPrimary } from 'components/elements/Button'
import { useKeenSlider } from 'keen-slider/react'
import { useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { TextHighlight, Title } from 'components/elements/Texts'
import { title } from 'process'
import S from './styles.module.css'

const CardSoluctions = ({ icon, title, onClick, isActive }) => {
  return (
    <div
      onClick={onClick}
      className={`rounded-lg border w-full lg:w-44 h-40 border-grayscale-500 hover:bg-grayscale-600 cursor-pointer flex items-center justify-center ${
        isActive && 'bg-grayscale-500'
      }`}
    >
      <div>
        <div className="border border-white rounded-lg h-14 w-14 lg:h-10 lg:w-10 flex items-center justify-center m-auto">
          <Image
            src={icon.src}
            width={icon.width || 18}
            height={icon.height || 18}
            alt={icon.alt}
          />
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

const CardRoute = ({ icon, title }) => {
  return (
    <div
      className={`${S.SoluctionsGrid} rounded-lg border lg:w-60 h-16 border-grayscale-500 cursor-pointer justify-start lg:justify-center px-4 mx-auto mb-4 lg:mb-0`}
    >
      <div className="flex items-center justify-center h-[30px] w-[50px] bg-grayscale-500 rounded-[4px]">
        <Image
          src={icon.src}
          width={icon.width || 18}
          height={icon.height || 18}
          alt={icon.alt}
        />
      </div>
      <div>
        <p className="text-sm font-sans font-normal ml-4">{title}</p>
      </div>
    </div>
  )
}

export const Solutions = () => {
  const [tab, setTab] = useState(0)

  const [sliderRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slides: {
      origin: 'auto',
      perView: 2.4
    },
    breakpoints: {
      '(min-width: 600px)': {
        slides: {
          perView: 3.25
        }
      }
    }
  })

  const tabList = [
    {
      title: 'Roteirização',
      src: '/images/pictures/Screen_roteirizacao.svg',
      icon: {
        src: '/images/icons/home-solutions-routeirizacao.svg',
        alt: 'Roteirização'
      },
      alt: 'Roteirização'
    },
    {
      title: 'Gestão de entregas',
      src: '/images/pictures/Screen_gestao.svg',
      icon: {
        src: '/images/icons/home-solutions-gestao-de-entrega.svg',
        alt: 'Gestão de entregas'
      },
      alt: 'Gestão de Entregas'
    },
    {
      title: 'Automação',
      src: '/images/pictures/Screen_automacao.svg',
      icon: {
        src: '/images/icons/home-solutions-automacao.svg',
        alt: 'Automação'
      },
      alt: 'Automação'
    },
    {
      title: 'Aplicativo',
      src: '/images/pictures/Screen_aplicativo.svg',
      icon: {
        src: '/images/icons/home-solutions-aplicativo.svg',
        alt: 'Aplicativo'
      },
      alt: 'Aplicativo'
    },
    {
      title: 'API',
      src: '/images/pictures/Screen_API.svg',
      icon: {
        src: '/images/icons/home-solutions-api.svg',
        alt: 'API'
      },
      alt: 'API'
    }
  ]

  const list_soluctions_route_cl = [
    {
      title: 'Personalização de objetivos de otimização',
      icon: {
        width: 16,
        height: 16,
        src: '/images/icons/home-solutions-pen.svg',
        alt: 'Personalização de objetivos de otimização'
      }
    },
    {
      title: 'Entregas e coletas na mesma rota',
      icon: {
        width: 16,
        height: 16,
        src: '/images/icons/home-solutions-box.svg',
        alt: 'Entregas e coletas na mesma rota'
      }
    },
    {
      title: 'Resequenciamento automático  ',
      icon: {
        width: 16,
        height: 16,
        src: '/images/icons/home-solutions-dots.svg',
        alt: 'Resequenciamento automático'
      }
    },
    {
      title: 'Configuração de restrições operacionais',
      icon: {
        width: 16,
        height: 16,
        src: '/images/icons/home-solutions-car.svg',
        alt: 'Configuração de restrições operacionais'
      }
    }
  ]

  const list_soluctions_route_cr = [
    {
      title:
        'Cadastro de clientes, veículos, origens, frete e apólice de seguro',
      icon: {
        width: 16,
        height: 16,
        src: '/images/icons/home-solutions-plus.svg',
        alt: 'Cadastro de clientes, veículos, origens, frete e apólice de seguro'
      }
    },
    {
      title: 'Regras associadas a perfil de clientes, frotas e regiões',
      icon: {
        width: 16,
        height: 16,
        src: '/images/icons/home-solutions-file.svg',
        alt: 'Regras associadas a perfil de clientes, frotas e regiões'
      }
    },
    {
      title: 'Uso de prioridade e sequenciamento de serviços',
      icon: {
        width: 16,
        height: 16,
        src: '/images/icons/home-solutions-chevrons-up.svg',
        alt: 'Uso de prioridade e sequenciamento de serviços'
      }
    },
    {
      title: 'Edição, duplicação e clonagem de rotas e serviços',
      icon: {
        width: 16,
        height: 16,
        src: '/images/icons/home-solutions-pen.svg',
        alt: 'Edição, duplicação e clonagem de rotas e serviços'
      }
    }
  ]

  const list_management_cl = [
    {
      title: 'Chat direto com o motorista',
      icon: {
        width: 16,
        height: 16,
        src: '/images/icons/home-solutions-chat.svg',
        alt: 'Chat direto com o motorista'
      }
    },
    {
      title: 'Tracking para o cliente',
      icon: {
        width: 16,
        height: 16,
        src: '/images/icons/home-solutions-map.svg',
        alt: 'Tracking para o cliente'
      }
    },
    {
      title: 'Alertas inteligentes para ocorrências',
      icon: {
        width: 16,
        height: 16,
        src: '/images/icons/home-solutions-alert.svg',
        alt: 'Alertas inteligentes para ocorrências'
      }
    },
    {
      title: 'Proof of delivery',
      icon: {
        width: 16,
        height: 16,
        src: '/images/icons/home-solutions-file.svg',
        alt: 'Proof of delivery'
      }
    }
  ]

  const list_management_cr = [
    {
      title: 'Avaliações do serviço, produto e motorista.',
      icon: {
        width: 16,
        height: 16,
        src: '/images/icons/home-solutions-chat.svg',
        alt: 'Avaliações do serviço, produto e motorista.'
      }
    },
    {
      title: 'Dashbord de Indicadores.',
      icon: {
        width: 16,
        height: 16,
        src: '/images/icons/home-solutions-map.svg',
        alt: 'Dashbord de Indicadores.'
      }
    },
    {
      title: 'Relatórios de registros e dados de execução da operação.',
      icon: {
        width: 16,
        height: 16,
        src: '/images/icons/home-solutions-alert.svg',
        alt: 'Relatórios de registros e dados de execução da operação.'
      }
    },
    {
      title: 'Visibilidade para a operação e cliente final.',
      icon: {
        width: 16,
        height: 16,
        src: '/images/icons/home-solutions-file.svg',
        alt: 'Visibilidade para a operação e cliente final.'
      }
    }
  ]

  const list_automation_cl = [
    {
      title: 'Roteirização programada automaticamente',
      icon: {
        width: 16,
        height: 16,
        src: '/images/icons/home-solutions-route.svg',
        alt: 'Roteirização programada automaticamente'
      }
    },
    {
      title: 'Seleção de frota própria ou terceirizada',
      icon: {
        width: 16,
        height: 16,
        src: '/images/icons/vehicle.png',
        alt: 'Seleção de frota própria ou terceirizada'
      }
    },
    {
      title: 'Despacho automático para o motorista ideal',
      icon: {
        width: 16,
        height: 16,
        src: '/images/icons/home-solutions-user.svg',
        alt: 'Despacho automático para o motorista ideal'
      }
    }
  ]

  const list_app_cl = [
    {
      title: 'Chat direto com a operação',
      icon: {
        width: 16,
        height: 16,
        src: '/images/icons/home-solutions-chat.svg',
        alt: 'Chat direto com a operação'
      }
    },
    {
      title: 'Integração com Google Maps e Waze',
      icon: {
        width: 16,
        height: 16,
        src: '/images/icons/home-solutions-map.svg',
        alt: 'Integração com Google Maps e Waze'
      }
    },
    {
      title: 'Comprovação por foto, vídeo e assinatura',
      icon: {
        width: 16,
        height: 16,
        src: '/images/icons/home-solutions-camera.svg',
        alt: 'Comprovação por foto, vídeo e assinatura'
      }
    },
    {
      title: 'Aceite da rota direto no app',
      icon: {
        width: 16,
        height: 16,
        src: '/images/icons/home-solutions-route.svg',
        alt: 'Aceite da rota direto no app'
      }
    }
  ]

  return (
    <>
      <Section
        className="mb-16 lg:mb-0"
        title={
          <Title className="px-5">
            Encontre as soluções ideais para sua{' '}
            <TextHighlight>operação</TextHighlight>
          </Title>
        }
        subtitle="Conheça nossas solções e escolha a combinação ideal para atingir seus objetivos."
      >
        <div className="hidden lg:block">
          <div className="mt-24 flex items-center justify-evenly pb-24">
            {tabList.map((item, index) => (
              <CardSoluctions
                key={index}
                isActive={tab === index}
                onClick={() => setTab(index)}
                title={item.title}
                icon={item.icon}
              />
            ))}
          </div>
          <div className="flex pb-6">
            <div className="flex flex-col px-5 items-center justify-evenly">
              {list_soluctions_route_cl.map(
                (item, index) =>
                  tab === 0 && (
                    <CardRoute
                      key={index}
                      title={item.title}
                      icon={item.icon}
                    />
                  )
              )}

              {list_management_cl.map(
                (item, index) =>
                  tab === 1 && (
                    <CardRoute
                      key={index}
                      title={item.title}
                      icon={item.icon}
                    />
                  )
              )}

              {list_automation_cl.map(
                (item, index) =>
                  tab === 2 && (
                    <CardRoute
                      key={index}
                      title={item.title}
                      icon={item.icon}
                    />
                  )
              )}

              {list_app_cl.map(
                (item, index) =>
                  tab === 3 && (
                    <CardRoute
                      key={index}
                      title={item.title}
                      icon={item.icon}
                    />
                  )
              )}

              {list_automation_cl.map(
                (item, index) =>
                  tab === 4 && (
                    <CardRoute
                      key={index}
                      title={item.title}
                      icon={item.icon}
                    />
                  )
              )}
            </div>
            <div className="mt-8 lg:mt-0 w-full relative flex justify-center pt-[64%] md:pt-[32%] mb-4 lg:mb-0">
              {tabList.map(
                (item, index) =>
                  tab === index && (
                    <div className="px-5" key={index}>
                      <Image src={item.src} fill alt={item.alt} />
                    </div>
                  )
              )}
            </div>
            <div className="flex flex-col px-5 items-center justify-evenly">
              {list_soluctions_route_cr.map(
                (item, index) =>
                  tab === 0 && (
                    <CardRoute
                      key={index}
                      title={item.title}
                      icon={item.icon}
                    />
                  )
              )}

              {list_management_cr.map(
                (item, index) =>
                  tab === 1 && (
                    <CardRoute
                      key={index}
                      title={item.title}
                      icon={item.icon}
                    />
                  )
              )}

              {list_automation_cl.map(
                (item, index) =>
                  tab === 2 && (
                    <CardRoute
                      key={index}
                      title={item.title}
                      icon={item.icon}
                    />
                  )
              )}

              {list_app_cl.map(
                (item, index) =>
                  tab === 3 && (
                    <CardRoute
                      key={index}
                      title={item.title}
                      icon={item.icon}
                    />
                  )
              )}

              {list_automation_cl.map(
                (item, index) =>
                  tab === 4 && (
                    <CardRoute
                      key={index}
                      title={item.title}
                      icon={item.icon}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </Section>

      <div className="lg:hidden">
        <div ref={sliderRef} className="keen-slider">
          {tabList.map((item, index) => (
            <div className="keen-slider__slide pl-5" key={index}>
              <CardSoluctions
                isActive={tab === index}
                onClick={() => setTab(index)}
                title={item.title}
                icon={item.icon}
              />
            </div>
          ))}
        </div>
        <div className="pb-8">
          <div className="mt-8 lg:mt-0 w-full relative flex justify-center pt-[59%] md:pt-[60%] lg:pt-[32%] mb-4">
            {tabList.map(
              (item, index) =>
                tab === index && (
                  <div className="px-5" key={index}>
                    <Image src={item.src} fill alt={item.alt} />
                  </div>
                )
            )}
          </div>
          <div className="block lg:hidden">
            <p className="font-sans text-xs/6 text-center text-grayscale-200 pb-8">
              Imagem meramente ilustrativa
            </p>
          </div>
          <div className="px-5 items-center justify-evenly">
            {list_soluctions_route_cl.map(
              (item, index) =>
                tab === 0 && (
                  <CardRoute key={index} title={item.title} icon={item.icon} />
                )
            )}

            {list_soluctions_route_cr.map(
              (item, index) =>
                tab === 0 && (
                  <CardRoute key={index} title={item.title} icon={item.icon} />
                )
            )}

            {list_management_cl.map(
              (item, index) =>
                tab === 1 && (
                  <CardRoute key={index} title={item.title} icon={item.icon} />
                )
            )}

            {list_management_cr.map(
              (item, index) =>
                tab === 1 && (
                  <CardRoute key={index} title={item.title} icon={item.icon} />
                )
            )}

            {list_automation_cl.map(
              (item, index) =>
                tab === 2 && (
                  <CardRoute key={index} title={item.title} icon={item.icon} />
                )
            )}

            {list_automation_cl.map(
              (item, index) =>
                tab === 2 && (
                  <CardRoute key={index} title={item.title} icon={item.icon} />
                )
            )}

            {list_app_cl.map(
              (item, index) =>
                tab === 3 && (
                  <CardRoute key={index} title={item.title} icon={item.icon} />
                )
            )}

            {list_app_cl.map(
              (item, index) =>
                tab === 3 && (
                  <CardRoute key={index} title={item.title} icon={item.icon} />
                )
            )}

            {list_automation_cl.map(
              (item, index) =>
                tab === 4 && (
                  <CardRoute key={index} title={item.title} icon={item.icon} />
                )
            )}

            {list_automation_cl.map(
              (item, index) =>
                tab === 4 && (
                  <CardRoute key={index} title={item.title} icon={item.icon} />
                )
            )}
          </div>
        </div>
      </div>
      <div className="px-20">
        <div className="hidden lg:block">
          <p className="font-sans text-xs/6 text-center text-grayscale-200 pb-12">
            Imagem meramente ilustrativa
          </p>
        </div>
        <div className="pb-12 md:pb-16">
          <p className="lg:max-w-[60%] lg:px-5 m-auto text-grayscale-200 text-base font-normal text-center">
            Com o Routing Studio você pode realizar todo o planajamento de suas
            rotas, sejam elas D+0, D+1 ou Apenas estudar o melhor planejamento.
          </p>
        </div>
        <div className="md:w-32 m-auto mb-24">
          <ButtonPrimary href="/">Saiba mais</ButtonPrimary>
        </div>
      </div>
    </>
  )
}
