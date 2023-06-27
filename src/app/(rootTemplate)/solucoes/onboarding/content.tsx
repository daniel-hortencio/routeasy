import { ICardFeatureProps } from 'components/elements/CardFeature/types'
import { IIconCardColoredProps } from 'components/elements/IconColoredCard/types'
import Image from 'next/image'

export const listFeaturesCard: ICardFeatureProps[] = [
  {
    title: 'Parceria',
    text: 'Trabalhamos em estreita colaboração com nossos clientes para construir uma relação de confiança. Acreditamos no poder da parceria para alcançar resultados excepcionais.',
    icon: 'FiUsers'
  },
  {
    title: 'Experiência',
    text: 'Além de conhecer profundamente nossas soluções, temos vasta experiência de mercado para compreender as necessidades e desafios específicos de nossos clientes.',
    icon: 'FiShield'
  },
  {
    title: 'Compromisso',
    text: 'Estamos presentes na rotina de nossos clientes, oferecendo suporte contínuo, acompanhando tudo de perto e garantindo que nossas soluções entreguem o máximo de valor.',
    icon: 'FiTarget'
  }
]

export const listDifferentials: IIconCardColoredProps[] = [
  {
    icon: 'AiOutlineFile',
    title: 'Projetos',
    text: 'Do início ao fim, estaremos ao seu lado garantindo uma transição tranquila para nossa plataforma. Com processos bem definidos e uma abordagem personalizada, nossa equipe se dedica a entender suas necessidades e impulsionar seus resultados.',
    accentColor: 'bg-yellow-500'
  },
  {
    icon: 'FiUsers',
    title: 'Implantação',
    text: 'Com vasta experiência em logística e implementação de novas tecnologias, nossa equipe é responsável por garantir que a integração de nossas soluções seja mais simples e eficiente na sua operação.',
    accentColor: 'bg-bluescale-50'
  },
  {
    icon: 'FiTarget',
    title: 'Sucesso do cliente',
    text: 'Estamos comprometidos em entender suas metas e desafios, fornecendo orientação especializada e estratégias sob medida. Sua satisfação é nossa prioridade número um da nossa equipe de customer success.',
    accentColor: 'bg-green-400'
  },
  {
    icon: 'IoMdHelp',
    title: 'Suporte',
    text: 'Nossa equipe de Suporte está dedicada a oferecer assistência e soluções rápidas para todas as suas necessidades. Com um time altamente qualificado e comprometido, estamos prontos para ajudar em escala 6x1, X horas por dia. ',
    accentColor: 'bg-red-500'
  },
  {
    icon: 'GoLightBulb',
    title: 'Design de soluções',
    text: 'Criamos e desenvolvemos soluções eficazes para atender às necessidades e desafios específicos de cada cliente. Esse processo envolve identificar problemas, analisar as necessidades dos usuários e propor soluções inovadoras.',
    accentColor: 'bg-primary-100'
  },
  {
    icon: 'TfiMoney',
    title: 'Auditoria técnica',
    text: 'Nossos especialistas realizam uma análise minuciosa da operação, avaliando e identificando áreas de melhoria. Com uma abordagem detalhada e focada em resultados, a auditoria técnica tem o objetivo de desbloquear todo o potencial do seu negócio.',
    accentColor: 'bg-green-400'
  },
  {
    icon: 'BiChevronsUp',
    title: 'Melhoria contínua',
    text: 'Investimos no desenvolvimento da nossa equipe e acompanhamos as tendências mais recentes do setor. Nosso compromisso é oferecer soluções sempre inovadoras, com recursos e funcionalidades que superam as demandas de um mercado em constante mudança.',
    accentColor: 'bg-bluescale-200'
  },
  {
    icon: (
      <Image src="/images/icons/rotas.svg" width={24} height={24} alt="Rotas" />
    ),
    title: 'Integração',
    text: 'A garantia de uma integração tranquila e produtiva é um dos nossos principais diferenciais. Oferecemos treinamentos detalhados e suporte técnico para garantir que sua equipe esteja plenamente preparada para utilizar nossas soluções.',
    accentColor: 'bg-purplescale-50'
  }
]
