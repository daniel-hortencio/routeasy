'use client'

import { useEffect, useState } from 'react'
import { Section } from 'components/elements/Section'
import { TextHighlight, Title, Text } from 'components/elements/Texts'
import { ButtonPrimary } from 'components/elements/Button'
import Image from 'next/image'
import { clientsContent } from './content'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { IConversionIdentifier } from 'services'
import { FormModal } from 'components/layouts/WebsiteLayout/FormModal'

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

export const ClientsNumbers = () => {
  const time_transition = 3000

  const [currentClientsSlider, setCurrentClientsSlider] = useState(
    clientsContent[0]
  )

  useEffect(() => {
    const timer = setTimeout(() => {
      const clients_index = clientsContent.findIndex(
        clients => clients.logo === currentClientsSlider.logo
      )
      if (clients_index === clientsContent?.length - 1) {
        setCurrentClientsSlider(() => clientsContent[0])
      } else {
        setCurrentClientsSlider(() => clientsContent[clients_index + 1])
      }
    }, time_transition)

    return () => {
      clearTimeout(timer)
    }
  }, [currentClientsSlider])

  return (
    <Section
      className="pb-4"
      title={
        <Title>
          Impacto <TextHighlight>real </TextHighlight>
          nos resultados de nossos clientes
        </Title>
      }
      subtitle={
        <Text className="text-grayscale-50 text-[15px] font-light">
          O roteirizador da RoutEasy revolucionou as operações logísticas de
          empresas em diversos setores. Confira alguns resultados!
        </Text>
      }
    >
      <div className="relative pt-0 md:pt-20 pb-16 md:pb-28 flex items-center flex-col">
        <div className="mb-12 md:mb-24">
          <Image
            src={currentClientsSlider.logo}
            alt="Detalhe"
            width={242}
            height={59}
          />
        </div>
        <div className="flex gap-3 justify-center md:justify-between flex-wrap">
          {currentClientsSlider.cards.map((card, index) => (
            <div
              key={index}
              className="rounded-lg border border-grayscale-500 pt-9 pb-10 text-center w-[calc(50%-0.75rem)] md:w-[200px] md:h-[200px]"
            >
              <p className="text-[56px] font-semibold text-white mb-1">
                {card.number}
              </p>
              <p className="text-sm px-2 text-white font-light">{card.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-2 justify-center">
        {clientsContent.map(clients => (
          <button
            key={clients.logo}
            className={`w-2 h-2 rounded-full bg-primary-100 mr-2 dot ${
              currentClientsSlider.logo === clients.logo
                ? 'opacity-100'
                : 'opacity-20'
            }`}
          />
        ))}
      </div>

      <div className="w-full sm:w-[232px] mt-16 mb-28 text-center mx-[auto]">
        <ButtonPrimary
          onClick={() =>
            getModal(
              'Comercial',
              'Solicite uma demonstração ou tire dúvidas sobre nossas soluções.',
              'site-routeasy'
            )
          }
        >
          Quero saber mais
        </ButtonPrimary>
      </div>
    </Section>
  )
}
