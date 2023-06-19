import { Segments } from 'components/layouts/WebsiteLayout/Segments'
import { Integrating } from 'components/layouts/WebsiteLayout/Integrating'
import { Comparison } from 'components/layouts/WebsiteLayout/Comparison'
import { Maestro } from 'components/layouts/WebsiteLayout/Maestro'
import { FAQ } from 'components/layouts/WebsiteLayout/Faq'
import { ContactForm } from 'components/layouts/WebsiteLayout/ContactForm'
import { Statistics } from 'components/layouts/WebsiteLayout/Statistics'
import { CTA } from 'components/elements/CTA'
import { Section } from 'components/elements/Section'
import { BannerCentered } from 'components/layouts/WebsiteLayout/BannerCentered'
import { TextHighlight, Title } from 'components/elements/Texts'
import { ListFeatures } from 'components/layouts/WebsiteLayout/ListFeatures'

import { BsFillPlayFill } from 'react-icons/bs'
import { TabsHorizontal } from 'components/layouts/WebsiteLayout/TabHorizontal'
import { FeatureList } from './content'
import { ClientsNumbers } from 'components/layouts/WebsiteLayout/ClientsNumbers'

export default function SolutionsRoteirizacao() {
  return (
    <>
      <BannerCentered
        title={
          <Title className="text-[35px] lg:text-[40px] pb-5">
            O melhor e mais rápido <TextHighlight>roteirizador</TextHighlight>
            do mercado
          </Title>
        }
        description="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut
        assumenda voluptates qui beatae quis id Quis cupiditate. Cum
        veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto
        quis."
        buttonText={<BsFillPlayFill color="#FFFFFF" size={20} />}
        buttonHref="/"
      />
      <ListFeatures />
      <Section>
        <div className="w-full lg:w-[962px] mx-auto my-[72px]">
          <TabsHorizontal featureContent={FeatureList} />
        </div>
      </Section>
      <Section>
        <div className="w-full lg:w-[1033px] mx-auto my-[72px]">
          <CTA
            title="Quer levar facilidade para a sua operação?"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            buttonText="Solicite uma demonstração"
            href="/"
          />
        </div>
      </Section>
      <Comparison />
      <ClientsNumbers />
      <Integrating />
      <Statistics />
      <Maestro />
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
