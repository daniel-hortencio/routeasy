import { Banner } from './Banner'
import { Blog } from './Blog'
import { Clients } from './Clients'
import { Integrating } from 'components/layouts/WebsiteLayout/Integrating'
import { CTA } from './CTA'
import { Maestro } from 'components/layouts/WebsiteLayout/Maestro'
import { Midia } from './Midia'
import { Segments } from './Segments'
import { Solutions } from './Solutions'
import { Testimonials } from './Testimonials'

export default function Home() {
  return (
    <div>
      <Banner />
      <Clients />
      <Solutions />
      <Integrating />
      <CTA />
      <Maestro />
      <Segments />
      <Testimonials />
      <Midia />
      <Blog />
    </div>
  )
}
