'use client'

import { Section } from 'components/elements/Section'
import Image from 'next/image'
import Link from 'next/link'
import { NavigationDesktop } from '../NavigationDesktop'
import { NavigationMobile } from '../NavigationMobile'
import { useEffect, useState } from 'react'

export const Header = () => {
  const [scrollTopDistance, setScrollTopDistance] = useState(0)
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const distance = window.pageYOffset
      setScrollTopDistance(distance)
    }
    window.addEventListener('scroll', handleScroll)

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpenMobileMenu(false)
      }
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Section
      asTag="header"
      className={`fixed w-full h-[124px] lg:h-[88px] flex items-center z-50 transition-all ${
        (scrollTopDistance > 150 || isOpenMobileMenu) && 'bg-grayscale-700'
      }`}
    >
      <div className="pt-4 lg:pt-0 flex items-end lg:items-center justify-between">
        <Link href="./" className="relative w-36 h-12">
          <Image
            fill
            alt="Routeasy"
            src="/images/logos/routeasy.svg"
            style={{ objectFit: 'contain' }}
          />
        </Link>
        <div className="hidden lg:block">
          <NavigationDesktop />
        </div>
        <div className="lg:hidden">
          <NavigationMobile
            isOpen={isOpenMobileMenu}
            setIsOpen={setIsOpenMobileMenu}
          />
        </div>
      </div>
    </Section>
  )
}
