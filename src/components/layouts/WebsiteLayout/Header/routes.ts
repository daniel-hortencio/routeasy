const routes = [
  { label: 'Início', href: '/' },
  {
    label: 'Soluções',
    sub_items: [
      {
        label: 'Todas soluções',
        href: '/solucoes/'
      },
      { label: 'Roteirizador', href: '/solucoes/' },
      { label: 'Api', href: '/solucoes/api' }
    ]
  },
  { label: 'Sobre', href: '/sobre-nos' },
  { label: 'Contato', href: '/contato' }
]

export default routes
