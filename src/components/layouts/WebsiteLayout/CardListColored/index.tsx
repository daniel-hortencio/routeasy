import { Section } from 'components/elements/Section'
import { Title } from 'components/elements/Texts'
import { Icon } from 'components/elements/Icon'

import { ICardColoredProps, ICardListProps } from './types'

const CardColored = ({ icon, title, text, accentColor }: ICardColoredProps) => {
  return (
    <div className="block rounded-2xl border border-grayscale-500 p-6 pb-[51px] text-center md:text-left">
      <div
        className={`flex items-center justify-center ${accentColor} rounded-md w-12 h-12 m-auto md:m-0`}
      >
        <Icon color="white" name={icon} size={24} />
      </div>
      <h1 className="uppercase text-xl font-semibold py-4">{title}</h1>
      <p className="text-grayscale-200 text-sm">{text}</p>
    </div>
  )
}

export const CardListColored = ({ cards, title, subtitle }: ICardListProps) => {
  return (
    <Section
      className="my-20 md:my-32 "
      title={<Title>{title}</Title>}
      subtitle={subtitle}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards &&
          cards.map((item, index) => (
            <CardColored
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
