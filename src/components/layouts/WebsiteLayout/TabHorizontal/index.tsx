'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Text, Title } from 'components/elements/Texts'
import { ITabsHorizontalProps, ITabHorizontalItemProps } from './types'

export const TabItem = ({
  title,
  icon,
  isActive,
  text,
  onClick
}: ITabHorizontalItemProps) => {
  return (
    <>
      <div
        onClick={onClick}
        className={`flex justify-between items-center mb-4 py-5 px-4 md:px-2 lg:px-4 rounded-lg border w-full border-grayscale-500 hover:bg-grayscale-600 cursor-pointer ${
          isActive && 'bg-grayscale-600'
        }`}
      >
        <div
          className={`${
            isActive && 'bg-grayscale-500'
          } bg-grayscale-500 mr-4 rounded-lg h-8 w-8 min-w-[2rem] inline-flex align-middle items-center justify-center`}
        >
          <Image src={icon} width={13} height={13} alt={title} />
        </div>
        <div className="w-full">
          <Text className="text-sm font-light">{title}</Text>
        </div>
        <div className="md:hidden">
          <Image
            width="24"
            height="24"
            src={`/images/pictures/icon-${isActive ? 'minus' : 'plus'}.svg`}
            alt="Pergunta icone"
          />
        </div>
      </div>
      <main
        className={`md:hidden overflow-hidden transition-all ${
          isActive ? 'h-[200px]' : 'h-0'
        }`}
      >
        <Text className="text-grayscale-50 text-[15px] font-light p-4 mb-4 h-[200px]">
          {text}
        </Text>
      </main>
    </>
  )
}

export const TabsHorizontal = ({ featureContent }: ITabsHorizontalProps) => {
  const [featureActive, setFeatureActive] = useState(0)

  return (
    <div>
      <div className="lg:w-full mt-12 mb-24 lg:m-auto flex justify-between items-center">
        <div className="w-full lg:w-5/12">
          {featureContent.map((feature, index) => (
            <TabItem
              key={index}
              title={feature.title}
              icon={feature.icon}
              isActive={featureActive === index}
              text={feature.text}
              onClick={() => setFeatureActive(index)}
            />
          ))}
        </div>
        <div className="hidden w-6/12 md:flex flex-col justify-center">
          {featureContent.map((content, index) => (
            <div
              key={index}
              className={`${featureActive === index ? 'show' : 'hidden'}`}
            >
              <Title className="text-[26px] font-medium uppercase mb-3.5">
                {content.title}
              </Title>
              <Text className="text-sm font-light">{content.text}</Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
