import { CSSProperties, ReactNode } from 'react'

export type BoxElementType =
  | 'div'
  | 'header'
  | 'nav'
  | 'section'
  | 'footer'
  | 'main'
  | 'ul'
  | 'li'
export interface IBox {
  children?: ReactNode
  className?: string
  style?: CSSProperties
  as?: BoxElementType
  onClick?: () => void
}

export const Box = ({
  children,
  className,
  style,
  as = 'div',
  onClick
}: IBox) => {
  const element = {
    div: (
      <div onClick={onClick} style={style} className={className}>
        {children}
      </div>
    ),
    header: (
      <header onClick={onClick} style={style} className={className}>
        {children}
      </header>
    ),
    nav: (
      <nav onClick={onClick} style={style} className={className}>
        {children}
      </nav>
    ),
    section: (
      <section onClick={onClick} style={style} className={className}>
        {children}
      </section>
    ),
    footer: (
      <footer onClick={onClick} style={style} className={className}>
        {children}
      </footer>
    ),
    main: (
      <main onClick={onClick} style={style} className={className}>
        {children}
      </main>
    ),
    ul: (
      <ul onClick={onClick} style={style} className={className}>
        {children}
      </ul>
    ),
    li: (
      <li onClick={onClick} style={style} className={className}>
        {children}
      </li>
    )
  }

  return element[as]
}
