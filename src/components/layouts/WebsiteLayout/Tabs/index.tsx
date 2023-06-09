'use client'
// Hooks
import { useState } from 'react'

// Libs
import { useKeenSlider } from 'keen-slider/react'

// Types
import { ITabItemProps, ITabsProps } from './types'

// Styles
import 'keen-slider/keen-slider.min.css'

const TabItem = ({ label, onClick, isActive }: ITabItemProps) => {
  return (
    <button
      className={`w-full text-white lg:w-[170px] h-12 whitespace-nowrap rounded-full ${
        isActive && 'bg-primary-100'
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

// const ContentItem = ({ title, text, image, altImage }: IContentProps) => {
//   return (
//     <>
//       <div className="md:w-[56%]">
//         <h3 className="mb-2 md:mb-3 text-[32px] font-medium">{title}</h3>
//         <div className="h-[2px] w-full bg-primary-100 mb-4 md:mb-9" />
//         <p>{text}</p>
//       </div>
//       <div className="w-[256px] h-[256px] relative hidden md:block">
//         <Image src={image} width="256" height="256" alt={altImage} />
//       </div>
//     </>
//   )
// }

export const Tabs = ({ tabsLabels, tabsContent }: ITabsProps) => {
  const [tab, setTab] = useState(0)

  const [sliderRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 2.3
    },
    breakpoints: {
      '(min-width: 640)': {
        slides: {
          perView: 3.25
        }
      }
    }
  })

  return (
    <>
      <div className="hidden lg:block">
        <div className="flex mb-12 bg-grayscale-500 p-2 w-min mx-auto items-center rounded-full">
          {tabsLabels.map((button, index) => (
            <TabItem
              key={index}
              label={button.label}
              isActive={tab === index}
              onClick={() => setTab(index)}
            />
          ))}
        </div>
      </div>

      <div className="block lg:hidden">
        <div ref={sliderRef} className="keen-slider ">
          <div className="flex">
            {tabsLabels.map((button, index) => (
              <div key={index} className="keen-slider__slide pl-6">
                <div className="mb-12 bg-grayscale-500 w-full h-12 mx-auto items-center rounded-full">
                  <TabItem
                    label={button.label}
                    isActive={tab === index}
                    onClick={() => setTab(index)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center md:w-[878px] m-auto pt-6 px-6 md:px-16 pb-10 rounded-lg bg-grayscale-500">
        {tabsContent.map((elem, index) => tab === index && elem)}
      </div>
    </>
  )
}
