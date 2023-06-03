import { CTA } from 'components/elements/CTA'
import { Banner } from './Banner'
import { Vacancies } from 'components/layouts/WebsiteLayout/Vacancies'
import { Benefits } from 'components/layouts/WebsiteLayout/Benefits'
import { Office } from 'components/layouts/WebsiteLayout/Office'
import { Culture } from 'components/layouts/WebsiteLayout/Culture'
import { PetDay } from 'components/layouts/WebsiteLayout/PetDay'

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
        <Culture />
        <PetDay />
        <Office />
        <Benefits />
        <Vacancies />
      </div>
    </>
  )
}
