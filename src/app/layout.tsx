import { Open_Sans } from '@next/font/google'

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
      <body className={open_sans.className}>
        <main className="bg-grayscale-700 min-h-screen">{children}</main>
      </body>
    </html>
  )
}
