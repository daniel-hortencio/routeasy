import { Section } from 'components/elements/Section'

const CardBlog = ({ tag, title, avatar, author, date }) => {
  return (
    <div className="rounded-2xl h-96 bg-[#555] flex items-end">
      <div className="pb-6 px-4">
        <p className="h-6 px-2 mb-1 bg-[#B0E6D2] rounded w-min text-xs text-black">
          {tag}
        </p>
        <p className="mb-1 text-xl uppercase font-semibold">{title}</p>
        <footer className="flex items-center">
          <div className="border-2 border-white h-10 w-10 rounded-full"></div>
          <p className="ml-2">{author}</p>
          <p className="ml-auto font-bold">{date}</p>
        </footer>
      </div>
    </div>
  )
}

export const Blog = () => {
  return (
    <Section
      title={
        <h1>
          Acompanhe as <span className="text-primary">novidades</span> da
          Logística
        </h1>
      }
      subtitle="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut
      assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis
      voluptatem hic dolores fuga eum dolorum tenetur est iusto quis."
    >
      <div className="grid grid-cols-3 gap-6 mt-2">
        <CardBlog
          tag="Logística"
          title="SAME DAY DELIVERY: QUAIS SÃO OS PRINCIPAIS DESAFIOS"
          avatar="Asdw"
          author="Luana Torres"
          date="Março 2023"
        />
        <CardBlog
          tag="Logística"
          title="SAME DAY DELIVERY: QUAIS SÃO OS PRINCIPAIS DESAFIOS"
          avatar="Asdw"
          author="Luana Torres"
          date="Março 2023"
        />
        <CardBlog
          tag="Logística"
          title="SAME DAY DELIVERY: QUAIS SÃO OS PRINCIPAIS DESAFIOS"
          avatar="Asdw"
          author="Luana Torres"
          date="Março 2023"
        />
      </div>
    </Section>
  )
}
