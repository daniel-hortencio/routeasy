import { Segments } from 'components/layouts/WebsiteLayout/Segments'

import { FeaturedFrame } from './FeaturedFrame'
import { Integrating } from 'components/layouts/WebsiteLayout/Integrating'
import { Differentials } from './Differentials'
import { Maestro } from 'components/layouts/WebsiteLayout/Maestro'
import { FAQ } from 'components/layouts/WebsiteLayout/Faq'
import { ContactForm } from 'components/layouts/WebsiteLayout/ContactForm'
import { Section } from 'components/elements/Section'
import { BannerCentered } from 'components/layouts/WebsiteLayout/BannerCentered'
import { TextHighlight, Title } from 'components/elements/Texts'

export default function Solutions() {
  return (
    <>
      {/* <Banner /> */}
      <BannerCentered
        title={
          <Title className="text-[35px] lg:text-[40px] pb-5">
            Encontre as soluções ideais para sua{' '}
            <TextHighlight>operação</TextHighlight>
          </Title>
        }
        description="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut
        assumenda voluptates qui beatae quis id Quis cupiditate. Cum
        veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto
        quis."
        buttonText="Quero saber mais"
        buttonHref="/"
      />
      <FeaturedFrame
        title="Lorem ipsum dolor sit amet"
        text="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. "
        image="/images/pictures/max-mid.png"
      />
      <Differentials />
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