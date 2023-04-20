import Icon from '../Icon'
import { Portal } from '../Portal'
import { Wrapper } from '../Wrapper'
import { Text } from '../Text'
import { useEffect, useState } from 'react'

import S from './styles.module.css'

export interface IToast {
  status: 'success' | 'danger' | 'warning'
  message: string
}

export interface Props extends IToast {
  onClose: () => void
}

export const Toast = ({ status, message, onClose }: Props) => {
  const [isVisible, setIsVisible] = useState(true)

  const getClassNameStyles = () => {
    const status_styles = {
      success: 'bg-primary text-white fill-white',
      danger: 'bg-danger text-white fill-white'
    }

    return `${
      isVisible ? S.Toast__SlideIn : S.Toast__SlideOut
    } fixed top-0 z-20 w-full opacity-90 ${status_styles[status]}`
  }

  let timer = null
  let timer_close_in_5_seconds = null

  const closeToast = () => {
    setIsVisible(false)

    timer = setTimeout(() => {
      onClose()
    }, 500)
  }

  useEffect(() => {
    timer_close_in_5_seconds = setTimeout(() => {
      closeToast()
    }, 5000)

    return () => {
      clearTimeout(timer)
      clearTimeout(timer_close_in_5_seconds)
    }
  }, [])

  return (
    <Portal id="toast">
      <div className={getClassNameStyles()}>
        <Wrapper noPaddingY className={`flex items-center py-3`}>
          <div className="relative flex items-center justify-center">
            <Text className="mx-6 text-center">{message}</Text>
            <button
              onClick={closeToast}
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
