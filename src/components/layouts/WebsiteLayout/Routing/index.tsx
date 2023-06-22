'use client'

import { useState } from 'react'
import { Section } from 'components/elements/Section'
import { RoutingList } from './content'
import { RoutingCard } from './components/Card'
import { RoutingMainContent } from './components/Main'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

export const Routing = () => {
  const [cardActive, setCardActive] = useState<number>(0)

  const [sliderRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 2.2
    },
    breakpoints: {
      '(min-width: 600px)': {
        slides: {
          perView: 3.25
        }
      }
    }
  })

  return (
    <>
      <Section>
        <div className="hidden lg:block">
          <div className="w-full mb-16">
            <div className="w-10/12 m-auto flex justify-between gap-[35px]">
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
        </div>
      </Section>
      <div className="lg:hidden">
        <div ref={sliderRef} className="keen-slider">
          <div className="w-full lg:mb-12">
            <div className="w-full m-auto flex justify-between">
              {RoutingList.map((card, index) => (
                <div className="keen-slider__slide pl-5" key={index}>
                  <RoutingCard
                    title={card.title}
                    key={index}
                    icon={card.icon}
                    isActive={cardActive === index}
                    onClick={() => setCardActive(index)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Section className="mb-28">
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
                featureContent={content.featureContent}
              />
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
