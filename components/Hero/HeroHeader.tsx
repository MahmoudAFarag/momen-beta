import { Heading } from '@chakra-ui/react'

const HeroHeader = ({ title }: { title: string }) => {
  return (
    <Heading as='h1' fontSize={{ base: '5rem', md: '7rem' }} fontFamily='body'>
      {title}
    </Heading>
  )
}

export default HeroHeader
