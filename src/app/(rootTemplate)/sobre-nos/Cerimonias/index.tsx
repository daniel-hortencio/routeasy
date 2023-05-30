import { Section } from 'components/elements/Section'
import Image from 'next/image'
import { Title, Text, TextHighlight } from 'components/elements/Texts'
import Icon from 'components/elements/Icon'

export const Cerimonias = () => {
  return (
    <Section className="pb-8">
      <div className="mb-12 text-center md:text-left md:ml-12 lg:ml-28 md:hidden">
        <Title className="text-[32px]/[40px]">Cerimônias</Title>
        <Text className="text-[13px]/[20px] text-grayscale-50">
          Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut
          assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis
          voluptatem hic dolores fuga eum dolorum tenetur est iusto quis.
        </Text>
      </div>

      <div className={`pb-40 block items-center grid-cols-2 md:grid`}>
        <div className={`mb-8 md:mb-0`}>
          <div className="grid grid-cols-3 gap-2 mb-2">
            <div className={`pt-[180%] relative`}>
              <Image
                fill
                src="/images/pictures/techday_1.png"
                alt="Tech Day"
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
                  src="/images/pictures/techday_2.png"
                  alt="Tech Day"
                />
              </div>
              <div className="relative">
                <Image
                  fill
                  src="/images/pictures/techday_3.png"
                  alt="Tech Day"
                />
              </div>
            </div>
            <div className={`pt-[180%] relative`}>
              <Image
                fill
                src="/images/pictures/techday_4.png"
                alt="Tech Day"
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
          <div className={`pt-[30%] relative`}>
            <Image
              fill
              src="/images/pictures/techday_5.png"
              alt="Tech Day"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>

        <div className="text-center md:text-left md:ml-12 lg:ml-28">
          <header className="md:flex md:items-center md:justify-between">
            <Title className="text-[32px]/[40px]">
              Tech<TextHighlight>Day</TextHighlight>
            </Title>

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
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
