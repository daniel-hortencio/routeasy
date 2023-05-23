import { Banner } from './Banner'
import { TextBox } from './TextBox'
import { Segments } from '../WebsiteLayout/Segments'
import { Integrating } from '../WebsiteLayout/Integrating'

export const SolutionsPage = () => {
  return (
    <>
      <Banner />
      <TextBox
        title="Lorem ipsum dolor sit amet"
        text="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. "
        image="/images/pictures/max-mid.png"
      />
      <Integrating />
      <Segments />
    </>
  )
}
