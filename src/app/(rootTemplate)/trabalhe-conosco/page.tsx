import { Benefits } from '../../../components/layouts/WebsiteLayout/Benefits'
import { CTA } from 'components/elements/CTA'
import { Culture } from 'components/layouts/WebsiteLayout/Culture'
import { Food } from './Food'
import { Office } from '../../../components/layouts/WebsiteLayout/Office'
import { PetDay } from '../../../components/layouts/WebsiteLayout/PetDay'
import { Vacancies } from '../../../components/layouts/WebsiteLayout/Vacancies'
import { Values } from './Values'

export default function TrabalheConosco() {
  return (
    <>
      <div className="pb-8">
        <CTA
          title="Você sabia?"
          description="A Routeasy sempre está em busca de novos talentos, confira nossas vagas agora mesmo ;)"
          href="/"
          buttonText="Veja nossas vagas disponíveis"
        />
      </div>
      <Values />
      <Culture />
      <PetDay />
      <Office />
      <Food />
      <Benefits />
      <Vacancies />
    </>
  )
}
