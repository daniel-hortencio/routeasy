import { Dispatch, ReactNode, SetStateAction } from 'react'
import { mask } from 'utils/masks'

interface InputProps {
  value: string
  onChange: Dispatch<SetStateAction<string>>
  placeholder: string
  type?: 'text' | 'tel'
}

export const InputText = ({
  value,
  onChange,
  placeholder,
  type
}: InputProps) => {
  return (
    <input
      className="text-sm focus:border-none focus:outline-none bg-grayscale-500 text-white placeholder:text-grayscale-200 py-4 px-[18px] w-full rounded"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      type=""
    />
  )
}

export const InputNumber = ({ value, onChange, placeholder }: InputProps) => {
  return (
    <InputText
      type="tel"
      value={value}
      placeholder={placeholder}
      onChange={(value: string) => {
        onChange(mask.onlyNumbers(value))
      }}
    />
  )
}

export const InputPhone = ({ value, onChange, placeholder }: InputProps) => {
  return (
    <InputText
      type="tel"
      value={value}
      placeholder={placeholder}
      onChange={(value: string) => {
        onChange(mask.phoneNumber(value))
      }}
    />
  )
}

interface InputGroupProps {
  label: string
  error?: string
  children: ReactNode
  className?: string
}

export const InputGroup = ({
  label,
  error,
  children,
  className
}: InputGroupProps) => (
  <div className={className}>
    <div className="mb-1">
      <label className="text-sm">{label}</label>
      {error && <span className="ml-1 text-sm text-yellow-500">{error}</span>}
    </div>
    {children}
  </div>
)
