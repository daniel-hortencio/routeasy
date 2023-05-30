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
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-0">
        <Card title="40%" text="Redução de custos de transporte" />
        <Card
          title="+300"
          text="Clientes novos"
          className="lg:border-l-[1px] border-grayscale-300 border-dashed"
        />
        <Card
          title="8M"
          text="Serviços roteirizados por mês"
          className="lg:border-l-[1px] border-grayscale-300 border-dashed"
        />
        <Card
          title="60%"
          text="Redução de atrasos e erros nas operações"
          className="lg:border-l-[1px] border-grayscale-300 border-dashed"
        />
      </div>
    </Section>
  )
}
