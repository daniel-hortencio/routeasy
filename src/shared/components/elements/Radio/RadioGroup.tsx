import { Box } from '../Box'
import { Radio, IRadio } from './Radio'
import { Text } from '../Text'

interface Props extends IRadio {
  label: string
}

export const RadioGroup = ({ isSelected, onSelect, label }: Props) => {
  return (
    <Box className="flex items-center">
      <Radio isSelected={isSelected} onSelect={onSelect} />
      <Text
        as="label"
        className="ml-4 text-sm md:text-base text-custom-gray-400"
      >
        {label}
      </Text>
    </Box>
  )
}