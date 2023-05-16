import { Banner } from './Banner'
import { Blog } from './Blog'
import { Clients } from './Clients'
import { Integrating } from './Integrating'
import { Maestro } from './Maestro'
import { Midia } from './Midia'
import { News } from './News'
import { Segments } from './Segments'
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
      <Segments />
      <Testimonials />
      <Midia />
      <News />
      <Blog />
    </div>
  )
}
