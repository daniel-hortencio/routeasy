'use client'
import React, { useState, useEffect } from 'react'

import { Section } from 'components/elements/Section'
import { ButtonSecondary } from 'components/elements/Button'
import Image from 'next/image'
import ReactPlayer from 'react-player/youtube'
import { TextHighlight, Title, Text } from 'components/elements/Texts'

export const Maestro = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasWindow, setHasWindow] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true)
    }
  }, [])

  return (
    <Section
      className="pb-4"
      title={
        <Title className="font-medium">
          Conheça O <TextHighlight>Maestro</TextHighlight>
        </Title>
      }
      subtitle={
        <Text className="text-grayscale-50 text-[15px] font-light">
          Coloque sua operação no piloto automático enquanto você gerencia
          apenas as exceções. O Maestro automatiza 100% das tarefas manuais,
          possibilitando o same day delivery e as coletas dinâmicas graças às
          regras e parâmetrizações que identificam sempre a melhor rota. Conte
          ainda com o despacho automático para um motorista disponível mais
          próximo.
        </Text>
      }
    >
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
      <div className="md:w-40 text-sm m-auto my-12 mb-20">
        <ButtonSecondary>Quero saber mais</ButtonSecondary>
      </div>
    </Section>
  )
}
