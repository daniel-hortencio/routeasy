import { IRoutingContentProps } from '../types'
import { ButtonPrimary } from 'components/elements/Button'
import { TabsHorizontal } from '../../TabHorizontal'
import Image from 'next/image'
import { Text } from 'components/elements/Texts'

export const RoutingMainContent = ({
  title,
  text,
  link,
  image,
  featureContent
}: IRoutingContentProps) => {
  return (
    <>
      <div className="w-full lg:w-10/12 my-12 m-auto md:flex justify-between">
        <div className="md:w-6/12 lg:w-4/12 mb-12 md:mb-0">
          <h3 className="text-white text-2xl text-center md:text-left font-semibold uppercase mb-3.5">
            {title}
          </h3>
          <Text className="text-grayscale-200 block text-sm text-center md:text-left font-light mb-3.5">
            {text}
          </Text>

          <div className="md:w-28 mt-5">
            <ButtonPrimary href={link}>Saiba mais</ButtonPrimary>
          </div>
        </div>
        <div className="md:w-6/12 h-[305px] relative">
          <div className="hidden lg:block absolute w-[268px] h-[391px] bg-grayscale-500 rounded-lg top-2/4 right-0 translate-y-[-50%]"></div>
          <Image
            className="lg:translate-x-[-77px]"
            fill
            src={image}
            alt={title}
          />
        </div>
      </div>
      <div className="lg:w-10/12 mx-auto">
        <TabsHorizontal featureContent={featureContent} />
      </div>
    </>
  )
}
