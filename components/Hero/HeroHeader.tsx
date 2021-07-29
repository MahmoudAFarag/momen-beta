import { Heading } from '@chakra-ui/react'

const HeroHeader = ({ title }: { title: string }) => (
  <Heading as='h1' fontSize={{ base: '5.5rem', md: '7rem' }} fontFamily='body'>
    {title}
  </Heading>
)

export default HeroHeader
