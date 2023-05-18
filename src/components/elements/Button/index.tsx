import { ButtonBase, IButtonBase } from './ButtonBase'

export const ButtonPrimary = ({
  children,
  onClick,
  href
}: Omit<IButtonBase, 'className'>) => {
  return (
    <ButtonBase
      className="bg-primary-100 text-white text-sm h-12 flex justify-center w-full rounded items-center"
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
      className="bg-transparent border-2 border-primary-100 text-primary-100 h-12 flex justify-center w-full rounded items-center hover:bg-primary-100 hover:text-white transition-all"
      onClick={onClick}
      href={href}
    >
      {children}
    </ButtonBase>
  )
}

export const ButtonWhite = ({
  children,
  onClick,
  href
}: Omit<IButtonBase, 'className'>) => {
  return (
    <ButtonBase
      className="rounded w-64 bg-grayscale-50 text-grayscale-300 h-10 text-sm flex items-center justify-center mx-auto font-semibold"
      onClick={onClick}
      href={href}
    >
      {children}
    </ButtonBase>
  )
}
