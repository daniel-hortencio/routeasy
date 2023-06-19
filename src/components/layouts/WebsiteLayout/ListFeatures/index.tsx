import { Section } from 'components/elements/Section'

import { ICardFeatureProps } from 'components/elements/CardFeature/types'
import { CardFeature } from 'components/elements/CardFeature'

const listFeatures: ICardFeatureProps[] = [
  {
    title: 'Velocidade',
    text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates. ',
    icon: 'BiSolidZap'
  },
  {
    title: 'Segurança',
    text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates. ',
    icon: 'BiSolidShield'
  },
  {
    title: 'Eficiência',
    text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates. ',
    icon: 'BiAbacus'
  }
]

export const ListFeatures = () => {
  return (
    <Section>
      <div className="flex gap-8 pb-16">
        {listFeatures.map((card, index) => (
          <CardFeature
            key={index}
            title={card.title}
            text={card.text}
            icon={card.icon}
          />
        ))}
      </div>
    </Section>
  )
}
