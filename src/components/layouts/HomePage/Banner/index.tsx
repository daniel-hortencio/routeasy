import Image from 'next/image'
import { Section } from 'components/elements/Section'
import { ButtonPrimary } from 'components/elements/Button'

import i18n from 'i18next'
import { useTranslation, initReactI18next } from 'react-i18next'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          'Banner Text':
            'Our Solutions are the key to increase the eficiency on your operation. Acelere processos, reduza custos e ganhe mais produtividade com uma plataforma completa de otimização de rotas e gestão de entregas e coletas.'
        }
      },
      pt: {
        translation: {
          'Banner Text':
            'Nossas soluções são a chave para aumentar a eficiência da sua operação. Acelere processos, reduza custos e ganhe mais produtividade com uma plataforma completa de otimização de rotas e gestão de entregas e coletas.'
        }
      }
    },
    lng: 'en', // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  })

export const Banner = () => {
  const { t, i18n } = useTranslation()

  const changeLang = lang => {
    i18n.changeLanguage(lang)
  }

  return (
    <div className="relative">
      <Section className="h-screen flex">
        <div className="flex items-center h-full">
          <div className="lg:w-3/5 md:1/2 text-center md:text-left">
            <h1 className="text-white uppercase font-semibold text-5xl md:text-6xl pb-5">
              A melhor solução para{' '}
              <span className="text-primary-100">last-mile</span>
            </h1>
            {/* <p className="font-normal text-base pb-8">
              Nossas soluções são a chave para aumentar a eficiência da sua
              operação. Acelere processos, reduza custos e ganhe mais
              produtividade com uma plataforma completa de otimização de rotas e
              gestão de entregas e coletas.
            </p> */}
            <p className="font-normal text-base pb-8">{t('Banner Text')}</p>
            <div className="lg:w-40">
              <ButtonPrimary href="/" onClick={() => changeLang('pt')}>
                Quero saber mais
              </ButtonPrimary>
            </div>
            <div className="lg:w-40">
              <ButtonPrimary href="/" onClick={() => changeLang('en')}>
                Quero saber mais
              </ButtonPrimary>
            </div>
          </div>
        </div>
        <div className="h-full absolute top-0 right-0 w-1/2 hidden md:block">
          <Image
            style={{ objectFit: 'cover' }}
            fill
            src="/images/pictures/home-banner.svg"
            alt="Banner"
          />
        </div>
      </Section>
    </div>
  )
}
