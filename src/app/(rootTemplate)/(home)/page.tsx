import { Banner } from './Banner'
import { Blog } from './Blog'
import { Clients } from './Clients'
import { Integrating } from 'components/layouts/WebsiteLayout/Integrating'
import { Maestro } from 'components/layouts/WebsiteLayout/Maestro'
import { Midia } from 'components/layouts/WebsiteLayout/Midia'
import { Segments } from 'components/layouts/WebsiteLayout/Segments'
import { Solutions } from './Solutions'
import { Testimonials } from './Testimonials'
import { RoutingAcademy } from 'components/layouts/WebsiteLayout/RoutingAcademy'

export default function Home() {
  return (
    <>
      <Banner />
      <Clients />
      <Solutions />
      <Integrating />
      <RoutingAcademy />
      <Maestro />
      <Segments />
      <Testimonials />
      <Midia />
      <Blog />
    </>
  )
}
