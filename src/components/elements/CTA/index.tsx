import { Section } from 'components/elements/Section'
import { ButtonPrimary } from 'components/elements/Button'

interface Props {
  title: string
  description: string
  buttonText: string
  href: string
}

export const CTA = ({ title, description, buttonText, href }: Props) => {
  return (
    <Section>
      <div className="hidden md:block w-[1064px] h-[6px] rounded-t-lg bg-grayscale-600 m-auto"></div>
      <div className="md:flex mx-auto bg-grayscale-500 rounded-lg items-center justify-evenly p-8 mb-12 md:mb-24 shadow-3xl">
        <div className="md:pr-52 text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl/8 font-bold sm uppercase mb-4 md:mb-2">
            {title}
          </h2>
          <p className="text-base font-normal text-grayscale-50">
            {description}
          </p>
        </div>
        <div className="lg:w-52">
          <ButtonPrimary href={href}>{buttonText}</ButtonPrimary>
        </div>
      </div>
    </Section>
  )
}
