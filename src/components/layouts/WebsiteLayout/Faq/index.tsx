'use client'

import { Section } from 'components/elements/Section'
import { Title, Text } from 'components/elements/Texts'
import { ButtonPrimary } from 'components/elements/Button'
import Image from 'next/image'
import { useState } from 'react'

const faqList = [
  {
    title: 'Pergunta 1',
    answer:
      'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis.'
  },
  {
    title: 'Pergunta 2',
    answer:
      'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis.'
  },
  {
    title: 'Pergunta 3',
    answer:
      'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis.'
  },
  {
    title: 'Pergunta 4',
    answer:
      'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis.'
  }
]

interface IFaqItemProps {
  title: string
  answer: string
  isOpen: boolean
  onClick: () => void
}

const FaqItem = ({ title, answer, isOpen, onClick }: IFaqItemProps) => {
  return (
    <div className="p-6 border-b border-grayscale-400">
      <header onClick={onClick} className="cursor-pointer flex justify-between">
        <Text className="text-[15px] text-white">{title}</Text>
        <Image
          width="24"
          height="24"
          src={`/images/pictures/icon-${isOpen ? 'minus' : 'plus'}.svg`}
          alt="Pergunta icone"
        />
      </header>

      <main
        className={`overflow-hidden transition-all ${isOpen ? 'h-32' : 'h-0'}`}
      >
        <Text className="text-grayscale-50 text-[13px] mt-4">{answer}</Text>
      </main>
    </div>
  )
}

export const FAQ = () => {
  const [questOpened, setQuestOpened] = useState<number | undefined>(0)

  const handleQuestionClick = (index: number) =>
    index === questOpened ? setQuestOpened(undefined) : setQuestOpened(index)

  return (
    <Section
      className="lg:mb-40"
      title={<Title>Dúvidas frequentes AQUI</Title>}
      subtitle={
        <Text className="text-grayscale-50 text-[15px]">
          Aqui você encontrará as respostas para as dúvidas mais comuns sobre
          nossas soluções.
        </Text>
      }
    >
      <div className="flex flex-col-reverse md:flex-row justify-between px-12 pb-24 lg:pb-0">
        <div className="md:w-5/12">
          <div className="rounded-lg p-6 border border-grayscale-500">
            <div className="bg-grayscale-500 rounded-md p-3 w-12 h-12 mb-4">
              <Image
                width="24"
                height="24"
                src="/images/pictures/icon-question.svg"
                alt="Pergunta icone"
              />
            </div>
            <h4 className="text-white text-[22px] uppercase font-semibold mb-2">
              Help center
            </h4>
            <Text className="text-grayscale-200 text-[15px] mb-4">
              Nossa equipe está sempre pronta para ajudar! Navegue pelo help
              center e confira todos os artigos de suporte, além das
              atualizações mais recentes sobre a nossa plataforma.
            </Text>
            <div className="lg:w-[176px] text-center">
              <ButtonPrimary href="/">Acessar Help Center</ButtonPrimary>
            </div>
          </div>
        </div>
        <div className="md:w-6/12 mb-20 md:mb-0">
          {faqList.map((question, index) => {
            return (
              <FaqItem
                key={index}
                title={question.title}
                answer={question.answer}
                isOpen={questOpened === index}
                onClick={() => handleQuestionClick(index)}
              />
            )
          })}
        </div>
      </div>
    </Section>
  )
}
