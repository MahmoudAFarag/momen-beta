import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import HeroImage from './HeroImage'
import Chevron from './Chevron'
import HeroHeader from './HeroHeader'

const Hero = () => {
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} mt={{ base: '3rem', md: '12rem' }}>
        <Box ml={{ base: '4rem', md: '10rem' }} mt={{ base: '1rem', md: '5rem' }}>
          <HeroHeader title="Mo'men" />
          <HeroHeader title='Designs' />
          <Text fontSize={{ base: '1.9rem', md: '2.3rem' }} mt='2rem' width='27ch'>
            Where ideas and imaginations are not abstract.
          </Text>
        </Box>
        <HeroImage />
      </SimpleGrid>
      <Chevron />
    </>
  )
}

export default Hero
