const routes = [
  { label: 'Início', href: '/' },
  { label: 'Contato', href: '/contato' },
  {
    label: 'Soluções',
    /*  href: '', */
    sub_items: [
      {
        label: 'Todas soluções',
        href: '/solucoes/'
      },
      { label: 'Roteirizador', href: '/solucoes/' },
      { label: 'Api', href: '/solucoes' }
    ]
  }
]

export default routes
