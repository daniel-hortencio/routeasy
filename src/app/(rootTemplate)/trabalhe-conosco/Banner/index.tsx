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
      src: '/images/pictures/avatar-employee_1.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_2.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_3.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_4.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_5.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_6.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_7.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_8.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_9.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_10.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_11.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_12.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_13.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_14.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_15.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_16.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_17.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_18.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_19.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_20.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_21.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_22.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_23.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_24.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_25.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_26.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_27.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_28.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_29.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_30.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_31.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_32.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_33.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_34.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_35.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_36.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_37.png',
      alt: 'Colaborador'
    }
  }
]

export const list_col2 = [
  {
    image: {
      src: '/images/pictures/avatar-employee_38.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_39.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_40.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_41.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_42.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_43.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_44.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_45.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_46.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_47.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_48.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_49.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_50.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_51.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_52.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_53.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_54.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_55.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_56.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_57.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_58.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_59.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_60.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_61.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_62.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_63.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_64.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_65.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_66.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_67.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_68.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_69.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_70.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_71.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_72.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_73.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_74.png',
      alt: 'Colaborador'
    }
  }
]

export const list_col3 = [
  {
    image: {
      src: '/images/pictures/avatar-employee_75.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_76.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_77.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_78.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_79.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_80.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_81.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_82.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_83.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_84.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_85.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_86.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_87.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_88.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_89.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_90.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_91.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_92.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_93.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_94.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_95.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_96.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_97.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_98.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_99.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_100.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_101.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_102.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_103.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_104.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_105.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_106.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_107.png',
      alt: 'Colaborador'
    }
  },
  {
    image: {
      src: '/images/pictures/avatar-employee_108.png',
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
