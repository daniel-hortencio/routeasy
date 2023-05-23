import { Banner } from './Banner'
import { Blog } from './Blog'
import { Clients } from './Clients'
import { Integrating } from '../WebsiteLayout/Integrating'
import { CTA } from './CTA'
import { Maestro } from './Maestro'
import { Midia } from './Midia'
import { Segments } from './Segments'
import { Solutions } from './Solutions'
import { Testimonials } from './Testimonials'

export const HomePage = () => {
  return (
    <>
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
    </>
  )
}
