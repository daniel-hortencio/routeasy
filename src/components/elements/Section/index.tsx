import { ElementType, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  title?: ReactNode
  subtitle?: string
  asTag?: ElementType
}

export const Section = ({
  children,
  className,
  title,
  subtitle,
  asTag: Tag = 'section'
}: Props) => {
  return (
    <Tag className={className}>
      <div className="px-5 w-full max-w-6xl mx-auto">
        {title && <div className="mb-2">{title}</div>}
        {subtitle && <p className="mb-10 md:mb-16 text-center">{subtitle}</p>}
        {children}
      </div>
    </Tag>
  )
}
