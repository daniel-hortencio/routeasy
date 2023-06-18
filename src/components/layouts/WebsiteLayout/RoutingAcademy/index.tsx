import { ButtonWhite } from 'components/elements/Button'
import Image from 'next/image'
import { Text } from 'components/elements/Texts'

import { BannerOverlay } from '../BannerOverlay'
import Link from 'next/link'

export const RoutingAcademy = () => {
  return (
    <>
      <BannerOverlay image="/images/pictures/fundo_routing_academy.png">
        <div className="px-5 md:px-20 lg:px-48">
          <div className="relative mx-auto max-w-[514px] h-[64px]">
            <Image
              src="/images/logos/logo_routing_academy.png"
              fill
              alt="Routing Academy"
              style={{
                objectFit: 'contain'
              }}
            />
          </div>
          <div className="relative z-10">
            <Text className="text-base/[22px] font-light text-grayscale-50 mb-8">
              Aprenda todos os conceitos fundamentais envolvidos na otimização
              de processos logísticos.Saiba como a aplicação de tecnologias com
              inteligência artificial podem transformar os resultados das
              empresas!
            </Text>
            <div className="mx-auto mb-8">
              <Link
                href="https://routeasy.com.br/content/routingacademy/"
                target="_blank"
              >
                <ButtonWhite>Quero saber mais</ButtonWhite>
              </Link>
            </div>
          </div>
        </div>
      </BannerOverlay>
    </>
  )
}
