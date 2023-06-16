import { IIconCardColoredProps } from 'components/elements/IconColoredCard/types'
import { ReactNode } from 'react'

export interface ICardListProps {
  cards: IIconCardColoredProps[]
  title?: ReactNode | string
  subtitle?: ReactNode | string
}
