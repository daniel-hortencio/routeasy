'use client'

import { BannerCentered } from 'components/layouts/WebsiteLayout/BannerCentered'
import { Clients } from 'components/layouts/WebsiteLayout/Clients'
import { CardListColored } from 'components/layouts/WebsiteLayout/CardListColored'
import { FeaturedFrame } from 'components/layouts/WebsiteLayout/FeaturedFrame'
import { TextHighlight, Title, Text } from 'components/elements/Texts'
import { CardDescription } from 'components/elements/CardDescription'
import { FAQ } from 'components/layouts/WebsiteLayout/Faq'
import { ContactForm } from 'components/layouts/WebsiteLayout/ContactForm'
import { Section } from 'components/elements/Section'
// import { Prices } from 'components/layouts/WebsiteLayout/Prices'
import Image from 'next/image'
import { IIconCardColoredProps } from 'components/elements/IconColoredCard/types'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { IConversionIdentifier } from 'services'
import { FormModal } from 'components/layouts/WebsiteLayout/FormModal'
import { ButtonPrimary } from 'components/elements/Button'
import Icon from 'components/elements/Icon'

const MySwal = withReactContent(Swal)

function getModal(
  title: string,
  description: string,
  conversion_identifier: IConversionIdentifier
) {
  MySwal.fire({
    html: (
      <>
        <FormModal
          title={title}
          description={description}
          conversion_identifier={conversion_identifier}
          onClose={Swal.close}
        />
      </>
    ),
    showConfirmButton: false
  })
}

