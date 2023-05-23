'use client'

import { ReactNode } from 'react'
import { Poppins, Open_Sans } from '@next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
})

const open_sans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800']
})

interface Props {
  children: ReactNode
  className?: string
  /*   as?:
    | 'p'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'strong'
    | 'small'
    | 'span'
    | 'label' */
}

export const Text = ({ children, className = '' }: Props) => {
  const getClassName = () => `${open_sans.className} ${className}`

  return <p className={getClassName()}>{children}</p>
}

interface ITitle extends Props {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const Title = ({
  children,
  className = '',
  as: Element = 'h1'
}: ITitle) => {
  const getClassName = () =>
    `${poppins.className} uppercase text-[40px] text-center font-medium ${className}`

  return <Element className={`${getClassName()}`}>{children}</Element>
}

export const TextHighlight = ({ children }: Props) => (
  <span className="text-primary-100">{children}</span>
)
