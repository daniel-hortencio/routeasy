'use client'

import Image from 'next/image'

export const foodSlides = [
  {
    title: <>Café da Tarde</>,
    description:
      'É uma oportunidade de relaxar, recarregar as energias e nos conectar com as outras equipes. Grandes ideias surgem durante a pausa para o café!',
    grid: (
      <div className={`grid grid-cols-3 gap-2 relative pb-8 md:pb-0`}>
        <div className={`pt-[180%] relative`}>
          <Image
            fill
            src="/images/pictures/cafe_1.png"
            alt="Café da tarde"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
        <div className={`grid gap-2`}>
          <div className="relative">
            <Image fill src="/images/pictures/cafe_2.png" alt="Café da tarde" />
          </div>
          <div className="relative">
            <Image fill src="/images/pictures/cafe_3.png" alt="Café da tarde" />
          </div>
        </div>
        <div className={`pt-[180%] relative`}>
          <Image
            fill
            src="/images/pictures/cafe_4.png"
            alt="Café da tarde"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
      </div>
    )
  },
  {
    title: <>Frutinhas</>,
    description:
      'É uma oportunidade de relaxar, recarregar as energias e nos conectar com as outras equipes. Grandes ideias surgem durante a pausa para o café!',
    grid: (
      <div className={`grid grid-cols-3 gap-2 relative pb-8 md:pb-0`}>
        <div className={`pt-[180%] relative`}>
          <Image
            fill
            src="/images/pictures/cafe_5.png"
            alt="Frutinhas"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
        <div className={`grid gap-2`}>
          <div className="relative">
            <Image fill src="/images/pictures/cafe_6.png" alt="Café da tarde" />
          </div>
          <div className="relative">
            <Image fill src="/images/pictures/cafe_7.png" alt="Café da tarde" />
          </div>
        </div>
        <div className={`pt-[180%] relative`}>
          <Image
            fill
            src="/images/pictures/cafe_8.png"
            alt="Café da tarde"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
      </div>
    )
  },
  {
    title: <>Bolo</>,
    description:
      'É uma oportunidade de relaxar, recarregar as energias e nos conectar com as outras equipes. Grandes ideias surgem durante a pausa para o café!',
    grid: (
      <div className={`grid grid-cols-3 gap-2 relative pb-8 md:pb-0`}>
        <div className={`pt-[180%] relative`}>
          <Image
            fill
            src="/images/pictures/cafe_1.png"
            alt="Café da tarde"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
        <div className={`grid gap-2`}>
          <div className="relative">
            <Image fill src="/images/pictures/cafe_2.png" alt="Café da tarde" />
          </div>
          <div className="relative">
            <Image fill src="/images/pictures/cafe_3.png" alt="Café da tarde" />
          </div>
        </div>
        <div className={`pt-[180%] relative`}>
          <Image
            fill
            src="/images/pictures/cafe_4.png"
            alt="Café da tarde"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
      </div>
    )
  }
]
