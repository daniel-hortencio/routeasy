import Image from 'next/image'
import { IFeatureProps, IFeatureCardListProps } from '../types'
import { Text, Title } from 'components/elements/Texts'
import { useState } from 'react'

export const FeatureCard = ({
  title,
  icon,
  isActive,
  onClick
}: IFeatureProps) => {
  return (
    <div
      onClick={onClick}
      className={`mb-4 py-5 md:px-2 lg:px-4 rounded-lg border w-full border-grayscale-500 hover:bg-grayscale-600 cursor-pointer ${
        isActive && 'bg-grayscale-600'
      }`}
    >
      <div
        className={`${
          isActive && 'bg-grayscale-500'
        } bg-grayscale-500 mr-4 rounded-lg h-8 w-8 inline-flex align-middle items-center justify-center`}
      >
        <Image src={icon} width={13} height={13} alt={title} />
      </div>
      <div className="w-[84%] inline-block align-middle">
        <Text className="text-sm font-normal">{title}</Text>
      </div>
    </div>
  )
}

export const FeatureCardList = ({ featureContent }: IFeatureCardListProps) => {
  const [featureActive, setFeatureActive] = useState(0)

  return (
    <div className="hidden md:block">
      <div className="lg:w-10/12 mt-12 mb-24 lg:m-auto flex justify-between items-center">
        <div className="lg:w-5/12">
          {featureContent.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              icon={feature.icon}
              isActive={featureActive === index}
              onClick={() => setFeatureActive(index)}
            />
          ))}
        </div>
        <div className="w-6/12 flex flex-col justify-center">
          {featureContent.map((content, index) => (
            <div
              key={index}
              className={`${featureActive === index ? 'show' : 'hidden'}`}
            >
              <Title className="text-[26px] font-bold uppercase mb-3.5">
                {content.title}
              </Title>
              <Text className="text-[13px]">{content.text}</Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
