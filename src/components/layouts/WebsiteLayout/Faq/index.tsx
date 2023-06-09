'use client'

import { Section } from 'components/elements/Section'
import { Title, Text } from 'components/elements/Texts'
import { ButtonPrimary } from 'components/elements/Button'
import Image from 'next/image'
import { useState } from 'react'
import { LinkExternal } from 'components/elements/LinkExternal/LinkExternal'

interface IFaqItemProps {
  title: string
  answer: string
  isOpen: boolean
  onClick: () => void
  isLast: boolean
}

const FaqItem = ({ title, answer, isOpen, onClick, isLast }: IFaqItemProps) => {
  return (
    <div
      className={`px-6 pb-6  border-b border-grayscale-400 ${
        isLast ? 'mb-0' : 'mb-6'
      }`}
    >
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
        className={`overflow-hidden transition-all ${isOpen ? 'h-20' : 'h-0'}`}
      >
        <Text className="text-grayscale-50 text-[14px] font-light mt-4 h-20 overflow-hidden">
          {answer}
        </Text>
      </main>
    </div>
  )
}

interface IFaq {
  data: Omit<IFaqItemProps, 'isOpen' | 'onClick' | 'isLast'>[]
}

export const FAQ = ({ data }: IFaq) => {
  const [questOpened, setQuestOpened] = useState<number | undefined>(0)

  const handleQuestionClick = (index: number) =>
    index === questOpened ? setQuestOpened(undefined) : setQuestOpened(index)

  return (
    <Section
      className="lg:mb-40"
      title={<Title>Dúvidas frequentes</Title>}
      subtitle={
        <Text className="text-grayscale-50 text-[15px] font-light">
          Aqui você encontrará as respostas para as dúvidas mais comuns sobre
          nossas soluções.
        </Text>
      }
    >
      <div className="flex flex-col-reverse md:flex-row justify-between px-0 md:px-12 pb-24 lg:pb-0">
        <div className="md:w-5/12 ">
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
            <Text className="text-grayscale-200 text-[15px] mb-8 font-light">
              Nossa equipe está sempre pronta para ajudar! Navegue pelo help
              center e confira todos os artigos de suporte, além das
              atualizações mais recentes sobre a nossa plataforma.
            </Text>
            <div className="lg:w-[176px] text-center">
              <LinkExternal href="https://help.routeasy.com.br/hc/pt-br">
                <ButtonPrimary>Acessar Help Center</ButtonPrimary>
              </LinkExternal>
            </div>
          </div>
        </div>
        <div className="md:w-6/12 mb-20 md:mb-0">
          {data.map((question, index) => {
            return (
              <FaqItem
                key={index}
                title={question.title}
                answer={question.answer}
                isOpen={questOpened === index}
                onClick={() => handleQuestionClick(index)}
                isLast={index === data.length - 1}
              />
            )
          })}
        </div>
      </div>
    </Section>
  )
}
