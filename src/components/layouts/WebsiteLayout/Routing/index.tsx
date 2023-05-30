'use client'

import { useState } from 'react'
import { Section } from 'components/elements/Section'
import { RoutingList } from './content'
import { RoutingCard } from './components/Card'
import { RoutingMainContent } from './components/Main'
import { FeatureCardList } from './components/FeatureCards'

export const Routing: React.FC = () => {
  const [cardActive, setCardActive] = useState<number>(0)

  return (
    <Section>
      <div className="w-full mb-16">
        <div className="w-10/12 m-auto flex justify-between">
          {RoutingList.map((card, index) => (
            <RoutingCard
              title={card.title}
              key={index}
              icon={card.icon}
              isActive={cardActive === index}
              onClick={() => setCardActive(index)}
            />
          ))}
        </div>
      </div>
      <div className="w-full mb-16 flex justify-between">
        {RoutingList.map((content, index) => (
          <div
            key={index}
            className={`${cardActive === index ? 'show' : 'hidden'}`}
          >
            <RoutingMainContent
              title={content.title}
              text={content.text}
              link={content.link}
              image={content.image}
            />
          </div>
        ))}
      </div>
      <FeatureCardList />
    </Section>
  )
}
