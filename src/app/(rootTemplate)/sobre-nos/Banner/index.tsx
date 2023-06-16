'use client'

import { TextHighlight } from 'components/elements/Texts'
import Image from 'next/image'
import { Link as LinkScroll } from 'react-scroll'

export const Banner = () => {
  return (
    <>
      <div className="relative w-full h-full bg-grayscale-700">
        <Image
          style={{
            objectFit: 'cover'
          }}
          fill
          src="/images/pictures/banner-sobre-nos.png"
          alt="Banner"
        />
        <div className="flex justify-center items-center h-full relative min-h-[640px]">
          <div className="pt-16 md:pt-56 md:mx-auto lg:mx-0 flex flex-col justify-center w-[645px] text-center">
            <h1 className="text-white uppercase font-semibold text-5xl lg:text-[56px]/[72px] mb-5">
              Sobre
              <TextHighlight> nós</TextHighlight>
            </h1>
            <p className="font-normal text-grayscale-50 text-base mb-8">
              Somos uma empresa focada em resultados com um DNA cultural de
              Start-Up.
            </p>
            <p className="font-normal text-grayscale-50 text-base">
              Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum
              aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum
              veritatis voluptatem hic dolores fuga eum dolorum tenetur est
              iusto quis.
            </p>
            <div className="hidden md:flex justify-center pt-20">
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
    </>
  )
}
