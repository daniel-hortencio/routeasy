import { ContactArea } from './ContactArea'
import { FAQ } from 'components/layouts/WebsiteLayout/Faq'
import { ContactForm } from 'components/layouts/WebsiteLayout/ContactForm'
import { Section } from 'components/elements/Section'
import { BannerCentered } from 'components/layouts/WebsiteLayout/BannerCentered'
import { Title } from 'components/elements/Texts'

export default function Contact() {
  return (
    <>
      <BannerCentered
        title={
          <Title className="text-[35px] lg:text-[40px] pb-5">Contato</Title>
        }
        description=" Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut
        assumenda voluptates qui beatae quis id Quis cupiditate. Cum
        veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto
        quis."
      />
      <ContactArea />
      <FAQ />
      <Section>
        <div className="px-0 md:px-12 mb-16 md:mb-40">
          <ContactForm />
        </div>
      </Section>
    </>
  )
}
