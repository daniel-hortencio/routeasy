'use client'

import Image from 'next/image'
import { ButtonSecondary } from 'components/elements/Button'
import { Section } from 'components/elements/Section'
import { TextHighlight, Title, Text } from 'components/elements/Texts'
import { useEffect, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

const CardEmployee = ({ image }) => {
  return (
    <div className="keen-slider__slide">
      <div className="w-full pt-[95%] rounded-md saturate-0 relative overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          style={{
            objectFit: 'cover'
          }}
        />
      </div>
    </div>
  )
}

export const list_col1 = [
  {
    image: {
      src: '/images/pictures/avatar-employee-1.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee-1.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee-1.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee-1.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee-1.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee-1.png',
      alt: 'Colaborador'
    }
  }
]

export const list_col2 = [
  {
    image: {
      src: '/images/pictures/avatar-employee-1.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee-1.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee-1.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee-1.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee-1.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee-1.png',
      alt: 'Colaborador'
    }
  }
]

export const list_col3 = [
  {
    image: {
      src: '/images/pictures/avatar-employee-1.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee-1.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee-1.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee-1.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee-1.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee-1.png',
      alt: 'Colaborador'
    }
  }
]

const animation1 = { duration: 12000, easing: (t: number) => t }

const animation2 = { duration: 14000, easing: (t: number) => t }

const animation3 = { duration: 13000, easing: (t: number) => t }

export const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [ref1] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: 'performance',
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation1)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation1)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation1)
    },
    slides: {
      origin: 'center',
      perView: 3.25,
      spacing: 10
    },
    vertical: true
  })

  const [ref2] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: 'performance',
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation2)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation2)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation2)
    },
    slides: {
      origin: 'center',
      perView: 3.25,
      spacing: 10
    },
    vertical: true
  })

  const [ref3] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: 'performance',
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation3)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation3)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation3)
    },
    slides: {
      origin: 'center',
      perView: 3.25,
      spacing: 10
    },
    vertical: true
  })

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <Section className="flex mb-24 lg:mb-32">
      <div className="lg:flex items-center lg:h-full relative pt-56 lg:pt-0 lg:mt-20">
        <div className="md:max-w-xl md:mx-auto lg:pr-20 lg:mx-0 flex flex-col justify-center w-full h-full text-center lg:text-left mb-24 lg:mb-0">
          <Title className="text-5xl lg:text-[50px]/[68px]">
            Carreira ROUT<TextHighlight>EASY</TextHighlight>
          </Title>
          <Text className="text-grayscale-50 text-[15px] font-light pb-8">
            Estamos em constante crescimento e buscamos profissionais que querem
            impulsionar suas carreiras em um ambiente dinâmico e inovador.
            Confira nossas oportunidades e faça parte dessa jornada de sucesso!
          </Text>
          <div className="lg:w-56">
            <ButtonSecondary href="/demonstracao">
              Junte-se a nós
            </ButtonSecondary>
          </div>
        </div>
        {loaded ? (
          <div className="grid grid-cols-3 gap-3 w-[390px] lg:w-[405px] mx-auto overflow-hidden rounded-md">
            <div ref={ref1} className="keen-slider" style={{ height: 437 }}>
              {list_col1.map((item, index) => (
                <CardEmployee key={index} image={item.image} />
              ))}
            </div>
            <div ref={ref2} className="keen-slider" style={{ height: 437 }}>
              {list_col2.map((item, index) => (
                <CardEmployee key={index} image={item.image} />
              ))}
            </div>
            <div ref={ref3} className="keen-slider" style={{ height: 437 }}>
              {list_col3.map((item, index) => (
                <CardEmployee key={index} image={item.image} />
              ))}
            </div>
          </div>
        ) : (
          <div className="opacity-0"></div>
        )}
      </div>
    </Section>
  )
}
