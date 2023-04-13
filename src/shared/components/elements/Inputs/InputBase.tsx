'use client'

import { ReactNode } from 'react'

export interface InputBaseProps {
  placeholder?: string
  type?: 'text' | 'password'
  icon?: ReactNode
  className?: string
}

export const InputBase = ({
  placeholder,
  type = 'text',
  icon,
  className
}: InputBaseProps) => {
  return (
    <div
      className={`bg-white flex items-center h-12 justify-between rounded-full overflow-hidden relative ${className}`}
    >
      <input
        placeholder={placeholder}
        type={type}
        className={`w-full placeholder-custom-gray-400 pl-6 pr-14 h-full text-custom-gray-500 `}
        autoComplete="off"
      />
      {icon && (
        <div className="absolute h-full right-0 flex items-center">{icon}</div>
      )}
    </div>
  )
}
