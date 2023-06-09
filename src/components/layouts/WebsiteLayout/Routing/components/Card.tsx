import Image from 'next/image'
import { IRoutingCardProps } from '../types'

export const RoutingCard = ({
  title,
  icon,
  isActive,
  onClick
}: IRoutingCardProps) => {
  return (
    <div
      onClick={onClick}
      className={`rounded-lg border w-full lg:w-44 h-40 border-grayscale-500 hover:bg-grayscale-600 cursor-pointer flex items-center justify-center ${
        isActive && 'bg-grayscale-500'
      }`}
    >
      <div>
        {icon && (
          <div className="border border-white rounded-lg h-14 w-14 lg:h-10 lg:w-10 flex items-center justify-center m-auto">
            <Image src={icon} width={16} height={16} alt={title} />
          </div>
        )}
        <div>
          <p className="text-sm font-sans text-center font-semibold mt-4">
            {title}
          </p>
        </div>
      </div>
    </div>
  )
}
