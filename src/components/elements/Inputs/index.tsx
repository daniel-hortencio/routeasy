import { Dispatch, ReactNode, SetStateAction, useState } from 'react'
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
      type={type}
    />
  )
}

interface IInputSelectProps {
  options: Array<string>
  value: string | number
  onChoose: (event: string | number) => void
}

export const InputSelect = ({
  value,
  options,
  onChoose
}: IInputSelectProps) => {
  const [inputValue, setInputValue] = useState<string | number>(value)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleChoose = (option: string | number) => {
    setInputValue(option)
    onChoose(option)
    toggleOpen()
  }

  return (
    <div className="relative">
      <div
        onClick={toggleOpen}
        className="text-sm focus:border-none cursor-pointer focus:outline-none bg-grayscale-500 text-white py-4 px-[18px] w-full rounded"
      >
        {inputValue}
      </div>
      {isOpen && (
        <ul className="absolute mt-2 w-full h-[180px] overflow-auto top-full left-0 rounded">
          {options &&
            options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleChoose(option)}
                className="text-sm focus:outline-none cursor-pointer bg-grayscale-500 text-white  py-4 px-[18px] w-full hover:bg-grayscale-600"
              >
                {option}
              </li>
            ))}
        </ul>
      )}
    </div>
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
