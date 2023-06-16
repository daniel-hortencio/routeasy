import { Section } from 'components/elements/Section'
import { Title, Text } from 'components/elements/Texts'
import Image from 'next/image'

const CardOffice = ({ icon, title }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-44 rounded-lg pt-8 pb-8 border">
        <div className="flex items-center justify-center h-12 w-12 rounded-lg border mb-2">
          <Image src={icon} width={16} height={16} alt={title} />
        </div>
        <div>
          <Text className="text-base text-white font-light">{title}</Text>
        </div>
      </div>
    </div>
  )
}

export const Office = () => {
  return (
    <Section className="pb-20">
      <div className="relative overflow-hidden w-full text-center px-8 lg:px-40 py-20 lg:pb-20 lg:pt-16">
        <Image
          src="/images/pictures/escritorio.png"
          fill
          alt="Background"
          style={{ objectFit: 'cover', opacity: 0.3 }}
        />
        <div className="relative">
          <Title>O escritório</Title>
          <Text className="text-grayscale-50 mb-12 text-sm font-light">
            Nosso escritório é projetado para minimizar o nosso impacto
            ambiental. Com uma arquitetura que privilegia a iluminação natural,
            reduzimos os gastos energéticos e aumentamos o conforto térmico.
            Além disso, toda a água da chuva é captada e armazenada em
            reservatórios, localizados no subsolos. Aqui, o trabalho se une a um
            ambiente descontraído, inspirador e, claro, com diversos momentos de
            lazer.
          </Text>
        </div>
        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4">
          <CardOffice icon="/images/icons/game.svg" title="Video Game" />
          <CardOffice icon="/images/icons/pebolim.svg" title="Pebolim" />
          <CardOffice
            icon="/images/icons/churrasqueira.svg"
            title="Churrasqueira"
          />
          <CardOffice icon="/images/icons/fumodromo.svg" title="Fumódromo" />
        </div>
      </div>
    </Section>
  )
}
