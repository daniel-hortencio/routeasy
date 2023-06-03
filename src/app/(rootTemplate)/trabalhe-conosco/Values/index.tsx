'use client'

import { Section } from 'components/elements/Section'
import { Icon } from 'components/elements/Icon'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { Title } from 'components/elements/Texts'

const CardValues = ({ icon, title, text }) => {
  return (
    <div className="border border-grayscale-500 rounded-[15px] pt-4 px-4 h-[300px]">
      {icon}
      <h1 className="uppercase text-xl font-semibold py-4">{title}</h1>
      <p className="text-grayscale-200 text-sm mb-6">{text}</p>
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
    text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum.'
  },
  {
    icon: (
      <div className="flex items-center justify-center bg-primary rounded-md w-12 h-12">
        <Icon color="white" name="IoAlert" size={24} />
      </div>
    ),
    title: 'Gostamos de Erros Inéditos',
    text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum.'
  },
  {
    icon: (
      <div className="flex items-center justify-center bg-yellowscale-50 rounded-md w-12 h-12">
        <Icon color="white" name="FiZap" size={24} />
      </div>
    ),
    title: 'Quanto + Rápido + Rápido',
    text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum.'
  },
  {
    icon: (
      <div className="flex items-center justify-center bg-redscale-50 rounded-md w-12 h-12">
        <Icon color="white" name="FiTarget" size={24} />
      </div>
    ),
    title: 'Foca no Dream Space',
    text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum.'
  },
  {
    icon: (
      <div className="flex items-center justify-center bg-primary-300 rounded-md w-12 h-12">
        <Icon color="white" name="BsArrowUpShort" size={24} />
      </div>
    ),
    title: 'Hype-se',
    text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum.'
  },
  {
    icon: (
      <div className="flex items-center justify-center bg-purplescale-50 rounded-md w-12 h-12">
        <Icon color="white" name="AiOutlinePlus" size={24} />
      </div>
    ),
    title: '1+1>2',
    text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum.'
  }
]

export const Values = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      spacing: 20,
      perView: 1.4
    },
    breakpoints: {
      '(min-width: 540px)': {
        slides: {
          perView: 2.25,
          spacing: 20
        }
      },
      '(min-width: 768px)': {
        slides: {
          perView: 3.25,
          spacing: 20
        }
      }
    }
  })

  return (
    <>
      <Section
        className="pb-20"
        title={<Title>Nossos valores</Title>}
        subtitle="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. "
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
      <div className="lg:hidden mb-12">
        <div ref={sliderRef} className="keen-slider">
          {list_area.map((item, index) => (
            <div
              className={`keen-slider__slide ${index === 0 && 'ml-5'} `}
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
