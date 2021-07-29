import { Flex } from '@chakra-ui/react'

import NavbarLink from './NavbarLink'

const MobileLinks = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <Flex
      direction='column'
      align='center'
      display={{ base: isOpen ? 'flex' : 'none', md: 'none' }}
      mt='2rem'
    >
      <NavbarLink name='Home' href='/' />
      <NavbarLink name='About' href='/about' />
      <NavbarLink name='Showcase' href='/showcase' />
      <NavbarLink name='Contact' href='/contact' />
    </Flex>
  )
}

export default MobileLinks
