'use client'

import { useEffect, useRef, useState } from 'react'

import { ButtonWhite } from 'components/elements/Button'
import { BannerOverlay } from '../BannerOverlay'
import { Text, Title } from 'components/elements/Texts'

export const Co2 = () => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      })
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (count < 600 && isVisible) {
      setTimeout(() => {
        setCount(() => count + 10)
      }, 5)
    }
  }, [count, isVisible])

  return (
    <>
      <BannerOverlay image="/images/pictures/background-way.png">
        <Text className="text-base text-typography-50 font-medium mb-4">
          Nossos clientes já reduziram
        </Text>
        <div ref={ref}>
          <Title className="normal-case text-[80px] font-medium mb-10 hidden lg:flex justify-center ">
            {count} toneladas de C
            <span className="relative">
              O<sub className="absolute bottom-0 -translate-y-8">2</sub>
            </span>
          </Title>
        </div>
        <h1 className="lg:hidden">
          <span className="block text-[88px] font-semibold">{count}</span>
          <span className="block text-4xl font-bold mb-4">toneladas de</span>
          <span className="block text-7xl mb-6 font-semibold">
            CO<sub className="text-5xl">2</sub>
          </span>
        </h1>
      </BannerOverlay>
    </>
  )
}
