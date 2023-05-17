import Link from 'next/link'
import { ReactNode } from 'react'

export interface IButtonBase {
  children: ReactNode
  href?: string
  onClick?: () => void
  className: string
}

export const ButtonBase = ({
  children,
  onClick,
  href,
  className
}: IButtonBase) => {
  return href ? (
    <Link className={className} href={href}>
      {children}
    </Link>
  ) : (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}
