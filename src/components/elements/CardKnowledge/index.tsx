import Image from 'next/image'

import { Title, Text } from '../Texts'
import { ButtonPrimary } from '../Button'
import { FormModal } from 'components/layouts/WebsiteLayout/FormModal'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { IConversionIdentifier } from 'services'

interface ICardKnowledgeProps {
  title: string
  text: string
  image: string
  link: string
  side?: 'left' | 'right'
}

const MySwal = withReactContent(Swal)

function getModal(
  title: string,
  description: string,
  conversion_identifier: IConversionIdentifier
) {
  MySwal.fire({
    html: (
      <>
        <FormModal
          title={title}
          description={description}
          conversion_identifier={conversion_identifier}
          onClose={Swal.close}
        />
      </>
    ),
    showConfirmButton: false
  })
}

export const CardKnowledge = ({
  title,
  text,
  image,
  side = 'left'
}: ICardKnowledgeProps) => {
  const setClassName = (side: 'left' | 'right') =>
    side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'

  return (
    <div
      className={`flex flex-col md:gap-[150px] items-center ${setClassName(
        side
      )}`}
    >
      <div className="relative w-full md:h-auto">
        <div
          className={`absolute top-2/4 w-[268px] h-full md:h-[391px] -translate-y-2/4 bg-grayscale-500 rounded-2xl ${
            side === 'left' ? 'left-0' : 'right-0'
          }`}
        ></div>
        <div
          className={`relative max-w-[calc(100%-35px)] w-[345px] h-[302px] md:w-[468px] md:max-w-auto md:h-[302px] md:min-w-[468px] ${
            side === 'left'
              ? 'translate-x-[35px] md:translate-x-[80px]'
              : '-translat ve-x-[3580px] md:-translate-x-[80px]'
          }`}
        >
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
      <div className="w-full py-[70px]">
        <Title className="text-[26px]/[32px] py-4">{title}</Title>
        <Text className="text-grayscale-50 font-light text-sm/[24px]">
          {text}
        </Text>
        <div className="lg:w-[100px] text-center mt-4">
          <ButtonPrimary
            onClick={() =>
              getModal(
                'Comercial',
                'Solicite uma demonstração ou tire dúvidas sobre nossas soluções.',
                'site-routeasy' // Cheila
              )
            }
          >
            Saiba mais
          </ButtonPrimary>
        </div>
      </div>
    </div>
  )
}
