import { TextHighlight, Title, Text } from 'components/elements/Texts'
import { ContactForm } from './ContactForm'
import Icon from 'components/elements/Icon'

export default function DemonstrationPage() {
  return (
    <div className="flex">
      <div className="w-1/2">
        <div className="max-w-xl w-full ml-auto px-5 pt-[150px] pb-[60px] pr-36 pl-14">
          <Title className="text-left text-[72px] mb-16">
            A GENTE ESTÁ <TextHighlight> QUASE</TextHighlight> LÁ
          </Title>
          <div className="flex items-center justify-between mb-4">
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
          <Text className="text-grayscale-50">
            Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut
            assumenda voluptates qui beatae quis id Quis cupiditate.
          </Text>
        </div>
      </div>
      <div className="w-1/2 bg-grayscale-600 min-h-screen">
        <div className="max-w-xl w-full mr-auto px-5">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
