import { Section } from 'components/elements/Section'
import { Title } from 'components/elements/Texts'

export const Historia = () => {
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
          <div>
            <svg
              className="mb-4 ml-[1.1rem]"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <circle opacity="0.34" cx="14" cy="14" r="14" fill="#3CBC8D" />
              <circle cx="14" cy="14" r="6" fill="#3CBC8D" />
            </svg>
          </div>
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
          <div>
            <svg
              className="mb-4 ml-[1.1rem]"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <circle opacity="0.34" cx="14" cy="14" r="14" fill="#3CBC8D" />
              <circle cx="14" cy="14" r="6" fill="#3CBC8D" />
            </svg>
          </div>
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
          <div>
            <svg
              className="mb-4 ml-[1.1rem]"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <circle opacity="0.34" cx="14" cy="14" r="14" fill="#3CBC8D" />
              <circle cx="14" cy="14" r="6" fill="#3CBC8D" />
            </svg>
          </div>
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
