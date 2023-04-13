import Link from 'next/link'

interface Props {
  text: string | JSX.Element
  size?: 'small' | 'large'
  height?: 'low' | 'high'
  color?: 'primary' | 'secondary' | 'danger'
  onClick?: () => void
  className?: string
  as?: 'button' | 'link'
  href?: string
}

export const Button = ({
  text,
  size = 'small',
  color = 'secondary',
  height = 'high',
  onClick,
  className,
  as = 'button',
  href = '/'
}: Props) => {
  function getClassName() {
    const color_schemes = {
      primary: 'bg-primary hover:bg-primary-dark text-white fill-white',
      secondary:
        'bg-primary-light text-primary fill-primary hover:bg-primary-dark hover:fill-white hover:text-white',
      danger: 'bg-danger hover:bg-danger-dark text-white'
    }

    let classNameScheme =
      ' rounded-full flex justify-center items-center transition-all flex-nowrap'

    classNameScheme += ` ${color_schemes[color]}`
    classNameScheme += ` ${height === 'high' ? 'h-12' : 'h-8 text-sm'}`
    classNameScheme += ` ${size === 'small' ? 'w-12' : 'w-full'}`
    classNameScheme += ` ${className}`

    return classNameScheme
  }

  return as === 'button' ? (
    <button className={getClassName()} onClick={onClick}>
      {text}
    </button>
  ) : (
    <Link href={href}>
      <button className={getClassName()}>{text}</button>
    </Link>
  )
}
