import { Section } from 'components/elements/Section'

import { ICardFeatureProps } from 'components/elements/CardFeature/types'
import { CardFeature } from 'components/elements/CardFeature'

const listFeatures: ICardFeatureProps[] = [
  {
    title: 'Velocidade',
    text: 'Roteirize mais pontos em menos tempo, diminuindo as etapas do planejmento de rotas.',
    icon: 'FiZap'
  },
  {
    title: 'Precisão',
    text: 'Reduza custos e falhas com um algoritmo avançado que garante rotas altamente precisas.',
    icon: 'BsShield'
  },
  {
    title: 'Eficiência',
    text: 'Conte com a inteligência artificial líder de mercado trabalhando para otimizar o seu negócio.',
    icon: 'FiTarget'
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
