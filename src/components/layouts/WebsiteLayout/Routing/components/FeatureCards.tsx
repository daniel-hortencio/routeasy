import Image from 'next/image'
import { IFeatureProps, IFeatureCardListProps } from '../types'
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
      className={`mb-4 py-5 px-4 rounded-lg border w-full border-grayscale-500 hover:bg-grayscale-600 cursor-pointer ${
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
        <p className="text-sm font-sans font-semibold">{title}</p>
      </div>
    </div>
  )
}

export const FeatureCardList = ({ featureContent }: IFeatureCardListProps) => {
  const [featureActive, setFeatureActive] = useState(0)

  return (
    <div className="w-10/12 mt-12 mb-24 m-auto flex justify-between items-center">
      <div className="w-5/12">
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
            <p className="text-[26px] font-bold uppercase mb-3.5">
              {content.title}
            </p>
            <p className="text-sm">{content.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
