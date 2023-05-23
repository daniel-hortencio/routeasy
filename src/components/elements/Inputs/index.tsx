import { Dispatch, ReactNode, SetStateAction } from 'react'

interface InputProps {
  value: string
  onChange: Dispatch<SetStateAction<string>>
  placeholder: string
}

export const InputText = ({ value, onChange, placeholder }: InputProps) => {
  return (
    <input
      className="text-sm focus:border-none focus:outline-none bg-grayscale-500 text-white placeholder:text-grayscale-200 py-4 px-[18px] w-full rounded"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
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
