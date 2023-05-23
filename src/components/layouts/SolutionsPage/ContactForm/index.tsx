import { ButtonSecondary } from 'components/elements/Button'
import { InputGroup, InputText } from 'components/elements/Inputs'
import { Section } from 'components/elements/Section'
import { Text, TextHighlight, Title } from 'components/elements/Texts'
import { useState } from 'react'

export const ContactForm = () => {
  const [name, setName] = useState('')

  return (
    <Section>
      <div>
        <Title>
          Nós entramos em <TextHighlight>contato</TextHighlight> com você!
        </Title>
        <Text>
          Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut
          assumenda voluptates qui beatae quis id Quis cupiditate.{' '}
        </Text>

        <InputGroup label="Nome">
          <InputText value={name} onChange={setName} />
        </InputGroup>
        <InputGroup label="Telefone">
          <InputText value={name} onChange={setName} />
        </InputGroup>
        <InputGroup label="Email">
          <InputText value={name} onChange={setName} />
        </InputGroup>
        <InputGroup label="Segmento">
          <InputText value={name} onChange={setName} />
        </InputGroup>
        <InputGroup label="Empresa">
          <InputText value={name} onChange={setName} />
        </InputGroup>
        <InputGroup label="Quantidade de veículos">
          <InputText value={name} onChange={setName} />
        </InputGroup>

        <ButtonSecondary type="submit">Enviar</ButtonSecondary>
      </div>
    </Section>
  )
}
