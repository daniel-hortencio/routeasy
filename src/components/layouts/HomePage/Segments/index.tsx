import { Section } from 'components/elements/Section'
import { useState } from 'react'

export const Segments = () => {
  const [tab, setTab] = useState(1)

  return (
    <Section
      title={<h1>Segmentos</h1>}
      className="mb-28"
      subtitle="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. "
    >
      <div className="mb-16 bg-background-light2 p-2 w-min flex mx-auto items-center rounded-full">
        <button
          className={`h-12 w-32 whitespace-nowrap rounded-full ${
            tab === 1 && 'bg-primary'
          }`}
          onClick={() => setTab(1)}
        >
          Indústria
        </button>
        <button
          className={`h-12 w-32 whitespace-nowrap rounded-full ${
            tab === 2 && 'bg-primary'
          }`}
          onClick={() => setTab(2)}
        >
          E-commerce
        </button>
        <button
          className={`h-12 w-32 whitespace-nowrap rounded-full ${
            tab === 3 && 'bg-primary'
          }`}
          onClick={() => setTab(3)}
        >
          Serviços
        </button>
        <button
          className={`h-12 w-32 whitespace-nowrap rounded-full ${
            tab === 4 && 'bg-primary'
          }`}
          onClick={() => setTab(4)}
        >
          Distribuidora
        </button>
        <button
          className={`h-12 w-32 whitespace-nowrap rounded-full ${
            tab === 5 && 'bg-primary'
          }`}
          onClick={() => setTab(5)}
        >
          Outros
        </button>
      </div>

      <div className="pt-10 px-16 pb-16 rounded-lg bg-background-light2">
        {tab === 1 && (
          <div>
            <h3 className="mb-3 text-[32px] font-semibold">Indústria</h3>
            <p className="text-sm mb-6">Subtítulo</p>
            <p className="mb-10">
              Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum
              aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum
              veritatis voluptatem hic dolores fuga eum dolorum tenetur est
              iusto quis. hic dolores fuga eum dolorum tenetur est iusto quis.{' '}
            </p>
            <div className="h-[2px] w-full bg-primary mb-9" />
            <p className="mb-12">Como podemos ajudar:</p>
            <div className="grid grid-cols-2 gap-y-4 max-w-xl">
              <div>Roterização</div>
              <div>Roterização</div>
              <div>Roterização</div>
              <div>Roterização</div>
            </div>
          </div>
        )}
        {tab === 2 && 'Content 2'}
        {tab === 3 && 'Content 3'}
        {tab === 4 && 'Content 4'}
        {tab === 5 && 'Content 5'}
      </div>
    </Section>
  )
}
