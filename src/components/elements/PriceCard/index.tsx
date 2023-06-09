import { FaCheck } from 'react-icons/fa'

interface IPriceCard {
  title: string
  subtitle: string
  description: string
  featureList: string[]
}

export const PriceCard = ({
  title,
  subtitle,
  description,
  featureList
}: IPriceCard) => {
  return (
    <div className="bg-grayscale-500 rounded-lg pt-12 px-7 pb-[71px]">
      <p className="text-3xl text-white mb-2 font-semibold">{title}</p>
      <p className="text-sm text-grayscale-200 mb-6 font-normal">{subtitle}</p>
      <p className="text-base text-white mb-6 font-normal pb-4 border-b-2 border-primary-100">
        {description}
      </p>
      <p className="text-base text-white mb-6 font-normal">Funcionalidades:</p>
      <ul>
        {featureList.map((feature, index) => (
          <li key={index} className="flex items-center gap-x-4 mb-3">
            <FaCheck color="#3CBC8D" size={19} />
            <div className="text-base text-white font-normal">{feature}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
