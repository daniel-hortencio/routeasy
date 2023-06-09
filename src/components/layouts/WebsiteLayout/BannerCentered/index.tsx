import { Section } from 'components/elements/Section'
import { ButtonPrimary } from 'components/elements/Button'
import { Text } from 'components/elements/Texts'

interface Props {
  title: JSX.Element
  description: string
  buttonText?: string
  buttonHref?: string
}

export const BannerCentered = ({
  title,
  description,
  buttonText,
  buttonHref = '/'
}: Props) => {
  return (
    <Section className="flex">
      <div className="flex justify-center h-full relative min-h-[640px]">
        <div className="md:mx-auto mt-[124px] lg:mx-0 flex flex-col justify-center w-[782px] text-center">
          {title}
          <Text className="text-grayscale-50 pb-8">{description}</Text>
          {buttonText && (
            <div className="w-full sm:w-56 text-center mx-[auto]">
              <ButtonPrimary href={buttonHref}>{buttonText}</ButtonPrimary>
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}
