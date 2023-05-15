import { Banner } from './Banner'
import { Clients } from './Clients'
import { Integrating } from './Integrating'
import { Maestro } from './Maestro'
import { Midia } from './Midia'
import { News } from './News'
import { Solutions } from './Solutions'
import { Testimonials } from './Testimonials'

export const HomePage = () => {
  return (
    <div>
      <Banner />
      <Clients />
      <Solutions />
      <Integrating />
      <Maestro />
      <Testimonials />
      <Midia />
      <News />
    </div>
  )
}
