'use client'

import { useSelector } from 'react-redux'
import { Box } from '../../elements'
import { DashboardLayoutFooter } from './Footer'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { useAuthenticateUser } from 'shared/store'
import { useCookies } from 'shared/utils/cookies'

export default function DashboardLayout({ children }) {
  const user = useSelector(useAuthenticateUser)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const { access_token } = useCookies().getUserAuth()

    if (!access_token) {
      router.push('/')
    }
  }, [user, pathname])

  return (
    <Box className=" w-full min-h-screen overflow-x-hidden flex flex-col pt-20 lg:pt-28 relative">
      <Box className="fixed top-0 left-0 bg-custom-gray-100 w-full h-full -z-20" />
      {children}
      <DashboardLayoutFooter />
    </Box>
  )
}
