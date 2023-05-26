import { Banner } from './Banner'
import { ContactArea } from './ContactArea'
import { FAQ } from 'components/layouts/WebsiteLayout/Faq'
import { ContactForm } from 'components/layouts/WebsiteLayout/ContactForm'
import { Section } from 'components/elements/Section'

export default function Contact() {
  return (
    <>
      <Banner />
      <ContactArea />
      <FAQ />
      <Section>
        <div className="px-0 md:px-12 mb-16 md:mb-40">
          <ContactForm></ContactForm>
        </div>
      </Section>
    </>
  )
}
