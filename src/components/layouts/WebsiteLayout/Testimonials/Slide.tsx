'use client'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useEffect, useState } from 'react'
import { Skeleton } from 'components/elements/Skeleton'
import { Text } from 'components/elements/Texts'
import Image from 'next/image'

export const SlideTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 1,
      spacing: 20
    },
    breakpoints: {
      '(min-width: 1024px)': {
        slides: {
          perView: 3,
          spacing: 20
        }
      },
      '(min-width: 640px) and (max-width: 1023px)': {
        slides: {
          perView: 2,
          spacing: 20
        }
      }
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    }
  })

  useEffect(() => {
    setLoaded(true)
  }, [])

  const CardTestimonial = ({ avatar, name, position, testimonial }) => {
    return (
      <div className="pt-7 pb-6 px-11 border-2 border-primary-100 rounded-xl text-center relative">
        <div className="absolute top-0 left-1/2 w-3 h-3 bg-primary-100 rounded-full -translate-x-[6px] -translate-y-[6px]" />
        <div className="w-[138px] h-[138px] mb-4 mx-auto">
          {avatar && <Image src={avatar} width={138} height={138} alt={name} />}
        </div>
        <h2 className="text-[22px] uppercase font-semibold">{name}</h2>
        <p className="text-[13px] mb-8">{position}</p>

        <p className="text-sm h-44">
          <span className="text-primary-100 text-3xl">”</span>
          <Text className="text-[13px]/[22px] font-light">{testimonial}</Text>
          <span className="text-primary-100 text-3xl">”</span>
        </p>
      </div>
    )
  }

  return (
    <div>
      {loaded ? (
        <div ref={sliderRef} className={`keen-slider mb-[72px]`}>
          <div className="keen-slider__slide pt-2">
            <CardTestimonial
              avatar="/images/pictures/paulo.png"
              name="Paulo Chouzende"
              position="Grupo Pão de Açucar"
              testimonial="Com a RoutEasy, ganhamos um alto poder de escala e multiplicamos a capacidade das nossas operações. É uma solução completa e essencial para os nossos bons resultados"
            />
          </div>
          <div className="keen-slider__slide pt-2">
            <CardTestimonial
              avatar="/images/pictures/gustavo.png"
              name="Gustavo Suim"
              position="Magalu"
              testimonial="Reduzimos em mais da metade o nosso tempo de roteirização! Agora, são menos etapas no processo e conseguimos manter nosso SLA mesmo nos maiores picos de demanda, como a Black Friday."
            />
          </div>
          <div className="keen-slider__slide pt-2">
            <CardTestimonial
              avatar="/images/pictures/sandro.png"
              name="Sandro Roelli"
              position="Royal Canin"
              testimonial="Conseguimos focar na resolução dos problemas mais rapidamente e a eficiência operacional impacta não apenas o setor de logística, como toda a empresa"
            />
          </div>
          <div className="keen-slider__slide pt-2">
            <CardTestimonial
              avatar="/images/pictures/paulo.png"
              name="Paulo Chouzende"
              position="Grupo Pão de Açucar"
              testimonial="Com a RoutEasy, ganhamos um alto poder de escala e multiplicamos a capacidade das nossas operações. É uma solução completa e essencial para os nossos bons resultados"
            />
          </div>
          <div className="keen-slider__slide pt-2">
            <CardTestimonial
              avatar="/images/pictures/gustavo.png"
              name="Gustavo Suim"
              position="Magalu"
              testimonial="Reduzimos em mais da metade o nosso tempo de roteirização! Agora, são menos etapas no processo e conseguimos manter nosso SLA mesmo nos maiores picos de demanda, como a Black Friday."
            />
          </div>
          <div className="keen-slider__slide pt-2">
            <CardTestimonial
              avatar="/images/pictures/sandro.png"
              name="Sandro Roelli"
              position="Royal Canin"
              testimonial="Conseguimos focar na resolução dos problemas mais rapidamente e a eficiência operacional impacta não apenas o setor de logística, como toda a empresa"
            />
          </div>
        </div>
      ) : (
        <Skeleton className="w-full pt-[48%] rounded-xl" />
      )}
      {loaded && instanceRef.current && (
        <div className="flex justify-center translate-x-1">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys()
          ].map(idx => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={
                  'w-2 h-2 rounded-full bg-primary-100 mr-2 dot ' +
                  (currentSlide !== idx && 'opacity-50')
                }
              ></button>
            )
          })}
        </div>
      )}
    </div>
  )
}
