import { Banner } from './Banner'
import { Segments } from 'components/layouts/WebsiteLayout/Segments'
import { FeaturedFrame } from './FeaturedFrame'
import { Integrating } from 'components/layouts/WebsiteLayout/Integrating'
import { Differentials } from './Differentials'
import { Maestro } from 'components/layouts/WebsiteLayout/Maestro'
import { FAQ } from 'components/layouts/WebsiteLayout/Faq'
import { ContactForm } from 'components/layouts/WebsiteLayout/ContactForm'
import { Statistics } from './Statistics'

export default function Solutions() {
  return (
    <>
      <Banner />
      <FeaturedFrame
        title="Lorem ipsum dolor sit amet"
        text="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. "
        image="/images/pictures/max-mid.png"
      />
      <Differentials />
      <Integrating />
      <Statistics />
      <Maestro />
      <Segments />
      <FAQ />
      <ContactForm />
    </>
  )
}
