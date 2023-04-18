import { Box } from '../Box'
import Icon from '../Icon'

export interface ICheckbox {
  isChecked: boolean
  onCheck: () => void
}

export const Checkbox = ({ isChecked, onCheck }: ICheckbox) => {
  return (
    <button
      onClick={onCheck}
      className="border-1 border-custom-gray-100 rounded w-5 h-5 shadow-md cursor-pointer flex items-center justify-center"
    >
      {isChecked && (
        <Box className="fill-primary">
          <Icon name="Check" size={12} />
        </Box>
      )}
    </button>
  )
}
