import { ButtonSecondary } from 'components/elements/Button'
import { TextHighlight, Title, Text } from 'components/elements/Texts'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] text-center">
      <Image
        src="/images/pictures/not-found.svg"
        width={113}
        height={113}
        alt="Not Found"
      />
      <Title>
        Erro <TextHighlight>404</TextHighlight>
      </Title>
      <Text className="text-grayscale-200 text-base font-light mb-8">
        Ops, por algum motivo não encontramos essa página
      </Text>
      <Link href="/" className="w-44">
        <ButtonSecondary>Voltar para home</ButtonSecondary>
      </Link>
    </div>
  )
}
