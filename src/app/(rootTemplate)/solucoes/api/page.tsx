import { BannerCentered } from 'components/layouts/WebsiteLayout/BannerCentered'
import { Clients } from 'components/layouts/WebsiteLayout/Clients'
import { CardListColored } from 'components/layouts/WebsiteLayout/CardListColored'
import { FeaturedFrame } from 'components/layouts/WebsiteLayout/FeaturedFrame'
import { TextHighlight, Title } from 'components/elements/Texts'
import { CardDescription } from 'components/elements/CardDescription'
import { FAQ } from 'components/layouts/WebsiteLayout/Faq'
import { ContactForm } from 'components/layouts/WebsiteLayout/ContactForm'
import { Section } from 'components/elements/Section'
// import { Prices } from 'components/layouts/WebsiteLayout/Prices'
import Image from 'next/image'
import { IIconCardColoredProps } from 'components/elements/IconColoredCard/types'

const listDifferentials: IIconCardColoredProps[] = [
  {
    icon: 'FiDatabase',
    title: 'Roteirizador',
    text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis.',
    accentColor: 'bg-bluescale-50'
  },
  {
    icon: 'FiDatabase',
    title: 'Cluster',
    text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis.',
    accentColor: 'bg-red-500'
  },
  {
    icon: 'AiOutlineUnorderedList',
    title: 'Sequenciador',
    text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis.',
    accentColor: 'bg-emerald-500'
  },
  {
    icon: 'FiDatabase',
    title: 'Geocoding',
    text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis.',
    accentColor: 'bg-indigo-500'
  },
  {
    icon: 'AiOutlineUnorderedList',
    title: 'Pedágio',
    text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis.',
    accentColor: 'bg-stone-400'
  },
  {
    icon: 'BsCode',
    title: 'distância mínima',
    text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis.',
    accentColor: 'bg-green-400'
  },
  {
    icon: 'FiDatabase',
    title: 'Matriz de distancia',
    text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis.',
    accentColor: 'bg-yellow-500'
  }
]

export default function SolutionsApi() {
  return (
    <>
      <BannerCentered
        title={
          <Title className="text-[35px] lg:text-[40px] pb-5">
            [Engine] que <TextHighlight>suporta</TextHighlight> a plataforma
          </Title>
        }
        description="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. "
        buttonText="Quero saber mais"
        buttonHref="/"
      />

      <div className="mt-[-9rem] mb-16 w-full h-[550px] relative mx-auto">
        <Image
          fill
          alt="notebook mockup"
          src="/images/pictures/mockup-notebook.png"
          style={{ objectFit: 'contain' }}
        />
      </div>
      <Clients />

      <Section>
        <div className="w-full lg:w-[968px] mx-auto">
          <CardDescription
            title="Roteirizador"
            text="Esta modalidade é recomendada para operações dinâmicas, nas quais os pedidos são integrados em tempo real, e novas rotas podem surgir ao longo do dia, ou um conjunto de pedidos possa ser adicionado a uma rota já existente."
            link="#"
            image="/images/pictures/desenvolva-voce-mesmo01.png"
          />

          <div className="h-[120px]"></div>

          <CardDescription
            title="Matriz de distância"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            link="#"
            image="/images/pictures/desenvolva-voce-mesmo02.png"
            side="right"
          />
        </div>
      </Section>

      <CardListColored
        cards={listDifferentials}
        title="Nossas API's"
        subtitle="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. "
      />

      <FeaturedFrame
        title={
          <>
            Beneficios das API's <br /> routeasy 1
          </>
        }
        text="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. "
        image="/images/pictures/max-mid.png"
      />
      {/* <Prices /> */}
      <FAQ />
      <Section>
        <div className="px-0 md:px-12 mb-16 md:mb-40">
          <ContactForm />
        </div>
      </Section>
    </>
  )
}
