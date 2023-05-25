import { Banner } from './Banner'
import { Segments } from 'components/layouts/WebsiteLayout/Segments'
import { ContactForm } from './ContactForm'
import { FeaturedFrame } from './FeaturedFrame'
import { Integrating } from 'components/layouts/WebsiteLayout/Integrating'
import { Differentials } from './Differentials'
import { Maestro } from 'components/layouts/WebsiteLayout/Maestro'
import { FAQ } from 'components/layouts/WebsiteLayout/Faq'

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
      <Maestro />
      <Integrating />
      <Segments />
      <FAQ />
      <ContactForm />
    </>
  )
}
