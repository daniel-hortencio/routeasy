'use client'

import Image from 'next/image'
import { TextHighlight } from 'components/elements/Texts'

export const ceremoniesSlides = [
  {
    title: (
      <>
        <TextHighlight>Friday</TextHighlight> Celebration
      </>
    ),
    description:
      'Eventos mensais para celebrar nossos bons resultados, com happy hours temáticos, premiações e reconhecimentos a membros que se destacaram. Essas comemorações não apenas reforçam a união da equipe, mas também nos motivam a buscar novos patamares de excelência para o nosso trabalho.',
    grid: (
      <div className={`mb-8 md:mb-0`}>
        <div className="grid grid-cols-3 gap-2 mb-2">
          <div className={`pt-[170%] relative`}>
            <Image
              fill
              src="/images/pictures/friday-1.png"
              alt="Friday Day"
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
              <Image
                fill
                src="/images/pictures/friday-2.png"
                alt="Friday Day"
              />
            </div>
            <div className="relative">
              <Image
                fill
                src="/images/pictures/friday-3.png"
                alt="Friday Day"
              />
            </div>
          </div>
          <div className={`pt-[170%] relative`}>
            <Image
              fill
              src="/images/pictures/friday-4.png"
              alt="Friday Day"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
        <div className={`pt-[30%] relative`}>
          <Image
            fill
            src="/images/pictures/friday-5.png"
            alt="Friday Day"
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
    title: (
      <>
        Tech<TextHighlight>Day</TextHighlight>
      </>
    ),
    description:
      'Um dia para que o nosso time de tech tenha a oportunidade de explorar novas tendências e participar de workshops e palestras. É o momento perfeito para expandir conhecimentos, trocar experiências e renovar as habilidades técnicas.',
    grid: (
      <div>
        <div className={`grid grid-cols-4 gap-2 mb-2 w-full`}>
          {[
            { src: '/images/pictures/techday1.png', alt: 'Tech Day' },
            { src: '/images/pictures/techday2.png', alt: 'Tech Day' },
            { src: '/images/pictures/techday3.png', alt: 'Tech Day' },
            { src: '/images/pictures/techday4.png', alt: 'Tech Day' }
          ].map(image => (
            <div className="relative py-[50%]" key={image.src}>
              <Image
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                fill
                src={image.src}
                alt={image.alt}
              />
            </div>
          ))}
        </div>

        <div className={`grid grid-cols-2 gap-2 relative pb-8 md:pb-0`}>
          <div className="relative py-[62%]">
            <Image
              fill
              src="/images/pictures/techday5.png"
              alt="Tech Day"
              style={{
                objectFit: 'cover'
              }}
            />
          </div>
          <div className={`grid gap-2`}>
            <div className="relative">
              <Image
                fill
                src="/images/pictures/techday6.png"
                alt="Tech Day"
                style={{
                  objectFit: 'cover'
                }}
              />
            </div>
            <div className="relative">
              <Image
                fill
                src="/images/pictures/techday7.png"
                alt="Tech Day"
                style={{
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: (
      <>
        Sales<TextHighlight>Day</TextHighlight>
      </>
    ),
    description:
      'Um dia para que o nosso time comercial pratique estratégias eficazes e melhores práticas de vendas. Compartilhamos insights valiosos e abordagens inovadoras para maximizar o potencial de cada membro do time.',
    grid: (
      <div>
        <div className={`grid grid-cols-4 gap-2 mb-2 w-full`}>
          {[
            { src: '/images/pictures/salesday_1.png', alt: 'Sales Day' },
            { src: '/images/pictures/salesday_2.png', alt: 'Sales Day' },
            { src: '/images/pictures/salesday_3.png', alt: 'Sales Day' },
            { src: '/images/pictures/salesday_4.png', alt: 'Sales Day' }
          ].map(image => (
            <div className="relative py-[50%]" key={image.src}>
              <Image
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                fill
                src={image.src}
                alt={image.alt}
              />
            </div>
          ))}
        </div>

        <div className={`grid grid-cols-2 gap-2 relative pb-8 md:pb-0`}>
          <div className="relative py-[62%]">
            <Image
              fill
              src="/images/pictures/salesday_5.png"
              alt="Cultura"
              style={{
                objectFit: 'cover'
              }}
            />
          </div>
          <div className={`grid gap-2`}>
            <div className="relative">
              <Image
                fill
                src="/images/pictures/salesday_6.png"
                alt="Sales Day"
                style={{
                  objectFit: 'cover'
                }}
              />
            </div>
            <div className="relative">
              <Image
                fill
                src="/images/pictures/salesday_7.png"
                alt="Sales Day"
                style={{
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: (
      <>
        Pet<TextHighlight>Day</TextHighlight>
      </>
    ),
    description:
      'Um dia especial em que nosso escritório se enche de fofura com a presença dos nossos amiguinhos de quatro patas. Na RoutEasy, nossos pets também são parte da nossa equipe!',
    grid: (
      <div>
        <div className={`grid grid-cols-4 gap-2 mb-2 w-full`}>
          {[
            { src: '/images/pictures/petday_1.png', alt: 'Sales Day' },
            { src: '/images/pictures/petday_2.png', alt: 'Sales Day' },
            { src: '/images/pictures/petday_3.png', alt: 'Sales Day' },
            { src: '/images/pictures/petday_4.png', alt: 'Sales Day' }
          ].map(image => (
            <div className="relative py-[50%]" key={image.src}>
              <Image
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                fill
                src={image.src}
                alt={image.alt}
              />
            </div>
          ))}
        </div>

        <div className={`grid grid-cols-2 gap-2 relative pb-8 md:pb-0`}>
          <div className="relative py-[62%]">
            <Image
              fill
              src="/images/pictures/petday_5.png"
              alt="Cultura"
              style={{
                objectFit: 'cover'
              }}
            />
          </div>
          <div className={`grid gap-2`}>
            <div className="relative">
              <Image
                fill
                src="/images/pictures/petday_6.png"
                alt="Tech Day"
                style={{
                  objectFit: 'cover'
                }}
              />
            </div>
            <div className="relative">
              <Image
                fill
                src="/images/pictures/petday_7.png"
                alt="Tech Day"
                style={{
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
]
