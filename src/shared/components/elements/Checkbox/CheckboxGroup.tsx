import { Box } from '../Box'
import { Checkbox, ICheckbox } from './Checkbox'
import { Text } from '../Text'

interface Props extends ICheckbox {
  label: string
}

export const CheckboxGroup = ({ isChecked, onCheck, label }: Props) => {
  return (
    <Box className="flex items-center">
      <Checkbox isChecked={isChecked} onCheck={onCheck} />
      <Text
        as="label"
        className="ml-4 text-sm md:text-base text-custom-gray-400"
      >
        {label}
      </Text>
    </Box>
  )
}
