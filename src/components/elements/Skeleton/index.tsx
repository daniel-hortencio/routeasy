interface Props {
  className: string
}

export const Skeleton = ({ className }: Props) => {
  const getClassName = () => `animate-pulse bg-grayscale-600 ${className}`

  return <div className={getClassName()} />
}
