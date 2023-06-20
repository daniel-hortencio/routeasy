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

          <div className="h-[120px]"></div>

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
        <div className="px-0 md:px-12 mt-20 mb-16 md:mb-40">
          <div className="relative mx-auto bg-grayscale-500 rounded-lg p-8 mb-12 md:mb-24 shadow-3xl">
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
            <div className="hidden absolute md:block w-[266px] h-[266px] top-[50%] right-0 -translate-y-2/4">
              <Image
                src="/images/pictures/certificacao.svg"
                alt="imagem explicativa"
                fill
              />
            </div>
          </div>
        </div>
      </Section>
      <Statistics />
      <Testimonials />
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
