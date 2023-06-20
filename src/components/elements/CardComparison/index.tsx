interface ICardComparison {
  seconds: string
  label: string
  isHighlight?: boolean
}

export const CardComparison = ({
  seconds,
  label,
  isHighlight
}: ICardComparison) => {
  const getBorderColor = () =>
    isHighlight ? 'border-primary-100' : 'border-grayscale-500'

  const getBgColor = () => (isHighlight ? 'bg-primary-100' : 'bg-grayscale-500')

  return (
    <div className="w-[200px] text-center">
      <div className={`rounded-t-lg border py-14 ${getBorderColor()}`}>
        <p className="text-base font-normal text-white"> 500 pontos </p>
        <p className="text-5xl font-semibold text-white"> {seconds} </p>
        <p className="text-base font-normal text-white"> Segundos </p>
      </div>

      <div className={`rounded-b-lg p-3 ${getBgColor()}`}>
        <p className="text-base font-semibold text-white"> {label} </p>
      </div>
    </div>
  )
}
