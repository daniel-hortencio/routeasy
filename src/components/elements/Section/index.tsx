import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export const Section = ({ children, className }: Props) => {
  return (
    <section className={className}>
      <div className="border-2 px-5 w-full max-w-6xl mx-auto">{children}</div>
    </section>
  )
}
