import { Section } from 'components/elements/Section'
import { CardFeature } from 'components/elements/CardFeature'
import { ICardFeatureProps } from 'components/elements/CardFeature/types'
interface IListFeaturesProps {
  listFeatures: ICardFeatureProps[]
}

export const ListFeatures = ({ listFeatures }: IListFeaturesProps) => {
  return (
    <Section>
      <div className="flex flex-col md:flex-row gap-8 pb-16">
        {listFeatures.map((card, index) => (
          <CardFeature
            key={index}
            title={card.title}
            text={card.text}
            icon={card.icon}
          />
        ))}
      </div>
    </Section>
  )
}
