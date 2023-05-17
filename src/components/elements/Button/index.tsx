import Link from 'next/link'
import { ButtonBase, IButtonBase } from './ButtonBase'

export const ButtonPrimary = ({
  children,
  onClick,
  href
}: Omit<IButtonBase, 'className'>) => {
  return (
    <ButtonBase
      className="bg-primary text-white text-sm h-12 flex justify-center w-full rounded items-center"
      onClick={onClick}
      href={href}
    >
      {children}
    </ButtonBase>
  )
}
