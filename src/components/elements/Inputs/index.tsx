import { Dispatch, ReactNode, SetStateAction } from 'react'

interface InputProps {
  value: string
  onChange: Dispatch<SetStateAction<string>>
}

export const InputText = ({ value, onChange }: InputProps) => {
  return (
    <input
      className="focus:border-none focus:outline-none bg-grayscale-500 text-white placeholder:text-grayscale-200 py-4 px-[18px] rounded"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  )
}

interface InputGroupProps {
  label: string
  error?: string
  children: ReactNode
}

export const InputGroup = ({ label, error, children }: InputGroupProps) => (
  <div>
    <div>
      <label>{label}</label>
      {error && <span className="ml-1">{error}</span>}
    </div>
    {children}
  </div>
)
