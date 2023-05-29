import { Banner } from './Banner'
import { Blog } from './Blog'
import { Clients } from './Clients'
import { Integrating } from 'components/layouts/WebsiteLayout/Integrating'
import { CTA } from '../../../components/elements/CTA'
import { Maestro } from 'components/layouts/WebsiteLayout/Maestro'
import { Midia } from 'components/layouts/WebsiteLayout/Midia'
import { Segments } from 'components/layouts/WebsiteLayout/Segments'
import { Solutions } from './Solutions'
import { Testimonials } from './Testimonials'

export default function Home() {
  return (
    <>
      <Banner />
      <Clients />
      <Solutions />
      <Integrating />
      <CTA
        title="Que saber como se tornar um especialista em roteirização?"
        description="Conheça o Routing Academy, o primeiro curso on-lline de roteirização do Brasil."
        href="/"
        buttonText="Quero saber mais"
      />
      <Maestro />
      <Segments />
      <Testimonials />
      <Midia />
      <Blog />
    </>
  )
}
