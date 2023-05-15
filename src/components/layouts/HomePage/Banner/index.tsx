import Image from 'next/image'
import { Section } from 'components/elements/Section'

export const Banner = () => {
  return (
    <div>
      <Section className="h-screen flex">
        <div className="flex items-center h-full">
          <div className="md:w-1/2">
            <h1>
              A melhor solução para <span>last-mile</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum
              aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum
              veritatis voluptatem hic dolores fuga eum dolorum tenetur est
              iusto quis.{' '}
            </p>
          </div>
        </div>
      </Section>
      <Image fill src="/images/pictures/home-banner.svg" alt="Banner" />
    </div>
  )
}
