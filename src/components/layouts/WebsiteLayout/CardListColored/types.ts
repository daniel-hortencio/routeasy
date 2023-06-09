export interface ICardColoredProps {
  icon: string
  title: string
  text: string
  accentColor: string
}

export interface ICardListProps {
  cards: ICardColoredProps[]
  title: string
  subtitle: string
}
