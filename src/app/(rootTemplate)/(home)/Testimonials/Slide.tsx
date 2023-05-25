'use client'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useEffect, useState } from 'react'
import { Skeleton } from 'components/elements/Skeleton'

export const SlideTestimonials = () => {
  const [windowWidth, setWindowWidth] = useState(undefined)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!windowWidth) {
      setWindowWidth(window.innerWidth)
    }

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

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: useWindowWidth() || 3,
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
      <div className="pt-7 pb-6 px-11 border-2 border-primary-100 rounded-xl text-center relative">
        <div className="absolute top-0 left-1/2 w-3 h-3 bg-primary-100 rounded-full -translate-x-[6px] -translate-y-[6px]" />
        <div className="w-[138px] h-[138px] mb-8 border-2 border-primary-100 mx-auto rounded-full">
          {avatar}
        </div>
        <h2 className="text-2xl font-semibold sm">{name}</h2>
        <p className="text-sm mb-8">{position}</p>

        <p className="text-sm">
          <span className="text-primary-100 text-3xl">”</span>
          {testimonial}
          <span className="text-primary-100 text-3xl">”</span>
        </p>
      </div>
    )
  }

  return !windowWidth ? (
    <div className="flex flex-col items-center">
      <Skeleton className="h-[460px] w-full mb-20 rounded-xl" />
      <Skeleton className="h-2 w-20 rounded-full" />
    </div>
  ) : (
    <div>
      <div ref={sliderRef} className="keen-slider mb-[72px]">
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
