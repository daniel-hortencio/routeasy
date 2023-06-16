'use client'

import { Section } from 'components/elements/Section'
import { Title, Text } from 'components/elements/Texts'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

export const CardBenefits = ({ title, text }) => {
  return (
    <div className="border border-grayscale-500 rounded-[15px] py-12 px-4 text-center">
      <div className="uppercase text-[22px]/[33px] mb-4 font-semibold text-white">
        {title}
      </div>
      <div className="text-grayscale-200 text-sm font-normal">{text}</div>
    </div>
  )
}

export const list_benefits = [
  {
    title: 'Benefício 1',
    text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. '
  },
  {
    title: 'Benefício 2',
    text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. '
  },
  {
    title: 'Benefício 3',
    text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. '
  },
  {
    title: 'Benefício 4',
    text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. '
  },
  {
    title: 'Benefício 5',
    text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. '
  },
  {
    title: 'Benefício 6',
    text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. '
  },
  {
    title: 'Benefício 7',
    text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. '
  },
  {
    title: 'Benefício 8',
    text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. '
  }
]

export const Benefits = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      origin: 'auto',
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
    <div>
      <Section
        className="lg:pb-32"
        title={<Title>Benefícios Routeasy</Title>}
        subtitle={
          <Text className="text-grayscale-50 text-[15px] font-light">
            Oferecemos uma ampla gama de benefícios com o objetivo de valorizar
            e cuidar do bem-estar de cada membro de nossa equipe.
          </Text>
        }
      >
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 grid-rows-2 gap-4 justify-center items-center">
            {list_benefits.map((item, index) => (
              <CardBenefits key={index} title={item.title} text={item.text} />
            ))}
          </div>
        </div>
      </Section>
      <div className="lg:hidden pb-8 ml-6">
        <div ref={sliderRef} className="keen-slider mb-12">
          {list_benefits.map((item, index) => (
            <div className={`keen-slider__slide ${index === 0} `} key={index}>
              <CardBenefits title={item.title} text={item.text} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
