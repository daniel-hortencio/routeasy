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
        buttonText="Quero saber mais"
        buttonHref="/"
      />
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
          <Text className="text-grayscale-50 text-[15px] font-light">
            Com a RoutEasy, você tem as soluções mais inovadoras a serviço da
            sua operação. Descubra como podemos te ajudar a superar os maiores
            desafios do mercado e alcançar resultados excepcionais.
          </Text>
        }
        image="/images/pictures/max-mid.png"
      />
      <CardListColored
        cards={listDifferentials}
        title="Diferenciais"
        subtitle={
          <Text className="text-grayscale-50 text-[15px] font-light">
            Conte com a RoutEasy para desbloquear todo o potencial da sua
            operação logística. Conheça os nossos diferenciais:"
          </Text>
        }
      />
      <Maestro />
      <Integrating />
      <Segments />
      <FAQ />
      <Section>
        <div className="px-0 md:px-12 mb-16 md:mb-40">
          <ContactForm />
        </div>
      </Section>
    </>
  )
}
