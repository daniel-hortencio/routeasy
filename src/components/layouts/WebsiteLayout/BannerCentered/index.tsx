import { Section } from 'components/elements/Section'
import { ButtonPrimary } from 'components/elements/Button'
import { Text } from 'components/elements/Texts'

interface Props {
  title: JSX.Element
  description: string
  buttonText?: string | React.ReactNode
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
      <div className="flex justify-center h-full relative min-h-[480px] md:min-h-[620px]">
        <div className="md:mx-auto mt-[62px] lg:mx-0 flex flex-col justify-center w-[640px] text-center">
          {title}
          <Text className="text-[15px] text-grayscale-50 pb-8">
            {description}
          </Text>
          {buttonText && (
            <div className="w-full sm:w-[168px] text-center mx-[auto]">
              <ButtonPrimary href={buttonHref}>{buttonText}</ButtonPrimary>
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}
