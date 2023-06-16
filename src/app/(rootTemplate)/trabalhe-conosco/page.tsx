import { Benefits } from '../../../components/layouts/WebsiteLayout/Benefits'
import { CTA } from 'components/elements/CTA'
import { Culture } from 'components/layouts/WebsiteLayout/Culture'
import { Food } from '../../../components/layouts/WebsiteLayout/Food'
import { Office } from '../../../components/layouts/WebsiteLayout/Office'
import { PetDay } from '../../../components/layouts/WebsiteLayout/PetDay'
import { Vacancies } from '../../../components/layouts/WebsiteLayout/Vacancies'
import { Values } from './Values'
import { Banner } from './Banner'
import { FacesOfRoutEasy } from 'components/layouts/WebsiteLayout/FacesOfRoutEasy'
import { Text } from 'components/elements/Texts'

export default function TrabalheConosco() {
  return (
    <>
      <Banner />
      <div className="pb-8">
        <CTA
          title="Você sabia?"
          description={
            <Text className="text-grayscale-50 text-[15px] font-light">
              A Routeasy sempre está em busca de novos talentos, confira nossas
              vagas agora mesmo ;)
            </Text>
          }
          href="/"
          buttonText="Veja nossas vagas disponíveis"
        />
      </div>
      <Values />
      <FacesOfRoutEasy />
      <Culture />
      <PetDay />
      <Office />
      <Food />
      <Benefits />
      <Vacancies />
    </>
  )
}
