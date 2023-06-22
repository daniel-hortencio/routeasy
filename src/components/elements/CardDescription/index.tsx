import Image from 'next/image'
import { ReactNode } from 'react'

import { Text } from '../Texts'

interface ICardDescriptionProps {
  title?: ReactNode | string
  text: string
  image: string
  side?: 'left' | 'right'
}

export const CardDescription = ({
  title,
  text,
  image,
  side = 'left'
}: ICardDescriptionProps) => {
  const setClassName = (side: 'left' | 'right') =>
    side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'

  return (
    <div
      className={`flex flex-col gap-[30px] md:gap-[70px] ${setClassName(side)}`}
    >
      <div className="bg-grayscale-500 flex justify-content items-center rounded-2xl relative w-[338px] h-[338px] min-w-[338px]">
        <Image
          src={image}
          alt={title ? title?.toString() : ''}
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className="w-full py-[70px]">
        <div className="text-xl font-normal md:py-4">{title}</div>
        <Text className="text-grayscale-50 font-light">{text}</Text>
      </div>
    </div>
  )
}
