import { ButtonSecondary } from 'components/elements/Button'
import Icon from 'components/elements/Icon'
import { Section } from 'components/elements/Section'
import { TextHighlight, Title, Text } from 'components/elements/Texts'
import S from './styles.module.css'
import { LinkExternal } from 'components/elements/LinkExternal/LinkExternal'

export const BoxVacancies = ({ title, tag, buttonText, buttonHref }) => {
  return (
    <div>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-[1fr_8rem] mb-4 mt-4 items-center pb-4 border-b border-grayscale-500">
        <div>
          <div className="pb-4">
            <h1 className="text-[22px]/[32px] text-center md:text-left uppercase text-white font-semibold">
              {title}
            </h1>
          </div>
          <div>
            <div className="mx-auto md:mx-0">{tag}</div>
          </div>
        </div>{' '}
        <div className="text-xs">
          <LinkExternal href={buttonHref}>
            <ButtonSecondary>{buttonText}</ButtonSecondary>
          </LinkExternal>
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
      subtitle={
        <Text className="text-grayscale-50 text-[15px] font-light">
          Se você quer fazer parte de uma empresa que está revolucionando o
          mercado da logística, venha para a nossa equipe! Confira nossas
          oportunidades.
        </Text>
      }
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
          <Text className="text-grayscale-50 text-[15px] font-light mb-6">
            Estamos em constante crescimento e buscamos profissionais que querem
            impulsionar suas carreiras em um ambiente dinâmico e inovador.
            Confira nossas oportunidades e faça parte dessa jornada de sucesso!
          </Text>
          <div className="lg:w-36 lg:h-10 text-sm mb-2">
            <LinkExternal href="https://routeasy.gupy.io/">
              <ButtonSecondary>Ver todas as vagas</ButtonSecondary>
            </LinkExternal>
          </div>
        </div>
        <div className="flex-col">
          <BoxVacancies
            title="Account Executive"
            tag={
              <span
                className={`${S.tag} mx-auto md:mx-0 text-black text-xs font-semibold bg-primary-50 rounded flex item-center justify-center py-[5px] px-4`}
              >
                Sales
              </span>
            }
            buttonHref="https://routeasy.gupy.io/job/eyJzb3VyY2UiOiJndXB5X3B1YmxpY19wYWdlIiwiam9iSWQiOjQ3OTc4Nzd9?jobBoardSource=gupy_public_page"
            buttonText="Ver vagas"
          />
          <BoxVacancies
            title="Business Development Representative [BDR]"
            tag={
              <div
                className={`${S.tag} mx-auto md:mx-0 text-black text-xs font-semibold bg-primary-50 rounded flex item-center justify-center py-[5px] px-4`}
              >
                Sales
              </div>
            }
            buttonHref="https://routeasy.gupy.io/job/eyJzb3VyY2UiOiJndXB5X3B1YmxpY19wYWdlIiwiam9iSWQiOjQ4MDEyNzB9?jobBoardSource=gupy_public_page"
            buttonText="Ver vagas"
          />
          <BoxVacancies
            title="Sales Ops"
            tag={
              <div
                className={`${S.tag} mx-auto md:mx-0 text-black text-xs font-semibold bg-primary-50 rounded flex item-center justify-center py-[5px] px-4`}
              >
                Sales
              </div>
            }
            buttonHref="https://routeasy.gupy.io/job/eyJzb3VyY2UiOiJndXB5X3B1YmxpY19wYWdlIiwiam9iSWQiOjQ4MDk2ODR9?jobBoardSource=gupy_public_page"
            buttonText="Ver vagas"
          />
        </div>
      </div>
    </Section>
  )
}
