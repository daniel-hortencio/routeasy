import Image from 'next/image'
import { Section } from 'components/elements/Section'
import { ButtonPrimary } from 'components/elements/Button'

export const Banner = () => {
  return (
    <div className="relative">
      <Section className="h-screen flex">
        <div className="flex items-center h-full">
          <div className="md:w-3/5">
            <h1 className="text-white uppercase font-semibold text-6xl pb-5">
              A melhor solução para{' '}
              <span className="text-primary">last-mile</span>
            </h1>
            <p className="w-4/5 text-primary-description font-normal text-base pb-8">
              Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum
              aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum
              veritatis voluptatem hic dolores fuga eum dolorum tenetur est
              iusto quis.{' '}
            </p>
            <div className="w-40">
              <ButtonPrimary href="/">Quero saber mais</ButtonPrimary>
            </div>
          </div>
        </div>
      </Section>
      <div className="h-full absolute top-0 right-0 w-1/2">
        <Image
          style={{ objectFit: 'cover' }}
          fill
          src="/images/pictures/home-banner.svg"
          alt="Banner"
        />
      </div>
    </div>
  )
}
