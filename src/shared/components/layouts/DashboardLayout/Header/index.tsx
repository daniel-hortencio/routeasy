import { useEffect, useState } from 'react'

import { Box, Logo, Skeleton } from '../../../elements'
import { MenuMobile, MenuMobileButton } from '../MenuMobile'
import { MenuDesktop } from '../MenuDesktop'

import './styles.css'
import { useSelector } from 'react-redux'
import { useAuthenticateUser } from 'shared/store'

export const DashboardLayoutHeader = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)
  // const user = useSelector(useAuthenticateUser)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
  }, [])

  return (
    <Box>
      <Box className="DashboardLayoutHeader fixed flex top-0 left-0 w-full h-20 lg:h-28 z-20 backdrop-blur-md">
        <Box className="w-full max-w-6xl mx-auto flex items-center p-5 justify-between border-b-1 border-custom-gray-100">
          <Logo color="black" />

          {isLoading ? (
            <>
              <MenuDesktop />
              <MenuMobileButton
                isOpen={isOpenMobileMenu}
                onChange={setIsOpenMobileMenu}
              />
            </>
          ) : (
            <Box className="flex items-center max-w-2xl w-full">
              <Skeleton className="h-6 max-w-sm w-full mr-16" />

              <Box className="flex items-center">
                <Skeleton className="w-12 h-12 mr-4 rounded-full" />
                <div className="mr-6">
                  <Skeleton className="w-36 h-4 mb-1" />
                  <Skeleton className="w-36 h-4" />
                </div>
              </Box>
            </Box>
          )}
        </Box>

        <MenuMobile isOpen={isOpenMobileMenu} onChange={setIsOpenMobileMenu} />
      </Box>
      <Box className="fixed bg-white  w-full h-20 lg:h-28 top-0 left-0 -z-10" />
    </Box>
  )
}
