import { FormEvent, useState } from 'react'
import * as yup from 'yup'
import { services } from 'services'
import Swal from 'sweetalert2'
import { yupValidator } from 'utils/yupValidator'
import { PulseLoader } from 'react-spinners'

export const FormNewsletter = () => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast'
    },
    timer: 5000,
    timerProgressBar: true,
    didOpen: toast => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
    showCloseButton: true
  })

  async function handleSubmitNewsletter(e: FormEvent) {
    e.preventDefault()
    setIsLoading(true)

    const newsletterFormSchemaValidation = yup.object().shape({
      email: yup
        .string()
        .required('Obrigatório')
        .email('Insira um e-mail com formato válido')
    })

    yupValidator({
      schema: newsletterFormSchemaValidation,
      data: { email },
      setError: errors => {
        console.log({ errors })
        setIsLoading(false)
        setEmailError(errors[0].value)
      },
      onSuccess: async () => {
        setIsLoading(false)
        await services
          .sendNewsletter({ email })
          .then(() => {
            setIsLoading(false)
            Toast.fire({
              icon: 'success',
              title: 'Inscrito com sucesso na nossa newsletter!'
            })
          })
          .catch(() => {
            setIsLoading(false)
            Toast.fire({
              icon: 'error',
              title:
                'Falha ao se inscrever na nossa newsletter! Tente novamente em alguns minutos'
            })
          })
      }
    })
  }

  function handleChange(value: string) {
    setEmailError('')
    setEmail(value)
  }

  return (
    <form
      onSubmit={handleSubmitNewsletter}
      className="items-center rounded overflow-hidden"
    >
      <div className="flex h-14 lg:h-12">
        <input
          placeholder="Escreva seu e-mail"
          className="h-full w-full px-6 border border-transparent focus:border-primary-50 hover:border-primary focus:outline-none bg-grayscale-500 focus:bg-grayscale-400 text-white placeholder:text-grayscale-200"
          value={email}
          onChange={e => handleChange(e.target.value)}
        />
        <button
          type="submit"
          className="bg-primary-100 h-full w-[123px] md:w-40 hover:bg-primary-200 text-white"
          disabled={isLoading}
        >
          {isLoading ? <PulseLoader color="#fff" size={12} /> : 'INSCREVER'}
        </button>
      </div>
      <p className="h-5 text-sm text-yellow-500 block">{emailError}</p>
    </form>
  )
}
