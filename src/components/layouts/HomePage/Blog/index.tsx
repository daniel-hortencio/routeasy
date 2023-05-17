'use client'

import { Section } from 'components/elements/Section'
import { useKeenSlider } from 'keen-slider/react'
import { useEffect, useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { ButtonSecondary } from 'components/elements/Button'

const CardBlog = ({ tag, title, avatar, author, date }) => {
  return (
    <div className="rounded-2xl h-96 bg-[#555] flex items-end">
      <div className="pb-6 px-4">
        <p className="h-6 px-2 mb-1 bg-[#B0E6D2] rounded w-min text-xs text-black">
          {tag}
        </p>
        <p className="mb-1 text-xl uppercase font-semibold">{title}</p>
        <footer className="flex items-center">
          <div className="border-2 border-white h-10 w-10 rounded-full"></div>
          <p className="ml-2">{author}</p>
          <p className="ml-auto font-bold">{date}</p>
        </footer>
      </div>
    </div>
  )
}

export const Blog = () => {
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
    if (windowWidth > 640) {
      return 2.25
    }

    return 1.25
  }

  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: useWindowWidth()
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    }
  })

  return (
    <div>
      <Section
        title={
          <h1>
            Acompanhe as <span className="text-primary">novidades</span> da
            Logística
          </h1>
        }
        subtitle="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut
      assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis
      voluptatem hic dolores fuga eum dolorum tenetur est iusto quis."
      >
        <div className="hidden lg:grid grid-cols-3 gap-6 mt-2">
          <CardBlog
            tag="Logística"
            title="SAME DAY DELIVERY: QUAIS SÃO OS PRINCIPAIS DESAFIOS"
            avatar="Asdw"
            author="Luana Torres"
            date="Março 2023"
          />
          <CardBlog
            tag="Logística"
            title="SAME DAY DELIVERY: QUAIS SÃO OS PRINCIPAIS DESAFIOS"
            avatar="Asdw"
            author="Luana Torres"
            date="Março 2023"
          />
          <CardBlog
            tag="Logística"
            title="SAME DAY DELIVERY: QUAIS SÃO OS PRINCIPAIS DESAFIOS"
            avatar="Asdw"
            author="Luana Torres"
            date="Março 2023"
          />
        </div>
      </Section>
      <div className="lg:hidden">
        <div ref={sliderRef} className="keen-slider ">
          <div className="keen-slider__slide pr-6 ml-5">
            <CardBlog
              tag="Logística"
              title="SAME DAY DELIVERY: QUAIS SÃO OS PRINCIPAIS DESAFIOS"
              avatar="Asdw"
              author="Luana Torres"
              date="Março 2023"
            />
          </div>
          <div className="keen-slider__slide pr-6">
            <CardBlog
              tag="Logística"
              title="SAME DAY DELIVERY: QUAIS SÃO OS PRINCIPAIS DESAFIOS"
              avatar="Asdw"
              author="Luana Torres"
              date="Março 2023"
            />
          </div>
          <div className="keen-slider__slide pr-6">
            <CardBlog
              tag="Logística"
              title="SAME DAY DELIVERY: QUAIS SÃO OS PRINCIPAIS DESAFIOS"
              avatar="Asdw"
              author="Luana Torres"
              date="Março 2023"
            />
          </div>
          <div className="keen-slider__slide pr-6">
            <CardBlog
              tag="Logística"
              title="SAME DAY DELIVERY: QUAIS SÃO OS PRINCIPAIS DESAFIOS"
              avatar="Asdw"
              author="Luana Torres"
              date="Março 2023"
            />
          </div>
          <div className="keen-slider__slide pr-6">
            <CardBlog
              tag="Logística"
              title="SAME DAY DELIVERY: QUAIS SÃO OS PRINCIPAIS DESAFIOS"
              avatar="Asdw"
              author="Luana Torres"
              date="Março 2023"
            />
          </div>
          <div className="keen-slider__slide pr-6">
            <CardBlog
              tag="Logística"
              title="SAME DAY DELIVERY: QUAIS SÃO OS PRINCIPAIS DESAFIOS"
              avatar="Asdw"
              author="Luana Torres"
              date="Março 2023"
            />
          </div>
        </div>
      </div>
      <Section className="pt-16 pb-14 md:py-20 w-full border-b-2 border-primary">
        <div className="mx-auto sm:w-64">
          <ButtonSecondary>Quero saber mais</ButtonSecondary>
        </div>
      </Section>
    </div>
  )
}
