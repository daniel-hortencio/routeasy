'use client'

import { Title, TextHighlight, Text } from 'components/elements/Texts'
import { Section } from 'components/elements/Section'
import { BannerCentered } from 'components/layouts/WebsiteLayout/BannerCentered'
import { Segments } from 'components/layouts/WebsiteLayout/Segments'
import { FAQ } from 'components/layouts/WebsiteLayout/Faq'
import { ContactForm } from 'components/layouts/WebsiteLayout/ContactForm'
import { Statistics } from 'components/layouts/WebsiteLayout/Statistics'
import { Testimonials } from 'components/layouts/WebsiteLayout/Testimonials'
import { RoutingAcademy } from 'components/layouts/WebsiteLayout/RoutingAcademy'
import Image from 'next/image'
import { listFeaturesCard } from './content'
import { ListFeatures } from 'components/layouts/WebsiteLayout/ListFeatures'
import { CardKnowledge } from 'components/elements/CardKnowledge'
import { ButtonPrimary } from 'components/elements/Button'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { IConversionIdentifier } from 'services'
import { FormModal } from 'components/layouts/WebsiteLayout/FormModal'
import { CardListColored } from 'components/layouts/WebsiteLayout/CardListColored'
import { IIconCardColoredProps } from 'components/elements/IconColoredCard/types'

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
    icon: 'AiOutlineFile',
    title: 'Projetos',
    text: 'Do início ao fim, estaremos ao seu lado garantindo uma transição tranquila para nossa plataforma. Com processos bem definidos e uma abordagem personalizada, nossa equipe se dedica a entender suas necessidades e impulsionar seus resultados.',
    accentColor: 'bg-yellow-500'
  },
  {
    icon: 'FiUsers',
    title: 'Implantação',
    text: 'Com vasta experiência em logística e implementação de novas tecnologias, nossa equipe é responsável por garantir que a integração de nossas soluções seja mais simples e eficiente na sua operação.',
    accentColor: 'bg-bluescale-50'
  },
  {
    icon: 'FiTarget',
    title: 'Sucesso do cliente',
    text: 'Estamos comprometidos em entender suas metas e desafios, fornecendo orientação especializada e estratégias sob medida. Sua satisfação é nossa prioridade número um da nossa equipe de customer success.',
    accentColor: 'bg-green-400'
  },
  {
    icon: 'IoMdHelp',
    title: 'Suporte',
    text: 'Nossa equipe de Suporte está dedicada a oferecer assistência e soluções rápidas para todas as suas necessidades. Com um time altamente qualificado e comprometido, estamos prontos para ajudar em escala 6x1, X horas por dia. ',
    accentColor: 'bg-red-500'
  },
  {
    icon: 'GoLightBulb',
    title: 'Design de soluções',
    text: 'Criamos e desenvolvemos soluções eficazes para atender às necessidades e desafios específicos de cada cliente. Esse processo envolve identificar problemas, analisar as necessidades dos usuários e propor soluções inovadoras.',
    accentColor: 'bg-primary-100'
  },
  {
    icon: 'TfiMoney',
    title: 'Auditoria técnica',
    text: 'Nossos especialistas realizam uma análise minuciosa da operação, avaliando e identificando áreas de melhoria. Com uma abordagem detalhada e focada em resultados, a auditoria técnica tem o objetivo de desbloquear todo o potencial do seu negócio.',
    accentColor: 'bg-green-400'
  },
  {
    icon: 'BiChevronsUp',
    title: 'Melhoria contínua',
    text: 'Investimos no desenvolvimento da nossa equipe e acompanhamos as tendências mais recentes do setor. Nosso compromisso é oferecer soluções sempre inovadoras, com recursos e funcionalidades que superam as demandas de um mercado em constante mudança.',
    accentColor: 'bg-bluescale-200'
  },
  {
    icon: 'BiChevronsUp',
    title: 'Integração',
    text: 'A garantia de uma integração tranquila e produtiva é um dos nossos principais diferenciais. Oferecemos treinamentos detalhados e suporte técnico para garantir que sua equipe esteja plenamente preparada para utilizar nossas soluções.',
    accentColor: 'bg-purplescale-50'
  }
]

