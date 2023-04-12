'use client'

import { useState } from 'react'
import { InputBase, InputBaseProps } from './InputBase'
import Icon from '../Icon'

type Props = InputBaseProps

export const InputPassword = ({ placeholder }: Props) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <InputBase
      placeholder={placeholder}
      type={showPassword ? 'text' : 'password'}
      icon={
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="p-2 m-2 hover:fill-primary transition-all"
        >
          <Icon name={showPassword ? 'Eye' : 'EyeSlash'} size={24} />
        </button>
      }
    />
  )
}
