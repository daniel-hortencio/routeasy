import { Section } from 'components/elements/Section'
import { TextHighlight, Title, Text } from 'components/elements/Texts'
import { ReactNode } from 'react'

interface Props {
  data: {
    title: string | ReactNode
    description: string
  }[]
}

export const Statistics = ({ data }: Props) => {
  const Card = ({ title, text, className = '' }) => {
    return (
      <div className={`text-center lg:px-8 ${className}`}>
        <div className="h-[200px] rounded-lg px-[18px] pt-8 pb-8 border-[1px] border-grayscale-300 flex flex-col items-center justify-center">
          <Title className="text-[40px]  md:text-[56px]">{title}</Title>
          <Text>{text}</Text>
        </div>
      </div>
    )
  }
  return (
    <Section
      title={
        <Title>
          Routeasy em <TextHighlight>números</TextHighlight>
        </Title>
      }
      className="mb-36"
      subtitle={
        <Text className="text-grayscale-50 text-[15px] font-light">
          Nossos indicadores falam por si: nossa equipe está empenhada em
          superar suas expectativas.
        </Text>
      }
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5 lg:gap-0">
        {data.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            text={
              <Text className="text-grayscale-50 text-[15px] font-light">
                {item.description}
              </Text>
            }
            className={`${
              index !== 0 &&
              'lg:border-l-[1px] border-grayscale-300 border-dashed'
            }`}
          />
        ))}
      </div>
    </Section>
  )
}
