import { Section } from 'components/elements/Section'
import S from './styles.module.css'
import Image from 'next/image'
import { Title, Text, TextHighlight } from 'components/elements/Texts'

export const Cerimonias = () => {
  return (
    <Section className="pb-8">
      <div className={`${S.CerimoniasGrid} pb-40 block lg:grid`}>
        <div className={`${S.BoxImg} w-full mb-8 md:mb-0`}>
          <div className={`${S.box_1} relative`}>
            <Image fill src="/images/pictures/techday_1.png" alt="Tech Day" />
          </div>
          <div className={`${S.box_2} relative`}>
            <Image fill src="/images/pictures/techday_2.png" alt="Tech Day" />
          </div>
          <div className={`${S.box_3} relative`}>
            <Image fill src="/images/pictures/techday_3.png" alt="Tech Day" />
          </div>
          <div className={`${S.box_4} relative`}>
            <Image fill src="/images/pictures/techday_4.png" alt="Tech Day" />
          </div>
          <div className={`${S.box_5} relative`}>
            <Image fill src="/images/pictures/techday_5.png" alt="Tech Day" />
          </div>
        </div>
        <div className="text-center lg:text-left">
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
