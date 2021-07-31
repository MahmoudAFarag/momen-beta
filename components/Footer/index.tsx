import NextImage from 'next/image'
import { Flex, Box, Text } from '@chakra-ui/react'
import { FaBehanceSquare } from '@react-icons/all-files/fa/FaBehanceSquare'
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram'
import { FaFacebookSquare } from '@react-icons/all-files/fa/FaFacebookSquare'

import FooterPNG from '../../public/logo-vert.png'
import FooterLink from './FooterLink'

const SocialData = [
  {
    href: 'https://www.behance.net/moamenmedh7a4f',
    label: 'Behance Link',
    icon: <FaBehanceSquare />,
  },
  {
    href: 'https://www.instagram.com/moamen_designer14/',
    label: 'Instagram Link',
    icon: <FaInstagram />,
  },
  {
    href: 'https://www.facebook.com/ElMo2Mn',
    label: 'Facebook Link',
    icon: <FaFacebookSquare />,
  },
]

const Footer = () => {
  return (
    <Flex height='6rem' align='center' justify='space-between' p='2rem' borderTop='1px solid teal'>
      <Box display={{ base: 'none', md: 'inline-block' }}>
        <NextImage src={FooterPNG} alt='Footer Image' width='90' height='40' className='rounded' />
      </Box>
      <Text fontSize={{ base: '1.4rem', md: '1.6rem' }}>Made with ❤️ for Momen</Text>
      <Flex align='center' fontSize={{ base: '2rem', md: '2.5rem' }}>
        {SocialData.map(social => (
          <FooterLink
            key={social.label}
            href={social.href}
            label={social.label}
            icon={social.icon}
          />
        ))}
      </Flex>
    </Flex>
  )
}

export default Footer
