import { Section } from 'components/elements/Section'
// import { Title } from 'components/elements/Texts'
import Image from 'next/image'

interface ITextBoxProps {
  title: string
  text?: string
  image?: string
}

export const TextBox = ({ title, text, image }: ITextBoxProps) => {
  return (
    <Section>
      <div className="flex my-16 item-center gap-x-20 justify-between items-center md:w-[878px] m-auto pl-12 py-7 pr-8 rounded-lg bg-grayscale-500">
        <div className="md:w-[56%]">
          <h3 className="uppercase mb-3 text-[26px] font-medium">{title}</h3>
          <p className="text-xs">{text}</p>
        </div>
        <div className="w-[383px] relative hidden md:block">
          <Image src={image} alt="mac mid" width="383" height="243" />
        </div>
      </div>
    </Section>
  )
}
