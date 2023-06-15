import { Section } from 'components/elements/Section'
import { Title, Text } from 'components/elements/Texts'
import { IconCardColored } from 'components/elements/IconColoredCard'

import { ICardListProps } from './types'

export const CardListColored = ({ cards, title, subtitle }: ICardListProps) => {
  return (
    <Section
      className="my-20 md:my-32 "
      title={<Title>{title}</Title>}
      subtitle={
        <Text className="text-grayscale-50 text-[15px]">{subtitle}</Text>
      }
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards &&
          cards.map((item, index) => (
            <IconCardColored
              key={index}
              title={item.title}
              icon={item.icon}
              text={item.text}
              accentColor={item.accentColor}
            />
          ))}
      </div>
    </Section>
  )
}
