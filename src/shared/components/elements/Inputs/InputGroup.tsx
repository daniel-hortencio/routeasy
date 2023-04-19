'use client'

import { ReactNode } from 'react'

interface Props {
  label: string
  children: ReactNode
  buttonText?: string
  buttonOnClick?: () => void
}

export const InputGroup = ({
  label,
  children,
  buttonText,
  buttonOnClick
}: Props) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <label className=" font-semibold text-custom-gray-300">{label}</label>
        {buttonText && (
          <button
            onClick={buttonOnClick}
            className="text-primary hover:text-primary-dark transition-all"
            type="button"
          >
            {buttonText}
          </button>
        )}
      </div>
      {children}
    </div>
  )
}
