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
      className="text-sm border border-transparent focus:border-primary-50 hover:border-primary focus:outline-none bg-grayscale-500 focus:bg-grayscale-400 text-white placeholder:text-grayscale-200 py-4 px-[18px] w-full rounded"
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
  placeholder: string
}

export const InputSelect = ({
  value,
  options,
  onChoose,
  placeholder
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
        className={
          isOpen
            ? 'text-sm focus:border-none cursor-pointer focus:outline-none border border-primary-50 bg-grayscale-400 text-white py-[10px] px-[18px] w-full rounded'
            : 'text-sm border border-transparent hover:border-primary focus:border-none cursor-pointer focus:outline-none bg-grayscale-500 text-white py-[10px] px-[18px] w-full rounded'
        }
      >
        <div className={inputValue ? 'py-[6px]' : 'py-4'}>
          {inputValue || (
            <span className="h-0 block -translate-y-2.5 text-grayscale-200">
              {placeholder}
            </span>
          )}
        </div>
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
    <div className="mb-1 flex flex-col items-start">
      <label className="text-sm text-left mr-auto">{label}</label>
    </div>
    {children}
    {error && <span className="ml-1 text-sm text-[#FF6C54]">{error}</span>}
  </div>
)
