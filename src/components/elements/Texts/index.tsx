'use client'

import { ReactNode } from 'react'

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
  const getClassName = () => ` ${className}`

  return <p className={getClassName()}>{children}</p>
}

interface ITitle extends Props {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const Title = ({ children, className = '', as = 'h1' }: ITitle) => {
  const getClassName = () =>
    `uppercase text-[40px] text-center font-medium ${className}`

  const element = {
    h1: <h1 className={getClassName()}>{children}</h1>,
    h2: <h2 className={getClassName()}>{children}</h2>,
    h3: <h3 className={getClassName()}>{children}</h3>,
    h4: <h4 className={getClassName()}>{children}</h4>,
    h5: <h5 className={getClassName()}>{children}</h5>,
    h6: <h6 className={getClassName()}>{children}</h6>
  }

  return element[as]
}

export const TextHighlight = ({ children }: Props) => (
  <span className="text-primary-100">{children}</span>
)
