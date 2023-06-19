import { ITabHorizontalItemProps } from '../TabHorizontal/types'

export interface IRoutingCardProps {
  title: string
  icon?: string
  isActive: boolean
  onClick: () => void
}
export interface IRoutingContentProps {
  title: string
  icon?: string
  text: string
  link: string
  image: string
  featureContent: ITabHorizontalItemProps[]
}

export interface IFeatureCardListProps {
  featureContent: ITabHorizontalItemProps[]
}
