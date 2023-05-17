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

export const ButtonSecondary = ({
  children,
  onClick,
  href
}: Omit<IButtonBase, 'className'>) => {
  return (
    <ButtonBase
      className="bg-transparent border-2 border-primary text-primary h-12 flex justify-center w-full rounded items-center hover:bg-primary hover:text-white transition-all"
      onClick={onClick}
      href={href}
    >
      {children}
    </ButtonBase>
  )
}
