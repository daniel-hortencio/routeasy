import { Midia } from 'components/layouts/WebsiteLayout/Midia'
import { Banner } from './Banner'
import { Ceremonies } from 'components/layouts/WebsiteLayout/Ceremonies'
import { Culture } from 'components/layouts/WebsiteLayout/Culture'
import { Events } from './Events'
import { History } from './History'
import { Career } from './Career'
import { CTA } from 'components/elements/CTA'
import { Statistics } from 'components/layouts/WebsiteLayout/Statistics'
import { Text } from 'components/elements/Texts'

export default function SobreNos() {
  return (
    <>
      <Banner />
      <History />
      <div className="pb-20 lg:pb-8 mt-20 lg:mt-36">
        <CTA
          title="Você sabia?"
          description={
            <Text className="text-grayscale-50 text-[15px] font-light">
              A Routeasy sempre está em busca de novos talentos, confira nossas
              vagas agora mesmo ;)
            </Text>
          }
          href="/trabalhe-conosco"
          buttonText="Veja nossas vagas disponíveis"
        />
      </div>
      <Statistics />
      <Culture />
      <Ceremonies />
      <Events />
      <div className="pb-16">
        <Midia />
      </div>
      <Career />
    </>
  )
}
