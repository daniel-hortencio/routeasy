import Image from 'next/image'
import { ReactNode } from 'react'

import { Title, Text } from '../Texts'

interface ICardDescriptionProps {
  title?: ReactNode | string
  text: string
  image: string
  link: string
  side?: 'left' | 'right'
}

export const CardDescription = ({
  title,
  text,
  image,
  link,
  side = 'left'
}: ICardDescriptionProps) => {
  const setClassName = (side: 'left' | 'right') =>
    side === 'left' ? 'flex-row' : 'flex-row-reverse'

  return (
    <div className={`flex gap-[70px] ${setClassName(side)}`}>
      <div className="bg-grayscale-500 flex justify-content items-center rounded-2xl relative w-[338px] h-[338px] min-w-[338px]">
        <Image src={image} alt={title} fill style={{ objectFit: 'contain' }} />
      </div>
      <div className="w-full py-[70px]">
        <Title className="text-xl font-normal py-4">{title}</Title>
        <Text className="text-grayscale-50 font-light">{text}</Text>
      </div>
    </div>
  )
}
