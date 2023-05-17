import { Section } from 'components/elements/Section'
import Image from 'next/image'
import { NavigationDesktop } from '../NavigationDesktop'
import { NavigationMobile } from '../NavigationMobile'

export const Header = () => {
  return (
    <Section className="bg-background fixed w-full h-[124px] lg:h-[88px] flex items-center z-10">
      <div className="pt-4 lg:pt-0 flex items-end lg:items-center justify-between">
        <div className="test relative w-36 h-12">
          <Image
            fill
            alt="Routeasy"
            src="/images/logos/routeasy.svg"
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className="hidden lg:block">
          <NavigationDesktop />
        </div>
        <div className="lg:hidden">
          <NavigationMobile />
        </div>
      </div>
    </Section>
  )
}
