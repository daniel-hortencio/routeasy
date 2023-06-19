import { Section } from 'components/elements/Section'
import { TextHighlight, Title, Text } from 'components/elements/Texts'

export const Statistics = () => {
  const Card = ({ title, text, className = '' }) => {
    return (
      <div className={`text-center lg:px-8 ${className}`}>
        <div className="h-[200px] rounded-lg px-[18px] pt-8 pb-8 border-[1px] border-grayscale-300">
          <Title className="text-[56px]">{title}</Title>
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
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-0">
        <Card
          title="40%"
          text={
            <Text className="text-grayscale-50 text-[15px] font-light">
              Redução de custos de transporte
            </Text>
          }
        />
        <Card
          title="+300"
          text={
            <Text className="text-grayscale-50 text-[15px] font-light">
              Clientes novos
            </Text>
          }
          className="lg:border-l-[1px] border-grayscale-300 border-dashed"
        />
        <Card
          title="8M"
          text={
            <Text className="text-grayscale-50 text-[15px] font-light">
              Serviços roteirizados por mês
            </Text>
          }
          className="lg:border-l-[1px] border-grayscale-300 border-dashed"
        />
        <Card
          title="60%"
          text={
            <Text className="text-grayscale-50 text-[15px] font-light">
              Redução de atrasos e erros nas operações
            </Text>
          }
          className="lg:border-l-[1px] border-grayscale-300 border-dashed"
        />
      </div>
    </Section>
  )
}