export default function SolutionsApi() {
  return (
    <>
      <BannerCentered
        title={
          <Title className="text-[35px] lg:text-[40px] pb-5">Onboarding</Title>
        }
        description={
          <Text className="text-grayscale-50 text-[15px] font-light">
            Somos especialistas em garantir o sucesso dos nossos clientes Desde
            a implantação até a rotina diária, estamos ao seu lado para alcançar
            resultados incríveis.{' '}
          </Text>
        }
      >
        <div className="lg:w-[168px] text-center mx-[auto]">
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
      <ListFeatures listFeatures={listFeaturesCard} />
      <Section
        title={
          <Title>
            Nossas equipes de <TextHighlight>especialistas </TextHighlight>vão
            até você
          </Title>
        }
        subtitle={
          <Text className="text-grayscale-50 text-[15px] font-light">
            Nossas equipes viajam por todo o Brasil para conhecer os detalhes de
            cada operação logística. Tudo isso nos permite oferecer soluções
            personalizadas e que se encaixam perfeitamente no seu negócio.{' '}
          </Text>
        }
      >
        <div className="w-full mx-auto mb-52">
          <CardKnowledge
            title="Especialista em operações logísticas "
            text="Nosso time possui ampla experiência de mercado na área de logística, o que facilita o entendimento das necessidades dos clientes e nos dá a oportunidade de oferecer uma consultoria mais assertiva, direcionando as soluções conforme cada caso. Como o consultor já trabalhou na área, ele sabe quais são as dificuldades do cliente e como resolvê-las, ou seja, os dois falam de igual pra igual e isso facilita bastante o processo de implantação."
            link="#"
            image="/images/pictures/knowledge-01.png"
          />

          <div className="h-[50px] md:h-[120px]"></div>

          <CardKnowledge
            title="Treinamento e capacitação "
            text="Desde a implantação até a rotina diária, nosso compromisso é garantir que sua equipe esteja totalmente capacitada para utilizar nossas soluções com eficiência total. Através de treinamentos e orientações especializadas, nossa equipe te ajuda a alcançar o máximo potencial da sua operação."
            link="#"
            image="/images/pictures/knowledge-02.png"
            side="right"
          />
        </div>
      </Section>
      <Section>
        <div className="px-0 md:px-12 mt-20 mb-16 md:mb-44">
          <div className="relative mx-auto bg-grayscale-500 rounded-lg pt-20 md:pt-8 p-8 mb-12 md:mb-24 shadow-3xl">
            <div className="md:pr-60 text-left mb-4 md:mb-0">
              <Title className="text-[26px]/[32px] mb-2">
                Certificação rout<TextHighlight>easy</TextHighlight>
              </Title>
              <Text className="text-grayscale-50 text-sm/[24px] font-light">
                Após o treinamento sobre a plataforma, todo participante que
                atingir, pelo menos, 70% de aproveitamento recebe um certificado
                que garante a aptidão para utilizar as nossas soluções.
              </Text>
            </div>
            <div className="md:hidden absolute w-[146px] h-[146px] left-2/4 top-0 -translate-x-2/4 -translate-y-2/4">
              <Image
                src="/images/pictures/certificacao.svg"
                alt="imagem explicativa"
                fill
              />
            </div>
            <div className="hidden md:block absolute w-[266px] h-[266px] right-0 top-2/4 -translate-y-2/4">
              <Image
                src="/images/pictures/certificacao.svg"
                alt="imagem explicativa"
                fill
              />
            </div>
          </div>
        </div>
      </Section>
      <Statistics
        data={[
          {
            title: '99%',
            description: 'de satisfação de capacitação ao cliente'
          },
          { title: '9.8', description: 'Nota de NPS no atendimento' },
          {
            title: (
              <>
                1.0<small className="text-2xl">min</small>
              </>
            ),
            description: 'tempo de resposta de suporte ao cliente'
          },
          { title: '95.7%', description: 'SLA taxa de realização' }
        ]}
      />
      <Testimonials />
      <CardListColored // Cheila
        cards={listDifferentials}
        title={
          <Title>
            O MÉTODO ROUTEASY DE FAZER A{' '}
            <TextHighlight>diferença</TextHighlight>
          </Title>
        }
        subtitle={
          <Text className="text-grayscale-50 text-[15px] font-light">
            Conte com a RoutEasy para desbloquear todo o potencial da sua
            operação logística. Conheça nossos pilares de atuação:
          </Text>
        }
      />
      <RoutingAcademy />
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
