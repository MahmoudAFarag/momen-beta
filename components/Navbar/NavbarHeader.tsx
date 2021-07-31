import { Heading } from '@chakra-ui/react'
import NextLink from 'next/link'

const NavbarHeader = ({ title, href }: { title: string; href: string }) => (
  <Heading
    as='h1'
    fontFamily='body'
    fontSize={{ base: '2.3rem', lg: '3rem' }}
    fontWeight='900'
    ml={{ base: '1.5rem', md: '0' }}
  >
    <NextLink href={href}>{title}</NextLink>
  </Heading>
)

export default NavbarHeader
