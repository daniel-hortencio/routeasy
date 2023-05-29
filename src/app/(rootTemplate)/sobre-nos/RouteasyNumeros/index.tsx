import { Section } from 'components/elements/Section'
import { TextHighlight, Title } from 'components/elements/Texts'

export const RouteasyNumeros = () => {
  return (
    <Section
      className="pb-32"
      title={
        <Title>
          Routeasy em <TextHighlight>números</TextHighlight>
        </Title>
      }
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    >
      <div></div>
    </Section>
  )
}
