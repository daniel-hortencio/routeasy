import { Segments } from 'components/layouts/WebsiteLayout/Segments'
import { FeaturedFrame } from 'components/layouts/WebsiteLayout/FeaturedFrame'
import { Integrating } from 'components/layouts/WebsiteLayout/Integrating'
import { CardListColored } from 'components/layouts/WebsiteLayout/CardListColored'
import { Maestro } from 'components/layouts/WebsiteLayout/Maestro'
import { FAQ } from 'components/layouts/WebsiteLayout/Faq'
import { ContactForm } from 'components/layouts/WebsiteLayout/ContactForm'
import { Section } from 'components/elements/Section'
import { BannerCentered } from 'components/layouts/WebsiteLayout/BannerCentered'
import { Routing } from 'components/layouts/WebsiteLayout/Routing'
import { TextHighlight, Title } from 'components/elements/Texts'
import { ICardColoredProps } from 'components/layouts/WebsiteLayout/CardListColored/types'

const listDifferentials: ICardColoredProps[] = [
  {
    icon: 'BsShield',
    title: 'Apólice de seguro',
    text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis.',
    accentColor: 'bg-bluescale-50'
  },
  {
    icon: 'FiTarget',
    title: 'Gamificação',
    text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis.',
    accentColor: 'bg-primary-100'
  },
  {
    icon: 'AiOutlineFile',
    title: 'Relatórios',
    text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis.',
    accentColor: 'bg-yellowscale-50'
  },
  {
    icon: 'AiOutlineFileAdd',
    title: 'POD + OCR',
    text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis.',
    accentColor: 'bg-redscale-50'
  }
]

export default function Solutions() {
  return (
    <>
      <BannerCentered
        title={
          <Title className="text-[35px] lg:text-[40px] pb-5">
            Encontre as soluções ideais para sua{' '}
            <TextHighlight>operação</TextHighlight>
          </Title>
        }
        description="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut
        assumenda voluptates qui beatae quis id Quis cupiditate. Cum
        veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto
        quis."
        buttonText="Quero saber mais"
        buttonHref="/"
      />
      <Routing />
      <FeaturedFrame
        title="Lorem ipsum dolor sit amet"
        text="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. "
        image="/images/pictures/max-mid.png"
      />
      <CardListColored
        cards={listDifferentials}
        title="Diferenciais"
        subtitle="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. "
      />
      <Maestro />
      <Integrating />
      <Segments />
      <FAQ />
      <Section>
        <div className="px-0 md:px-12 mb-16 md:mb-40">
          <ContactForm />
        </div>
      </Section>
    </>
  )
}
