'use client'

import { TextHighlight, Text, Title } from 'components/elements/Texts'
import Image from 'next/image'
import { Link as LinkScroll } from 'react-scroll'

export const Banner = () => {
  return (
    <div className="relative w-full h-screen md:h-full bg-grayscale-700">
      <Image
        style={{
          objectFit: 'cover'
        }}
        fill
        src="/images/pictures/banner-sobre-nos.png"
        alt="Banner"
      />
      <div className="flex justify-center items-center h-full relative min-h-[600px]">
        <div className="pt-24 md:pt-56 md:mx-auto lg:mx-0 flex flex-col justify-center w-[645px] text-center">
          <Title className="text-white uppercase font-medium text-5xl lg:text-[56px]/[72px] mb-5 px-5">
            Sobre
            <TextHighlight> nós</TextHighlight>
          </Title>
          <Text className="text-grayscale-50 text-[15px] font-light mb-2 px-5">
            Somos mais de 100 mentes inovadoras compartilhando a missão de
            revolucionar a logística no Brasil.
          </Text>
          <Text className="text-grayscale-50 text-[15px] font-light px-5">
            Acreditamos que nossos talentos são o que nos diferencia. Cada
            membro da nossa equipe tem conhecimentos e habilidades únicas, que
            se combinam para criar uma cultura única e poderosa.
          </Text>
          <div className="flex justify-center pt-36 md:pt-20">
            <LinkScroll
              smooth={true}
              to="our-history"
              offset={-320}
              duration={400}
            >
              <Image
                width={40}
                height={100}
                alt="Scroll"
                src="/images/icons/button-scroll.svg"
                style={{
                  objectFit: 'cover'
                }}
              />
            </LinkScroll>
          </div>
        </div>
      </div>
    </div>
  )
}
