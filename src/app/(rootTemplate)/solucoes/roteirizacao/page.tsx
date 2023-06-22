'use client'

import { Segments } from 'components/layouts/WebsiteLayout/Segments'
import { Integrating } from 'components/layouts/WebsiteLayout/Integrating'
import { Comparison } from 'components/layouts/WebsiteLayout/Comparison'
import { Maestro } from 'components/layouts/WebsiteLayout/Maestro'
import { FAQ } from 'components/layouts/WebsiteLayout/Faq'
import { ContactForm } from 'components/layouts/WebsiteLayout/ContactForm'
// import { Statistics } from 'components/layouts/WebsiteLayout/Statistics'
import { CTA } from 'components/elements/CTA'
import { Section } from 'components/elements/Section'
import { BannerCentered } from 'components/layouts/WebsiteLayout/BannerCentered'
import { TextHighlight, Title, Text } from 'components/elements/Texts'
import { ListFeatures } from 'components/layouts/WebsiteLayout/ListFeatures'

import { BsFillPlayFill } from 'react-icons/bs'
import { TabsHorizontal } from 'components/layouts/WebsiteLayout/TabHorizontal'
import { FeatureList, listFeaturesCard } from './content'
import { ClientsNumbers } from 'components/layouts/WebsiteLayout/ClientsNumbers'
import { ButtonPrimary } from 'components/elements/Button'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import ReactPlayer from 'react-player'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const MySwal = withReactContent(Swal)

export default function SolutionsRoteirizacao() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasWindow, setHasWindow] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true)
    }
  }, [])

  function getModal() {
    MySwal.fire({
      html: (
        <div className="flex justify-center w-full pt-[50%] relative max-w-[979px] mx-auto">
          <Image
            fill
            src="/images/pictures/video-player-thumbnail.png"
            alt="Thumbnail"
          />
          {hasWindow && (
            <ReactPlayer
              width="100%"
              height="100%"
              onPlay={() => setIsPlaying(true)}
              onEnded={() => setIsPlaying(false)}
              controls={true}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: isPlaying ? 1 : 0,
                transition: 'opacity 0.2s'
              }}
              url="https://www.youtube.com/watch?v=L3WzRR5Ugks&t=1s"
            />
          )}
        </div>
      ),
      showConfirmButton: false
    })
  }

  return (
    <>
      <BannerCentered
        title={
          <Title className="text-[35px] lg:text-[40px] pb-5">
            CONHEÇA O <TextHighlight>roteirizador </TextHighlight>
            MAIS RÁPIDO Do mercado
          </Title>
        }
        description={
          <Text className="text-grayscale-50 text-[15px] font-light">
            Enquanto outras soluções lutam para lidar com grandes volumes de
            dados, nós entregamos resultados rápidos e precisos. Conte com o
            algoritmo de roteirização mais eficiente do mercado para
            revolucionar a sua operação logística.
          </Text>
        }
      >
        <div className="w-[64px] text-center mx-[auto]">
          <ButtonPrimary onClick={getModal}>
            <BsFillPlayFill color="#FFFFFF" size={20} />
          </ButtonPrimary>
        </div>
      </BannerCentered>
      <ListFeatures listFeatures={listFeaturesCard} />
      <Section className="mb-32 hidden md:block">
        <div className="w-full lg:w-[962px] mx-auto my-[72px]">
          <TabsHorizontal featureContent={FeatureList} />
        </div>
      </Section>
      <Section className="pb-4">
        <div className="w-full lg:w-[1033px] mx-auto my-[72px]">
          <CTA
            title="Quer levar facilidade para a sua operação?"
            description={
              <Text className="text-grayscale-50 text-[15px] font-light">
                Solicite agora mesmo uma demonstração com um de nossos
                especialistas.
              </Text>
            }
            buttonText="Solicite uma demonstração"
            href="/demonstracao"
          />
        </div>
      </Section>
      <Comparison />
      <ClientsNumbers />
      <Integrating />
      <Maestro />
      <Segments />
      <FAQ />
      <Section>
        <div className="px-0 md:px-12 mb-16 md:mb-40">
          <ContactForm />
        </div>
      </Section>
    </>
  )
}
