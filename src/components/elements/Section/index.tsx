import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  title?: ReactNode
  subtitle?: string
}

export const Section = ({ children, className, title, subtitle }: Props) => {
  return (
    <section className={className}>
      <div className="px-5 w-full max-w-6xl mx-auto">
        {title && <div className="mb-2">{title}</div>}
        {subtitle && <p className="mb-10 md:mb-16 text-center">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}
