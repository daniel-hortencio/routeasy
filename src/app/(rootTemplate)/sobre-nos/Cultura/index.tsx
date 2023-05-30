import { Section } from 'components/elements/Section'
import { Title, Text } from 'components/elements/Texts'
import S from './styles.module.css'
import Image from 'next/image'

export const Cultura = () => {
  return (
    <Section className="pb-12">
      <div className={`${S.CulturaGrid} pb-40 block lg:grid`}>
        <div className="mb-8 lg:mb-0">
          <Title>Nossa Cultura</Title>
          <Text className="text-[13px]/[20px] text-grayscale-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
          </Text>
          <br></br>
          <Text className="text-[13px]/[20px] text-grayscale-50">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Text>
          <br></br>
          <Text className="text-[13px]/[20px] text-grayscale-50">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
          </Text>
        </div>
        <div className={`${S.BoxImg} w-full`}>
          <div className="relative">
            <Image fill src="/images/pictures/cultura-1.png" alt="Cultura" />
          </div>
          <div className="relative">
            <Image fill src="/images/pictures/cultura-2.png" alt="Cultura" />
          </div>
          <div className="relative">
            <Image fill src="/images/pictures/cultura-3.png" alt="Cultura" />
          </div>
          <div className="relative">
            <Image fill src="/images/pictures/cultura-4.png" alt="Cultura" />
          </div>
          <div className={`${S.box_5} relative`}>
            {' '}
            <Image fill src="/images/pictures/cultura-5.png" alt="Cultura" />
          </div>
          <div className={`${S.box_6} bg-grayscale-500 relative p-4`}>
            <h2 className="uppercase text-[26px]/[32px] font-semibold">
              Adoramos <span className="text-primary-100">festinhas!</span>
            </h2>
            <p className="text-sm text-grayscale-50 mb-2">
              Sempre temos motivos para comemoração e aproveitamos cada momento
              como se fosse único.
            </p>
          </div>
          <div className={`${S.box_7} relative`}>
            <Image fill src="/images/pictures/cultura-6.png" alt="Cultura" />
          </div>
        </div>
      </div>
    </Section>
  )
}
