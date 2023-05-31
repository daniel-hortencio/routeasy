export interface IRoutingCardProps {
  title: string
  icon: string
  isActive: boolean
  onClick: () => void
}

export interface IRoutingContentProps {
  title: string
  icon?: string
  text: string
  link: string
  image: string
}

export interface IFeatureProps {
  title: string
  icon: string
  text?: string
  isActive?: boolean
  onClick?: () => void
}
