'use client'

import { Section } from 'components/elements/Section'
import { Tabs } from '../Tabs'
import { TextHighlight, Title, Text } from 'components/elements/Texts'
import Image from 'next/image'
import { ITabsProps, IContentProps } from '../Tabs/types'
import 'keen-slider/keen-slider.min.css'

const ContentItem = ({
  title,
  text,
  image,
  altImage = 'Image'
}: IContentProps) => {
  return (
    <div className="flex justify-between items-center lg:w-[878px] m-auto p-6 md:p-8 rounded-lg bg-grayscale-500">
      <div className="md:w-[56%] pr-8">
        <h3 className="mb-2 md:mb-3 text-[32px] font-medium">{title}</h3>
        <div className="h-[2px] w-full bg-primary-100 mb-4 md:mb-6" />
        <Text className="text-[15px] font-light">{text}</Text>
      </div>
      <div className="relative pt-[32%] flex-auto hidden md:block">
        <Image src={image} fill alt={altImage} />
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
      label: 'Last Mile B2B'
    },
    {
      label: 'Same day delivery'
    },
    {
      label: 'First e Middle Mile'
    },
    {
      label: 'PUDO'
    }
  ],
  tabsContent: [
    <ContentItem
      key="Last mile B2C"
      title="Last mile B2C"
      text="Conte com o algoritmo de roteirização mais avançado do mercado para reduzir o tempo e as etapas do seu planejamento rotas, aumentando a produtividade e reduzindo custos operacionais. Tenha também visibilidade completa e em tempo real de todas as rotas, para responder mais rápido a qualquer imprevisto e garantir a satisfação dos seus clientes."
      image="/images/gifs/Gif001.gif"
      altImage="Last mile B2C"
    />,
    <ContentItem
      key="Last mile B2C"
      title="Last Mile B2B"
      text="Planeje rotas mais inteligentes para aproveitar toda a capacidade da sua frota. Com nossas soluções, sua operação reduz prazos de entrega, evita falhas e elimina ineficiências para otimizar custos operacionais. Além disso, você tem visibilidade completa e em tempo real de todas as rotas em andamento, mantendo seus clientes informados a cada etapa do processo."
      image="/images/pictures/B2C.svg"
      altImage="Last mile B2C"
    />,
    <ContentItem
      key="Last mile B2C"
      title="Same day delivery"
      text="Nossa tecnologia de orquestração automatiza 100% do fluxo operacional para viabilizar o same day e o same hour delivery. Por meio de regras e parametrizações pré definidas, o Maestro executa a roteirização e o despacho para os motoristas de forma totalmente automática, sem qualquer trabalho manual. É ideal operações complexas que envolvem diversos pontos de origem, clientes e parceiros de entrega."
      image="/images/pictures/B2C.svg"
      altImage="Last mile B2C"
    />,
    <ContentItem
      key="Last mile B2C"
      title="First e Middle e Mile"
      text="Planeje rotas de entrega e coleta com máxima eficiência, considerando todas as restrições da operacionais de clientes/fornecedores. Conte com uma torre de controle inteligente, que garante visibilidade total da operação, além de relatórios completos com indicadores de desempenho relevantes, como taxas de sucesso na entrega/coleta, tempos de espera em cada parada e quantidade de ocorrências por rota."
      image="/images/pictures/B2C.svg"
      altImage="Last mile B2C"
    />,
    <ContentItem
      key="Last mile B2C"
      title="PUDO"
      text="Otimize a capacidade da sua frota e tempo de entrega e coleta, utilizando únicas ou distintas ordens de serviço com a nossa solução de Pick-up and Drop-off. Nossa solução foi desenvolvida para as mais diversas estratégias de planejamento logístico"
      image="/images/pictures/B2C.svg"
      altImage="Last mile B2C"
    />
  ]
}

export const Segments = () => {
  return (
    <>
      <Section
        title={
          <Title>
            Soluções que se <TextHighlight>adaptam</TextHighlight> ao seu
            negócio
          </Title>
        }
        subtitle={
          <Text className="text-grayscale-50 text-[15px] font-light">
            Sabemos que cada operação é única e, por isso, nosso time de
            especialistas está preparado para:
          </Text>
        }
      ></Section>
      <Section className="mb-24">
        <Tabs
          tabsLabels={segmentsContent.tabsLabels}
          tabsContent={segmentsContent.tabsContent}
        />
      </Section>
    </>
  )
}
