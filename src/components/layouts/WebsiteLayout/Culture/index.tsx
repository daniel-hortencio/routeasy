import { Section } from 'components/elements/Section'
import { Title, Text } from 'components/elements/Texts'
import Image from 'next/image'

export const Culture = () => {
  return (
    <Section className="pb-28 md:pb-12">
      <div
        className={`md:grid gap-[150px] grid-cols-2 items-center mb-6 md:mb-28`}
      >
        <div className="text-center md:text-left mb-8 lg:mb-0 md:mr-12">
          <Title className="text-[40px]/[52px] mb-4">Nossa Cultura</Title>
          <Text className="text-[13px]/[20px] text-grayscale-50 font-light">
            Somos o Time de Casa! Ccreditamos que comemorar cada bom resultado é
            essencial para fortalecer nossa cultura e impulsionar nosso sucesso.
            Seja um novo cliente conquistado, um projeto concluído ou uma meta
            superada, cada vitória é um motivo para juntar a equipe em um happy
            hour.
          </Text>
        </div>
        <div>
          <div className={`grid grid-cols-4 gap-2 mb-2 w-full`}>
            {[
              { src: '/images/pictures/cultura-1.png', alt: 'Cultura' },
              { src: '/images/pictures/cultura-2.png', alt: 'Cultura' },
              { src: '/images/pictures/cultura-3.png', alt: 'Cultura' },
              { src: '/images/pictures/cultura-4.png', alt: 'Cultura' }
            ].map(image => (
              <div className="relative py-[50%]" key={image.src}>
                <Image
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  fill
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            ))}
          </div>

          <div className={`grid grid-cols-2 gap-2 relative`}>
            <div className="relative py-[80%]">
              <Image
                fill
                src="/images/pictures/cultura-5.png"
                alt="Cultura"
                style={{
                  objectFit: 'cover'
                }}
              />
            </div>
            <div className="flex flex-col">
              <div
                className={`bg-grayscale-500 flex-auto flex flex-col justify-center relative p-4 mb-2`}
              >
                <h2 className="uppercase text-[26px]/[32px] font-semibold">
                  Adoramos <span className="text-primary-100">festinhas!</span>
                </h2>
                <Text className="text-sm text-grayscale-50 mb-2 font-light">
                  E temos muitos motivos para comemorar!
                </Text>
              </div>
              <div className={`relative pt-[80%] flex-auto`}>
                <Image
                  fill
                  src="/images/pictures/cultura-6.png"
                  alt="Cultura"
                  style={{
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
