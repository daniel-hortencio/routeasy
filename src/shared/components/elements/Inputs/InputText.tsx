'use client'

import { InputBase, InputBaseProps } from './InputBase'

type Props = InputBaseProps

export const InputText = ({ placeholder }: Props) => {
  return <InputBase type="text" placeholder={placeholder} />
}
