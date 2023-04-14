import { Box, IBox } from '../Box'

interface ICard extends IBox {
  shadow?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

export const Card = ({
  shadow = 'md',
  as,
  children,
  className,
  onClick,
  style
}: ICard) => {
  const getClassName = () => {
    let class_name = ``
    class_name += `bg-white shadow-${shadow} ${className}`

    return class_name
  }

  return (
    <Box
      {...{ as, onClick, style }}
      className={`bg-white shadow ${getClassName()}`}
    >
      {children}
    </Box>
  )
}
