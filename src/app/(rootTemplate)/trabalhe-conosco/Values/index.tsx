'use client'

import { Section } from 'components/elements/Section'
import { Icon } from 'components/elements/Icon'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { Title, Text } from 'components/elements/Texts'

const CardValues = ({ icon, title, text }) => {
  return (
    <div className="border border-grayscale-500 rounded-[15px] pt-4 px-4 h-full">
      {icon}
      <h1 className="uppercase text-xl font-semibold py-4">{title}</h1>
      <Text className="text-grayscale-200 text-sm mb-6 font-light">{text}</Text>
    </div>
  )
}

export const list_area = [
  {
    icon: (
      <div className="flex items-center justify-center bg-bluescale-50 rounded-md w-12 h-12">
        <Icon color="white" name="AiOutlineClockCircle" size={24} />
      </div>
    ),
    title: 'Antecipamos Tendências',
    text: 'Corremos atrás do que é inovador e disruptivo. Nos orgulhamos de criar soluções que lideram mudanças e transformam o mercado.'
  },
  {
    icon: (
      <div className="flex items-center justify-center bg-primary rounded-md w-12 h-12">
        <Icon color="white" name="IoAlert" size={24} />
      </div>
    ),
    title: 'Gostamos de Erros Inéditos',
    text: 'Gostamos de pessoas que se arriscam, testam novas possibilidades, abraçam os erros e se projetam para o futuro. Afinal, o aprendizado sempre está no erro inédito.'
  },
  {
    icon: (
      <div className="flex items-center justify-center bg-yellowscale-50 rounded-md w-12 h-12">
        <Icon color="white" name="FiZap" size={24} />
      </div>
    ),
    title: 'Quanto + Rápido + Rápido',
    text: 'Temos uma mente empreendedora que nos inspira a tomar riscos e tirar os planos do papel. É mais ação, sem demora. Encorajamos a autonomia para errar rápido para corrigir erros mais rápido ainda.'
  },
  {
    icon: (
      <div className="flex items-center justify-center bg-redscale-50 rounded-md w-12 h-12">
        <Icon color="white" name="FiTarget" size={24} />
      </div>
    ),
    title: 'Foca no Dream Space',
    text: 'Sonhamos alto, confiamos no sucesso e sabemos o que fazer para chegar aonde queremos. É foco total no que realmente importa, sem desperdiçar energia pelo caminho.'
  },
  {
    icon: (
      <div className="flex items-center justify-center bg-primary-300 rounded-md w-12 h-12">
        <Icon color="white" name="BsArrowUpShort" size={24} />
      </div>
    ),
    title: 'Hype-se',
    text: 'Somos protagonistas da nossa carreira. Sabemos que nada é impossível e, por isso, desafiamos nossos limites para ir além das expectativas. É foco total em entregar sempre mais e melhor, desde o primeiro dia!'
  },
  {
    icon: (
      <div className="flex items-center justify-center bg-purplescale-50 rounded-md w-12 h-12">
        <Icon color="white" name="AiOutlinePlus" size={24} />
      </div>
    ),
    title: '1+1>2',
    text: 'Juntos, superamos a lógica! Trabalhamos em equipe para unir forças e alcançar resultados maiores e melhores.'
  }
]

export const Values = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1.4
    },
    breakpoints: {
      '(min-width: 540px)': {
        slides: {
          perView: 2.25
        }
      },
      '(min-width: 768px)': {
        slides: {
          perView: 3.25
        }
      }
    }
  })

  return (
    <>
      <Section
        className="pb-4 md:pb-40"
        title={<Title>Nossos valores</Title>}
        subtitle={
          <Text className="text-grayscale-50 text-[15px] font-light">
            Nós, da RoutEasy somos guiados pelos nossos valores e eles estão
            presentes em nossa cultura e em nossa visão de mundo.
          </Text>
        }
      >
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 grid-rows-2 gap-4 justify-center items-center">
            {list_area.map((item, index) => (
              <CardValues
                key={index}
                icon={item.icon}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </Section>
      <div className="lg:hidden mb-16">
        <div ref={sliderRef} className="keen-slider">
          {list_area.map((item, index) => (
            <div
              className={`keen-slider__slide ${index === 0 ? 'px-5' : 'pr-5'} `}
              key={index}
            >
              <CardValues
                icon={item.icon}
                title={item.title}
                text={item.text}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
