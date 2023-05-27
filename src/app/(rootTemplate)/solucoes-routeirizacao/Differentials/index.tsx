import { Section } from 'components/elements/Section'
import { Title } from 'components/elements/Texts'
import Icon from 'components/elements/Icon'

const CardDifferentials = ({ icon, title, text }) => {
  return (
    <div className="block rounded-2xl border border-grayscale-500 py-12 px-20 md:p-4 md:w-[260px] md:h-[320px] m-auto text-center md:text-left mb-8 md:mb-0">
      {icon}
      <h1 className="uppercase text-xl font-semibold py-4">{title}</h1>
      <p className="text-grayscale-200 text-sm">{text}</p>
    </div>
  )
}

const list_differentials = [
  {
    icon: (
      <div className="flex items-center justify-center bg-bluescale-50 rounded-md w-12 h-12 m-auto md:m-0">
        <Icon name="BsShield" size={24} />
      </div>
    ),
    title: 'Apólice de seguro',
    text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis.'
  },
  {
    icon: (
      <div className="flex items-center justify-center bg-primary-100 rounded-md w-12 h-12 m-auto md:m-0">
        <Icon name="FiTarget" size={24} />
      </div>
    ),
    title: 'Gamificação',
    text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis.'
  },
  {
    icon: (
      <div className="flex items-center justify-center bg-yellowscale-50 rounded-md w-12 h-12 m-auto md:m-0">
        <Icon name="AiOutlineFile" size={24} />
      </div>
    ),
    title: 'Relatórios',
    text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis.'
  },
  {
    icon: (
      <div className="flex items-center justify-center bg-redscale-50 rounded-md w-12 h-12 m-auto md:m-0">
        <Icon name="AiOutlineFileAdd" size={24} />
      </div>
    ),
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
          <CardDifferentials
            key={index}
            icon={item.icon}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </Section>
  )
}