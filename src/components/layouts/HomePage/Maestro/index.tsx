import { Section } from 'components/elements/Section'
import { ButtonSecondary } from 'components/elements/Button'
import React from 'react'
import ReactPlayer from 'react-player/lazy'

export const Maestro = () => {
  return (
    <Section
      title={
        <h1>
          Conheça O <span className="text-primary">Maestro</span>
        </h1>
      }
      subtitle="Coloque sua operação no piloto automático enquanto você gerencia apenas as exceções. O Maestro automatiza 100% das tarefas manuais, possibilitando o same day delivery e as coletas dinâmicas graças às regras e parâmetrizações que identificam sempre a melhor rota. Conte ainda com o despacho automático para um motorista disponível mais próximo."
    >
      <div className="flex justify-center">
        <ReactPlayer
          light={true}
          url="https://www.youtube.com/watch?v=L3WzRR5Ugks&t=1s"
        ></ReactPlayer>
      </div>
      <div className="w-40 m-auto my-16 mb-16">
        <ButtonSecondary>Quero saber mais</ButtonSecondary>
      </div>
    </Section>
  )
}
