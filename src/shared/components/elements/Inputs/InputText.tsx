'use client'

import { InputBase, InputBaseProps } from './InputBase'

type Props = InputBaseProps

export const InputText = ({ placeholder, value, onChange }: Props) => {
  return (
    <InputBase
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}
