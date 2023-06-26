import Image from 'next/image'
import { ButtonSecondary } from 'components/elements/Button'
import Icon from 'components/elements/Icon'
import { Section } from 'components/elements/Section'
import { TextHighlight, Title, Text } from 'components/elements/Texts'

export const WeLikeEat = () => {
  return (
    <Section
      title={
        <Title>
          GOSTAMOS DE MUITO DE <TextHighlight>COMER</TextHighlight>
        </Title>
      }
      subtitle="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. "
    >
      <div className={`pb-24 pmd:b-40 block items-center grid-cols-2 md:grid`}>
        <div>
          <div className={`grid grid-cols-3 gap-2 relative pb-8 md:pb-0`}>
            <div className="relative py-[80%]">
              <Image
                fill
                src="/images/pictures/petday_5.png"
                alt="Cultura"
                style={{
                  objectFit: 'cover'
                }}
              />
            </div>
            <div className={`grid gap-2`}>
              <div className="relative">
                <Image
                  fill
                  src="/images/pictures/petday_6.png"
                  alt="Tech Day"
                  style={{
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div className="relative">
                <Image
                  fill
                  src="/images/pictures/petday_7.png"
                  alt="Tech Day"
                  style={{
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center md:text-left md:ml-12 lg:ml-28">
          <header className="md:flex md:items-center md:justify-between">
            <Title className="text-[32px]/[40px]">Café da tarde</Title>

            <div className="md:grid grid-cols-2 gap-1 w-16 hidden">
              <button className="bg-white rounded-full w-6 h-6 flex items-center justify-center fill-grayscale-300">
                <Icon name="FiArrowLeft" size={14} />
              </button>
              <button className="bg-white rounded-full w-6 h-6 flex items-center justify-center fill-grayscale-300">
                <Icon name="FiArrowRight" size={14} />
              </button>
            </div>
          </header>
          <Text className="text-[13px]/[20px] text-grayscale-50 pb-0 md:pb-4">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Text>
          <div className="grid grid-cols-2 gap-2 w-16  mx-auto md:hidden mt-10 pb-8 md:pb-0">
            <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center fill-grayscale-300">
              <Icon name="FiArrowLeft" size={14} />
            </button>
            <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center fill-grayscale-300">
              <Icon name="FiArrowRight" size={14} />
            </button>
          </div>
          <div className="md:w-36 text-sm font-semibold">
            <ButtonSecondary>Junte-se a nós</ButtonSecondary>
          </div>
        </div>
      </div>
    </Section>
  )
}
