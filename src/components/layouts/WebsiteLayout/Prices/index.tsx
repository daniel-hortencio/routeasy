'use client'

import { Section } from 'components/elements/Section'
import { PriceCard } from 'components/elements/PriceCard'
import { Tabs } from '../Tabs'
import { ITabsProps } from '../Tabs/types'
import { Title } from 'components/elements/Texts'
import 'keen-slider/keen-slider.min.css'

const PriceContent = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-between gap-x-4 items-center w-[878px] m-auto">
      <div className="w-1/3">
        <PriceCard
          title={title}
          subtitle="Subtítulo"
          description="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis "
          featureList={['Roteirização', 'Roteirização', 'Roteirização']}
        />
      </div>
      <div className="w-1/3">
        <PriceCard
          title={title}
          subtitle="Subtítulo"
          description="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis "
          featureList={['Roteirização', 'Roteirização', 'Roteirização']}
        />
      </div>
      <div className="w-1/3">
        <PriceCard
          title={title}
          subtitle="Subtítulo"
          description="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis "
          featureList={['Roteirização', 'Roteirização', 'Roteirização']}
        />
      </div>
    </div>
  )
}

const segmentsContent: ITabsProps = {
  tabsLabels: [
    {
      label: 'Last mile B2C'
    },
    {
      label: 'E-Last Mile B2B'
    },
    {
      label: 'Same day delivery'
    },
    {
      label: 'First e Middle e Mile'
    },
    {
      label: 'Outros'
    }
  ],
  tabsContent: [
    <PriceContent key="0" title="Primeiro" />,
    <PriceContent key="1" title="Segundo" />,
    <PriceContent key="2" title="Terceiro" />,
    <PriceContent key="3" title="Quarto" />,
    <PriceContent key="4" title="Quinto" />
  ]
}

export const Prices = () => {
  return (
    <>
      <Section
        title={<Title>Preços</Title>}
        subtitle="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. "
      ></Section>

      <Section className="mb-20">
        <Tabs
          tabsLabels={segmentsContent.tabsLabels}
          tabsContent={segmentsContent.tabsContent}
        />
      </Section>
    </>
  )
}
