import { ContactArea } from './ContactArea'
import { FAQ } from 'components/layouts/WebsiteLayout/Faq'
import { ContactForm } from 'components/layouts/WebsiteLayout/ContactForm'
import { Section } from 'components/elements/Section'
import { TextHighlight, Title, Text } from 'components/elements/Texts'

export default function Contact() {
  const faqList = [
    {
      title: 'Quando devo acionar o Suporte?',
      answer:
        'Você pode acionar o Suporte sempre que quiser, em caso de dúvidas ou problemas. Nossa equipe está disponível todos os dias das 6h às 23h, exceto feriados nacionais.'
    },
    {
      title: 'Preciso de suporte técnico. Como receber ajuda?',
      answer:
        'O suporte técnico é destinado aos clientes ativos da RoutEasy. Se for seu o caso, após realizar login na plataforma, acesse a seção "Ajuda", no menu lateral, e escolha a opção "Suporte".'
    },
    {
      title:
        'Quanto tempo leva para receber uma resposta após enviar minha mensagem?',
      answer:
        'O tempo de resposta pode variar de acordo com a demanda, mas garantimos faremos o possível para responder à sua mensagem o mais breve possível.'
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
