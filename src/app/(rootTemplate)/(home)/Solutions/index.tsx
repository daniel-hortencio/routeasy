'use client'

import Image from 'next/image'
import { Section } from 'components/elements/Section'
import { ButtonPrimary } from 'components/elements/Button'
import { useKeenSlider } from 'keen-slider/react'
import { useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { TextHighlight, Title } from 'components/elements/Texts'
import Icon from 'components/elements/Icon'

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
    <div className="rounded-lg border md:w-60 h-16 border-grayscale-500 cursor-pointer flex items-center justify-start md:justify-center px-4 mx-auto mb-4 md:mb-0">
      <div className="flex items-center justify-center h-[30px] w-[50px] bg-grayscale-500 rounded-[4px]">
        <Image
          src={icon.src}
          width={icon.width || 18}
          height={icon.height || 18}
          alt={icon.alt}
        />
      </div>
      <div>
        <p className="text-sm font-sans font-semibold ml-4">{title}</p>
      </div>
    </div>
  )
}

export const Solutions = () => {
  const [tab, setTab] = useState(1)

  const [sliderRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slides: {
      spacing: 20,
      origin: 'center',
      perView: 2.4
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: {
          perView: 3.25
        }
      }
    }
  })

  const tabList = [
    {
      title: 'Roteirização 1',
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
      src: '/images/pictures/Screen_automacao_API.svg',
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
      src: '/images/pictures/Screen_automacao_API.svg',
      icon: {
        src: '/images/icons/home-solutions-api.svg',
        alt: 'API'
      },
      alt: 'API'
    }
  ]

  const list_soluctions = [
    {
      title: 'Personalização de objetivos de otimização',
      icon: {
        width: 16,
        height: 16,
        src: '/images/icons/home-solutions-pen.svg',
        alt: 'API'
      }
    },
    {
      title: 'Entregas e coletas na mesma rota',
      icon: {
        width: 16,
        height: 16,
        src: '/images/icons/home-solutions-box.svg',
        alt: 'API'
      }
    },
    {
      title: 'Resequenciamento automático  ',
      icon: {
        width: 16,
        height: 16,
        src: '/images/icons/home-solutions-dots.svg',
        alt: 'API'
      }
    },
    {
      title: 'Configuração de restrições operacionais',
      icon: {
        width: 16,
        height: 16,
        src: '/images/icons/home-solutions-car.svg',
        alt: 'API'
      }
    }
  ]

  return (
    <>
      <Section
        title={
          <Title className="px-5">
            Encontre as soluções ideais para sua{' '}
            <TextHighlight>operação</TextHighlight>
          </Title>
        }
        subtitle="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. "
      >
        <div className="hidden lg:block">
          <div className="mt-14 flex items-center justify-evenly">
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
      </div>
      <Section>
        <div className="mt-8 lg:mt-16 w-full relative mb-4 flex justify-center pt-[64%] md:pt-[50%]">
          {tabList.map(
            (item, index) =>
              tab === index && (
                <div className="px-5" key={index}>
                  <Image src={item.src} fill alt={item.alt} />
                </div>
              )
          )}
        </div>
        <div>
          <p className="font-sans text-xs/6 text-center text-grayscale-200 pb-12">
            Imagem meramente ilustrativa
          </p>
        </div>
        <div className="md:flex px-5 mb-10 items-center justify-between">
          {list_soluctions.map((item, index) => (
            <CardRoute key={index} title={item.title} icon={item.icon} />
          ))}
        </div>
        <div className="pb-16">
          <p className="md:max-w-[60%] px-5 m-auto text-grayscale-200 text-base font-normal text-center">
            Com o Routing Studio você pode realizar todo o planajamento de suas
            rotas, sejam elas D+0, D+1 ou Apenas estudar o melhor planejamento.
          </p>
        </div>
        <div className="md:w-32 m-auto mb-32">
          <ButtonPrimary href="/">Saiba mais</ButtonPrimary>
        </div>
      </Section>
    </>
  )
}
