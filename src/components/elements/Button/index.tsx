import Link from 'next/link'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  href?: string
  onClick?: () => void
}

export const ButtonPrimary = ({ children, onClick, href }: Props) => {
  const getClassName = () =>
    'bg-primary text-white text-sm h-12 flex justify-center w-full rounded items-center'
  return href ? (
    <Link className={getClassName()} href={href}>
      {children}
    </Link>
  ) : (
    <button className={getClassName()} onClick={onClick}>
      {children}
    </button>
  )
}
