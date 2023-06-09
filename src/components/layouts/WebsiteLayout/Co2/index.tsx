'use client'

import { useEffect, useState } from 'react'

import { ButtonWhite } from 'components/elements/Button'
import { BannerOverlay } from '../BannerOverlay'

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
        <p className="text-lg text-typography-50 font-bold mb-6 md:mb-8">
          Nossos clientes já reduziram
        </p>
        <h1 className="text-[88px] font-semibold mb-14 hidden lg:flex justify-center">
          {count} Toneladas de Co2
        </h1>
        <h1 className="lg:hidden">
          <span className="block text-[88px] font-semibold">{count}</span>
          <span className="block text-[32px] mb-2 font-medium">
            Toneladas <br />
            de
          </span>
          <span className="block text-7xl mb-6 font-semibold">Co2</span>
        </h1>
        <ButtonWhite href="">Veja alguns cases de sucesso</ButtonWhite>
      </BannerOverlay>
    </>
  )
}
