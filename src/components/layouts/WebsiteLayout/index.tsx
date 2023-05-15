import { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

interface Props {
  children: ReactNode
}

export const WebsiteLayout = ({ children }: Props) => {
  return (
    <div className="bg-background">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
