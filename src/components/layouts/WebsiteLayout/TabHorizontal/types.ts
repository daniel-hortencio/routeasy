export interface ITabHorizontalItemProps {
  title: string
  icon: string
  text?: string
  isActive?: boolean
  onClick?: () => void
}

export interface ITabsHorizontalProps {
  featureContent: ITabHorizontalItemProps[]
}
