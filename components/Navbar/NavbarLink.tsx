import NextLink from 'next/link'
import { Icon, Link as ChakraLink } from '@chakra-ui/react'
import { IconType } from '@react-icons/all-files/lib'

interface Props {
  name: string
  href: string
  icon?: IconType
}

const NavbarLink = ({ name, href, icon }: Props) => {
  return (
    <NextLink href={href}>
      <ChakraLink
        fontSize='1.5rem'
        fontWeight='700'
        textTransform='uppercase'
        borderRadius='3px'
        padding='1.5rem 2rem'
        transition='background-color 0.2s ease-in-out, color 0.2s ease-in-out'
        _hover={{ textDecor: 'none', bg: { base: 'none', md: 'salmon' }, color: { md: '#fff' } }}
        _notLast={{ mr: { base: '0', md: '9rem' } }}
      >
        {name}
        {icon && <Icon as={icon} ml='1rem' />}
      </ChakraLink>
    </NextLink>
  )
}

export default NavbarLink
