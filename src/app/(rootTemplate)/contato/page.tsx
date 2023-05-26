import { Banner } from './Banner'
import { ContactArea } from './ContactArea'
import { FAQ } from 'components/layouts/WebsiteLayout/Faq'
import { ContactForm } from 'components/layouts/WebsiteLayout/ContactForm'

export default function Contact() {
  return (
    <>
      <Banner />
      <ContactArea />
      <FAQ />
      <ContactForm />
    </>
  )
}
