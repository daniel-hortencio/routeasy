import Image from 'next/image'
import { Section } from 'components/elements/Section'

interface ITextBoxProps {
  title: string
  text?: string
  image?: string
}

export const FeaturedFrame = ({ title, text, image }: ITextBoxProps) => {
  return (
    <Section className="max-w-[968px] m-auto">
      <div className="mb-16 md:flex bg-grayscale-500 justify-between items-center m-auto pb-10 md:pb-8 pt-8 md:pt-6 px-12 md:px-16 rounded-2xl">
        <div className="text-center md:text-left w-full md:w-2/4 mb-8 md:mb-0">
          <h3 className="mb-2 md:mb-3 text-2xl font-bold uppercase">{title}</h3>
          <p className="text-sm text-grayscale-50 font-normal">{text}</p>
        </div>
        <div className="w-full md:w-[316px] h-[198px] relative">
          <Image src={image} fill alt="Screen" />
        </div>
      </div>
    </Section>
  )
}
