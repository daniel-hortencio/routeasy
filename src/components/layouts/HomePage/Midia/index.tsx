import Image from 'next/image'

import { Section } from 'components/elements/Section'

import S from './styles.module.css'

export const Midia = () => {
  return (
    <Section
      className="pb-14 pt-12"
      title={
        <h1>
          Rout<span className="text-primary">easy</span> na mídia
        </h1>
      }
      subtitle="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. "
    >
      <div className={`${S.MidiaGrid} grid w-full gap-6 mb-20`}>
        <div className="h-80 bg-background-light rounded-2xl"></div>
        <div className="h-80 bg-background-light rounded-2xl"></div>
        <div className="h-80 grid gap-6">
          <div className="bg-background-light rounded-2xl"></div>
          <div className="bg-background-light rounded-2xl"></div>
        </div>
      </div>

      <h2 className="font-semibold text-[32px] uppercase mb-4 text-center">
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
