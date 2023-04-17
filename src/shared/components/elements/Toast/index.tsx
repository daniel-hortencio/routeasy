import Icon from '../Icon'
import { Portal } from '../Portal'
import { Wrapper } from '../Wrapper'
import { Text } from '../Text'
import { useEffect } from 'react'

export interface IToast {
  status: 'success' | 'danger' | 'warning'
  message: string
}

export interface Props extends IToast {
  onClose: () => void
}

export const Toast = ({ status, message, onClose }: Props) => {
  const getClassNameStyles = () => {
    const status_styles = {
      success: 'bg-primary text-white fill-white',
      danger: 'bg-danger text-white fill-white'
    }

    return `fixed top-0 z-20 w-full ${status_styles[status]}`
  }

  useEffect(() => {
    const timer = setTimeout(() => onClose(), 5000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <Portal>
      <div className={getClassNameStyles()}>
        <Wrapper noPaddingY className="flex items-center h-12">
          <div className="relative h-6 flex items-center justify-center">
            <Text className="mx-8">{message}</Text>
            <button
              onClick={onClose}
              className="opacity-50 absolute right-0 top-0 h-full w-6 flex items-center justify-center"
            >
              <Icon name="X" />
            </button>
          </div>
        </Wrapper>
      </div>
    </Portal>
  )
}
