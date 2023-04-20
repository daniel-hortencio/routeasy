import {
  Box,
  Text,
  Wrapper,
  PrivacyPolicyAndTermsOfUse
} from '../../../elements'
import Modal from '../../../elements/Modal'
import { useState } from 'react'

export const DashboardLayoutFooter = () => {
  const [showModal, setShowModal] = useState(false)

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
        <button
          className="text-sm text-custom-gray-400 text-center mb-2 md:mb-0 hover:underline"
          onClick={() => setShowModal(true)}
        >
          <span>Termos de uso</span> ·<span>Política de privacidade</span> ·{' '}
          <span>Cookies</span>
        </button>
      </Box>

      <Modal
        title="POLÍTICA DE PRIVACIDADE DA JUDIT"
        subtitle="Esta versão foi atualizada em Abril de 2023."
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      >
        <PrivacyPolicyAndTermsOfUse />
      </Modal>
    </Wrapper>
  )
}
