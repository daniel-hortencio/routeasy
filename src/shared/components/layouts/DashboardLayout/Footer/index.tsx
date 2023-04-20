import {
  Box,
  Text,
  Wrapper,
  PrivacyPolicy,
  TermsOfUse
} from '../../../elements'
import Modal from '../../../elements/Modal'
import { useState } from 'react'

export const DashboardLayoutFooter = () => {
  const [showModalPolicy, setShowModalPolicy] = useState(false)
  const [showModalTerms, setShowModalTerms] = useState(false)

  return (
    <Wrapper as="footer" className="mt-auto">
      <Box className="flex flex-col-reverse md:flex-row items-center justify-between">
        <Text className="text-sm text-custom-gray-300">
          2023 © Judit.io
          <span className="hidden md:inline">
            {' '}
            · Todos os direitos reservados
          </span>
        </Text>
        <Box className="flex items-center">
          <button
            className="text-sm text-custom-gray-400 text-center mb-2 md:mb-0 hover:underline"
            onClick={() => setShowModalTerms(true)}
          >
            Termos de uso
          </button>
          <span className="mx-4 text-custom-gray-400">·</span>
          <button
            className="text-sm text-custom-gray-400 text-center mb-2 md:mb-0 hover:underline"
            onClick={() => setShowModalPolicy(true)}
          >
            Política de privacidade
          </button>
          <span className="mx-4 text-custom-gray-400">·</span>
          <button className="text-sm text-custom-gray-400 text-center mb-2 md:mb-0 hover:underline">
            Cookies
          </button>
        </Box>
      </Box>

      <Modal
        title="POLÍTICA DE PRIVACIDADE DA JUDIT"
        subtitle="Esta versão foi atualizada em Abril de 2023."
        isOpen={showModalPolicy}
        onClose={() => setShowModalPolicy(false)}
      >
        <PrivacyPolicy />
      </Modal>
      <Modal
        title="TERMOS DE USO DA JUDIT"
        subtitle="Esta versão foi atualizada em Abril de 2023."
        isOpen={showModalTerms}
        onClose={() => setShowModalTerms(false)}
      >
        <TermsOfUse />
      </Modal>
    </Wrapper>
  )
}
