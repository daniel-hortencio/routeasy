'use client'

import Image from 'next/image'
import { Section } from 'components/elements/Section'
import { useEffect, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

export const Clients = () => {
  const [windowWidth, setWindowWidth] = useState(null)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    // Limpe o listener do evento resize ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const useWindowWidth = () => {
    if (windowWidth > 520) {
      return 3.5
    }

    return 2.5
  }

  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: useWindowWidth(),
      spacing: 20
    },
    created() {
      setLoaded(true)
    }
  })

  const clients = [
    { src: '/images/logos/DHL.svg', alt: 'DHL' },
    { src: '/images/logos/solistica.svg', alt: 'Solistica' },
    { src: '/images/logos/shopee.svg', alt: 'Shopee' },
    { src: '/images/logos/magalu.svg', alt: 'Magalu' },
    { src: '/images/logos/magalu.svg', alt: 'Magalu' },
    { src: '/images/logos/magalu.svg', alt: 'Magalu' }
  ]

  return (
    <Section className="pb-16 md:pb-20">
      <div className="hidden md:block mx-auto w-[calc(100%-3rem)] h-[6px] rounded-t-lg bg-grayscale-600" />

      <div className="mx-auto bg-grayscale-500 rounded-lg shadow-3xl">
        <div className="hidden md:flex justify-evenly">
          {clients.map((client, index) => (
            <div className="w-[100px] h-[100px] relative" key={index}>
              <Image src={client.src} fill alt={client.alt} />
            </div>
          ))}
        </div>

        <div className="md:hidden py-5">
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
