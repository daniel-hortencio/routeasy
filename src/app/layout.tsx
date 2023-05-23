import { Open_Sans } from '@next/font/google'

import { WebsiteLayout } from 'components/layouts/WebsiteLayout'
import '../styles/global.css'

const open_sans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800']
})

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <main className={open_sans.className}>
          {' '}
          <WebsiteLayout>{children}</WebsiteLayout>
        </main>
      </body>
    </html>
  )
}
