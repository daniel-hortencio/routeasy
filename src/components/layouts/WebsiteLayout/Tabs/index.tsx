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
      className={`w-full px-2 text-white text-small lg:w-[170px] h-12 whitespace-nowrap rounded-full ${
        isActive && 'bg-primary-100'
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export const Tabs = ({ tabsLabels, tabsContent }: ITabsProps) => {
  const [tab, setTab] = useState(0)

  const [sliderRef] = useKeenSlider({
    initial: 0,
    mode: 'free',
    slides: {
      perView: 'auto'
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

      <div>{tabsContent.map((elem, index) => tab === index && elem)}</div>

      {/* <div className="flex justify-between items-center md:w-[878px] m-auto pt-6 px-6 md:px-16 pb-10 rounded-lg bg-grayscale-500"></div> */}
    </>
  )
}
