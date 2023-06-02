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
          <p className="text-base text-white font-normal">{title}</p>
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
          <Text className="text-grayscale-50 mb-12">
            Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut
            assumenda voluptates qui beatae quis id Quis cupiditate. Cum
            veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto
            quis.{' '}
          </Text>
        </div>
        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4">
          <CardOffice
            icon="/images/icons/home-solutions-routeirizacao.svg"
            title="Video Game"
          />
          <CardOffice
            icon="/images/icons/home-solutions-routeirizacao.svg"
            title="Pebolim"
          />
          <CardOffice
            icon="/images/icons/home-solutions-routeirizacao.svg"
            title="Churrasqueira"
          />
          <CardOffice
            icon="/images/icons/home-solutions-routeirizacao.svg"
            title="Fumódromo"
          />
        </div>
      </div>
    </Section>
  )
}
