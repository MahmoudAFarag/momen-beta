import { useState } from 'react'
import { Flex, Box, Heading } from '@chakra-ui/react'
import { Twirl as Hamburger } from 'hamburger-react'
import NavbarLink from './NavbarLink'
import MobileLinks from './MobileLinks'
import Header from './Header'

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <Flex align='center' mt='2.4rem' justify={{ base: 'space-between', md: 'space-around' }}>
        <Box display={{ base: 'none', md: 'inline-block' }}>
          <NavbarLink name='Home' href='/' />
          <NavbarLink name='About' href='/about' />
        </Box>

        <Header title="Mo'men Gallery" />

        <Box display={{ base: 'none', md: 'inline-block' }}>
          <NavbarLink name='Showcase' href='/' />
          <NavbarLink name='Contact' href='/about' />
        </Box>

        <Box display={{ base: 'inline-block', md: 'none' }} mr={{ base: '1.5rem', md: '0' }}>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </Box>
      </Flex>
      <MobileLinks isOpen={isOpen} />
    </>
  )
}

export default Navbar
