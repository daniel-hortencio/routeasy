import Icon from 'components/elements/Icon'
import { Section } from 'components/elements/Section'
import { TextHighlight, Title, Text } from 'components/elements/Texts'
import Image from 'next/image'

export const Food = () => {
  return (
    <Section
      className="lg:pb-20"
      title={
        <Title>
          Gostamos muito de <TextHighlight>Comer</TextHighlight>
        </Title>
      }
      subtitle="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. "
    >
      <div className={`pb-24 pmd:b-40 block items-center grid-cols-2 md:grid`}>
        <div className={`mb-8 md:mb-0`}>
          <div className="grid grid-cols-3 gap-2 mb-2">
            <div className={`pt-[180%] relative`}>
              <Image
                fill
                src="/images/pictures/cafe_1.png"
                alt="Café da tarde"
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div className={`grid gap-2`}>
              <div className="relative">
                <Image
                  fill
                  src="/images/pictures/cafe_2.png"
                  alt="Café da tarde"
                />
              </div>
              <div className="relative">
                <Image
                  fill
                  src="/images/pictures/cafe_3.png"
                  alt="Café da tarde"
                />
              </div>
            </div>
            <div className={`pt-[180%] relative`}>
              <Image
                fill
                src="/images/pictures/cafe_4.png"
                alt="Café da tarde"
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>

        <div className="text-center md:text-left md:ml-12 lg:ml-28">
          <header className="md:flex md:items-center md:justify-between">
            <Title className="text-[32px]/[40px]">Café da tarde</Title>

            <div className="md:grid grid-cols-2 gap-2 w-16 hidden">
              <button className="bg-white rounded-full w-6 h-6 flex items-center justify-center fill-grayscale-300">
                <Icon name="FiArrowLeft" size={14} />
              </button>
              <button className="bg-white rounded-full w-6 h-6 flex items-center justify-center fill-grayscale-300">
                <Icon name="FiArrowRight" size={14} />
              </button>
            </div>
          </header>
          <Text className="text-[13px]/[20px] text-grayscale-50">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Text>
          <div className="grid grid-cols-2 gap-2 w-16  mx-auto md:hidden mt-10">
            <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center fill-grayscale-300">
              <Icon name="FiArrowLeft" size={14} />
            </button>
            <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center fill-grayscale-300">
              <Icon name="FiArrowRight" size={14} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  )
}
