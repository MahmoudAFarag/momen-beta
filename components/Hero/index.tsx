import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import HeroImage from './HeroImage'
import Chevron from './Chevron'
import HeroHeader from './HeroHeader'

const Hero = () => {
  const scrollToFeatured = () => {
    window.scrollTo({
      top: 690,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} mt={{ base: '3rem', md: '12rem' }}>
        <Box
          ml={{ base: '3rem', md: '10rem' }}
          mt={{ base: '1rem', md: '5rem' }}
          data-aos='fade-right'
        >
          <HeroHeader title="Mo'men" />
          <HeroHeader title='Designs' />
          <Text fontSize={{ base: '1.7rem', md: '2.3rem' }} mt='2rem' width='27ch'>
            Where ideas and imaginations are not abstract.
          </Text>
        </Box>
        <HeroImage />
      </SimpleGrid>
      <Chevron onClick={scrollToFeatured} />
    </>
  )
}

export default Hero
