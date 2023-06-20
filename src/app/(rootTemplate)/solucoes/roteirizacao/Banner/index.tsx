import { Section } from 'components/elements/Section'
import { ButtonPrimary } from 'components/elements/Button'
import { Text } from 'components/elements/Texts'

export const Banner = () => {
  return (
    <Section className="flex">
      <div className="flex justify-center h-full relative min-h-[640px]">
        <div className="md:mx-auto mt-[124px] lg:mx-0 flex flex-col justify-center w-[645px] text-center">
          <h1 className="text-white uppercase font-medium text-[35px] lg:text-[40px] pb-5">
            CONHEÇA O<span className="text-primary-100">roteirizador</span>MAIS
            RÁPIDO Do mercado
          </h1>
          <Text className="text-grayscale-50 text-[15px] font-light">
            Enquanto outras soluções lutam para lidar com grandes volumes de
            dados, nós entregamos resultados rápidos e precisos. Conte com o
            algoritmo de roteirização mais eficiente do mercado para
            revolucionar a sua operação logística.
          </Text>
          <div className="lg:w-56 text-center mx-[auto]">
            <ButtonPrimary href="/">Quero saber mais</ButtonPrimary>
          </div>
        </div>
      </div>
    </Section>
  )
}
