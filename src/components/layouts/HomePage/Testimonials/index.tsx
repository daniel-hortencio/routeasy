'use client'

import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import { Section } from 'components/elements/Section'

import 'keen-slider/keen-slider.min.css'
import { useEffect, useState } from 'react'
import { ButtonWhite } from 'components/elements/Button'

export const Testimonials = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const useWindowWidth = () => {
    if (windowWidth > 1024) {
      return 3
    }

    if (windowWidth > 640) {
      return 2
    }

    return 1
  }

  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: useWindowWidth(),
      spacing: 20
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    }
  })

  const CardTestimonial = ({ avatar, name, position, testimonial }) => {
    return (
      <div className="pt-7 pb-6 px-11 border-2 border-primary rounded-xl text-center relative">
        <div className="absolute top-0 left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-[6px] -translate-y-[6px]" />
        <div className="w-[138px] h-[138px] mb-8 border-2 border-primary mx-auto rounded-full">
          {avatar}
        </div>
        <h2 className="text-2xl font-semibold sm">{name}</h2>
        <p className="text-sm mb-8">{position}</p>

        <p className="text-sm">
          <span className="text-primary text-3xl">”</span>
          {testimonial}
          <span className="text-primary text-3xl">”</span>
        </p>
      </div>
    )
  }

  return (
    <Section
      title={
        <h1>
          Quem usa <span className="text-primary">confia</span>
        </h1>
      }
      subtitle="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. "
    >
      <div className="mb-[88px] lg:mb-44">
        <div className="mb-12 ">
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide pt-2">
              <CardTestimonial
                avatar=""
                name="Antonio Silva"
                position="Customer"
                testimonial="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis."
              />
            </div>
            <div className="keen-slider__slide pt-2">
              <CardTestimonial
                avatar=""
                name="Antonio Silva"
                position="Customer"
                testimonial="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis."
              />
            </div>
            <div className="keen-slider__slide pt-2">
              <CardTestimonial
                avatar=""
                name="Antonio Silva"
                position="Customer"
                testimonial="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis."
              />
            </div>
            <div className="keen-slider__slide pt-2">
              <CardTestimonial
                avatar=""
                name="Antonio Silva"
                position="Customer"
                testimonial="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis."
              />
            </div>
            <div className="keen-slider__slide pt-2">
              <CardTestimonial
                avatar=""
                name="Antonio Silva"
                position="Customer"
                testimonial="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis."
              />
            </div>
            <div className="keen-slider__slide pt-2">
              <CardTestimonial
                avatar=""
                name="Antonio Silva"
                position="Customer"
                testimonial="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis."
              />
            </div>
          </div>
        </div>
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
                    'w-2 h-2 rounded-full bg-primary mr-2 dot ' +
                    (currentSlide !== idx && 'opacity-50')
                  }
                ></button>
              )
            })}
          </div>
        )}
      </div>

      <div className="relative overflow-hidden rounded-3xl w-full text-center py-10 md:py-11 pb-16">
        <Image
          src="/images/pictures/background-way.png"
          fill
          alt="Background"
          style={{ objectFit: 'cover' }}
        />
        <div className="relative mx-auto w-16 h-16 mb-8 md:mb-10">
          <Image src="/images/logos/union.svg" fill alt="Recicável" />
        </div>
        <div className="relative z-10">
          <p className="text-lg text-[#EDEDED] font-bold mb-6 md:mb-8">
            Nossos clientes já reduziram
          </p>
          <h1 className="text-[88px] font-semibold mb-14 hidden lg:flex justify-center">
            50 Toneladas de Co2
          </h1>
          <h1 className="lg:hidden ">
            <span className="block text-[88px] font-semibold">50</span>
            <span className="block text-[32px] mb-2 font-medium">
              Toneladas <br />
              de
            </span>
            <span className="block text-7xl mb-6 font-semibold">Co2</span>
          </h1>
          <ButtonWhite href="/">Veja alguns cases de sucesso</ButtonWhite>
        </div>
      </div>
    </Section>
  )
}
