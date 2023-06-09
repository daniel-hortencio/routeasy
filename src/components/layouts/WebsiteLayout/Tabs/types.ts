export interface ITabItemProps {
  label: string
  isActive?: boolean
  onClick?: () => void
}

export interface IContentProps {
  title: string
  text: string
  image: string
  altImage?: string
}
export interface ITabsProps {
  tabsLabels: ITabItemProps[]
  tabsContent: React.ReactNode[]
}
