'use client'

import { ReactNode, useState } from 'react'

export interface InputBaseProps {
  children: ReactNode
}

export const SelectBase = ({ children }: InputBaseProps) => {
  return (
    <div
      className={`bg-white flex items-center h-12 justify-between rounded-full w-min`}
    >
      {children}
    </div>
  )
}
