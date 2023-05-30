import { Section } from 'components/elements/Section'
import S from './styles.module.css'
import Image from 'next/image'
import { Title, Text, TextHighlight } from 'components/elements/Texts'

export const Cerimonias = () => {
  return (
    <Section className="pb-8">
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
          <Title className="text-[32px]/[40px]">
            Tech<TextHighlight>Day</TextHighlight>
          </Title>
          <Text className="text-[13px]/[20px] text-grayscale-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
          </Text>
        </div>
      </div>
    </Section>
  )
}
