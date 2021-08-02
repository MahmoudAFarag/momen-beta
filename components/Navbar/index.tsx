import { useState } from 'react'
import NextImage from 'next/image'
import { Flex, Box } from '@chakra-ui/react'
import { Twirl as Hamburger } from 'hamburger-react'
import { FaPhoneAlt } from '@react-icons/all-files/fa/FaPhoneAlt'
import NavbarLink from './NavbarLink'
import MobileLinks from './MobileLinks'
import NavbarHeader from './NavbarHeader'
import LogoPNG from '../../public/logo.png'

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <Flex align='center' mt='2.4rem' justify={{ base: 'space-between', md: 'space-around' }}>
        <Box display={{ base: 'none', md: 'inline-block' }}>
          <NavbarLink name='Home' href='/' />
          <NavbarLink name='About' href='/about' />
        </Box>
        <Box ml='2rem'>
          <NextImage src={LogoPNG} width='60' height='40' />
        </Box>
        {/* <NavbarHeader title="Mo'men Gallery" href='/' />*/}

        <Box display={{ base: 'none', md: 'inline-block' }}>
          <NavbarLink name='Showcase' href='/showcase' />
          <NavbarLink name='Contact' href='/contact' icon={FaPhoneAlt} />
        </Box>

        <Box display={{ base: 'inline-block', md: 'none' }} mr={{ base: '1.5rem', md: '0' }}>
          <Hamburger toggled={isOpen} toggle={setOpen} rounded label='Navbar Hamburger menu' />
        </Box>
      </Flex>
      <MobileLinks isOpen={isOpen} />
    </>
  )
}

export default Navbar
