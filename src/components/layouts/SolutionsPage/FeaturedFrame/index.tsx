import Image from 'next/image'
import { Section } from 'components/elements/Section'

export const FeaturedFrame = () => {
  return (
    <Section>
      <div className="md:flex bg-grayscale-500 justify-between items-center m-auto pb-10 md:pb-8 pt-8 md:pt-6 px-12 md:px-16 rounded-2xl">
        <div className="text-center md:text-left w-full md:w-2/4 mb-8 md:mb-0">
          <h3 className="mb-2 md:mb-3 text-[32px] font-medium">
            Lorem ipsum dolor sit amet
          </h3>
          <p>
            Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut
            assumenda voluptates qui beatae quis id Quis cupiditate. Cum
            veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto
            quis.
          </p>
        </div>
        <div className="w-full md:w-[383px] h-[243px] relative">
          <Image
            src="/images/pictures/Screen FeaturedFrame.png"
            fill
            alt="Screen"
          />
        </div>
      </div>
    </Section>
  )
}
