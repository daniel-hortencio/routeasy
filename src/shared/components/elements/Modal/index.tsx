'use client'

import { Fragment, ReactNode, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Box } from '../Box'
import { Text } from '../Text'
import Icon from '../Icon'

interface Props {
  title?: string
  description?: string
  isOpen: boolean
  onClose: () => void
  showButtonClose?: boolean
  headerAlign?: 'left' | 'center' | 'right'
  children?: ReactNode
  footer?: ReactNode
  positionX?: 'left' | 'center' | 'right'
  className?: string
  isCustom?: boolean
}

export default function Modal({
  title,
  isOpen,
  headerAlign = 'left',
  onClose,
  showButtonClose = true,
  description,
  children,
  footer,
  positionX = 'center',
  className = '',
  isCustom = false
}: Props) {
  const cancelButtonRef = useRef(null)

  const getStyle = () => {
    const positions_x = {
      left: 'justify-start',
      center: 'justify-center',
      right: 'justify-end'
    }

    return `flex min-h-full items-end ${positions_x[positionX]} p-4 text-center items-center md:p-5`
  }

  const getClassName = () => {
    return `relative transform overflow-hidden bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg md:max-w-screen-md rounded-3xl ${className}`
  }

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-20"
        initialFocus={cancelButtonRef}
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity backdrop-blur-xs" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className={getStyle()}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className={getClassName()}>
                {isCustom ? (
                  <Box>
                    {children}
                    {showButtonClose && (
                      <button
                        type="button"
                        className="absolute top-5 right-5 p-0.5 fill-custom-gray-300 hover:fill-primary transition-all"
                        onClick={onClose}
                        ref={cancelButtonRef}
                      >
                        <Icon name="X" />
                      </button>
                    )}
                  </Box>
                ) : (
                  <Box className="px-8">
                    <Dialog.Title as="h3">
                      {showButtonClose && (
                        <button
                          type="button"
                          className="absolute top-5 right-5 p-0.5 fill-custom-gray-300 hover:fill-primary transition-all"
                          onClick={onClose}
                          ref={cancelButtonRef}
                        >
                          <Icon name="X" />
                        </button>
                      )}
                      <Box as="header" className="pt-8">
                        {title && (
                          <Text
                            className={`font-bold text-2xl mb-4 text-${headerAlign}`}
                          >
                            {title}
                          </Text>
                        )}

                        {description && (
                          <Text
                            className={`text-${headerAlign} text-custom-gray-400`}
                          >
                            {description}
                          </Text>
                        )}
                      </Box>
                    </Dialog.Title>

                    {children && <Box className="pt-6 h-full">{children}</Box>}
                  </Box>
                )}
                {footer && (
                  <Box
                    as="footer"
                    className="p-8 border-t-1 border-custom-gray-200"
                  >
                    {footer}
                  </Box>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
