import { Box } from '../Box'
import { Checkbox, ICheckbox } from './Checkbox'
import { Text } from '../Text'

interface Props extends ICheckbox {
  label: string
  name: string
}

export const CheckboxGroup = ({ name, label }: Props) => {
  return (
    <Box className="flex items-center">
      <Checkbox name={name} />
      <Text
        as="label"
        className="ml-4 text-sm md:text-base text-custom-gray-400"
      >
        {label}
      </Text>
    </Box>
  )
}
