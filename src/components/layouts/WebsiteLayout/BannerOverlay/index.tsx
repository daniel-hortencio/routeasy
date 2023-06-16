'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'
import { Section } from 'components/elements/Section'

interface IBannerOverlay {
  image: string
  children: React.ReactNode
}

export const BannerOverlay = ({ image, children }: IBannerOverlay) => {
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
    <Section className="pb-20 lg:pb-28">
      <div className="relative overflow-hidden rounded-3xl w-full text-center py-10 md:py-11 pb-16">
        <Image src={image} fill alt={image} style={{ objectFit: 'cover' }} />
        <div className="relative mx-auto w-16 h-16 mb-4 md:mb-10">
          <Image src="/images/logos/union.svg" fill alt="Recicável" />
        </div>
        <div className="relative z-10">{children}</div>
      </div>
    </Section>
  )
}
