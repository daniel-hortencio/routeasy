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
import { Section } from 'components/elements/Section'

export default function SobreNos() {
  return (
    <>
      <Banner />
      <History />
      <Section className="pb-8">
        <div className="pb-20 lg:pb-8 mt-20 lg:mt-36">
          <CTA
            title="Quer trabalhar com a gente?"
            description={
              <Text className="text-grayscale-50 text-[15px] font-light">
                A Routeasy está em busca de novos talentos. Venha fazer parte do
                time!
              </Text>
            }
            href="https://routeasy.gupy.io/"
            buttonText="Conheça nossas vagas"
          />
        </div>
      </Section>
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
