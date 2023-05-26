import { Section } from 'components/elements/Section'
import { Title, Text } from 'components/elements/Texts'

export const Banner = () => {
  return (
    <Section>
      <div className="flex justify-center h-full relative min-h-[390px]">
        <div className="md:mx-auto mt-20 lg:mx-0 flex flex-col justify-center w-[645px] text-center">
          {<Title className="font-medium">Contato</Title>}{' '}
          {
            <Text className="text-grayscale-50">
              Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum
              aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum
              veritatis voluptatem hic dolores fuga eum dolorum tenetur est
              iusto quis.
            </Text>
          }
        </div>
      </div>
    </Section>
  )
}
