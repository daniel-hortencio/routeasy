import Image from 'next/image'
import { Section } from 'components/elements/Section'

interface ITextBoxProps {
  title: string | JSX.Element
  text?: string | React.ReactNode
  image?: string
}

export const FeaturedFrame = ({ title, text, image }: ITextBoxProps) => {
  return (
    <Section className="mb-14 md:mb-56">
      <div className="lg:w-[968px] m-auto mb-16 md:flex bg-grayscale-500 justify-between items-center pb-10 md:pb-8 pt-8 md:pt-6 px-5 md:px-12 rounded-2xl">
        <div className="text-center md:text-left w-full md:w-2/4 mb-8 md:mb-0">
          <div className="mb-2 md:mb-3 text-2xl font-bold uppercase text-white">
            {title}
          </div>
          <p className="text-sm text-grayscale-50 font-normal">{text}</p>
        </div>
        <div className="w-full md:w-[316px] h-[198px] relative">
          {image && (
            <Image
              src={image}
              fill
              alt="Screen"
              style={{
                objectFit: 'contain'
              }}
            />
          )}
        </div>
      </div>
    </Section>
  )
}
