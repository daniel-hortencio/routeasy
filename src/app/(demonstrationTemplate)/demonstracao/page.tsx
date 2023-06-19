import { TextHighlight, Title, Text } from 'components/elements/Texts'
import { ContactForm } from '../../(rootTemplate)/contato/ContactForm'
import Icon from 'components/elements/Icon'

export default function DemonstrationPage() {
  return (
    <div className="lg:flex">
      <div className="lg:w-1/2">
        <div className="flex flex-col lg:h-screen justify-center lg:max-w-xl w-full lg:ml-auto px-5 pt-48 pb-12 lg:py-16 lg:pr-36 lg:pl-14">
          <Title className="text-center lg:text-left text-[40px] lg:text-[72px] mb-12 lg:mb-16">
            ESTAMOS <TextHighlight> QUASE</TextHighlight> LÁ
          </Title>
          <div className="hidden lg:flex items-center justify-between mb-4">
            <Title className="text-lg">Você sabia?</Title>
            <div className="grid grid-cols-2 gap-2">
              <button className="bg-white rounded-full w-6 h-6 flex items-center justify-center fill-grayscale-300">
                <Icon name="FiArrowLeft" size={14} />
              </button>
              <button className="bg-white rounded-full w-6 h-6 flex items-center justify-center fill-grayscale-300">
                <Icon name="FiArrowRight" size={14} />
              </button>
            </div>
          </div>
          <Text className="hidden lg:block text-grayscale-50 font-light">
            99% de nossos clientes recomendam a RoutEasy para redução de custos
            de operação.
          </Text>
        </div>
      </div>
      <div className="lg:w-1/2 bg-grayscale-600 lg:min-h-screen lg:flex lg:flex-col lg:justify-center">
        <div className="lg:max-w-xl w-full mr-auto">
          <ContactForm
            conversion_identifier="lp-roteirizador-teste"
            description="Agende uma demonstração personalizada e descubra como otimizar sua operação, reduzir custos e impulsionar o seu negócio. Nossos especialistas estão prontos para entender suas necessidades e apresentar as melhores soluções."
            title="Contato"
          />
        </div>
      </div>
    </div>
  )
}
