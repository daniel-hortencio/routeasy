import { Icon } from 'components/elements/Icon'

import { IIconCardColoredProps } from './types'

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
    return 'text-left p-6 pb-[51px]'
  }

  return (
    <div
      className={`block rounded-2xl border border-grayscale-500 ${setCardType()}`}
    >
      <div
        className={`inline-flex items-center justify-center ${accentColor} rounded-md w-12 h-12 m-auto md:m-0`}
      >
        <Icon color="white" name={icon} size={24} />
      </div>
      <h1 className="uppercase text-xl font-semibold py-4">{title}</h1>
      <p className={`text-grayscale-200 ${center ? 'text-xs' : 'text-sm'}`}>
        {text}
      </p>
    </div>
  )
}
