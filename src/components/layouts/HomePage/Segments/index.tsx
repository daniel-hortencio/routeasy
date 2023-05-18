import Icon from 'components/elements/Icon'
import { Section } from 'components/elements/Section'
import { TextHighlight, Title } from 'components/elements/Texts'
import { useState } from 'react'

export const Segments = () => {
  const [tab, setTab] = useState(1)

  return (
    <Section
      title={
        <Title>
          SOLUÇÕES QUE SE <TextHighlight>ADAPTAM</TextHighlight> AO SEU NEGÓCIO
        </Title>
      }
      className="mb-28"
      subtitle="Sabemos que cada operação é única e, por isso, nosso time de especialistas está preparado para: "
    >
      <div className="mb-16 bg-grayscale-500 p-2 w-min flex mx-auto items-center rounded-full">
        <button
          className={`h-12 px-6 whitespace-nowrap rounded-full ${
            tab === 1 && 'bg-primary-100'
          }`}
          onClick={() => setTab(1)}
        >
          Last mile B2C
        </button>
        <button
          className={`h-12 px-6 whitespace-nowrap rounded-full ${
            tab === 2 && 'bg-primary-100'
          }`}
          onClick={() => setTab(2)}
        >
          E-Last Mile B2B
        </button>
        {/*  <button
          className={`h-12 px-6 whitespace-nowrap rounded-full ${
            tab === 3 && 'bg-primary-100'
          }`}
          onClick={() => setTab(3)}
        >
          Serviços
        </button>
        <button
          className={`h-12 px-6 whitespace-nowrap rounded-full ${
            tab === 4 && 'bg-primary-100'
          }`}
          onClick={() => setTab(4)}
        >
          Distribuidora
        </button>
        <button
          className={`h-12 px-6 whitespace-nowrap rounded-full ${
            tab === 5 && 'bg-primary-100'
          }`}
          onClick={() => setTab(5)}
        >
          Outros
        </button> */}
      </div>

      <div className="pt-10 px-6 md:px-16 pb-16 rounded-lg bg-grayscale-500">
        {tab === 1 && (
          <div>
            <h3 className="mb-2 md:mb-3 text-[32px] font-medium">Indústria</h3>
            <p className="text-sm mb-4 md:mb-6">Subtítulo</p>
            <p className="mb-6 md:mb-10">
              Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum
              aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum
              veritatis voluptatem hic dolores fuga eum dolorum tenetur est
              iusto quis. hic dolores fuga eum dolorum tenetur est iusto quis.{' '}
            </p>
            <div className="h-[2px] w-full bg-primary-100 mb-4 md:mb-9" />
            <p className="mb-5 md:mb-12">Como podemos ajudar:</p>
            <div className="grid sm:grid-cols-2 gap-y-4 max-w-xl">
              <div className="fill-red-500 flex items-center">
                <Icon name="FiCheck" stroke="#3cbc8d" />
                <span className="ml-4">Roterização</span>
              </div>
              <div className="fill-red-500 flex items-center">
                <Icon name="FiCheck" stroke="#3cbc8d" />
                <span className="ml-4">Roterização</span>
              </div>
              <div className="fill-red-500 flex items-center">
                <Icon name="FiCheck" stroke="#3cbc8d" />
                <span className="ml-4">Roterização</span>
              </div>
              <div className="fill-red-500 flex items-center">
                <Icon name="FiCheck" stroke="#3cbc8d" />
                <span className="ml-4">Roterização</span>
              </div>
            </div>
          </div>
        )}
        {tab === 2 && 'Content 2'}
        {/*         {tab === 3 && 'Content 3'}
        {tab === 4 && 'Content 4'}
        {tab === 5 && 'Content 5'} */}
      </div>
    </Section>
  )
}
