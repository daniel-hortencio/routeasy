const routes = (pathname: string) => [
  { label: 'Início', href: '/' },
  {
    label: 'Soluções',
    sub_items: [
      {
        label: 'Todas soluções',
        href: '/solucoes/'
      },
      { label: 'Roteirizador', href: '/solucoes/routeirizacao' },
      { label: 'Api', href: '/solucoes/api' },
      { label: 'Onboarding', href: '/solucoes/onboarding' }
    ],
    isActive: pathname?.startsWith('/solucoes')
  },
  {
    label: 'Conteúdo',
    sub_items: [
      {
        label: 'Blog',
        href: 'https://routeasy.com.br/content/'
      },
      {
        label: 'RoutingAcademy',
        href: 'https://routeasy.com.br/content/routingacademy/'
      },
      {
        label: 'Cases',
        href: 'https://routeasy.com.br/content/cases/'
      },
      {
        label: 'Materiais',
        href: 'https://routeasy.com.br/content/materiais-gratuitos/'
      }
    ]
  },
  {
    label: 'Sobre nós',
    sub_items: [
      {
        label: 'Sobre nós',
        href: '/sobre-nos/'
      },
      { label: 'Trabalhe conosco', href: '/trabalhe-conosco/' }
    ]
  },
  { label: 'Contato', href: '/contato' }
]

export default routes
