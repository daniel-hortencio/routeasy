/* import { Roboto } from '@next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
})
 */
import { WebsiteLayout } from 'components/layouts/WebsiteLayout'
import '../styles/global.css'

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <main>
          {' '}
          <WebsiteLayout>{children}</WebsiteLayout>
        </main>
      </body>
    </html>
  )
}
