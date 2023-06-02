import { ButtonSecondary } from 'components/elements/Button'
import Icon from 'components/elements/Icon'
import { Section } from 'components/elements/Section'
import { TextHighlight, Title } from 'components/elements/Texts'
import S from './styles.module.css'

export const BoxVacancies = ({ title, tag, button }) => {
  return (
    <div>
      <div className="flex justify-between mb-4 mt-4 items-center pb-4 border-b border-grayscale-500">
        <div>
          <div className="pb-4">
            <h1 className="text-[22px]/[32px] uppercase text-white font-semibold">
              {title}
            </h1>
          </div>
          <div className="">
            <p className="">{tag}</p>
          </div>
        </div>
        <div className="text-xs w-24">
          <ButtonSecondary>{button}</ButtonSecondary>
        </div>
      </div>
    </div>
  )
}

export const Vacancies = () => {
  return (
    <Section
      className="pb-20 md:pb-52"
      title={<Title>Junte-se ao nosso time</Title>}
      subtitle="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. "
    >
      <div
        className={`${S.VacanciesGrid} flex flex-col-reverse gap-4 md:gap-[70px] md:grid`}
      >
        <div className="flex flex-col justify-center p-6 border border-grayscale-500 rounded-[15px] border-red">
          <div className="mb-8 w-12 h-12 rounded-md bg-primary flex items-center justify-center">
            <Icon name="FiUsers" color="white" size={24}></Icon>
          </div>
          <h1 className="uppercase text-2xl mb-4">
            venha <TextHighlight>trabalhar</TextHighlight> na melhor log
            <TextHighlight>tech</TextHighlight> do brasil
          </h1>
          <p className="mb-6 text-grayscale-200">
            Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut
            assumenda voluptates qui beatae quis id Quis cupiditate. Cum
            veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto
            quis.{' '}
          </p>
          <div className="lg:w-36 lg:h-10 text-sm mb-2">
            <ButtonSecondary>Ver todas as vagas</ButtonSecondary>
          </div>
        </div>
        <div className="flex-col">
          <BoxVacancies
            title="Ux Designer - Pleno"
            tag={
              <div className="w-16 text-black text-xs font-semibold bg-primary-50 rounded flex item-center justify-center py-[5px]">
                Produto
              </div>
            }
            button="Ver vagas"
          />
          <BoxVacancies
            title="Front-End React - Senior"
            tag={
              <div className="w-[121px] text-black text-xs font-semibold bg-primary-50 rounded flex item-center justify-center py-[5px]">
                Desenvolvimento
              </div>
            }
            button="Ver vagas"
          />
          <BoxVacancies
            title="Analista - Junior"
            tag={
              <div className="w-[121px] text-black text-xs font-semibold bg-primary-50 rounded flex item-center justify-center py-[5px]">
                Financeiro
              </div>
            }
            button="Ver vagas"
          />
          <BoxVacancies
            title="Tech Recruiter - Pleno"
            tag={
              <div className="w-[121px] text-black text-xs font-semibold bg-primary-50 rounded flex item-center justify-center py-[5px]">
                Recursos Humanos
              </div>
            }
            button="Ver vagas"
          />
        </div>
      </div>
    </Section>
  )
}
