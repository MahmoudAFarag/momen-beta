import { Heading } from '@chakra-ui/react'

const Header = ({ title }: { title: string }) => (
  <Heading
    as='h1'
    fontFamily='body'
    fontSize={{ base: '2.3rem', lg: '3rem' }}
    fontWeight='900'
    ml={{ base: '1.5rem', md: '0' }}
  >
    {title}
  </Heading>
)

export default Header
