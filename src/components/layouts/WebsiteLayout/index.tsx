import { ReactNode } from 'react'

import { Header } from './Header'
import { Footer } from './Footer'

interface Props {
  children: ReactNode
}

export const WebsiteLayout = ({ children }: Props) => {
  return (
    <div className="bg-grayscale-700 relative">
      <div
        className="absolute w-full h-screen"
        style={{
          background:
            'linear-gradient(210deg, #2D3051 0%, rgba(13, 14, 24, 0) 50%)',
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right bottom'
        }}
      />
      <Header />
      <main /* className="pt-[124px] lg:pt-[88px]" */>{children}</main>
      <Footer />
    </div>
  )
}
