import { Midia } from 'components/layouts/WebsiteLayout/Midia'
import { Banner } from './Banner'
import { Cerimonias } from './Cerimonias'
import { Cultura } from './Cultura'
import { Eventos } from './Eventos'
import { Historia } from './Historia'
import { RouteasyNumeros } from './RouteasyNumeros'
import { TrabalheConosco } from './TrabalheConosco'
import { CTA } from 'components/elements/CTA'

export default function SobreNos() {
  return (
    <>
      <Banner></Banner>
      <Historia></Historia>
      <div className="pb-8">
        <CTA
          title="Você sabia?"
          description="A Routeasy sempre está em busca de novos talentos, confira nossas vagas agora mesmo ;)"
          href="/"
          buttonText="Veja nossas vagas disponíveis"
        />
      </div>
      <RouteasyNumeros></RouteasyNumeros>
      <Cultura></Cultura>
      <Cerimonias></Cerimonias>
      <Eventos></Eventos>
      <div className="pb-16">
        <Midia></Midia>
      </div>
      <TrabalheConosco></TrabalheConosco>
    </>
  )
}
