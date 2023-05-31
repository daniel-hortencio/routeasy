import { Section } from 'components/elements/Section'
import { Title } from 'components/elements/Texts'

export const Historia = () => {
  const Dot = () => (
    <div className="translate-x-[0.5px] ml-[1.1rem] mb-4 bg-primary bg-opacity-25 w-7 h-7 rounded-full flex items-center justify-center">
      <div className="bg-primary h-[14px] w-[14px] rounded-full" />
    </div>
  )
  return (
    <Section
      className="pb-28"
      title={<Title>Nossa história</Title>}
      subtitle="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. "
    >
      <div className="flex">
        <div>
          <div className="mb-8">
            <p className="text-2xl font-semibold">2016</p>
          </div>
          <Dot />
          <div className="pl-8">
            <p className="pl-4 border-l border-[#424678]">
              Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum
              aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum
              veritatis voluptatem hic dolores fuga eum dolorum tenetur est
              iusto quis.{' '}
            </p>
          </div>
        </div>
        <div>
          <div className="mb-8">
            <p className="text-2xl font-semibold">2017</p>
          </div>
          <Dot />
          <div className="pl-8">
            <p className="pl-4 border-l border-[#424678]">
              Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum
              aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum
              veritatis voluptatem hic dolores fuga eum dolorum tenetur est
              iusto quis.{' '}
            </p>
          </div>
        </div>
        <div>
          <div className="mb-8">
            <p className="text-2xl font-semibold">2018</p>
          </div>
          <Dot />
          <div className="pl-8">
            <p className="pl-4 border-l border-[#424678]">
              Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum
              aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum
              veritatis voluptatem hic dolores fuga eum dolorum tenetur est
              iusto quis.{' '}
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
