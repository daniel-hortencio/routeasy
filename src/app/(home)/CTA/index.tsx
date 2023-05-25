import { Section } from 'components/elements/Section'
import { ButtonPrimary } from 'components/elements/Button'

export const CTA = () => {
  return (
    <Section>
      <div className="hidden md:block w-[1064px] h-[6px] rounded-t-lg bg-grayscale-600 m-auto"></div>
      <div className="md:flex mx-auto bg-grayscale-500 rounded-lg items-center justify-evenly p-8 mb-12 md:mb-24 shadow-3xl">
        <div className="md:pr-52 text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl/8 font-bold sm uppercase mb-4 md:mb-0">
            Que saber como se tornar um especialista em roteirização?
          </h2>
          <p className="text-base font-normal">
            Conheça o Routing Academy, o primeiro curso on-lline de roteirização
            do Brasil.{' '}
          </p>
        </div>
        <div className="lg:w-40">
          <ButtonPrimary href="/">Quero saber mais</ButtonPrimary>
        </div>
      </div>
    </Section>
  )
}
