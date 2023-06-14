import { IRoutingContentProps } from '../types'
import { ButtonPrimary } from 'components/elements/Button'
import { FeatureCardList } from './FeatureCards'
import Image from 'next/image'

export const RoutingMainContent = ({
  title,
  text,
  link,
  image,
  featureContent
}: IRoutingContentProps) => {
  return (
    <>
      <div className="w-10/12 my-12 m-auto flex justify-between">
        <div className="w-4/12">
          <h3 className="font-white text-2xl font-semibold uppercase mb-3.5">
            {title}
          </h3>
          <p className="font-[#EDEDED] text-sm mb-3.5">{text}</p>

          <div className="md:w-28">
            <ButtonPrimary href={link}>Saiba mais</ButtonPrimary>
          </div>
        </div>
        <div className="w-6/12 h-[305px] relative">
          <div className="absolute w-[268px] h-[391px] bg-grayscale-500 rounded-lg top-2/4 right-0 translate-y-[-50%]"></div>
          <Image className="translate-x-[-77px]" fill src={image} alt={title} />
        </div>
      </div>
      <FeatureCardList featureContent={featureContent} />
    </>
  )
}
