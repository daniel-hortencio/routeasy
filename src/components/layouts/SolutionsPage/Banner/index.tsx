import { Section } from 'components/elements/Section'
import { ButtonPrimary } from 'components/elements/Button'

export const Banner = () => {
  return (
    <Section className="flex">
      <div className="flex justify-center h-full relative min-h-[640px]">
        <div className="md:mx-auto mt-[124px] lg:mx-0 flex flex-col justify-center w-[645px] text-center">
          <h1 className="text-white uppercase font-medium text-[35px] lg:text-[40px] pb-5">
            Encontre as soluções ideais para sua{' '}
            <span className="text-primary-100">operação</span>
          </h1>
          <p className="font-normal text-base pb-8">
            Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut
            assumenda voluptates qui beatae quis id Quis cupiditate. Cum
            veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto
            quis.
          </p>
          <div className="lg:w-56 text-center mx-[auto]">
            <ButtonPrimary href="/">Quero saber mais</ButtonPrimary>
          </div>
        </div>
      </div>
    </Section>
  )
}
