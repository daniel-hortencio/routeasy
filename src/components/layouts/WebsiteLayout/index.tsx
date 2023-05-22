import { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

interface Props {
  children: ReactNode
}

export const WebsiteLayout = ({ children }: Props) => {
  return (
    <div className="bg-grayscale-700">
      <Header />
      <main /* className="pt-[124px] lg:pt-[88px]" */>{children}</main>
      <Footer />
    </div>
  )
}
