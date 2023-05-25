import { Section } from 'components/elements/Section'
import { Title } from 'components/elements/Texts'

const CardDifferentials = ({ icon = '', title, text }) => {
  return (
    <div className="block rounded-2xl border border-grayscale-500 py-12 px-20 md:p-4 md:w-[260px] md:h-[320px] m-auto text-center md:text-left mb-8 md:mb-0">
      <div className="border rounded-md w-12 h-12 m-auto md:m-0">{icon}</div>
      <h1 className="uppercase text-[22px] font-semibold py-4">{title}</h1>
      <p className="text-grayscale-200 text-sm">{text}</p>
    </div>
  )
}

export const Differentials = () => {
  return (
    <Section
      className="my-20 md:my-32"
      title={<Title>Diferenciais</Title>}
      subtitle="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. "
    >
      <div className="md:flex">
        <CardDifferentials
          icon=""
          title="Apólice de seguro"
          text="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. "
        />
        <CardDifferentials
          icon=""
          title="Gamificação"
          text="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. "
        />
        <CardDifferentials
          icon=""
          title="Relatórios"
          text="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. "
        />
        <CardDifferentials
          icon=""
          title="POD + OCR"
          text="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. "
        />
      </div>
    </Section>
  )
}
