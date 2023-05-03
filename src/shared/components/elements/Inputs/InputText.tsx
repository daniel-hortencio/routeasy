'use client'

import { InputBase, InputBaseProps } from './InputBase'

type Props = InputBaseProps

export const InputText = ({
  placeholder,
  value,
  onChange,
  name,
  required
}: Props) => {
  return (
    <InputBase
      name={name}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  )
}
