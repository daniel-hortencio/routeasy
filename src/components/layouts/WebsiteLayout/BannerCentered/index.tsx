import { Section } from 'components/elements/Section'
import { ButtonPrimary } from 'components/elements/Button'
import { Text } from 'components/elements/Texts'
import { ReactNode } from 'react'

interface Props {
  title: JSX.Element
  description?: ReactNode | string
  buttonText?: string | React.ReactNode
  buttonHref?: string
  children?: React.ReactNode
}

export const BannerCentered = ({
  title,
  description,
  buttonText,
  buttonHref = '/',
  children
}: Props) => {
  return (
    <Section className="flex">
      <div className="flex justify-center h-[70vh] relative min-h-[480px] md:min-h-[620px]">
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
          {children}
        </div>
      </div>
    </Section>
  )
}
