'use client'

import { Section } from 'components/elements/Section'
import { TextHighlight, Title } from 'components/elements/Texts'
import { useEffect, useState } from 'react'

const CardContador = ({ number, text }) => {
  return (
    <div className="text-center text-white rounded-lg border border-[#424678] py-8 px-8 grid items-center">
      <p className="text-[56px]/[72px] font-semibold">{number}</p>
      <p className="text-base">{text}</p>
    </div>
  )
}

export const list_count = [
  {
    number: '40%',
    text: 'Redução de custos de transporte'
  },
  {
    number: '+300',
    text: 'Clientes novos'
  },
  {
    number: '8M',
    text: 'Serviços roteirizados por mês'
  },
  {
    number: '60%',
    text: 'Redução de atrasos e erros nas operações'
  }
]

export const RouteasyNumeros = () => {
  return (
    <Section
      className="pb-48"
      title={
        <Title>
          Routeasy em <TextHighlight>números</TextHighlight>
        </Title>
      }
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-5 lg:px-12">
        {list_count.map((item, index) => (
          <>
            <CardContador key={index} number={item.number} text={item.text} />
          </>
        ))}
      </div>
    </Section>
  )
}
