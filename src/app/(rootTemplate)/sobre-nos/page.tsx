import { Midia } from 'components/layouts/WebsiteLayout/Midia'
import { Banner } from './Banner'
import { Cerimonias } from './Cerimonias'
import { Cultura } from './Cultura'
import { Eventos } from './Eventos'
import { Historia } from './Historia'
import { TrabalheConosco } from './TrabalheConosco'
import { CTA } from 'components/elements/CTA'
import { Statistics } from 'components/layouts/WebsiteLayout/Statistics'

export default function SobreNos() {
  return (
    <>
      <Banner />
      <Historia />
      <div className="pb-8">
        <CTA
          title="Você sabia?"
          description="A Routeasy sempre está em busca de novos talentos, confira nossas vagas agora mesmo ;)"
          href="/"
          buttonText="Veja nossas vagas disponíveis"
        />
      </div>
      <Statistics />
      <Cultura />
      <Cerimonias />
      <Eventos />
      <div className="pb-16">
        <Midia />
      </div>
      <TrabalheConosco />
    </>
  )
}
