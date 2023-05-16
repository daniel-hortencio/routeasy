import Image from 'next/image'
import { Section } from 'components/elements/Section'

export const Clients = () => {
  return (
    <Section className="pb-14 -mt-16">
      <div className="flex mx-auto justify-evenly bg-background-light rounded-lg shadow-boxShadow-bg_clients">
        <div className="w-[100px] h-[100px] relative">
          <Image src="/images/logos/DHL.svg" fill alt="DHL" />
        </div>
        <div className="w-[100px] h-[100px] relative">
          <Image src="/images/logos/solistica.svg" fill alt="Solistica" />
        </div>
        <div className="w-[100px] h-[100px] relative">
          <Image src="/images/logos/shopee.svg" fill alt="Shopee" />
        </div>
        <div className="w-[100px] h-[100px] relative">
          <Image src="/images/logos/magalu.svg" fill alt="Magalu" />
        </div>
        <div className="w-[100px] h-[100px] relative">
          <Image src="/images/logos/magalu.svg" fill alt="Magalu" />
        </div>
        <div className="w-[100px] h-[100px] relative">
          <Image src="/images/logos/magalu.svg" fill alt="Magalu" />
        </div>
      </div>
    </Section>
  )
}
