import { ITabHorizontalItemProps } from './../TabHorizontal/types'
import { IRoutingContentProps } from './types'

export const FeatureList: ITabHorizontalItemProps[] = [
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

export const FeatureList_two: ITabHorizontalItemProps[] = [
  {
    title: 'Chat direto com o motorista',
    icon: '/images/icons/icon-chat.svg',
    text: 'Monitore todas as rotas em tempo real e utilize o chat com o motorista para solucionar ocorrências com mais agilidade.'
  },
  {
    title: 'Tracking para o cliente',
    icon: '/images/icons/icon-map.svg',
    text: 'Mantenha seus clientes informados sobre cada etapa da entrega! Com o rastreamento em tempo real, sua empresa garante mais transparência e confiabilidade.'
  },
  {
    title: 'Alertas inteligentes para ocorrências',
    icon: '/images/icons/icon-alert.svg',
    text: 'Receba alertas em tempo real para uma gestão por exceção. Com base em dados sempre atualizados, os alertas permitem ajustes de rota para minimizar falhas e aumentar a eficiência.'
  },
  {
    title: 'Proof of delivery',
    icon: '/images/icons/icon-file.svg',
    text: 'Canhoto digital para comprovação de entrega por meio de foto, vídeos e/ou assinatura. Automatize a verificação de dados e documentos com a tecnologia de OCR (Reconhecimento Óptico de Caracteres).'
  }
]

export const FeatureList_three: ITabHorizontalItemProps[] = [
  {
    title: 'Roteirização programada automaticamente ',
    icon: '/images/icons/icon-route.svg',
    text: 'Conte com uma roteirização 100% automatizada. Ao receber os pedidos do sistema, o Maestro planeja as melhores rotas de acordo com as parametrizações pré-estabelecidas.'
  },
  {
    title: 'Seleção de frota própria ou terceirizada',
    icon: '/images/icons/icon-vehicle.png',
    text: 'Tenha total aproveitamento da frota disponível, onde ela estiver. Atribua de pedidos para frota própria ou crowdshipping, de forma otimizada e unificada.'
  },
  {
    title: 'Despacho automático para o motorista',
    icon: '/images/icons/icon-user.svg',
    text: 'Tenha uma seleção inteligente de frota, considerando restrições operacionais e características específicas do pedidos.'
  }
]

export const FeatureList_four: ITabHorizontalItemProps[] = [
  {
    title: 'Chat direto com a operação',
    icon: '/images/icons/icon-chat.svg',
    text: 'Elimine o WhatsApp da sua operação. Nosso aplicativo tem chat em tempo real para permitir o contato constante com os motoristas em rota, garantindo uma comunicação instantânea e efetiva.'
  },
  {
    title: 'Integração com Google Maps e Waze',
    icon: '/images/icons/icon-map.svg',
    text: 'A flexibilidade que sua operação precisa! O motorista pode usar Google Maps ou Waze para seguir o trajeto determinado.'
  },
  {
    title: 'Comprovação por foto, vídeo e assinatura',
    icon: '/images/icons/icon-camera.svg',
    text: 'Garanta mais segurança no processo de entrega, com POD totalmente digital e com validade jurídica, utilizando  foto, vídeo, assinatura e outros campos personalizados.'
  },
  {
    title: 'Aceite da rota direto no app',
    icon: '/images/icons/icon-route2.svg',
    text: 'Com o aplicativo, o motorista recebe a rota direto no celular, garantindo mais agilidade e conformidade aos processos.'
  }
]

export const FeatureList_five: ITabHorizontalItemProps[] = [
  {
    title: 'Gestão de pedidos e otimização de rotas',
    icon: '/images/icons/icon-vehicle.png',
    text: "Integre ordens de serviços individuais ou agrupadas, com requisições completas para a gestão de pedidos e aprimore sua logística. Escolha a melhor solução, utilize nossa interface ou consuma de forma flexível nossas API's. Incorpore soluções robustas para planejamento de serviços, rotas, capacidades e controle de custos. Personalize agrupamentos, refine endereços e maximize sua eficiência."
  },
  {
    title: 'Gestão de entregas e torre de controle',
    icon: '/images/icons/home-solutions-gestao-de-entrega.svg',
    text: 'Aperfeiçoe a gestão de entregas com um sistema de integração completo. Importe rotas planejadas, gerencie motoristas, rotas e tenha controle total sobre o progresso da operação. Ganhe visibilidade e encante o cliente integrando-se às poderosas soluções RoutEasy.'
  },
  {
    title: 'Webhook',
    icon: '/images/icons/code.svg',
    text: 'Mantenha atualizada a aplicação externa com os eventos de rotas e serviços. Receba de forma personalizada informações de planejamento de rotas e gestão de entregas. Aprimore a visibilidade operacional com esse recurso RoutEasy de integração de retorno e impulsione seu negócio.'
  }
]

export const RoutingList: IRoutingContentProps[] = [
  {
    title: 'Roteirização',
    icon: '/images/icons/home-solutions-routeirizacao.svg',
    text: 'O algoritmo de roteirização da RoutEasy tem a maior capacidade de processamento do mercado, o que significa roteirizar mais pontos em menos tempo. Otimize a utilização de recursos, minimize custos e maximize a eficiência da sua operação!',
    link: '/solucoes/roteirizacao',
    image: '/images/pictures/Screen_roteirizacao.svg',
    featureContent: FeatureList
  },
  {
    title: 'Gestão de entregas',
    icon: '/images/icons/home-solutions-gestao-de-entrega.svg',
    text: 'Acompanhe tudo o que acontece em tempo real na sua operação. Em uma plataforma amigável, você analisa todas as métricas que precisa e toma as decisões certas na hora certa.',
    link: '/solucoes/roteirizacao',
    image: '/images/pictures/Screen_gestao.svg',
    featureContent: FeatureList_two
  },
  {
    title: 'Automação',
    icon: '/images/icons/home-solutions-automacao.svg',
    text: 'Ellimine os processos manuais para ganhar mais agilidade e eficiência. Com regras e parâmetros pré definidos, o Maestro automatiza todo o fluxo de trabalho, possibilitando o same day dellivery e as coletas dinâmicas.',
    link: '/solucoes/roteirizacao',
    image: '/images/gifs/Gif_Automacao.gif',
    featureContent: FeatureList_three
  },
  {
    title: 'Aplicativo',
    icon: '/images/icons/home-solutions-aplicativo.svg',
    text: 'O aplicativo garante a integração de todas as etapas do processo de entrega. Com ele o motorista recebe as rotas e executa tarefas direto no celular. ',
    link: '/solucoes/roteirizacao',
    image: '/images/pictures/Screen_aplicativo.svg',
    featureContent: FeatureList_four
  },
  {
    title: 'API',
    icon: '/images/icons/home-solutions-api.svg',
    text: "Potencialize sua logística integrando com as API's RoutEasy. Alcance novos patamares de escalabilidade e desempenho! Otimize suas rotas, minimize custos e acelere entregas. Aproveite a infraestrutura robusta e o suporte especializado.",
    link: '/solucoes/roteirizacao',
    image: '/images/pictures/Screen_API_.svg',
    featureContent: FeatureList_five
  }
]
