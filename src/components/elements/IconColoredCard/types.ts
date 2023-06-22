import { ReactNode } from 'react'
export interface IIconCardColoredProps {
  icon?: ReactNode | string
  title: string
  text: string
  accentColor: string
  center?: boolean
}
