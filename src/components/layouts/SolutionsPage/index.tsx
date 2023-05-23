import { Banner } from './Banner'
import { Segments } from '../WebsiteLayout/Segments'
import { ContactForm } from './ContactForm'
import { FeaturedFrame } from './FeaturedFrame'
import { Integrating } from '../WebsiteLayout/Integrating'
import { Differentials } from './Differentials'

export const SolutionsPage = () => {
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
      <Segments />
      <ContactForm />
    </>
  )
}
