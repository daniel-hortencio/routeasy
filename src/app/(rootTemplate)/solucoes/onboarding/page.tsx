import { Title } from 'components/elements/Texts'
import { Section } from 'components/elements/Section'
import { BannerCentered } from 'components/layouts/WebsiteLayout/BannerCentered'
import { Segments } from 'components/layouts/WebsiteLayout/Segments'
import { FAQ } from 'components/layouts/WebsiteLayout/Faq'
import { ContactForm } from 'components/layouts/WebsiteLayout/ContactForm'
import { Statistics } from 'components/layouts/WebsiteLayout/Statistics'
import { Testimonials } from 'components/layouts/WebsiteLayout/Testimonials'

export default function SolutionsApi() {
  return (
    <>
      <BannerCentered
        title={
          <Title className="text-[35px] lg:text-[40px] pb-5">Onboarding</Title>
        }
        description="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. "
        buttonText="Quero saber mais"
        buttonHref="/"
      />
      <Statistics />
      <Testimonials />
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
