'use client'
import Image from 'next/image'
import { Section } from 'components/elements/Section'
import { ButtonPrimary } from 'components/elements/Button'
import { useState } from 'react'
import { TextHighlight, Title } from 'components/elements/Texts'

const CardSoluctions = ({ icon = '', title, onClick, isActive }) => {
  return (
    <div
      onClick={onClick}
      className={`rounded-lg border w-44 h-40 border-[#282A48] hover:bg-[#1A1C30] cursor-pointer flex items-center justify-center ${
        isActive && 'bg-[#282A48]'
      }`}
    >
      <div>
        <div className="border border-white h-10 w-10 rounded-full m-auto">
          {icon}
        </div>
        <div>
          <p className="text-sm text-center font-semibold mt-4">{title}</p>
        </div>
      </div>
    </div>
  )
}

export const Solutions = () => {
  const [tab, setTab] = useState(1)
  return (
    <Section
      title={
        <Title>
          Soluções para toda <TextHighlight>operação</TextHighlight>
        </Title>
      }
      subtitle="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. "
    >
      <div className="mt-2 flex items-center justify-between">
        <CardSoluctions
          isActive={tab === 1}
          onClick={() => setTab(1)}
          title="Roteirização"
        />
        <CardSoluctions
          isActive={tab === 2}
          onClick={() => setTab(2)}
          title="Gestão de entregas"
        />
        <CardSoluctions
          isActive={tab === 3}
          onClick={() => setTab(3)}
          title="Automação"
        />
        <CardSoluctions
          isActive={tab === 4}
          onClick={() => setTab(4)}
          title="Aplicativo"
        />
        <CardSoluctions
          isActive={tab === 5}
          onClick={() => setTab(5)}
          title="API"
        />
      </div>
      <div className="w-full h-[500px] m-auto relative mt-12">
        {tab === 1 && (
          <Image
            src="/images/pictures/Screen roteirizacao.svg"
            fill
            alt="Roteirização"
          />
        )}
        {tab === 2 && (
          <Image
            src="/images/pictures/Screen gestao.svg"
            fill
            alt="Gestão de Entregas"
          />
        )}
        {tab === 3 && (
          <Image
            src="/images/pictures/Screen automacao API.svg"
            fill
            alt="Automação"
          />
        )}
        {tab === 4 && (
          <Image
            src="/images/pictures/Screen aplicativo.svg"
            fill
            alt="Aplicativo"
          />
        )}
        {tab === 5 && (
          <Image
            src="/images/pictures/Screen automacao API.svg"
            fill
            alt="API"
          />
        )}
      </div>
      <div className="md:w-1/2 m-auto my-16">
        <p className="text-[#ABAED1] text-base font-normal text-center">
          Com o Routing Studio você pode realizar todo o planajamento de suas
          rotas, sejam elas D+0, D+1 ou Apenas estudar o melhor planejamento.
        </p>
      </div>
      <div className="w-32 m-auto my-16">
        <ButtonPrimary href="/">Saiba mais</ButtonPrimary>
      </div>
    </Section>
  )
}
