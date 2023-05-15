import { Section } from 'components/elements/Section'
import Image from 'next/image'
import { Navigation } from '../Navigation'

export const Header = () => {
  return (
    <Section className="bg-background fixed w-full h-[88px] flex items-center z-10">
      <div className="flex items-center justify-between">
        <Image
          width={100}
          height={40}
          alt="Routeasy"
          src="/images/logos/routeasy.svg"
        />
        <Navigation />
      </div>
    </Section>
  )
}
