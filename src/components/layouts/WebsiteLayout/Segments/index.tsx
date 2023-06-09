'use client'

import { Section } from 'components/elements/Section'
import { Tabs } from '../Tabs'
import { TextHighlight, Title } from 'components/elements/Texts'
import Image from 'next/image'
import { ITabsProps, IContentProps } from '../Tabs/types'
import 'keen-slider/keen-slider.min.css'

const ContentItem = ({ title, text, image, altImage }: IContentProps) => {
  return (
    <div className="flex justify-between items-center md:w-[878px] m-auto pt-6 px-6 md:px-16 pb-10 rounded-lg bg-grayscale-500">
      <div className="md:w-[56%]">
        <h3 className="mb-2 md:mb-3 text-[32px] font-medium">{title}</h3>
        <div className="h-[2px] w-full bg-primary-100 mb-4 md:mb-9" />
        <p>{text}</p>
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
    <ContentItem
      key="Last mile B2C"
      title="Last mile B2C"
      text="Conte com o algoritmo de roteirização mais avançado do mercado para reduzir o tempo e as etapas do seu planejamento rotas, aumentando a produtividade e reduzindo custos operacionais. Tenha também visibilidade completa e em tempo real de todas as rotas, para responder mais rápido a qualquer imprevisto e garantir a satisfação dos seus clientes."
      image="/images/pictures/Rectangle 1856.png"
      altImage="Last mile B2C"
    />,
    <ContentItem
      key="Last mile B2C"
      title="E-Last Mile B2B"
      text="Planeje rotas mais inteligentes para aproveitar toda a capacidade da sua frota. Com nossas soluções, sua operação reduz prazos de entrega, evita falhas e elimina ineficiências para otimizar custos operacionais. Além disso, você tem visibilidade completa e em tempo real de todas as rotas em andamento, mantendo seus clientes informados a cada etapa do processo."
      image="/images/pictures/Rectangle 1856.png"
      altImage="Last mile B2C"
    />,
    <ContentItem
      key="Last mile B2C"
      title="Same day delivery"
      text="Nossa tecnologia de orquestração automatiza 100% do fluxo operacional para viabilizar o same day e o same hour delivery. Por meio de regras e parametrizações pré definidas, o Maestro executa a roteirização e o despacho para os motoristas de forma totalmente automática, sem qualquer trabalho manual. É ideal operações complexas que envolvem diversos pontos de origem, clientes e parceiros de entrega."
      image="/images/pictures/Rectangle 1856.png"
      altImage="Last mile B2C"
    />,
    <ContentItem
      key="Last mile B2C"
      title="First e Middle e Mile"
      text="Planeje rotas de entrega e coleta com máxima eficiência, considerando todas as restrições da operacionais de clientes/fornecedores. Conte com uma torre de controle inteligente, que garante visibilidade total da operação, além de relatórios completos com indicadores de desempenho relevantes, como taxas de sucesso na entrega/coleta, tempos de espera em cada parada e quantidade de ocorrências por rota."
      image="/images/pictures/Rectangle 1856.png"
      altImage="Last mile B2C"
    />,
    <ContentItem
      key="Last mile B2C"
      title="Outros"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      image="/images/pictures/Rectangle 1856.png"
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
        subtitle="Sabemos que cada operação é única e, por isso, nosso time de especialistas está preparado para: "
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
