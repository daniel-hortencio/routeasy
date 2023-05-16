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
        {title && (
          <div className="uppercase mb-2 text-[40px] text-center">{title}</div>
        )}
        {subtitle && <p className="mb-16 text-center">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}
