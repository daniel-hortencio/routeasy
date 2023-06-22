import { Icon } from 'components/elements/Icon'

import { IIconCardColoredProps } from './types'
import { Title, Text } from '../Texts'

export const IconCardColored = ({
  icon,
  title,
  text,
  accentColor,
  center
}: IIconCardColoredProps) => {
  const setCardType = () => {
    if (center) {
      return 'text-center px-[50px] pt-[60px] pb-12'
    }
    return 'text-center lg:text-left px-8 py-12 lg:p-6'
  }

  return (
    <div
      className={`block rounded-2xl border border-grayscale-500 m-auto max-w-[350px] h-full ${setCardType()}`}
    >
      <div
        className={`inline-flex items-center justify-center ${accentColor} rounded-md w-12 h-12 m-auto md:m-0`}
      >
        <Icon color="white" name={icon} size={24} />
      </div>
      <Title className="text-lg font-normal py-4">{title}</Title>
      <Text
        className={`text-grayscale-200 font-light ${
          center ? 'text-xs' : 'text-sm/[24px]'
        }`}
      >
        {text}
      </Text>
    </div>
  )
}
