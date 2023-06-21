'use client'

import { Section } from 'components/elements/Section'
import { Title, Text } from 'components/elements/Texts'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { Icon } from 'components/elements/Icon'
import { FaCheck } from 'react-icons/fa'

interface CardBenefitsProp {
  icon: string
  title: string
  featureList: string[]
}

export const CardBenefits = ({
  icon,
  title,
  featureList
}: CardBenefitsProp) => {
  return (
    <div className="text-center rounded-2xl border border-grayscale-500 m-auto max-w-[350px] pt-16 py-8 px-8 h-full w-full">
      <div
        className={`flex items-center justify-center rounded-md bg-grayscale-500 w-12 h-12 m-auto`}
      >
        <Icon color="white" name={icon} size={24} />
      </div>
      <Title className="text-xl font-normal py-4">{title}</Title>

      <ul>
        {featureList.map((feature, index) => (
          <li
            key={index}
            className="flex justify-center items-center mb-4 h-full"
          >
            <FaCheck color="#3CBC8D" size={10} />
            <Text className="ml-2 font-light text-sm/[24px]">{feature}</Text>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const Benefits = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      origin: 'auto',
      spacing: 20,
      perView: 1.4
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: {
          perView: 2.25,
          spacing: 20
        }
      }
    }
  })

  return (
    <div>
      <Section
        className="lg:pb-32"
        title={<Title>Benefícios Routeasy</Title>}
        subtitle={
          <Text className="text-grayscale-50 text-[15px] font-light">
            Oferecemos uma ampla gama de benefícios com o objetivo de valorizar
            e cuidar do bem-estar de cada membro de nossa equipe.
          </Text>
        }
      >
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-8 pb-16">
            <CardBenefits
              icon="AiOutlineHeart"
              title="Saúde e bem estar"
              featureList={[
                'Convênio médico',
                'Convênio odontológico',
                'TotalPass'
              ]}
            />
            <CardBenefits
              icon="FiBriefcase"
              title="Desenvolvimento"
              featureList={[
                'Plano de carreira',
                'Auxílio educação (desconto em cursos)',
                'Ciclos de avaliação de performance'
              ]}
            />
            <CardBenefits
              icon="BsEmojiSmile"
              title="Qualidade de vida"
              featureList={[
                'Auxílio creche',
                'Seguro de vida',
                'Vale refeição',
                'Vale transporte'
              ]}
            />
          </div>
        </div>
      </Section>
      <div className="lg:hidden pb-8 ml-6">
        <div ref={sliderRef} className="keen-slider mb-12">
          <div className="keen-slider__slide">
            <CardBenefits
              icon="AiOutlineHeart"
              title="Saúde e bem estar"
              featureList={[
                'Convênio médico',
                'Convênio odontológico',
                'TotalPass'
              ]}
            />
          </div>
          <div className="keen-slider__slide">
            <CardBenefits
              icon="FiBriefcase"
              title="Desenvolvimento"
              featureList={[
                'Plano de carreira',
                'Auxílio educação (desconto em cursos)',
                'Ciclos de avaliação de performance'
              ]}
            />
          </div>
          <div className="keen-slider__slide">
            <CardBenefits
              icon="BsEmojiSmile"
              title="Qualidade de vida"
              featureList={[
                'Auxílio creche',
                'Seguro de vida',
                'Vale refeição',
                'Vale transporte'
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
