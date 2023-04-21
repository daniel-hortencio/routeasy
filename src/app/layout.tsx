'use client'

import { Roboto } from '@next/font/google'

import '../shared/styles/globals.css'
import { ToastProvider } from '../shared/contexts/Toast/ToastProvider'
import { ModalProvider } from '../shared/contexts/Modal'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
})

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={roboto.className}>
        <ToastProvider>
          <ModalProvider>
            <main>{children}</main>
          </ModalProvider>
        </ToastProvider>
        <div id="toast" />
      </body>
    </html>
  )
}
