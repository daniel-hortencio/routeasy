import { useFormContext } from 'react-hook-form'
import { Box } from '../Box'
import Icon from '../Icon'
import { useEffect, useState } from 'react'

export interface ICheckbox {
  name: string
  defaultCheck?: boolean
}

export const Checkbox = ({ name, defaultCheck }: ICheckbox) => {
  const { register, unregister, setValue } = useFormContext()
  const [isChecked, setIsChecked] = useState(defaultCheck)

  useEffect(() => {
    setValue(name, defaultCheck)

    return unregister(name)
  }, [])

  return (
    <div className="relative border-1 border-custom-gray-100 rounded w-5 h-5 shadow-md cursor-pointer">
      {isChecked && (
        <Box className="flex items-center justify-center fill-primary w-full h-full absolute top-0 left-0">
          <Icon name="Check" size={12} />
        </Box>
      )}

      <input
        type="checkbox"
        {...register(name)}
        onChange={e => setIsChecked(e.target.checked)}
        className="w-full h-full absolute top-0 left-0 cursor-pointer opacity-0"
      />
    </div>
  )
}
