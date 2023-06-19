import { Section } from 'components/elements/Section'
import { Title } from 'components/elements/Texts'
import { IconCardColored } from 'components/elements/IconColoredCard'

const list_differentials = [
  {
    accentColor: 'bg-bluescale-50',
    icon: 'BsShield',
    title: 'Apólice de seguro',
    text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis.'
  },
  {
    accentColor: 'bg-primary-100',
    icon: 'FiTarget',
    title: 'Gamificação',
    text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis.'
  },
  {
    accentColor: 'bg-yellowscale-50',
    icon: 'AiOutlineFile',
    title: 'Relatórios',
    text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis.'
  },
  {
    accentColor: 'bg-redscale-50',
    icon: 'AiOutlineFileAdd',
    title: 'POD + OCR',
    text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis.'
  }
]

export const Differentials = () => {
  return (
    <Section
      className="my-20 md:my-32"
      title={<Title>Diferenciais</Title>}
      subtitle="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. "
    >
      <div className="md:flex">
        {list_differentials.map((item, index) => (
          <IconCardColored
            key={index}
            icon={item.icon}
            title={item.title}
            text={item.text}
            accentColor={item.accentColor}
          />
        ))}
      </div>
    </Section>
  )
}
