import { Section } from 'components/elements/Section'
import { Title } from 'components/elements/Texts'
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
      <header className="flex justify-between">
        <p className="font-base text-white">{title}</p>
        <button onClick={onClick}>
          <Image
            width="24"
            height="24"
            src={`/images/pictures/icon-${isOpen ? 'minus' : 'plus'}.svg`}
            alt="Pergunta icone"
          />
        </button>
      </header>

      {isOpen && (
        <main className="mt-4">
          <p className="font-base text-white/80">{answer}</p>
        </main>
      )}
    </div>
  )
}

export const FAQ = () => {
  const [questOpened, setQuestOpened] = useState<number | undefined>(undefined)

  const handleQuestionClick = (index: number) => {
    if (index === questOpened) {
      setQuestOpened(undefined)
    } else {
      setQuestOpened(index)
    }
  }

  return (
    <Section
      className="my-40"
      title={<Title>Dúvidas frequentes</Title>}
      subtitle="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. "
    >
      <div className="flex justify-between">
        <div className="w-5/12">
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
              Suporte
            </h4>
            <p className="text-grayscale-200 text-base mb-4">
              Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum
              aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum
              veritatis voluptatem hic dolores fuga eum dolorum tenetur est
              iusto quis.
            </p>
            <div className="lg:w-[138px] text-center mb-6">
              <ButtonPrimary href="/">Entre em contato</ButtonPrimary>
            </div>
          </div>
        </div>
        <div className="w-6/12">
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
