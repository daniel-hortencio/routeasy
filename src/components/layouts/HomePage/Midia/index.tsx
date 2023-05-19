import Image from 'next/image'

import { Section } from 'components/elements/Section'

import S from './styles.module.css'
import { TextHighlight, Title } from 'components/elements/Texts'

export const Midia = () => {
  return (
    <Section
      className="pb-20 md:pb-28 pt-16 md:pt-36"
      title={
        <Title>
          Rout<TextHighlight>easy</TextHighlight> na mídia
        </Title>
      }
      subtitle="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. "
    >
      <div className={`${S.MidiaGrid} grid w-full gap-6 mb-12 md:mb-20`}>
        <div className="h-80 bg-grayscale-600 rounded-2xl"></div>
        <div className="h-80 bg-grayscale-600 rounded-2xl"></div>
        <div className="h-80 grid gap-6">
          <div className="bg-grayscale-600 rounded-2xl"></div>
          <div className="bg-grayscale-600 rounded-2xl"></div>
        </div>
      </div>

      <h2 className="font-medium text-[32px] uppercase mb-4 text-center">
        PRÊMIOS
      </h2>
      <div className="flex mx-auto justify-center">
        <div className="rounded-lg w-[100px] h-[100px] relative mr-6">
          <Image
            src="/images/pictures/premio-inbrasc.png"
            fill
            alt="Premio INBRASC"
          />
        </div>
        <div className="rounded-lg w-[100px] h-[100px] relative mr-6">
          <Image
            src="/images/pictures/premio-100-open-startups.png"
            fill
            alt="Premio INBRASC"
          />
        </div>
        <div className="rounded-lg w-[100px] h-[100px] relative">
          <Image
            src="/images/pictures/premio-startups-to-watch.png"
            fill
            alt="Premio INBRASC"
          />
        </div>
      </div>
    </Section>
  )
}
