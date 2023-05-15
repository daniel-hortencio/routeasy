import { ReactNode } from 'react'
import { Header } from './Header'

interface Props {
  children: ReactNode
}

export const WebsiteLayout = ({ children }: Props) => {
  return (
    <div className="bg-background">
      <Header />
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  )
}