const listDifferentials: IIconCardColoredProps[] = [
  {
    icon: 'FiDatabase',
    title: 'Roteirizador',
    text: 'Otimize suas rotas de entrega com algoritmos avançados para calcular as melhores sequências de paradas, considerando restrições e economize custos logísticos com a poderosa API de roteirização RoutEasy.',
    accentColor: 'bg-bluescale-50'
  },
  {
    icon: 'AiOutlineCluster',
    title: 'Cluster',
    text: 'Agrupe pontos de serviços próximos com o refinado algoritmo genético RoutEasy e aumente a eficiência de processamento do seu planejamento logístico com uso de inteligência.',
    accentColor: 'bg-red-500'
  },
  {
    icon: 'AiOutlineUnorderedList',
    title: 'Sequenciador',
    text: 'Organize paradas de forma inteligente, considerando restrições como ordem de visita, prioridades, tempo de atendimento e garanta um fluxo de trabalho eficiente na sua cadeia de suprimentos.',
    accentColor: 'bg-emerald-500'
  },
  {
    icon: 'BiMap',
    title: 'Geocoding',
    text: 'Converta endereços em coordenadas geográficas para melhorar o mapeamento e localização de suas entregas. Utilize API de geocoding  para integrar com sistemas de mapeamento e localização geográfica.',
    accentColor: 'bg-indigo-500'
  },
  {
    icon: '/images/pictures/mockup-notebook.png',
    title: 'Pedágio',
    text: 'Calcule os custos de pedágio em suas rotas levando em consideração sua frota, planeje seus recursos financeiros com precisão e reduza os gastos extras.',
    accentColor: 'bg-stone-400'
  },
  {
    icon: '',
    title: 'distância mínima',
    text: 'Calcule a menor distância entre diversos pontos e ganhe tempo em sua operação logística com o conceituado algoritmo de otimização RoutEasy.',
    accentColor: 'bg-green-400'
  },
  {
    icon: 'LuTable2',
    title: 'Matriz de distancia',
    text: 'Tenha acesso rápido às distâncias entre múltiplos pontos, simplifique o planejamento e tomadas de decisões logísticas com acesso a informações precisas geradas por pesquisa operacional',
    accentColor: 'bg-yellow-500'
  },
  {
    icon: '',
    title: 'Postal code',
    text: 'Converta CEP em endereços e coordenadas geográficas. Obtenha informações precisas para uma localização rápida e precisa dos seus clientes e pontos de entrega.',
    accentColor: 'bg-redscale-100'
  },
  {
    icon: 'BsTruck',
    title: 'Motorista / Rotas',
    text: 'Gerencie a atribuição de motoristas às rotas planejadas, considerando disponibilidade e restrições, maximizando a produtividade e garantindo uma distribuição eficaz.',
    accentColor: 'bg-stone-400'
  },
  {
    icon: 'TfiMoney',
    title: 'Cálculo de frete',
    text: 'Realize cálculos precisos do custo de transporte, torne sua precificação mais eficiente com base em variáveis como distância, tipo de veículo, carga ou até mesmo personalize suas regras, para determinar preços competitivos e lucrativos.',
    accentColor: 'bg-green-400'
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
        description={
          <Text className="text-grayscale-50 text-[15px] font-light">
            Integre à robusta tecnologia RoutEasy e potencialize seu last-mile
            logístico. Com flexibilidade, incorpore uma ou mais API's a
            diferentes aplicações e negócios. Ganhe escalabilidade no
            planejamento, execução e gestão da sua operação. Experimente as
            API's RoutEasy hoje mesmo e revolucione sua logística.
          </Text>
        }
      >
        <div className="lg:w-[168px] text-center mx-[auto]">
          <ButtonPrimary
            onClick={() =>
              getModal(
                'Comercial',
                'Solicite uma demonstração ou tire dúvidas sobre nossas soluções.',
                'site-routeasy'
              )
            }
          >
            Quero saber mais
          </ButtonPrimary>
        </div>
      </BannerCentered>

      <div className="mt-[-9rem] mb-16 w-full h-[550px] relative mx-auto">
        <Image
          fill
          alt="notebook mockup"
          src="/images/pictures/mockup-notebook.png"
          style={{ objectFit: 'contain' }}
        />
      </div>
      <Clients />

      <Section className="pb-36 pt-20">
        <div className="w-full lg:w-[968px] mx-auto">
          <CardDescription
            title={
              <Title className="text-[26px]/[32px]">
                Otimize e faça a{' '}
                <TextHighlight>gestão last-mile </TextHighlight>do começo ao fim
              </Title>
            }
            text="Aplique inteligência artificial, algoritmos avançados e programação de ponta nas operações logísticas. Refine endereços, acesse geocodes, otimize rotas, construa regiões de atuação, controle serviços, gerencie operadores, monitore veículos, calcule frete, consulte valores de pedágios e muito mais. Descubra como nossas API's revolucionam o setor com tecnologia de ponta, atendendo distribuidoras, transportadoras, e-commerce, indústrias, empresas de softwares, logtechs e muito mais!"
            link="#"
            image="/images/pictures/desenvolva-voce-mesmo02.png"
            side="right"
          />
          <div className="h-[120px]"></div>
          <CardDescription
            title={
              <Title className="text-[26px]/[32px]">
                Alcance a máxima eficiência com o pacote
                <TextHighlight>full otimization </TextHighlight>da routeasy
              </Title>
            }
            text="Potencialize suas operações logísticas com nosso pacote completo. Integre todas as API's da RoutEasy para obter roteirizações otimizadas e o máximo de controle. Utilize restrições operacionais, apoiado em regras personalizadas de negócio. Transforme sua logística hoje mesmo!"
            link="#"
            image="/images/pictures/desenvolva-voce-mesmo01.png"
          />
        </div>
      </Section>

      <CardListColored
        cards={listDifferentials}
        title={
          <Title>
            Personalize sua
            <TextHighlight> logística </TextHighlight>com as{' '}
            <TextHighlight>API's </TextHighlight>flexíveis da routeasy
          </Title>
        }
        subtitle={
          <Text className="text-grayscale-50 text-[15px] font-light">
            Adapte nossas API's poderosas às necessidades específicas do seu
            negócio. Desenvolva soluções logísticas inovadoras e personalizadas.
            Descubra a flexibilidade das nossas API's!
          </Text>
        }
      />

      <FeaturedFrame
        title={
          <>
            Beneficios das <TextHighlight>API's</TextHighlight> <br /> routeasy
          </>
        }
        text="Desfrute de toda a inteligência da RoutEasy sem sair da sua plataforma, aproveitando a qualidade que temos a oferecer. Conte com robustez e escalabilidade para impulsionar sua eficiência operacional. Experimente agora e leve sua logística a novos patamares!"
        image="/images/pictures/screen-api.png"
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
