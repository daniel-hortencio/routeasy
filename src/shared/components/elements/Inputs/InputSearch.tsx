'use client'

import { InputBaseProps } from './InputBase'
import Icon from '../Icon'
import { FormEvent, useState } from 'react'
import { Box } from '../Box'
import { Card } from '../Card'

interface Props extends Omit<InputBaseProps, 'text'> {
  variant?: 'fixed' | 'collapsible'
  onSubmit: (e: FormEvent) => void
}

export const InputSearch = ({
  placeholder,
  variant = 'fixed',
  value,
  onChange,
  onSubmit
}: Props) => {
  const [collapsed, setCollapsed] = useState(true)

  return (
    <Box
      as="form"
      onSubmit={onSubmit}
      className={`relative flex justify-end flex-auto`}
    >
      <Card
        className={`flex items-center h-12 justify-between rounded-full overflow-hidden relative text-custom-gray-400 fill-primary focus-within:fill-primary-dark transition-all ${
          variant === 'collapsible' && collapsed ? 'w-12' : 'w-full'
        }`}
      >
        <input
          placeholder={placeholder}
          value={value}
          onBlur={() => {
            if (variant === 'collapsible' && value === '') setCollapsed(true)
          }}
          onChange={e => onChange(e.target.value)}
          className={`w-full placeholder-custom-gray-400 pl-6 pr-14 h-full text-custom-gray-500 `}
          autoComplete="off"
        />
        <div className="absolute h-full right-0 flex items-center">
          <button
            type={value ? 'submit' : 'button'}
            className="p-1.5 m-2  transition-all "
            onClick={() => setCollapsed(false)}
          >
            <Icon name="MagnifyingGlass" size={24} />
          </button>
        </div>
      </Card>
    </Box>
  )
}
