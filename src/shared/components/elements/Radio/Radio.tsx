import { useFormContext } from 'react-hook-form'
import { Box } from '../Box'
import { Dispatch, SetStateAction, useEffect, useRef } from 'react'

export interface IRadio {
  group: string
  value: string
  isSelected?: boolean
  onChange?: Dispatch<SetStateAction<string>>
}

export const Radio = ({ isSelected, value, group, onChange }: IRadio) => {
  const { register, unregister } = useFormContext()
  const ref = useRef()

  useEffect(() => {
    return unregister(group)
  }, [])

  return (
    <div
      className={`relative border-1 border-custom-gray-100 rounded-full w-5 h-5 shadow-md cursor-pointer flex items-center justify-center`}
    >
      {isSelected && (
        <Box className={`bg-primary w-3 h-3 top-1 left-1 rounded-full`} />
      )}

      <input
        type="radio"
        value={value}
        ref={ref}
        {...register(group)}
        className={`accent-primary w-full h-full cursor-pointer absolute top-0 left-0 opacity-0`}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  )
}
