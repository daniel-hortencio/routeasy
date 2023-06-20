import { Icon } from 'components/elements/Icon'

import { ICardFeatureProps } from './types'
import { Title, Text } from '../Texts'

export const CardFeature = ({ icon, title, text }: ICardFeatureProps) => {
  return (
    <div className="text-center rounded-2xl border border-grayscale-500 m-auto max-w-[350px] py-20 px-14">
      <div
        className={`flex items-center justify-center rounded-md bg-grayscale-500 w-12 h-12 m-auto`}
      >
        <Icon color="white" name={icon} size={24} />
      </div>
      <Title className="text-xl font-normal py-4">{title}</Title>
      <Text className="text-grayscale-200 font-light">{text}</Text>
    </div>
  )
}
