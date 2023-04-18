import { Box } from '../Box'
import Icon from '../Icon'

export interface IRadio {
  isSelected: boolean
  onSelect: () => void
}

export const Radio = ({ isSelected, onSelect }: IRadio) => {
  return (
    <button
      onClick={onSelect}
      className="border-1 border-custom-gray-100 rounded-full w-5 h-5 shadow-md cursor-pointer flex items-center justify-center"
    >
      {isSelected && <Box className="bg-primary w-3 h-3 rounded-full" />}
    </button>
  )
}
