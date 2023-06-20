import Image from 'next/image'

import { Title, Text } from '../Texts'
import { ButtonPrimary } from '../Button'

interface ICardKnowledgeProps {
  title: string
  text: string
  image: string
  link: string
  side?: 'left' | 'right'
}

export const CardKnowledge = ({
  title,
  text,
  image,
  link,
  side = 'left'
}: ICardKnowledgeProps) => {
  const setClassName = (side: 'left' | 'right') =>
    side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'

  return (
    <div
      className={`flex flex-col md:gap-[150px] items-center ${setClassName(
        side
      )}`}
    >
      <div className="relative w-full md:h-auto">
        <div
          className={`absolute top-2/4 w-[268px] h-full md:h-[391px] -translate-y-2/4 bg-grayscale-500 rounded-2xl ${
            side === 'left' ? 'left-0' : 'right-0'
          }`}
        ></div>
        <div
          className={`relative max-w-[calc(100%-35px)] w-[345px] h-[302px] md:w-[468px] md:max-w-auto md:h-[302px] md:min-w-[468px] ${
            side === 'left'
              ? 'translate-x-[35px] md:translate-x-[80px]'
              : '-translat ve-x-[3580px] md:-translate-x-[80px]'
          }`}
        >
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
      <div className="w-full py-[70px]">
        <Title className="text-2xl font-bold py-4">{title}</Title>
        <Text className="text-grayscale-200 ">{text}</Text>
        <div className="w-[100px] text-center mt-4 mx-auto md:mx-0">
          <ButtonPrimary href={link}>Saiba mais</ButtonPrimary>
        </div>
      </div>
    </div>
  )
}
