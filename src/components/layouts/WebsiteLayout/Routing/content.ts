import { IRoutingContentProps, IFeatureProps } from './types'

export const FeatureList: IFeatureProps[] = [
  {
    title: 'Personalização de objetivos de otimização',
    icon: '/images/icons/features-icon-01.svg',
    text: 'O algoritmo de roteirização da RoutEasy tem a maior capacidade de processamento do mercado, o que significa roteirizar mais pontos em menos tempo. Otimize a utilização de recursos, minimize custos e maximize a eficiência da sua operação!'
  },
  {
    title: 'Entregas e coletas na mesma rota',
    icon: '/images/icons/features-icon-02.svg',
    text: 'Diminua custos e maximize a eficiência operacional consolidando entregas e coletas em uma única rota estrategicamente planejada. Aproveite ao máximo a capacidade de carga dos veículos enquanto evita a ociosidade.'
  },
  {
    title: 'Resequenciamento automático',
    icon: '/images/icons/features-icon-03.svg',
    text: 'Reduza o tempo gasto com edições manuais. Caso haja alterações na rota, nossa plataforma recalcula a ordem das paradas e atualiza, automaticamente, os ETAs dos clientes em rota.'
  },
  {
    title: 'Configuração de restrições operacionais',
    icon: '/images/icons/features-icon-04.svg',
    text: 'Planeje rotas eficientes e que se adaptam às restrições da sua operação ou dos seus clientes. Nosso módulo de otimização considera restrições como janelas horárias, características dos veículos, distância máxima de viagem e preferências de sequenciamento.'
  }
]

export const RoutingList: IRoutingContentProps[] = [
  {
    title: 'Roteirização',
    icon: '/images/icons/home-solutions-routeirizacao.svg',
    text: 'O algoritmo de roteirização da RoutEasy tem a maior capacidade de processamento do mercado, o que significa roteirizar mais pontos em menos tempo. Otimize a utilização de recursos, minimize custos e maximize a eficiência da sua operação!',
    link: 'https://www.google.com',
    image: '/images/pictures/Screen_roteirizacao.svg',
    featureContent: FeatureList
  },
  {
    title: 'Gestão de entregas',
    icon: '/images/icons/home-solutions-gestao-de-entrega.svg',
    text: 'Acompanhe tudo o que acontece em tempo real na sua operação. Em uma plataforma amigável, você analisa todas as métricas que precisa e toma as decisões certas na hora certa.',
    link: 'https://www.google.com',
    image: '/images/pictures/Screen_gestao.svg',
    featureContent: FeatureList
  },
  {
    title: 'Automação',
    icon: '/images/icons/home-solutions-automacao.svg',
    text: 'Ellimine os processos manuais para ganhar mais agilidade e eficiência. Com regras e parâmetros pré definidos, o Maestro automatiza todo o fluxo de trabalho, possibilitando o same day dellivery e as coletas dinâmicas.',
    link: 'https://www.google.com',
    image: '/images/pictures/Screen_automacao_API.svg',
    featureContent: FeatureList
  },
  {
    title: 'Aplicativo',
    icon: '/images/icons/home-solutions-aplicativo.svg',
    text: 'O aplicativo garante a integração de todas as etapas do processo de entrega. Com ele o motorista recebe as rotas e executa tarefas direto no celular. ',
    link: 'https://www.google.com',
    image: '/images/pictures/Screen_aplicativo.svg',
    featureContent: FeatureList
  },
  {
    title: 'API',
    icon: '/images/icons/home-solutions-api.svg',
    text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. ',
    link: 'https://www.google.com',
    image: '/images/pictures/Screen_API.svg',
    featureContent: FeatureList
  }
]
