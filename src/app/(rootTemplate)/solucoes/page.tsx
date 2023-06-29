'use client'

import { Segments } from 'components/layouts/WebsiteLayout/Segments'
import { FeaturedFrame } from 'components/layouts/WebsiteLayout/FeaturedFrame'
import { Integrating } from 'components/layouts/WebsiteLayout/Integrating'
import { CardListColored } from 'components/layouts/WebsiteLayout/CardListColored'
import { Maestro } from 'components/layouts/WebsiteLayout/Maestro'
import { FAQ } from 'components/layouts/WebsiteLayout/Faq'
import { ContactForm } from 'components/layouts/WebsiteLayout/ContactForm'
import { Section } from 'components/elements/Section'
import { BannerCentered } from 'components/layouts/WebsiteLayout/BannerCentered'
import { Routing } from 'components/layouts/WebsiteLayout/Routing'
import { TextHighlight, Title, Text } from 'components/elements/Texts'
import { IIconCardColoredProps } from 'components/elements/IconColoredCard/types'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { IConversionIdentifier } from 'services'
import { FormModal } from 'components/layouts/WebsiteLayout/FormModal'
import { ButtonPrimary } from 'components/elements/Button'

const MySwal = withReactContent(Swal)

function getModal(
  title: string,
  description: string,
  conversion_identifier: IConversionIdentifier
) {
  MySwal.fire({
    html: (
      <>
        <FormModal
          title={title}
          description={description}
          conversion_identifier={conversion_identifier}
          onClose={Swal.close}
        />
      </>
    ),
    showConfirmButton: false
  })
}

const listDifferentials: IIconCardColoredProps[] = [
  {
    icon: 'FiCode',
    title: 'Algoritmo Avançado',
    text: 'Inteligência artificial avançada para a sua operação logística. Alcance níveis superiores de produtividade e desempenho, graças ao poder do nosso algoritmo inteligente.',
    accentColor: 'bg-bluescale-50'
  },
  {
    icon: 'FiTarget',
    title: 'Gamificação',
    text: 'Ranqueamento de motoristas e entregadores com base em avaliações, rotas finalizadas com sucesso e outros critérios personalizados. Conte com a nossa solução para criar programas de bonificação para aumentar o engajamento.',
    accentColor: 'bg-primary-100'
  },
  {
    icon: 'FiUsers',
    title: 'Equipe consultiva',
    text: 'Soluções sob medida, criadas e implantadas por especialistas. Combinamos conhecimento técnico e uma abordagem consultiva para atender as necessidades do seu negócio e colocar seu sucesso em primeiro lugar.',
    accentColor: 'bg-yellowscale-50'
  },
  {
    icon: 'FiPackage',
    title: 'Orquestração',
    text: 'Primeira tecnologia 100% brasileira para viabilizar o same day delivery e as coletas dinâmicas. Graças às regras e parametrizações para identificar os melhores cenários de rota, o Maestro automatiza 100% dos processos manuais no last mile.',
    accentColor: 'bg-redscale-50'
  }
]

export default function Solutions() {
  const faqList = [
    {
      title:
        'Quais parametrizações o sistema RoutEasy me permite usar numa roteirização?',
      answer:
        'Com o RoutEasy você consegue combinar diversas parametrizações. São elas: restrições de operação, de serviço e de algoritmo.'
    },
    {
      title: 'Quais relatórios eu consigo extrair do sistema RoutEasy?',
      answer:
        'Existem 2 tipos de relatórios, os de roteirização, que são gerados com os dados do que foi planejado pelo RoutEasy e os de monitoramento que contém os dados do que foi executado pelo motorista. '
    },
    {
      title:
        'As roteirizações feitas pelo Maestro são 100% automáticas ou é necessária alguma ação?',
      answer:
        'São totalmente automáticas, sem necessidade de qualquer ação humana. O sistema cria as rotas de acordo com as regras pré-estabelecidas.'
    }
  ]

  return (
    <>
      <BannerCentered
        title={
          <Title className="text-[35px] lg:text-[40px] pb-5">
            Encontre as soluções ideais para sua{' '}
            <TextHighlight>operação</TextHighlight>
          </Title>
        }
        description={
          <Text className="text-grayscale-50 text-[15px] font-light">
            Combine módulos e funcionalidades de acordo com os seus objetivos de
            negócio. Com a RoutEsy, você tem soluções sob medida para otimizar
            rotas, automatizar processos e ter uma gestão completa da sua
            operação.
          </Text>
        }
      >
        <div className="w-[168px] text-center mx-[auto]">
          <ButtonPrimary
            onClick={() =>
              getModal(
                'Comercial',
                'Solicite uma demonstração ou tire dúvidas sobre nossas soluções.',
                'site-routeasy'
              )
            }
          >
            Quero saber mais
          </ButtonPrimary>
        </div>
      </BannerCentered>
      <Routing />
      <FeaturedFrame
        title={
          <Title className="text-[26px]/[40px] font-bold">
            Soluções que
            <TextHighlight> moldam </TextHighlight>o
            <TextHighlight> futuro </TextHighlight>da logística
          </Title>
        }
        text={
          <Text className="text-grayscale-50 text-[13px] font-light">
            Com a RoutEasy, você tem as soluções mais inovadoras a serviço da
            sua operação. Descubra como podemos te ajudar a superar os maiores
            desafios do mercado e alcançar resultados excepcionais.
          </Text>
        }
        image="/images/pictures/max-mid.png"
      />
      <CardListColored
        cards={listDifferentials}
        title={
          <Title className="text-[35px] lg:text-[40px]">Diferenciais</Title>
        }
        subtitle={
          <Text className="text-grayscale-50 text-[15px] font-light">
            Conte com a RoutEasy para desbloquear todo o potencial da sua
            operação logística. Conheça os nossos diferenciais:
          </Text>
        }
      />
      <Maestro />
      <Integrating />
      <Segments />
      <FAQ data={faqList} />
      <Section>
        <div className="px-0 md:px-12 mb-16 md:mb-40">
          <ContactForm />
        </div>
      </Section>
    </>
  )
}
