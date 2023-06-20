import { Title, TextHighlight } from 'components/elements/Texts'
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

export default function SolutionsApi() {
  return (
    <>
      <BannerCentered
        title={
          <Title className="text-[35px] lg:text-[40px] pb-5">Onboarding</Title>
        }
        description="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. "
      ></BannerCentered>
      <ListFeatures listFeatures={listFeaturesCard} />

      <Section>
        <div className="w-full mx-auto mb-10 md:mb-52">
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
        <div className="px-0 md:px-12 mt-20 mb-16 md:mb-40">
          <div className="relative mx-auto bg-grayscale-500 rounded-lg pt-20 md:pt-8 p-8 mb-12 md:mb-24 shadow-3xl">
            <div className="md:pr-60 text-left mb-4 md:mb-0">
              <h2 className="text-xl/8 font-bold sm uppercase mb-4 md:mb-2">
                Certificação rout<TextHighlight>easy</TextHighlight>
              </h2>
              <p className="text-base font-normal text-grayscale-50">
                Após o treinamento sobre a plataforma, todo participante que
                atingir, pelo menos, 70% de aproveitamento recebe um certificado
                que garante a aptidão para utilizar as nossas soluções.
              </p>
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
