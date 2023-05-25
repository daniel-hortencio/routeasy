'use client'

import { ReactNode } from 'react'
import { Open_Sans } from '@next/font/google'

const open_sans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800']
})

interface Props {
  children: ReactNode
  className?: string
}

export const Text = ({ children, className = '' }: Props) => {
  const getClassName = () => `${open_sans.className} ${className}`

  return <p className={getClassName()}>{children}</p>
}
