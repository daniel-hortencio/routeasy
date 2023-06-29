import { ContactArea } from './ContactArea'
import { FAQ } from 'components/layouts/WebsiteLayout/Faq'
import { ContactForm } from 'components/layouts/WebsiteLayout/ContactForm'
import { Section } from 'components/elements/Section'
import { TextHighlight, Title, Text } from 'components/elements/Texts'

export default function Contact() {
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
    }
  ]

  return (
    <>
      <Section className="flex">
        <div className="flex justify-center relative pt-40 lg:pt-32 pb-28">
          <div className="md:mx-auto mt-[62px] lg:mx-0 flex flex-col justify-center w-[640px] text-center">
            <Title className="text-[35px] lg:text-[40px] pb-5">
              Quer <TextHighlight>falar </TextHighlight>com a gente?
            </Title>
            <Text className="text-[15px] text-grayscale-50 pb-8">
              É só escolher o setor abaixo e enviar sua mensagem! Nossa equipe
              está pronta para te atender.
            </Text>
          </div>
        </div>
      </Section>

      <ContactArea />
      <FAQ data={faqList} />
      <Section>
        <div className="px-0 md:px-12 mb-16 md:mb-40">
          <ContactForm />
        </div>
      </Section>
    </>
  )
}
