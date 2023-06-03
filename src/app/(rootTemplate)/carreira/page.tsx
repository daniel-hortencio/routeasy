import { CTA } from 'components/elements/CTA'
import { Banner } from './Banner'

export default function Carrer() {
  return (
    <>
      <Banner />
      <div className="pb-8">
        <CTA
          title="Você sabia?"
          description="A Routeasy sempre está em busca de novos talentos, confira nossas vagas agora mesmo ;)"
          href="/"
          buttonText="Veja nossas vagas disponíveis"
        />
      </div>
    </>
  )
}
