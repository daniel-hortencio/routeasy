import { Banner } from './Banner'
import { Blog } from './Blog'
import { Clients } from 'components/layouts/WebsiteLayout/Clients'
import { Co2 } from 'components/layouts/WebsiteLayout/Co2'
import { Integrating } from 'components/layouts/WebsiteLayout/Integrating'
import { Maestro } from 'components/layouts/WebsiteLayout/Maestro'
import { Midia } from 'components/layouts/WebsiteLayout/Midia'
import { Segments } from 'components/layouts/WebsiteLayout/Segments'
import { Testimonials } from 'components/layouts/WebsiteLayout/Testimonials'
import { RoutingAcademy } from 'components/layouts/WebsiteLayout/RoutingAcademy'

export default function Home() {
  return (
    <>
      <Banner />
      <Clients />
      {/*       <Solutions /> */}
      <Integrating />
      <RoutingAcademy />
      <Maestro />
      <Segments />
      <Testimonials />
      <Co2 />
      <Midia />
      <Blog />
    </>
  )
}
