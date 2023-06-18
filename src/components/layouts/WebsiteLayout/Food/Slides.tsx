'use client'

import Image from 'next/image'

export const foodSlides = [
  {
    title: <>Café da Manhã</>,
    description:
      'Eventos mensais para celebrar nossos bons resultados, com happy hours temáticos, premiações e reconhecimentos a membros que se destacaram. Essas comemorações não apenas reforçam a união da equipe, mas também nos motivam a buscar novos patamares de excelência para o nosso trabalho.',
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
      'Eventos mensais para celebrar nossos bons resultados, com happy hours temáticos, premiações e reconhecimentos a membros que se destacaram. Essas comemorações não apenas reforçam a união da equipe, mas também nos motivam a buscar novos patamares de excelência para o nosso trabalho.',
    grid: (
      <div className={`grid grid-cols-3 gap-2 relative pb-8 md:pb-0`}>
        <div className={`pt-[180%] relative`}>
          <Image
            fill
            src="/images/pictures/cafe_5.png"
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
      'Eventos mensais para celebrar nossos bons resultados, com happy hours temáticos, premiações e reconhecimentos a membros que se destacaram. Essas comemorações não apenas reforçam a união da equipe, mas também nos motivam a buscar novos patamares de excelência para o nosso trabalho.',
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
