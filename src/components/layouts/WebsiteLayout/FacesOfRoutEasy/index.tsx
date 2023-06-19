'use client'

import Image from 'next/image'
import { Section } from 'components/elements/Section'
import { TextHighlight, Title, Text } from 'components/elements/Texts'
import { useEffect, useState } from 'react'

export const FacesOfRoutEasy = () => {
  const employee_list = [
    {
      src: '/images/pictures/employee-1.png',
      name: 'Vinicius sacramento',
      position: 'Implantação',
      description:
        'Desde o primeiro dia, me senti acolhido pela cultura do Time de Casa, onde todos trabalham juntos na busca pelos melhores resultados. É um prazer imenso fazer parte desse time e tenho muito orgulho de tudo que conquistamos até aqui.'
    },
    {
      src: '/images/pictures/employee-2.png',
      name: 'Edson Marques',
      position: 'Tech',
      description:
        'Consegui ver a empresa sair de 20 funcionários para 100. E tem sido uma jornada bacana fazer novas funcionalidades e vê-las sendo utilizadas pelos clientes. Além disso, meu time é incrível, tenho orgulho do que estamos construindo!'
    },
    {
      src: '/images/pictures/employee-3.png',
      name: 'Ana carolina',
      position: 'Suporte',
      description:
        'Temos uma cultura nova, dinâmica e voltada a resultados, incentiva a autonomia, a iniciativa e a colaboração entre os membros da equipe. Tenho a liberdade de contribuir com minhas ideias, me tornando parte dessa caminhada de sucesso.'
    },
    {
      src: '/images/pictures/employee-5.png',
      name: 'Vinicius soares',
      position: 'SMB',
      description:
        'A RoutEasy é um grande coração pulsante, que traz nas veias muita solidariedade, amizade, verdade. É diferente pensar em uma empresa com mais vieses emocionais que racionais, mas essa é a verdade e o grande diferencial do Time de Casa.'
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
            <TextHighlight>Time </TextHighlight>que inspira
          </Title>
          <Text className="text-grayscale-50 font-light text-sm">
            Nossa equipe é a base do nosso sucesso! Veja o que alguns dos nossos
            talentos têm a dizer sobre como é trabalhar na RoutEasy.
          </Text>
        </div>
        <div className="hidden lg:block relative lg:h-[370px]">
          <div className="py-14 absolute h-full top-0 ">
            <div className="pl-[300px] bg-grayscale-400 h-full flex flex-col justify-center pr-5">
              <Text className="text-xl mb-2 uppercase">
                {currentEmployeeSlider.name}
              </Text>
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
