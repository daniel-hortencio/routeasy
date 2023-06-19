'use client'

import Image from 'next/image'
import { Section } from 'components/elements/Section'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

const animation = { duration: 10000, easing: (t: number) => t }

export const Clients = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: 'performance',
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    breakpoints: {
      '(max-width: 639px)': {
        slides: {
          perView: 3
        }
      },
      '(min-width: 1024px)': {
        slides: {
          perView: 7,
          spacing: 15
        }
      },
      '(min-width: 640px) and (max-width: 1023px)': {
        slides: {
          perView: 4
        }
      }
    }
  })

  const clients = [
    { src: '/images/logos/dhl.png', alt: 'DHL' },
    { src: '/images/logos/solist.png', alt: 'Solistica' },
    { src: '/images/logos/shop.png', alt: 'Shopee' },
    { src: '/images/logos/mag.png', alt: 'Magalu' },
    { src: '/images/logos/ultra.png', alt: 'Ultra Gaz' },
    { src: '/images/logos/ML.png', alt: 'Mercado Livre' },
    { src: '/images/logos/gpa.png', alt: 'GPA' },
    { src: '/images/logos/rte.png', alt: 'Rodonaves' },
    { src: '/images/logos/royal.png', alt: 'Royal Canin' },
    { src: '/images/logos/ze.png', alt: 'Zé Delivery' },
    { src: '/images/logos/oggi.png', alt: 'Oggi' }
  ]

  return (
    <Section className="pb-16 md:pb-20">
      <div className="hidden md:block mx-auto w-[calc(100%-3rem)] h-[6px] rounded-t-lg bg-grayscale-600" />

      <div className="mx-auto bg-grayscale-500 rounded-lg shadow-3xl">
        <div className="py-5">
          <div ref={sliderRef} className="keen-slider ">
            {clients.map((client, index) => (
              <div
                className="keen-slider__slide h-[70px] relative px-4"
                key={index}
              >
                <Image
                  src={client.src}
                  fill
                  alt={client.alt}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
