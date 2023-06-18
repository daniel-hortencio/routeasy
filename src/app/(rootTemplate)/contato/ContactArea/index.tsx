'use client'

import { Section } from 'components/elements/Section'
import { Icon } from 'components/elements/Icon'
import { ButtonPrimary } from 'components/elements/Button'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ContactForm } from '../ContactForm'
import { IConversionIdentifier } from 'services'

const MySwal = withReactContent(Swal)

const CardArea = ({ icon, title, text, button, onClick }) => {
  return (
    <div className="block rounded-2xl border border-grayscale-500 py-12 px-5 lg:px-20 md:p-8 m-auto text-center mb-8 md:mb-0">
      {icon}
      <h1 className="uppercase text-xl font-semibold py-4">{title}</h1>
      <p className="text-grayscale-200 text-sm mb-6">{text}</p>
      <div className="m-auto max-w-[179px]">
        <ButtonPrimary onClick={onClick}>{button}</ButtonPrimary>
      </div>
    </div>
  )
}

export const ContactArea = () => {
  const [sliderRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 1.15,
      spacing: 20
    },
    breakpoints: {
      '(min-width: 520)': {
        slides: {
          perView: 2.25
        }
      }
    }
  })

  function getModal(
    title: string,
    conversion_identifier: IConversionIdentifier
  ) {
    MySwal.fire({
      html: (
        <ContactForm
          title={title}
          conversion_identifier={conversion_identifier}
        />
      ),
      showConfirmButton: false
    })
  }

  const list_area = [
    {
      icon: (
        <div className="flex items-center justify-center bg-bluescale-50 rounded-md w-12 h-12 m-auto">
          <Icon color="white" name="" size={24} />
        </div>
      ),
      title: 'Comercial',
      text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates. ',
      button: 'Mandar Mensagem',
      onClick: () => getModal('Comercial', 'lp-roteirizador-teste') // colocar identificador do form
    },
    {
      icon: (
        <div className="flex items-center justify-center bg-yellowscale-50 rounded-md w-12 h-12 m-auto">
          <Icon color="white" name="FiUsers" size={24} />
        </div>
      ),
      title: 'Parcerias',
      text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates. ',
      button: 'Mandar Mensagem',
      onClick: () => getModal('Parcerias', 'lp-roteirizador-teste') // colocar identificador do form
    },
    {
      icon: (
        <div className="flex items-center justify-center bg-redscale-50 rounded-md w-12 h-12 m-auto">
          <Icon color="white" name="IoMdHelp" size={24} />
        </div>
      ),
      title: 'Suporte',
      text: 'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates. ',
      button: 'Mandar Mensagem',
      onClick: () => getModal('Suporte', 'lp-roteirizador-teste') // colocar identificador do form
    }
  ]

  return (
    <>
      <Section className="mb-32 hidden lg:block">
        <div className="grid grid-cols-3 gap-5">
          {list_area.map((item, index) => (
            <CardArea
              key={index}
              icon={item.icon}
              title={item.title}
              text={item.text}
              button={item.button}
              onClick={item.onClick}
            />
          ))}
        </div>
      </Section>
      <div className="lg:hidden mb-14">
        <div ref={sliderRef} className="keen-slider">
          {list_area.map((item, index) => (
            <div
              className={`keen-slider__slide ${index === 0 && 'ml-5'} `}
              key={index}
            >
              <CardArea
                icon={item.icon}
                title={item.title}
                text={item.text}
                button={item.button}
                onClick={item.onClick}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
