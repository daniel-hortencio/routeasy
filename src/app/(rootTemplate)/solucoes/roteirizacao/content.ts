import { ITabHorizontalItemProps } from 'components/layouts/WebsiteLayout/TabHorizontal/types'
import { ICardFeatureProps } from 'components/elements/CardFeature/types'

export const FeatureList: ITabHorizontalItemProps[] = [
  {
    title: 'Apólice de seguros',
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

export const listFeaturesCard: ICardFeatureProps[] = [
  {
    title: 'Velocidade',
    text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates. ',
    icon: 'BiSolidZap'
  },
  {
    title: 'Segurança',
    text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates. ',
    icon: 'BiSolidShield'
  },
  {
    title: 'Eficiência',
    text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates. ',
    icon: 'BiAbacus'
  }
]
