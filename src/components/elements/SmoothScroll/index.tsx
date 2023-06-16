import { ReactNode } from 'react'

interface SmoothScroolProps {
  children: ReactNode
  anchorHref: string
  className?: string
}

export const SmoothScroll = ({
  children,
  anchorHref,
  className
}: SmoothScroolProps) => {
  return (
    <a href={anchorHref} className={className}>
      {children}
    </a>
  )
}

interface SmoothScroolAnchorPointProps {
  id: string
}
export const SmoothScrollAnchorPoint = ({
  id
}: SmoothScroolAnchorPointProps) => (
  <div className="-translate-y-80" id={`${id}`} />
)
