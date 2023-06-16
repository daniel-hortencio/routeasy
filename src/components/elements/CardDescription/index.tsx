import Image from 'next/image'

import { Title, Text } from '../Texts'
import { ButtonPrimary } from '../Button'

interface ICardDescriptionProps {
  title: string
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
        <Text className="text-grayscale-200">{text}</Text>
        <div className="lg:w-[100px] text-center mt-4">
          <ButtonPrimary href={link}>Saiba mais</ButtonPrimary>
        </div>
      </div>
    </div>
  )
}
