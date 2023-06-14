import Link from 'next/link'
import { ReactNode } from 'react'

export interface IButtonBase {
  children: ReactNode
  href?: string
  onClick?: () => void
  className: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export const ButtonBase = ({
  children,
  onClick,
  href,
  className,
  type = 'button',
  disabled
}: IButtonBase) => {
  return href ? (
    <Link className={className} href={href}>
      {children}
    </Link>
  ) : (
    <button
      className={className}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
