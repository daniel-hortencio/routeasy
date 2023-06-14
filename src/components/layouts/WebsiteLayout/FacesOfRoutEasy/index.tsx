'use client'

import Image from 'next/image'
import { Section } from 'components/elements/Section'
import { TextHighlight, Title, Text } from 'components/elements/Texts'
import { useEffect, useState } from 'react'

export const FacesOfRoutEasy = () => {
  const employee_list = [
    {
      src: '/images/pictures/avatar-employee-1.png',
      name: 'Fulano',
      position: 'Implantação',
      description:
        'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. '
    },
    {
      src: '/images/pictures/avatar-employee-2.png',
      name: 'Cicrano',
      position: 'Limpeza',
      description:
        'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. '
    }
  ]

  const time_transition = 5000

  const [currentEmployeeSlider, setCurrentEmployeeSlider] = useState(
    employee_list[0]
  )

  useEffect(() => {
    const timer = setTimeout(() => {
      const employee_index = employee_list.findIndex(
        employe => employe.name === currentEmployeeSlider.name
      )
      if (employee_index === employee_list?.length - 1) {
        setCurrentEmployeeSlider(() => employee_list[0])
      } else {
        setCurrentEmployeeSlider(() => employee_list[employee_index + 1])
      }
    }, time_transition)

    return () => {
      clearTimeout(timer)
    }
  }, [currentEmployeeSlider])

  return (
    <Section className="bg-grayscale-600 py-5 lg:py-[92px] mb-32 lg:mb-40">
      <div className="lg:grid lg:grid-cols-[1fr_40rem_1.75rem] mb-16 lg:mb-0 ">
        <div className="pr-6 flex flex-col justify-center">
          <Title className="lg:text-[64px] leading-[72px]">
            Faces da Rout<TextHighlight>easy</TextHighlight>
          </Title>
          <Text className="text-grayscale-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </div>
        <div className="hidden lg:block relative lg:h-[370px]">
          <div className="py-14 absolute h-full top-0 ">
            <div className="pl-[300px] bg-grayscale-400 h-full flex flex-col justify-center pr-5">
              <Text className="text-xl mb-2">{currentEmployeeSlider.name}</Text>
              <p className="mb-5 h-6 px-2  bg-primary-50 rounded w-min text-xs text-black font-bold flex items-center">
                {currentEmployeeSlider.position}
              </p>
              <Text className="text-sm text-grayscale-200">
                {currentEmployeeSlider.description}
              </Text>
            </div>
          </div>
          <div className="h-full absolute w-[215px] left-14">
            {employee_list.map(employee => (
              <Image
                key={employee.name}
                fill
                alt={employee.name}
                src={employee.src}
                style={{
                  objectFit: 'cover',
                  transition: 'all .3s',
                  opacity: currentEmployeeSlider.name === employee.name ? 1 : 0
                }}
              />
            ))}
          </div>
        </div>
        <div className="hidden lg:flex flex-col items-end w-full h-full justify-center">
          {employee_list.map(employee => (
            <button
              key={employee.name}
              className={`w-2 h-2 rounded-full bg-primary-100 mb-2 dot ${
                currentEmployeeSlider.name === employee.name
                  ? 'opacity-100'
                  : 'opacity-20'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="lg:hidden relative mb-20">
        <div className="absolute top-16 bg-grayscale-400 w-full h-[calc(100%-2rem)]" />
        <div className="relative pt-0 h-[321px] w-[181px] mx-auto">
          {employee_list.map(employee => (
            <Image
              key={employee.name}
              fill
              alt={employee.name}
              src={employee.src}
              style={{
                objectFit: 'cover',
                transition: 'all .3s',
                opacity: currentEmployeeSlider.name === employee.name ? 1 : 0
              }}
            />
          ))}
        </div>

        <div className="w-full pt-6 px-5 relative flex flex-col items-center">
          <Text className="text-xl mb-2 text-center">
            {currentEmployeeSlider.name}
          </Text>
          <p className="mb-5 h-6 px-2 mx-auto bg-primary-50 rounded w-min text-xs text-black font-bold flex items-center">
            {currentEmployeeSlider.position}
          </p>
          <Text className="text-sm text-center max-w-sm max-auto text-grayscale-200">
            {currentEmployeeSlider.description}
          </Text>
        </div>
      </div>
      <div className="lg:hidden h-2 flex items-center w-full justify-center mb-8">
        {employee_list.map(employee => (
          <button
            key={employee.name}
            className={`w-2 h-2 rounded-full bg-primary-100 mr-2 dot ${
              currentEmployeeSlider.name === employee.name
                ? 'opacity-100'
                : 'opacity-20'
            }`}
          />
        ))}
      </div>
    </Section>
  )
}
