import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const WebsiteLayout = ({ children }: Props) => {
  return (
    <div className="bg-background">
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  )
}
