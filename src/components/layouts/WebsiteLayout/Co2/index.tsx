'use client'

import { useEffect, useState } from 'react'

import { ButtonWhite } from 'components/elements/Button'
import { BannerOverlay } from '../BannerOverlay'
import { Text, Title } from 'components/elements/Texts'

export const Co2 = () => {
  const [count, setCount] = useState(50)

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 600) {
        setCount(prevCount => prevCount + (prevCount < 100 ? 50 : 100))
      } else {
        setCount(50)
      }
    }, 500)

    return () => {
      clearInterval(interval)
    }
  }, [count])

  return (
    <>
      <BannerOverlay image="/images/pictures/background-way.png">
        <Text className="text-base text-typography-50 font-medium mb-6 md:mb-8">
          Nossos clientes já reduziram
        </Text>
        <Title className="normal-case text-[88px] font-medium mb-14 hidden lg:flex justify-center">
          {count} toneladas de CO2
        </Title>
        <h1 className="lg:hidden">
          <span className="block text-[88px] font-semibold">{count}</span>
          <span className="block text-[32px] mb-2 font-medium">
            toneladas <br />
            de
          </span>
          <span className="block text-7xl mb-6 font-semibold">CO2</span>
        </h1>
        <ButtonWhite href="">Veja alguns cases de sucesso</ButtonWhite>
      </BannerOverlay>
    </>
  )
}
