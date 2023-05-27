import { ReactNode } from 'react'

import { Header } from './Header'

interface Props {
  children: ReactNode
}

export const DemonstrationLayout = ({ children }: Props) => {
  return (
    <div className="relative">
      <Header />
      <main>{children}</main>
    </div>
  )
}
